"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/cart-context";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/faqs", label: "FAQs" },
  { href: "/cart", label: "Cart", icon: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating pill ── */}
      <div className="w-full sticky top-0 z-50 flex justify-center px-4 pt-3 pb-2">
        <nav
          className="
            w-full max-w-5xl
            bg-white/90 backdrop-blur-md
            border border-[#ece9e3]
            rounded-full
            flex items-center justify-between
            px-6 h-13.5
            shadow-[0_2px_24px_rgba(0,0,0,0.07)]
          "
        >
          {/* Logo — original styling */}
          <Link
            href="/"
            className="flex flex-col gap-0.5 no-underline shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={70}
              priority
            />
          </Link>

          {/* Desktop links — original styling */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "flex items-center gap-2 text-[13px] tracking-[0.05em] no-underline pb-px transition-all duration-200",
                      isActive
                        ? "text-[#1c1a17] font-medium border-b-[1.5px] border-[#c9a87c]"
                        : "text-[#6b6560] font-normal border-b border-transparent hover:text-[#1c1a17] hover:border-[#1c1a17]",
                    ].join(" ")}
                  >
                    {link.icon ? (
                      <span className="relative flex items-center">
                        <CiShoppingCart size={22} />
                        {totalItems > 0 && (
                          <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 flex items-center justify-center bg-[#c8a97e] text-white text-[8px] font-medium rounded-full leading-none">
                            {totalItems > 99 ? "99+" : totalItems}
                          </span>
                        )}
                      </span>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA — original styling */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#1c1a17] text-[#fafaf8] text-[12px] font-medium tracking-[0.08em] px-5 py-2 rounded-sm no-underline transition-colors duration-200 hover:bg-[#3a342a] group"
          >
            Get in touch
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          {/* Mobile: cart icon + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center text-[#6b6560] hover:text-[#1c1a17] transition-colors"
            >
              <CiShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 flex items-center justify-center bg-[#c8a97e] text-white text-[8px] font-medium rounded-full leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.25 rounded-full hover:bg-[#f5f3f0] transition-colors"
            >
              <span
                className={`block w-4.25 h-[1.5px] bg-[#1c1a17] rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-4.25 h-[1.5px] bg-[#1c1a17] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-4.25 h-[1.5px] bg-[#1c1a17] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-[270px]
          bg-white flex flex-col
          border-r border-[#ece9e3]
          rounded-tr-2xl rounded-br-2xl
          shadow-[4px_0_32px_rgba(0,0,0,0.1)]
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#ece9e3]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col gap-0.5 no-underline"
          >
            <span
              className="text-[19px] font-semibold tracking-[0.06em] text-[#1c1a17] leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Luciano{" "}
              <em
                className="not-italic font-normal text-[#8c7b68]"
                style={{ fontStyle: "italic" }}
              >
                Designs
              </em>
            </span>
            <span className="text-[7px] font-medium tracking-[0.26em] text-[#b8ad9e] uppercase">
              Creative Studio
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#f5f3f0] hover:bg-[#ece9e3] transition-colors text-[#6b6560] text-[12px]"
          >
            ✕
          </button>
        </div>

        {/* Drawer nav links */}
        <ul className="flex flex-col list-none m-0 p-0 px-3 pt-3 flex-1">
          {links
            .filter((l) => !l.icon)
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "flex items-center px-4 py-3.5 text-[13px] tracking-[0.04em] no-underline transition-colors duration-150 rounded-sm",
                      isActive
                        ? "text-[#1c1a17] font-medium border-l-2 border-[#c9a87c] bg-[#faf8f5] pl-3.5"
                        : "text-[#6b6560] font-normal hover:text-[#1c1a17] hover:bg-[#faf8f5]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Drawer CTA */}
        <div className="px-5 pb-8 pt-4 border-t border-[#ece9e3]">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full bg-[#1c1a17] hover:bg-[#3a342a] text-[#fafaf8] text-[12px] font-medium tracking-[0.08em] py-3 rounded-sm no-underline transition-colors duration-200 group"
          >
            Get in touch
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
