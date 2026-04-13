import Image from "next/image";

export const metadata = {
  title: "Careers — Akasha Wira International",
  description: "Bergabung dengan tim yang membangun brand-brand besar Indonesia.",
};

export default function CareersPage() {
  return (
    <>
      <section data-theme="dark" className="relative h-[80svh] min-h-[520px] overflow-hidden bg-accent-beauty text-white flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-20">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/80 mb-4">
            Careers
          </div>
          <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02]">
            Build what matters.
          </h1>
          <p className="mt-4 text-subhead text-white/90 max-w-xl">
            Bangun brand yang dicintai jutaan orang.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-subhead text-ink/70 leading-relaxed">
            Kami percaya great brands dibangun oleh great people. Bergabunglah dengan tim yang berisi para inovator, marketer, ilmuwan, dan operator — bekerja lintas 5 divisi dan 10+ brand.
          </p>
          <div className="mt-10">
            <a href="mailto:careers@akasha.co.id" className="inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition">
              Kirim CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
