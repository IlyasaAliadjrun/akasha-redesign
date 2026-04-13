export const metadata = {
  title: "Careers — Akasha Wira International",
  description: "Bergabung dengan tim yang membangun brand-brand besar Indonesia.",
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[760px] bg-white flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-beverage">
              Careers
            </span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/60">
              Join us
            </span>
          </div>
          <h1 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Build what matters.
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink/60 max-w-2xl">
            Bangun brand yang dicintai jutaan orang bersama tim lintas divisi
            yang menjunjung kualitas, inovasi, dan dampak positif.
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
