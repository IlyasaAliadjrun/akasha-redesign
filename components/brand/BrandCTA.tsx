import type { Brand } from "@/lib/brands";

export default function BrandCTA({ brand }: { brand: Brand }) {
  return (
    <section
      data-theme="dark"
      className="py-32 text-center text-white"
      style={{ backgroundColor: brand.accentHex }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
          Rasakan {brand.name} sekarang.
        </h2>
        <p className="mt-4 text-white/80 text-lg">{brand.tagline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://shop.akasha.co.id"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-7 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition"
          >
            Beli sekarang
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-7 py-3 rounded-full border border-white/70 hover:bg-white/10 transition"
          >
            Temukan di toko terdekat
          </a>
        </div>
      </div>
    </section>
  );
}
