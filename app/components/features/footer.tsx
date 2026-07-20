"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
          <section className="bg-[#1e1b18] px-12 py-20 text-center">
    <p className="text-[12px] tracking-[0.26em] uppercase text-white mb-6">
      Let&apos;s create together
    </p>
    <h2
      className="text-[48px] font-light italic text-[#f0ebe3] mb-4 leading-[1.1]"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      Got a project in <span className="not-italic text-[#c8a97e]">mind?</span>
    </h2>
    <p className="text-[15px] text-[#7a7268] font-light mb-10">
      Join our list for collection drops, design inspiration, and studio news.
    </p>
    <div className="flex justify-center">
      <input
        type="email"
        placeholder="Your email address"
        className="bg-transparent border border-[#3a342c] text-[#f0ebe3] placeholder-[#5a5048] text-[13px] px-5 py-3.25 w-70 outline-none"
        style={{ fontFamily: "'Jost', sans-serif" }}
      />
      <Link
        href="/contactus"
        className="bg-[#c8a97e] text-[#1e1b18] text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3.25 border-none cursor-pointer"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        Subscribe
      </Link>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <FaInstagram />
        <FaWhatsapp />
        <FaTiktok />
    </div>
  </section>
  );

}
