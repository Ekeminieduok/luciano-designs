"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/faqs", label: "FAQs" },
  { href: "/cart", label: "Cart", icon: <CiShoppingCart size={22} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#ece9e3]">
      <div className="mx-auto flex max-w-275 items-center justify-between px-8 h-17">
        <Link href="/" className="flex flex-col gap-0.5 no-underline group">
          <span
            className="text-[22px] font-semibold tracking-[0.06em] text-[#1c1a17] leading-none"
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
          <span className="text-[8.5px] font-medium tracking-[0.26em] text-[#b8ad9e] uppercase">
            Creative Studio
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
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
                      <span className="flex items-center">{link.icon}</span>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[#1c1a17] text-[#fafaf8] text-[12px] font-medium tracking-[0.08em] px-5 py-[9px] rounded-sm no-underline transition-colors duration-200 hover:bg-[#3a342a] group"
          >
            Get in touch
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
