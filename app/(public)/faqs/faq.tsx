"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const faqs = [
  {
    q: "What exactly does Luciano Designs do?",
    a: "We're a Lagos-based interior design studio. Think space design, custom furniture, accessories — everything to make your home feel like you.",
  },
  {
    q: "Do I need a big budget to work with you?",
    a: "Not at all. We work with a range of budgets and we're always honest about what's achievable. Good design shouldn't be exclusive.",
  },
  {
    q: "How does a project actually start?",
    a: "It starts with a free consultation — relaxed, no jargon. We listen to what you want, then build from there. Nothing moves without your sign-off.",
  },
  {
    q: "Can I just buy a piece without a full project?",
    a: "Absolutely. Browse the collection anytime. We're happy to advise on what suits your space — no strings attached.",
  },
  {
    q: "How long does a project take?",
    a: "A single room takes 4–6 weeks. A full home is 3–6 months. You'll always have a clear timeline from day one — no nasty surprises.",
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Yes — nationwide delivery across Nigeria. International orders? Reach out and we'll sort something.",
  },
  {
    q: "Are your pieces locally made?",
    a: "Many of them. We work with skilled Nigerian artisans using quality materials. It's what makes our pieces feel personal and considered.",
  },
  {
    q: "What's your return policy?",
    a: "Standard items can be returned within 7 days of delivery in original condition. Custom pieces are non-refundable once production begins — but we make sure you're in love with the design before that happens.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="bg-[#f7f5f2] min-h-screen"
      style={{ fontFamily: "var(--font-fira), monospace" }}
    >
      {/* ── HERO — editorial split ── */}
      <section className="relative overflow-hidden bg-[#1e1b18]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[92vh]">
          {/* Left — big type */}
          <div className="relative flex flex-col justify-between px-8 md:px-14 py-14 md:py-20 z-10 order-2 md:order-1">
            {/* Big background FAQ letters */}
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2 text-[180px] md:text-[240px] font-bold leading-none text-white/[0.03] select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              aria-hidden="true"
            >
              FAQ
            </div>

            <div className="relative z-10">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#c8a97e] mb-6">
                Luciano Designs · Help
              </p>
              <h1
                className="text-[52px] md:text-[72px] font-light text-white leading-[0.95] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Every
                <br />
                <em className="italic text-[#c8a97e]">question</em>
                <br />
                answered.
              </h1>
              <p className="text-[13px] text-white leading-[1.85] max-w-xs mb-10 font-light">
                We want this to be the easiest decision you make about your
                space.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 bg-[#c8a97e] text-[#1e1b18] text-[11px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 no-underline hover:bg-[#b8956a] transition-colors"
                >
                  Book a free consultation →
                </a>
              </div>
            </div>

            {/* Bottom label */}
            <div className="relative z-10 mt-auto pt-14">
              <div className="h-px w-12 bg-[#c8a97e] mb-4" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-white">
                Connecting people with their style
              </p>
            </div>
          </div>

          {/* Right — CEO image with overlay treatment */}
          <div className="relative min-h-[60vh] md:min-h-full order-1 md:order-2">
            <motion.div
              className="absolute inset-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/luciano.jpeg"
                alt="Founder & CEO of Luciano Designs"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* gradient overlay so it bleeds into dark side on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18] via-transparent to-transparent md:bg-gradient-to-r md:from-[#1e1b18] md:via-transparent md:to-transparent opacity-60" />

            {/* CEO label pinned to bottom */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-10">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl">
                <p
                  className="text-[13px] font-light text-white leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Founder & CEO
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c8a97e] mt-0.5">
                  Luciano Designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chat-bubble FAQ section ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-[#e5e0d8]" />
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium shrink-0">
            Most asked questions
          </p>
          <div className="h-px flex-1 bg-[#e5e0d8]" />
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="group">
                {/* Q — right aligned bubble (customer asking) */}
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="max-w-[85%] md:max-w-[70%] text-left"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`relative px-5 py-3.5 rounded-2xl rounded-tr-sm transition-all duration-200 ${
                        isOpen
                          ? "bg-[#1e1b18] text-white"
                          : "bg-white border border-[#e5e0d8] text-[#1e1b18] hover:border-[#c8a97e]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`shrink-0 text-[11px] font-bold tracking-wider mt-0.5 ${
                            isOpen ? "text-[#c8a97e]" : "text-[#c8a97e]"
                          }`}
                        >
                          Q
                        </span>
                        <p className="text-[13px] md:text-[14px] leading-snug font-medium">
                          {q}
                        </p>
                        <span
                          className={`shrink-0 ml-2 text-[12px] transition-transform duration-300 mt-0.5 ${
                            isOpen
                              ? "rotate-180 text-[#c8a97e]"
                              : "text-[#b8ad9e]"
                          }`}
                        >
                          ▾
                        </span>
                      </div>
                    </div>
                  </button>
                </div>

                {/* A — left aligned bubble (Luciano answering) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 mb-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex justify-start">
                    <div className="max-w-[85%] md:max-w-[70%] flex items-start gap-3">
                      {/* Avatar dot */}
                      <div className="shrink-0 w-7 h-7 rounded-full bg-[#c8a97e] flex items-center justify-center mt-1">
                        <span className="text-[8px] font-bold text-white tracking-wide">
                          LD
                        </span>
                      </div>
                      <div className="bg-[#c8a97e]/10 border border-[#c8a97e]/20 px-5 py-3.5 rounded-2xl rounded-tl-sm">
                        <span className="text-[10px] font-bold tracking-wider text-[#c8a97e] block mb-1">
                          A
                        </span>
                        <p className="text-[13px] md:text-[14px] text-[#1e1b18] leading-[1.8] font-light">
                          {a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Values bar ── */}
      <section className="border-t border-b border-[#e5e0d8] bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-[#e5e0d8]">
            {[
              {
                icon: "✦",
                label: "Creativity",
                desc: "No house style — ever.",
              },
              {
                icon: "◎",
                label: "Innovation",
                desc: "Always exploring new approaches.",
              },
              { icon: "◈", label: "Integrity", desc: "Honest advice, always." },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-4 sm:px-8 first:pl-0 last:pr-0"
              >
                <span className="text-[22px] text-[#c8a97e]">{icon}</span>
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#1e1b18]">
                    {label}
                  </p>
                  <p className="text-[12px] text-[#7a7268] font-light">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 text-center max-w-2xl mx-auto">
        <div
          className="text-[64px] leading-none text-[#e5e0d8] mb-4 select-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <p
          className="text-[24px] md:text-[32px] font-light italic text-[#1e1b18] leading-[1.3] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Still have a question?
          <br />
          <span className="text-[#c8a97e]">We&apos;d love to hear from you.</span>
        </p>
        <p className="text-[13px] text-[#7a7268] leading-[1.85] mb-8 font-light">
          Book a free consultation — no commitment, no pressure. Just a
          conversation about your space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#1e1b18] text-[#fafaf8] text-[11px] font-medium tracking-[0.12em] uppercase px-8 py-4 no-underline hover:bg-[#3a342a] transition-colors"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
