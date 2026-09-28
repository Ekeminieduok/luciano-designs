import ProductCard from "../(home)/product-card";

export default function AccentPieces() {
  return (
    <section className="px-6 md:px-12 py-14 md:py-20 bg-white">
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <p className="text-[12px] tracking-[0.26em] uppercase text-[#c8a97e] font-medium mb-3">
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
          productId="family decor"
          src="/images/family piece.jpg"
          alt="family decor"
          category="Decor"
          name="FAMILY PIECE"
          price="From ₦20,000"
          height="h-[300px] md:h-[380px]"
          basePrice={20000}
        />
        <ProductCard
          productId="glass-centre-table"
          src="/images/glass table.png"
          alt="glass table"
          category="Tables"
          name="GLASS CENTRE TABLE"
          price="From ₦155,000"
          height="h-[300px] md:h-[380px]"
          basePrice={155000}
        />
        <ProductCard
          productId="brown-centre-table"
          src="/images/brown table.jpeg"
          alt="brown table"
          category="Tables"
          name="BROWN CENTRE TABLE"
          price="From ₦165,000"
          height="h-[300px] md:h-[380px]"
          basePrice={165000}
        />
        <ProductCard
          productId="dotted-rug"
          src="/images/dotted mat.jpeg"
          alt="dotted mat"
          category="Rugs"
          name="DOTTED RUG"
          price="From ₦120,000"
          height="h-[300px] md:h-[380px]"
          basePrice={120000}
        />
        <ProductCard
          productId="space-men"
          src="/images/space men.jpeg"
          alt="space"
          category="Decor"
          name="SPACE MEN"
          price="From ₦95,000"
          height="h-[300px] md:h-[380px]"
          basePrice={95000}
        />
        <ProductCard
          productId="little-men"
          src="/images/little men.jpeg"
          alt="little"
          category="Decor"
          name="LITTLE MEN"
          price="From ₦95,000"
          height="h-[300px] md:h-[380px]"
          basePrice={95000}
        />
        <ProductCard
          productId="sculptured-quails"
          src="/images/sculptured quails.jpeg"
          alt="sculptured quails"
          category="Decor"
          name="SCULPTURED QUAILS"
          price="From ₦85,000"
          height="h-[300px] md:h-[380px]"
          basePrice={85000}
        />
        <ProductCard
          productId="molded-twists"
          src="/images/molded twists.jpeg"
          alt="molded twists"
          category="Decor"
          name="MOLDED TWISTS"
          price="From ₦105,000"
          height="h-[300px] md:h-[380px]"
          basePrice={105000}
        />
        <ProductCard
          productId="side-trolley-table"
          src="/images/Side trolley table.png"
          alt="Side trolley table"
          category="Tables"
          name="SIDE TROLLEY TABLE"
          price="From ₦70,000"
          height="h-[300px] md:h-[380px]"
          basePrice={70000}
        />
        <ProductCard
          productId="rocking-chair"
          src="/images/Rocking chair.png"
          alt="Rocking chair"
          category="Chairs"
          name="ROCKING CHAIR"
          price="From ₦175,000"
          height="h-[300px] md:h-[380px]"
          basePrice={175000}
        />
        <ProductCard
          productId="astronauts"
          src="/images/Astronauts.png"
          alt="Astronauts"
          category="Decor"
          name="ASTRONAUTS"
          price="From ₦25,000"
          height="h-[300px] md:h-[380px]"
          basePrice={25000}
        />
        <ProductCard
          productId="ceramic-vase-set"
          src="/images/Ceramic vase set.png"
          alt="Ceramic vase set"
          category="Decor"
          name="CERAMIC VASE SET"
          price="From ₦45,000"
          height="h-[300px] md:h-[380px]"
          basePrice={45000}
        />
        <ProductCard
          productId="faux-books"
          src="/images/Faux books.png"
          alt="Faux books"
          category="Decor"
          name="FAUX BOOKS"
          price="From ₦12,000"
          height="h-[300px] md:h-[380px]"
          basePrice={12000}
        />
        <ProductCard
          productId="center table"
          src="/images/center table(5).jpg"
          alt="center table"
          category="Tables"
          name="CENTER TABLE"
          price="From ₦640,000"
          height="h-[300px] md:h-[380px]"
          basePrice={640000}
        />
      </div>
    </section>
  );
}
