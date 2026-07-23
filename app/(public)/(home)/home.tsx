"use client";

import Link from "next/link";
import Image from "next/image";
import FillerSection from "./filler-section";
import Tracker from "./tracker";
import ProductCarousel from "@/app/components/features/product-carousel";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-[#f7f5f2] text-[#1e1b18]">
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[100svh] flex flex-col">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1, x: 80, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/images/homebg.jpeg"
              alt="Luciano Designs luxury interior"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
          {/* On mobile: darken more uniformly so text is readable over any part of the image */}
          <div className="absolute inset-0 bg-[#120e0a]/70 md:bg-gradient-to-r md:from-[#120e0a]/92 md:via-[#120e0a]/55 md:to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-end min-h-[100svh] px-6 sm:px-10 md:px-20 pb-12 sm:pb-16 md:pb-24 pt-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-6 sm:w-8 h-px bg-[#c8a97e]" />
              <p className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#c8a97e] font-medium">
                Lagos · Nigeria
              </p>
            </div>

            <h1
              className="text-[40px] sm:text-[54px] md:text-[82px] font-light text-white leading-[0.97] mb-6 sm:mb-8 tracking-[-0.01em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where spaces
              <br />
              become <em className="italic text-[#c8a97e]">stories.</em>
            </h1>

            <p className="text-[13px] sm:text-[15px] font-light text-white/55 max-w-[300px] sm:max-w-sm leading-[1.85] mb-8 sm:mb-10">
              Bespoke interiors, custom furniture, and curated pieces — crafted
              for how you actually live.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#c8a97e] text-[#1e1b18] text-[11px] font-semibold tracking-[0.1em] uppercase px-7 py-3.5 no-underline transition-all duration-200 hover:bg-[#b8956a] group"
              >
                Explore the collection
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.1em] uppercase text-white/45 hover:text-[#c8a97e] transition-colors duration-200 no-underline border-b border-white/20 hover:border-[#c8a97e] pb-px"
              >
                Book a free consultation
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
            <div className="w-px h-14 bg-white/15" />
            <p className="text-[8px] tracking-[0.25em] uppercase text-white/25 [writing-mode:vertical-rl]">
              Scroll to explore
            </p>
          </div>
        </div>
      </section>

      {/* ── TRACKER ── */}
      <Tracker />

      {/* ── ABOUT ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Image — taller on mobile so it reads as a proper image, not a sliver */}
        <div className="relative h-[80vw] sm:h-[60vw] md:h-auto md:min-h-[520px] overflow-hidden">
          <Image
            src="/images/layer.jpg"
            alt="Luciano Designs interior detail"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4">
            <div className="bg-[#1e1b18]/75 backdrop-blur-sm px-4 py-2.5 inline-block">
              <p className="text-[9px] tracking-[0.22em] uppercase text-[#c8a97e]">
                Luciano Designs · Lagos
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-white">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#c8a97e]" />
            <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium">
              About the studio
            </p>
          </div>
          <h2
            className="text-[28px] sm:text-[34px] md:text-[42px] font-light text-[#1e1b18] leading-[1.1] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Good design is a room
            <br />
            you never want to leave.
          </h2>
          <p className="text-[13px] sm:text-[13.5px] text-[#7a7268] leading-[1.9] font-light mb-4">
            At Luciano Designs, we believe furniture should do more than fill a
            room. Each piece is considered — the weight of the wood, the curve
            of an armrest, the way afternoon light hits a surface.
          </p>
          <p className="text-[13px] sm:text-[13.5px] text-[#7a7268] leading-[1.9] font-light mb-8">
            Based in Lagos, we create interiors that are deeply personal,
            beautifully functional, and built to last.
          </p>
          <Link
            href="/products"
            className="self-start inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-[#1e1b18] border-b border-[#c8a97e] pb-0.5 no-underline hover:text-[#c8a97e] transition-colors duration-200 group"
          >
            View the collection
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ── DARK EDITORIAL PANEL ── */}
      <section className="bg-[#1e1b18] px-6 sm:px-10 md:px-20 py-24 md:py-40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 md:gap-16 items-end">
          <div>
            <p className="text-[9px] tracking-[0.26em] uppercase text-[#6b5e4e] mb-4">
              The Luciano Edit
            </p>
            <h2
              className="text-[32px] sm:text-[44px] md:text-[60px] font-light text-[#f0ebe3] leading-[1.05]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Designed for
              <br />
              how you <span className="text-[#c8a97e]">actually</span> live.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[13px] text-[#6b5e4e] leading-[1.9] font-light">
              Every home has its own rhythm. We listen to yours before we design
              anything — then we make it beautiful.
            </p>
            <a
              href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 bg-[#c8a97e] text-[#1e1b18] text-[11px] font-semibold tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-[#b8956a] transition-colors duration-200 group"
            >
              Book a consultation
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY LUCIANO ── */}
      <FillerSection />

      {/* ── PRODUCT CAROUSEL ── */}
      <ProductCarousel />

      {/* ── TESTIMONIAL ── */}
      <motion.section
        className="bg-white px-6 sm:px-10 md:px-20 py-14 md:py-24 border-t border-[#e5e0d8]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Quote mark on mobile sits above, on desktop sits in its own column */}
          <div
            className="text-[72px] sm:text-[80px] leading-[0.7] text-[#e5e0d8] select-none mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <p
            className="text-[20px] sm:text-[26px] md:text-[32px] font-light text-[#1e1b18] leading-[1.45] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            They turned a blank apartment into something I genuinely love coming
            home to. Every detail was considered.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c8a97e] shrink-0" />
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#b8b0a4] font-medium">
              Amara O. — Lagos, Residential Project 2024
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-[#e5e0d8] px-6 sm:px-10 md:px-20 py-24 md:py-40">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <h3
            className="text-[26px] sm:text-[32px] md:text-[42px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to transform
            <br />
            <em className="italic text-[#c8a97e]">your space?</em>
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1e1b18] text-[#fafaf8] text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-4 no-underline hover:bg-[#3a342a] transition-colors duration-200 group w-full sm:w-auto"
            >
              Chat on WhatsApp
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-[#1e1b18] text-[#1e1b18] text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-4 no-underline hover:bg-[#1e1b18] hover:text-white transition-colors duration-200 w-full sm:w-auto"
            >
              Shop the collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
