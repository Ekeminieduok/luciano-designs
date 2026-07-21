"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/lucianodesignss_/",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation",
    label: "WhatsApp",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@lucianodesigns",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <section className="bg-[#1e1b18] px-6 md:px-12 py-20 text-center">
      <p className="text-[12px] tracking-[0.26em] uppercase text-white mb-6">
        Let&apos;s create together
      </p>
      <h2
        className="text-[40px] md:text-[48px] font-light italic text-[#f0ebe3] mb-4 leading-[1.1]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Got a project in{" "}
        <span className="not-italic text-[#c8a97e]">mind?</span>
      </h2>
      <p className="text-[15px] text-[#7a7268] font-light mb-10">
        Join our list for collection drops, design inspiration, and studio news.
      </p>

      {/* Email input + subscribe */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch mb-10 w-full max-w-md mx-auto gap-0">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-transparent border border-[#3a342c] sm:border-r-0 text-[#f0ebe3] placeholder-[#5a5048] text-[13px] px-5 py-3 w-full outline-none focus:border-[#c8a97e] transition-colors duration-200"
        />
        <Link
          href="/contactus"
          className="bg-[#c8a97e] text-[#1e1b18] text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 no-underline hover:bg-[#b8956a] transition-colors duration-200 flex items-center justify-center shrink-0"
        >
          Subscribe
        </Link>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-16 bg-[#3a342c]" />
        <p className="text-[9px] tracking-[0.22em] uppercase text-[#4a3f35]">
          Follow us
        </p>
        <div className="h-px w-16 bg-[#3a342c]" />
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-8">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group relative
              w-11 h-11 flex items-center justify-center
              border border-[#3a342c] rounded-full
              text-[#5a5048]
              hover:border-[#c8a97e] hover:text-[#c8a97e]
              transition-all duration-300
              hover:scale-110 hover:shadow-[0_0_16px_rgba(200,169,126,0.2)]
            "
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Bottom copyright */}
      <p className="text-[10px] tracking-[0.14em] text-[#3a342c] uppercase mt-14">
        © {new Date().getFullYear()} Luciano Designs · Lagos
      </p>
    </section>
  );
}