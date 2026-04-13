export const metadata = {
  title: "Contact — Akasha Wira International",
  description: "Hubungi PT Akasha Wira International Tbk — Customer Care, Media, Investor Relations.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
          Get in touch
        </div>
        <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02]">
          Say hello.
        </h1>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Customer Care</div>
            <a href="tel:+628111934500" className="text-2xl font-extrabold tracking-tightish block">+62 811 1934 5000</a>
            <p className="text-ink/60 text-sm mt-2">Senin–Jumat, 09.00–18.00 WIB</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Head Office</div>
            <p className="text-lg">Jakarta, Indonesia</p>
            <p className="text-ink/60 text-sm mt-2">PT Akasha Wira International Tbk</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Online Shop</div>
            <a href="https://shop.akasha.co.id" target="_blank" rel="noreferrer" className="text-lg font-semibold">
              shop.akasha.co.id →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
