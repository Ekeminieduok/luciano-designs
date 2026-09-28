export default async function OrderSuccess({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <div className="min-h-screen bg-[#f7f5f2] flex flex-col items-center justify-center text-center px-6">
      <div className="w-12 h-12 rounded-full bg-[#4a6741]/10 flex items-center justify-center mb-6">
        <span className="text-[#4a6741] text-xl">✓</span>
      </div>
      <p className="text-[9px] tracking-[0.28em] uppercase text-[#c8a97e] mb-3">
        Order confirmed
      </p>
      <h1
        className="text-[36px] font-light text-[#1e1b18] mb-4 leading-snug"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Thank you for your order.
      </h1>
      {ref && (
        <p className="text-[12px] text-[#7a7268] mb-2">
          Reference:{" "}
          <span className="text-[#1e1b18] font-medium">{ref}</span>
        </p>
      )}
      <p className="text-[13px] text-[#7a7268] mb-10 max-w-sm leading-[1.8]">
        We&apos;ll be in touch shortly to confirm your delivery details.
      </p>
      <a
        href="/products"
        className="inline-flex items-center gap-2 bg-[#1e1b18] text-[#fafaf8] text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-[#c8a97e] hover:text-[#1e1b18] transition-colors duration-200"
      >
        Continue shopping →
      </a>
    </div>
  );
}