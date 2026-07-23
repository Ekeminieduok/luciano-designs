"use client";

import ProductCard from "../(home)/product-card";
import AccentPrices from "./accent-pieces";

export default function Product() {
  return (
    <div className="px-6 md:px-12 py-10 md:py-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <p className="text-[12px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Products
          </p>
          <h2
            className="text-[28px] md:text-[36px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The <em className="italic">collection</em>
          </h2>
        </div>
        <p className="text-[13px] tracking-widest uppercase text-[#7a7268] border-b border-[#e5e0d8] pb-0.5 no-underline shrink-0 ml-4">
          Shop all
        </p>
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
          src="/images/Statue floor lamp.webp"
          alt="Hexagonal walnut coffee table"
          category="Lighting"
          name="Statue floor lamp"
          price="From ₦900,000"
          height="h-[260px] md:h-[320px]"
          basePrice={420000}
        />
        <ProductCard
          productId="glass ball"
          src="/images/glass ball.jpeg"
          alt="glass ball"
          category="Decor"
          name="Glass Ball"
          price="From ₦75,000"
          height="h-[260px] md:h-[320px]"
          basePrice={75000}
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
          productId="Nordic chair"
          src="/images/coffee-table-glass.webp"
          alt="Nordic chair"
          category="Chairs"
          name="Nordic chair"
          price="From ₦130,000"
          height="h-[240px] md:h-[280px]"
          basePrice={130000}
        />
        <ProductCard
          productId="Floor lamp"
          src="/images/chair-wood-dining.webp"
          alt="Floor lamp"
          category="Lighting"
          name="Floor lamp"
          price="From ₦220,000"
          height="h-[240px] md:h-[280px]"
          basePrice={220000}
        />

        <ProductCard
          productId=" floor lamp"
          src="/images/Luxury floor lamp.png"
          alt="Luxury floor lamp"
          category="Lighting"
          name="Luxury Floor Lamp"
          price="From ₦350,000"
          height="h-[240px] md:h-[280px]"
          basePrice={350000}
        />

        <ProductCard
          productId="floor lamp"
          src="/images/floor lamp.png"
          alt="Floor lamp"
          category="Lighting"
          name="Floor Lamp"
          price="From ₦380,000"
          height="h-[240px] md:h-[280px]"
          basePrice={380000}
        />

        <ProductCard
          productId="table lamp"
          src="/images/table lamp.png"
          alt="Table lamp"
          category="Lighting"
          name="Table Lamp"
          price="From ₦160,000"
          height="h-[240px] md:h-[280px]"
          basePrice={160000}
        />

        <ProductCard
          productId="Oval shaped mirror "
          src="/images/Oval shaped mirror .png"
          alt="Oval shaped mirror"
          category="Decor"
          name="Oval Shaped Mirror"
          price="From ₦120,000"
          height="h-[240px] md:h-[280px]"
          basePrice={120000}
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
          productId="side-couch"
          src="/images/couch.jpeg"
          alt="side couch"
          category="Seating"
          name="Side couch"
          price="From ₦150,000"
          height="h-[240px] md:h-[280px]"
          basePrice={150000}
        />
        <ProductCard
          productId="lined-dining-mat"
          src="/images/crossed line mat.jpeg"
          alt="crossed line mat"
          category="Rugs"
          name="Crossed Line Mat"
          price="From ₦85,000"
          height="h-[240px] md:h-[280px]"
          basePrice={85000}
        />
        <ProductCard
          productId="dinning-set"
          src="/images/dinning set.jpeg"
          alt="dinning set"
          category="chairs"
          name="Dinning Set"
          price="From ₦325,000"
          height="h-[240px] md:h-[280px]"
          basePrice={325000}
        />
        <ProductCard
          productId="plain couch"
          src="/images/plain couch.jpeg"
          alt="plain couch"
          category="chairs"
          name="Plain Couch"
          price="From ₦250,000"
          height="h-[240px] md:h-[280px]"
          basePrice={250000}
        />
        <ProductCard
          productId="side-chairs"
          src="/images/side chairs.jpeg"
          alt="side chairs"
          category="chairs"
          name="Side Chairs"
          price="From ₦300,000"
          height="h-[240px] md:h-[280px]"
          basePrice={300000}
        />

        <ProductCard
          productId="coffee table set"
          src="/images/coffee table set.png"
          alt="Coffee table set"
          category="Tables"
          name="Coffee Table Set"
          price="From ₦170,000"
          height="h-[240px] md:h-[280px]"
          basePrice={170000}
        />

        <ProductCard
          productId="bar stools"
          src="/images/Bar stool.png"
          alt="Bar stools"
          category="Seating"
          name="Bar Stools"
          price="From ₦180,000"
          height="h-[240px] md:h-[280px]"
          basePrice={180000}
        />
      </div>

      <div className="py-6">
        <AccentPrices />
      </div>
    </div>
  );
}
