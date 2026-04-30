"use client";

// import { stripe } from "@/lib/stripe";

import Link from "next/link";
import Image from "next/image";
import FillerSection from "./filler-section";
import Tracker from "./tracker"

export default function HomePage() {
  return (
    <div
      className="bg-[#f7f5f2] text-[#1e1b18]"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <section
        className="relative w-full"
        style={{ height: "88vh", minHeight: 560 }}
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

        {/* Centered content — matching the reference layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Eyebrow */}
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#c8a97e] font-medium mb-6">
            Luciano Designs — Lagos
          </p>

          {/* Main headline — big, white, serif, matches reference weight */}
          <h1
            className="text-[64px] font-semibold uppercase tracking-[0.04em] text-white leading-[1.05] mb-6 max-w-205"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Design Your
            <br />
            <em className="italic font-normal text-[#c8a97e]">Dream</em> Space
          </h1>

          {/* Subheadline — matches reference */}
          <p className="text-[16px] font-light text-white/80 max-w-145 leading-[1.75] mb-10 tracking-[0.02em]">
            Elevate your home with our curated selection of stylish furniture
            and interior designs.
          </p>

          {/* CTA button — gold fill matching reference */}
          <Link
            href="/products"
            className="inline-block bg-[#c8a97e] text-[#1e1b18] text-[14px] font-semibold tracking-[0.08em] uppercase px-10 py-4 no-underline transition-all duration-200 hover:bg-[#b8956a]"
          >
            Shop Now
          </Link>
        </div>
     </section>

     <Tracker />

      {/* header */}
      <div className="grid grid-cols-2 gap-20 items-center px-12 py-20 border-b border-[#e5e0d8]">
        <h2
          className="text-[42px] font-light italic text-[#1e1b18] leading-[1.15]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Good design is a room you never want to leave."
        </h2>
        <div className="flex flex-col gap-5">
          <div className="w-9 h-px bg-[#c8a97e]" />
          <p className="text-[13.5px] text-[#7a7268] leading-[1.85] font-light">
            At Luciano Designs, we believe furniture should do more than fill a
            room. Each piece is considered — the weight of the wood, the curve
            of an armrest, the way afternoon light hits a surface. We design for
            feeling.
          </p>
          <p className="text-[13.5px] text-[#7a7268] leading-[1.85] font-light">
            Based in Lagos, we work with clients across West Africa and beyond
            to create interiors that are deeply personal, beautifully
            functional, and built to last.
          </p>
          <Link
            href="/about"
            className="self-start text-[11px] tracking-[0.12em] uppercase text-[#1e1b18] border-b border-[#c8a97e] pb-0.5 no-underline mt-2"
          >
            Meet the studio →
          </Link>
        </div>
      </div>

      {/* Products      */}

      <div
        className="grid border-t border-b border-[#e5e0d8]"
        style={{ gridTemplateColumns: "3fr 2fr", minHeight: 440 }}
      >
        <div className="relative overflow-hidden border-r border-[#e5e0d8]">
          <Image
            src="/images/layer.jpg"
            alt="layers"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="bg-[#1e1b18] flex flex-col justify-center px-12 py-16">
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#6b5e4e] mb-6">
            The Luciano Edit
          </p>
          <h2
            className="text-[40px] font-light italic text-[#f0ebe3] leading-[1.15] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Designed for
            <br />
            how you
            <br />
            actually live.
          </h2>
          <p className="text-[13px] text-[#8a7e72] leading-[1.8] font-light mb-10">
            Every home has its own rhythm. We listen to yours before we design
            anything — then we make it beautiful.
          </p>
          <Link
            href="/contact"
            className="self-start bg-[#f7f5f2] text-[#1e1b18] text-[11px] font-medium tracking-[0.12em] uppercase px-7 py-3.25 no-underline"
          >
            Book a consultation
          </Link>
        </div>
      </div>

      <FillerSection />

      {/* Testimonials  */}
      <section className="px-12 py-20 text-center border-t border-[#e5e0d8]">
        <div
          className="text-[72px] leading-[0.6] italic text-[#e5e0d8] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "
        </div>
        <p
          className="text-[26px] font-light italic text-[#1e1b18] max-w-145 mx-auto mb-8 leading-[1.55]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          They turned a blank apartment into something I genuinely love coming
          home to. Every detail was considered.
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a4] font-medium">
          — Amara O., Lagos — Residential project 2024
        </p>
      </section>

      {/* footer */}
    </div>
  );
}

// export default async function HomePage() {
//   const products = await stripe.products.list({
//     expand: ["data.default_price"],
//     limit: 5,
//   });

//   return (
//     <div>
//       <section>
//         <div>
//           <div>
//             <h2>Luciano designs</h2>
//             <p>Discover the latest products at the best prices</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
