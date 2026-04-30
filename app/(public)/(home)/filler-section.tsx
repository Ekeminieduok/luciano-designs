"use client"

export default function FillerSection() {
  return (
    <div className="px-12 py-20 border-t border-[#e5e0d8]">
      <div className="mb-12">
        <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
          Why Luciano
        </p>
        <h2
          className="text-[36px] font-light text-[#1e1b18] leading-[1.1]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Craft you can <em className="italic">feel</em>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-px bg-[#e5e0d8] border border-[#e5e0d8]">
        {[
          {
            n: "01",
            t: "Handcrafted",
            d: "Every piece built by skilled local artisans using traditional joinery and premium materials.",
          },
          {
            n: "02",
            t: "Fully bespoke",
            d: "No two spaces are the same. We tailor dimensions, materials, and finishes to your space exactly.",
          },
          {
            n: "03",
            t: "Sustainably sourced",
            d: "We work with certified suppliers and local timber merchants who share our values.",
          },
          {
            n: "04",
            t: "End-to-end service",
            d: "From moodboard to final installation, we guide you through every decision.",
          },
        ].map(({ n, t, d }) => (
          <div key={n} className="bg-white px-7 py-10">
            <div
              className="text-[42px] font-light text-[#e5e0d8] leading-none mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {n}
            </div>
            <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#1e1b18] mb-3">
              {t}
            </div>
            <div className="text-[12.5px] text-[#7a7268] leading-[1.75] font-light">
              {d}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
