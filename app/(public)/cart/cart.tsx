"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQty, clearCart } =
    useCart();

  const fmt = (n: number) => `₦${n.toLocaleString("en-NG")}`;

  if (items.length === 0) {
    return (
      <div className="px-12 py-24 flex flex-col items-center gap-6">
        <p
          className="text-[32px] font-light text-[#1e1b18]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Your cart is <em className="italic">empty</em>
        </p>
        <p className="text-[12.5px] text-[#7a7268]">
          You  haven&apos;t added anything yet.
        </p>
        <Link
          href="/"
          className="text-[11px] tracking-widest uppercase text-[#7a7268] border-b border-[#e5e0d8] pb-0.5"
        >
          Continue shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="px-12 py-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Your cart
          </p>
          <h1
            className="text-[36px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your <em className="italic">selection</em>
          </h1>
        </div>
        <span className="text-[11px] tracking-widest uppercase text-[#7a7268]">
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Item list */}
        <div className="flex-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[80px_1fr_auto] gap-4 items-center py-5 border-b border-[#e5e0d8]"
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 overflow-hidden bg-[#f0ece6]">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Details */}
              <div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c8a97e] mb-1">
                  {item.category}
                </p>
                <p
                  className="text-[17px] font-light text-[#1e1b18] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.name}
                </p>
                <p className="text-[12px] text-[#7a7268]">
                  {fmt(item.basePrice)} / item
                </p>
              </div>

              {/* Right: stepper + subtotal + remove */}
              <div className="flex flex-col items-end gap-2.5">
                {/* Stepper */}
                <div className="flex items-center border border-[#e5e0d8]">
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="w-8 h-8 flex items-center justify-center text-base text-[#1e1b18] hover:bg-[#ede9e3] disabled:text-[#c8c4bc] disabled:cursor-default transition-colors"
                  >
                    −
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center text-[12px] font-medium text-[#1e1b18] border-x border-[#e5e0d8]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-base text-[#1e1b18] hover:bg-[#ede9e3] transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Line subtotal */}
                <p className="text-[13px] font-medium text-[#1e1b18]">
                  {fmt(item.basePrice * item.quantity)}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[11px] tracking-widest uppercase text-[#b0a898] hover:text-[#1e1b18] transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Clear cart */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCart}
              className="text-[11px] tracking-widest uppercase text-[#b0a898] hover:text-[#1e1b18] border-b border-[#e5e0d8] pb-0.5 transition-colors"
            >
              Clear cart
            </button>
          </div>
        </div>

        {/* Order summary */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-[#f0ece6] p-7">
            <p
              className="text-[20px] font-light text-[#1e1b18] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Order summary
            </p>

            {/* Line items */}
            <div className="flex flex-col gap-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-[12px] text-[#7a7268]"
                >
                  <span>
                    {item.name}{" "}
                    {item.quantity > 1 && (
                      <span className="text-[#a89a8c]">×{item.quantity}</span>
                    )}
                  </span>
                  <span>{fmt(item.basePrice * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#ddd8d0] pt-4 mb-6 flex flex-col gap-2.5">
              <div className="flex justify-between text-[12px] text-[#7a7268]">
                <span>Subtotal</span>
                <span>{fmt(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-[12px] text-[#7a7268]">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-[14px] font-medium text-[#1e1b18] mt-2 pt-3 border-t border-[#ddd8d0]">
                <span>Total</span>
                <span>{fmt(totalPrice)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="w-full h-11 bg-[#1e1b18] text-[#f7f5f2] text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#3a342c] transition-colors">
              Proceed to checkout
            </button>

            <div className="mt-4 text-center">
              <Link
                href="/"
                className="text-[11px] tracking-widest uppercase text-[#7a7268] border-b border-[#e5e0d8] pb-0.5"
              >
                Continue shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}