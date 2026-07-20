"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const slides = [
  {
    src: "/images/chair-knot-hero.webp",
    alt: "Sculptural knotted lounge chair in terracotta",
    category: "Seating",
    name: "The Knot Lounge Chair",
    price: "From ₦680,000",
    href: "/products",
  },
  {
    src: "/images/Statue floor lamp.webp",
    alt: "Hexagonal walnut coffee table",
    category: "Lighting",
    name: "Statue floor lamp",
    price: "From ₦900,000",
    href: "/products",
  },
  {
    src: "/images/top table.jpeg",
    alt: "Top table",
    category: "Tables",
    name: "Top Table",
    price: "From ₦290,000",
    href: "/products",
  },

  {
    src: "/images/chair-wood-dining.webp",
    alt: "Floor lamp",
    category: "Lighting",
    name: "Floor Lamp",
    price: "From ₦220,000",
    href: "/products",
  },
  {
    src: "/images/coffee-table-glass.webp",
    alt: "Nordic chair",
    category: "Chairs",
    name: "Nordic chair",
    price: "From ₦130,000",
    href: "/products",
  },
];

export default function ProductCarousel() {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  return (
    <section className="px-6 md:px-12 py-14 md:py-20 border-t border-[#e5e0d8] bg-[#f7f5f2]">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <p className="text-[12px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Featured pieces
          </p>
          
        </div>
        <Link
          href="/products"
          className="text-[13px] font-bold tracking-widest uppercase text-[#7a7268] border-b border-[#e5e0d8] pb-0.5 no-underline shrink-0 ml-4 hover:text-[#1e1b18] hover:border-[#1e1b18] transition-colors"
        >
          Shop all →
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-[1.5px]">
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
              className="pl-[1.5px] basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Link href={slide.href} className="group block no-underline bg-[#f7f5f2]">
                {/* Image */}
                <div className="relative overflow-hidden h-[280px] md:h-[340px] bg-[#ede9e3]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="px-5 pt-4 pb-6 border border-t-0 border-[#e5e0d8]">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#c8a97e] mb-1.5">
                    {slide.category}
                  </p>
                  <p
                    className="text-[17px] font-light text-[#1e1b18] mb-1 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {slide.name}
                  </p>
                  <p className="text-[12px] text-[#7a7268]">{slide.price}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nav arrows */}
        <div className="flex items-center gap-2 mt-6">
          <CarouselPrevious
            className="
              static translate-y-0
              w-9 h-9 rounded-none
              bg-transparent border border-[#e5e0d8]
              text-[#1e1b18] hover:bg-[#1e1b18] hover:text-[#f7f5f2]
              transition-colors duration-200
            "
          />
          <CarouselNext
            className="
              static translate-y-0
              w-9 h-9 rounded-none
              bg-transparent border border-[#e5e0d8]
              text-[#1e1b18] hover:bg-[#1e1b18] hover:text-[#f7f5f2]
              transition-colors duration-200
            "
          />
        </div>
      </Carousel>
    </section>
  );
}