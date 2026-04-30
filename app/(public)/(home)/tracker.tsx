"use client";

export default function Tracker() {
  return (
    <section>
      <div className="border-t border-b border-[#e5e0d8] bg-white py-3.25 overflow-hidden">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {[
            "Bespoke Furniture",
            "Interior Styling",
            "Space Planning",
            "Custom Upholstery",
            "Material Sourcing",
            "Lighting Design",
            "Bespoke Furniture",
            "Interior Styling",
            "Space Planning",
            "Custom Upholstery",
            "Material Sourcing",
            "Lighting Design",
          ].map((item, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.22em] uppercase text-[#b8b0a4] font-medium shrink-0"
            >
              {item}
              <span className="text-[#c8a97e] ml-16">—</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
}
