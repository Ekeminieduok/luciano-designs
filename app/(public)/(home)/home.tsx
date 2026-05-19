"use client";

// import { stripe } from "@/lib/stripe";

import Link from "next/link";
import Image from "next/image";
import FillerSection from "./filler-section";
import Tracker from "./tracker";
import ProductCarousel from "@/app/components/features/product-carousel";

export default function HomePage() {
  return (
    <div
      className="bg-[#f7f5f2] text-[#1e1b18]"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* ── Hero ── */}
      <section
        className="relative w-full"
        style={{ height: "88vh", minHeight: 520 }}
      >
        <Image
          src="/images/homebg.jpeg"
          alt="Luciano Designs luxury interior"
          fill
          priority
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{ background: "rgba(18, 14, 10, 0.58)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#c8a97e] font-medium mb-4 sm:mb-6">
            Luciano Designs — Lagos
          </p>

          <h1
            className="text-[40px] sm:text-[52px] md:text-[64px] font-semibold uppercase tracking-[0.04em] text-white leading-[1.05] mb-4 sm:mb-6 max-w-xs sm:max-w-xl md:max-w-4xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Design Your
            <br />
            <em className="italic font-normal text-[#c8a97e]">Dream</em> Space
          </h1>

          <p className="text-[14px] sm:text-[16px] font-light text-white/80 max-w-xs sm:max-w-md md:max-w-2xl leading-[1.75] mb-8 sm:mb-10 tracking-[0.02em]">
            Elevate your home with our curated selection of stylish furniture
            and interior designs.
          </p>

          <Link
            href="/products"
            className="inline-block bg-[#c8a97e] text-[#1e1b18] text-[12px] sm:text-[14px] font-semibold tracking-[0.08em] uppercase px-8 sm:px-10 py-3.5 sm:py-4 no-underline transition-all duration-200 hover:bg-[#b8956a]"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Tracker />

      {/* ── About strip ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-6 sm:px-10 md:px-12 py-14 sm:py-20 border-b border-[#e5e0d8]">
        <h2
          className="text-[28px] sm:text-[34px] md:text-[42px] font-light italic text-[#1e1b18] leading-[1.15]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Good design is a room you never want to leave.
        </h2>
        <div className="flex flex-col gap-5">
          <div className="w-9 h-px bg-[#c8a97e]" />
          <p className="text-[13px] sm:text-[13.5px] text-[#7a7268] leading-[1.85] font-light">
            At Luciano Designs, we believe furniture should do more than fill a
            room. Each piece is considered — the weight of the wood, the curve
            of an armrest, the way afternoon light hits a surface. We design for
            feeling.
          </p>
          <p className="text-[13px] sm:text-[13.5px] text-[#7a7268] leading-[1.85] font-light">
            Based in Lagos, we work with clients across West Africa and beyond
            to create interiors that are deeply personal, beautifully
            functional, and built to last.
          </p>
          <Link
            href="/faqs"
            className="self-start text-[11px] tracking-[0.12em] uppercase text-[#1e1b18] border-b border-[#c8a97e] pb-0.5 no-underline mt-2"
          >
            Meet the studio →
          </Link>
        </div>
      </div>

      {/* ── Feature split ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] border-t border-b border-[#e5e0d8]"
      >
        {/* Image — full width on mobile, fixed height; natural on desktop */}
        <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-[#e5e0d8] h-75 sm:h-95 md:h-auto md:min-h-110">
          <Image
            src="/images/layer.jpg"
            alt="layers"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="bg-[#1e1b18] flex flex-col justify-center px-8 sm:px-12 py-12 sm:py-16">
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#6b5e4e] mb-5 sm:mb-6">
            The Luciano Edit
          </p>
          <h2
            className="text-[30px] sm:text-[36px] md:text-[40px] font-light italic text-[#f0ebe3] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Designed for
            <br />
            how you
            <br />
            actually live.
          </h2>
          <p className="text-[13px] text-[#8a7e72] leading-[1.8] font-light mb-8 sm:mb-10">
            Every home has its own rhythm. We listen to yours before we design
            anything — then we make it beautiful.
          </p>
          <Link
            href="/contact"
            className="self-start bg-[#f7f5f2] text-[#1e1b18] text-[11px] font-medium tracking-[0.12em] uppercase px-7 py-3 no-underline"
          >
            Book a consultation
          </Link>
        </div>
      </div>

      <FillerSection />

     {/* carousel effect showing products */}
      

      <ProductCarousel/>
    </div>
  );
}