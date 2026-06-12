import ProductCard from "../(home)/product-card";

export default function AccentPrices() {
  return (
    <section className="px-6 md:px-12 py-14 md:py-20 bg-white">
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <p className="text-[9px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
            Accent pieces
          </p>
          <h2
            className="text-[28px] md:text-[36px] font-light text-[#1e1b18] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Details that <em className="italic">define</em> a room
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5px] bg-[#e5e0d8]">
        <ProductCard
          src="/images/side-table-black.webp"
          alt="Glossy black sculptural pedestal side table"
          category="Tables"
          name="Noir Pedestal Side Table"
          price="From ₦185,000"
          height="h-[300px] md:h-[380px]"
        />
        <ProductCard
          src="/images/glass table.png"
          alt="glass table"
          category="Tables"
          name="Glass Centre Table"
          price="From ₦155,000"
          height="h-[300px] md:h-[380px]"
        />
        <ProductCard
          src="/images/brown table.jpeg"
          alt="brown table"
          category="Tables"
          name="Brown Centre Table"
          price="From ₦165,000"
          height="h-[300px] md:h-[380px]"
        />
        <ProductCard
        src="/images/dotted mat.jpeg"
        alt="dotted mat"
        category="Rugs"
        name="Dotted Rug"
        price="From ₦120,000"
        height="h-[300px] md:h-[380px]"
        />
        <ProductCard
        src="/images/space men.jpeg"
        alt="space"
        category="Decor"
        name="space men"
        price="From ₦95,000"
        height="h-[300px] md:h-[380px]"
        />
         <ProductCard
        src="/images/little men.jpeg"
        alt="little"
        category="Decor"
        name="little men"
        price="From ₦95,000"
        height="h-[300px] md:h-[380px]"
        />
        <ProductCard
        src="/images/sculptured quails.jpeg"
        alt="sculptured quails"
        category="Decor"
        name="Quails"
        price="From ₦85,000"
        height="h-[300px] md:h-[380px]"
        />
        <ProductCard
        src="/images/molded twists.jpeg"
        alt="molded twists"
        category="Decor"
        name="Molded Twists"
        price="From ₦105,000"
        height="h-[300px] md:h-[380px]"
        />
      </div>
    </section>
  );
}