import ProductCard from "../(home)/product-card";

export default function AccentPrices() {
  return (
    <section className="px-12 py-20 bg-white">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Accent pieces
          </p>
          <h2
            className="text-[36px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Details that <em className="italic">define</em> a room
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[1.5px] bg-[#e5e0d8]">
        <ProductCard
          src="/images/side-table-black.webp"
          alt="Glossy black sculptural pedestal side table"
          category="Tables"
          name="Noir Pedestal Side Table"
          price="From ₦185,000"
          height="h-[380px]"
        />
        <ProductCard
          src="/images/glass table.png"
          alt="glass table"
          category="Tables"
          name="Glass Centre Table"
          price="From ₦155,000"
          height="h-[380px]"
        />
      </div>
    </section>
  );
}
