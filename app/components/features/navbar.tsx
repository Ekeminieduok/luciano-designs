"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/app/context/cart-context";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prevPathname = useRef(pathname);

  const isHome = pathname === "/";

  // Track scroll only on homepage
  useEffect(() => {
    if (!isHome) { setScrolled(false); return; }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close drawer on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setMenuOpen(false);
    }
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // true  → homepage before scroll  → transparent/frameless
  // false → all other pages OR scrolled homepage → pill
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 flex justify-center px-4 pt-3 pb-2">
        <nav
          className={`
            w-full flex items-center justify-between
            transition-all duration-500 ease-in-out
            ${isTransparent
              ? "max-w-7xl bg-transparent border-transparent shadow-none px-6 h-[66px]"
              : "max-w-5xl bg-white/95 backdrop-blur-md border border-[#ece9e3] rounded-full shadow-[0_2px_24px_rgba(0,0,0,0.07)] px-6 h-[56px]"
            }
          `}
        >
          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 no-underline flex items-center">
            <Image
              src="/images/logo.png"
              alt="Luciano Designs"
              width={105}
              height={42}
              priority
              className={`object-contain transition-all duration-500 ${
                isTransparent ? "brightness-0 invert" : "brightness-100"
              }`}
            />
          </Link>

          {/* ── Desktop nav — centred ── */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-1.5 text-[13.5px] tracking-[0.05em] no-underline
                    transition-colors duration-200 rounded-full
                    ${isActive
                      ? isTransparent ? "text-white font-semibold" : "text-[#1c1a17] font-semibold"
                      : isTransparent ? "text-white/65 hover:text-white" : "text-[#7a7268] hover:text-[#1c1a17]"
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c8a97e]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop right ── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cart"
              aria-label="Cart"
              className={`relative flex items-center transition-colors duration-200 ${
                isTransparent ? "text-white/70 hover:text-white" : "text-[#7a7268] hover:text-[#1c1a17]"
              }`}
            >
              <CiShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 flex items-center justify-center bg-[#c8a97e] text-white text-[8px] font-semibold rounded-full leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <div className={`w-px h-4 ${isTransparent ? "bg-white/20" : "bg-[#e5e0d8]"}`} />

            <a
              href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase
                px-5 py-[9px] no-underline transition-all duration-200 group rounded-sm
                ${isTransparent
                  ? "bg-white/10 text-white border border-white/25 hover:bg-[#c8a97e] hover:border-[#c8a97e] hover:text-[#1c1a17] backdrop-blur-sm"
                  : "bg-[#1c1a17] text-[#fafaf8] hover:bg-[#c8a97e] hover:text-[#1c1a17]"
                }
              `}
            >
              Get in touch
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* ── Mobile: cart + burger ── */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              href="/cart"
              aria-label="Cart"
              className={`relative flex items-center transition-colors ${
                isTransparent ? "text-white" : "text-[#7a7268]"
              }`}
            >
              <CiShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 flex items-center justify-center bg-[#c8a97e] text-white text-[8px] font-semibold rounded-full leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex flex-col items-center justify-center gap-[5px] w-8 h-8"
            >
              {[
                menuOpen ? "rotate-45 translate-y-[6.5px]" : "",
                menuOpen ? "opacity-0 scale-x-0" : "",
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : "",
              ].map((extra, i) => (
                <span
                  key={i}
                  className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                    isTransparent ? "bg-white" : "bg-[#1c1a17]"
                  } ${extra}`}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#1e1b18]/40 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[280px]
          bg-[#faf8f5] flex flex-col
          shadow-[-8px_0_40px_rgba(0,0,0,0.12)]
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 h-[64px] border-b border-[#ece9e3]">
          <Link href="/" onClick={() => setMenuOpen(false)} className="no-underline">
            <Image src="/images/logo.png" alt="Luciano Designs" width={90} height={36} className="object-contain" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#ece9e3] hover:bg-[#e0dbd3] transition-colors text-[#6b6560] text-[13px]"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col flex-1 px-4 pt-6 gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3.5 rounded-lg
                  text-[14px] tracking-[0.03em] no-underline transition-all duration-150
                  ${isActive
                    ? "bg-[#1e1b18] text-white font-medium"
                    : "text-[#6b6560] hover:text-[#1c1a17] hover:bg-[#f0ece6]"
                  }
                `}
              >
                {isActive && <span className="w-1 h-1 rounded-full bg-[#c8a97e] shrink-0" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-5 pb-10 pt-4 space-y-3 border-t border-[#ece9e3]">
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between w-full px-4 py-3 text-[13px] text-[#6b6560] hover:text-[#1c1a17] no-underline transition-colors"
          >
            <span className="tracking-[0.04em]">Cart</span>
            <span className="flex items-center gap-2">
              <CiShoppingCart size={18} />
              {totalItems > 0 && (
                <span className="min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-[#c8a97e] text-white text-[8px] font-semibold rounded-full">
                  {totalItems}
                </span>
              )}
            </span>
          </Link>
          <a
            href="https://wa.me/2347039602582?text=Hi%20Luciano%20Designs%2C%20I%27d%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#1c1a17] hover:bg-[#c8a97e] text-[#fafaf8] hover:text-[#1c1a17] text-[12px] font-medium tracking-[0.1em] uppercase py-3.5 no-underline transition-all duration-200 group rounded-sm"
          >
            Get in touch
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </>
  );
}