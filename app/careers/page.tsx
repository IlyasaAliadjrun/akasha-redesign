import PageHero from "@/components/page/PageHero";

export const metadata = {
  title: "Careers — Akasha Wira International",
  description: "Bergabung dengan tim yang membangun brand-brand besar Indonesia.",
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/careers/hero/desktop.jpg"
        mobile="/careers/hero/mobile.jpg"
        title="Build what matters."
        subtitle="Bangun brand yang dicintai jutaan orang bersama tim lintas divisi yang menjunjung kualitas, inovasi, dan dampak positif."
        tone="dark"
        bg="#0C426A"
      />

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
