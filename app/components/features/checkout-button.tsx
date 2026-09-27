"use client";

import { useState } from "react";
import { useCart } from "@/app/context/cart-context";
type PaystackOptions = {
  email: string;
  amount: number;
  metadata: { cart_items: { id: string; name: string; quantity: number; price: number }[] };
  onSuccess: (reference: string) => void;
  onClose: () => void;
};

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackOptions & { key: string }) => {
        openIframe: () => void;
      };
    };
  }
}

function initializePaystack(options: PaystackOptions) {
  const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  if (!key) {
    options.onClose();
    return;
  }

  const openCheckout = () => {
    window.PaystackPop?.setup({ ...options, key }).openIframe();
  };

  if (window.PaystackPop) {
    openCheckout();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://js.paystack.co/v1/inline.js";
  script.onload = openCheckout;
  script.onerror = options.onClose;
  document.body.appendChild(script);
}

export default function CheckoutButton() {
  const { items, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

  const handleCheckout = () => {
    const trimmed = email.trim().toLowerCase();

    if (!trimmed) { setError("Please enter your email address."); return; }
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) { setError("Please enter a valid email."); return; }
    if (items.length === 0) return;

    setError("");
    setLoading(true);

    initializePaystack({
      email: trimmed,
      amount: totalPrice * 100, // kobo
      metadata: {
        cart_items: items.map((i) => ({
          id: i.id,
          name: i.name,
          quantity: i.quantity,
          price: i.price,
        })),
      },
      onSuccess: (reference) => {
        clearCart();
        setLoading(false);
        window.location.href = `/order-success?ref=${reference}`;
      },
      onClose: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Email input */}
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(""); }}
        placeholder="Email address for receipt"
        suppressHydrationWarning
        className="w-full border border-[#ddd8d0] bg-transparent px-4 py-2.5 text-[12px] text-[#1e1b18] placeholder-[#b0a898] outline-none focus:border-[#c8a97e] transition-colors"
      />

      {error && (
        <p className="text-[11px] text-red-400/80">{error}</p>
      )}

      {/* Pay button */}
      <button
        onClick={handleCheckout}
        disabled={loading || items.length === 0}
        className="
          w-full h-11 bg-[#1e1b18] text-[#f7f5f2]
          text-[10px] tracking-[0.2em] uppercase font-medium
          hover:bg-[#c8a97e] hover:text-[#1e1b18]
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
        "
      >
        {loading ? (
          <>
            <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          `Pay ${fmt(totalPrice)}`
        )}
      </button>
    </div>
  );
}