"use client";

import Link from "next/link";
import ProductCard from "../(home)/product-card";
import AccentPrices from "./accent-prices";

export default function Product() {
  return (
    <div className="px-6 md:px-12 py-10 md:py-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Products
          </p>
          <h2
            className="text-[28px] md:text-[36px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The <em className="italic">collection</em>
          </h2>
        </div>
        <Link
          href="/product"
          className="text-[11px] tracking-widest uppercase text-[#7a7268] border-b border-[#e5e0d8] pb-0.5 no-underline shrink-0 ml-4"
        >
          Shop all →
        </Link>
      </div>

      {/* First row — 1 col mobile, 2 col sm, 3 col md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.5px] bg-[#e5e0d8] mb-[1.5px]">
        <ProductCard
          productId="knot-lounge-chair"
          src="/images/chair-knot-hero.webp"
          alt="Sculptural knotted lounge chair in terracotta"
          category="Seating"
          name="The Knot Lounge Chair"
          price="From ₦680,000"
          height="h-[260px] md:h-[320px]"
          basePrice={680000}
        />
        <ProductCard
          productId="dancer-table-lamp"
          src="/images/coffee-table-wood.webp"
          alt="Hexagonal walnut coffee table"
          category="Lighting"
          name="Dancer Table Lamp"
          price="From ₦420,000"
          height="h-[260px] md:h-[320px]"
          basePrice={420000}
        />
        <ProductCard
          productId="sculptural-lamp"
          src="/images/lamp-sculptural.webp"
          alt="Sculptural dancer table lamp"
          category="Chairs"
          name="Sculptural Lamp"
          price="From ₦290,000"
          height="h-[260px] md:h-[320px]"
          basePrice={290000}
        />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.5px] bg-[#e5e0d8]">
        <ProductCard
          productId="luxe-dining-chair"
          src="/images/chairs-grey.jpg"
          alt="Cream and grey upholstered luxury dining chairs"
          category="Dining"
          name="Luxe Dining Chair"
          price="From ₦195,000"
          height="h-[240px] md:h-[280px]"
          basePrice={195000}
        />
        <ProductCard
          productId="glass-coffee-table"
          src="/images/coffee-table-glass.webp"
          alt="Round glass top coffee table"
          category="Tables"
          name="Glass Round Coffee Table"
          price="From ₦310,000"
          height="h-[240px] md:h-[280px]"
          basePrice={310000}
        />
        <ProductCard
          productId="walnut-dining-chair"
          src="/images/chair-wood-dining.webp"
          alt="Walnut wood dining chair"
          category="Dining"
          name="Walnut Dining Chair"
          price="From ₦220,000"
          height="h-[240px] md:h-[280px]"
          basePrice={220000}
        />
        <ProductCard
          productId="center-table"
          src="/images/center table.png"
          alt="Center table"
          category="Tables"
          name="Center Table"
          price="From ₦105,000"
          height="h-[240px] md:h-[280px]"
          basePrice={105000}
        />
        <ProductCard
          productId="center-table-2"
          src="/images/center table.png"
          alt="Center table"
          category="Tables"
          name="Center Table"
          price="From ₦105,000"
          height="h-[240px] md:h-[280px]"
          basePrice={105000}
        />
        <ProductCard
          productId="center-table-3"
          src="/images/center table.png"
          alt="Center table"
          category="Tables"
          name="Center Table"
          price="From ₦105,000"
          height="h-[240px] md:h-[280px]"
          basePrice={105000}
        />
      </div>

      <div className="py-6">
        <AccentPrices />
      </div>
    </div>
  );
}