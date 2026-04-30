"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductProps {
  src: string;
  alt: string;
  category: string;
  name: string;
  price: string;
  height: string;
  basePrice?: number;
}

export default function ProductCard({
  src,
  alt,
  category,
  name,
  price,
  height,
  basePrice,
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const subtotal =
    basePrice != null
      ? `₦${(basePrice * quantity).toLocaleString("en-NG")}`
      : null;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-[#f7f5f2] group cursor-pointer">
      <div className={`relative overflow-hidden ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-5 pt-5 pb-6">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#c8a97e] mb-1.5">
          {category}
        </p>
        <p
          className="text-[18px] font-light text-[#1e1b18] mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {name}
        </p>
        <p className="text-[12.5px] text-[#7a7268] mb-4">{price}</p>

        {/* Quantity + Add to cart */}
        <div className="flex items-center gap-2">
    
          <div className="flex items-center border border-[#e5e0d8]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                decrement();
              }}
              disabled={quantity <= 1}
              className="w-8 h-8 flex items-center justify-center text-base text-[#1e1b18] hover:bg-[#ede9e3] disabled:text-[#c8c4bc] disabled:cursor-default transition-colors"
            >
              −
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-[12px] font-medium text-[#1e1b18] border-x border-[#e5e0d8]">
              {quantity}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                increment();
              }}
              className="w-8 h-8 flex items-center justify-center text-base text-[#1e1b18] hover:bg-[#ede9e3] transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
            className="flex-1 h-8 bg-[#1e1b18] text-[#f7f5f2] text-[9px] tracking-[0.2em] uppercase font-medium hover:bg-[#3a342c] transition-colors"
          >
            {added ? `Added ${quantity}` : "Add to cart"}
          </button>
        </div>

        {/* Subtotal — only shown when quantity > 1 and basePrice is provided */}
        {subtotal && quantity > 1 && (
          <div className="mt-3 flex justify-between text-[11px] text-[#7a7268]">
            <span>Subtotal</span>
            <span className="text-[#1e1b18] font-medium">{subtotal}</span>
          </div>
        )}
      </div>
    </div>
  );
}