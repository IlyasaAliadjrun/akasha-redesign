import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/page/PageHero";
import { type Locale, type Localized } from "@/lib/locale/paths";
import { CAREERS_PAGE } from "@/content/pages/careers";
import { DIVISIONS } from "@/lib/brands";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return pageMetadata({
    locale,
    path: "/careers",
    title: CAREERS_PAGE.meta.title[locale],
    description: CAREERS_PAGE.meta.description[locale],
    image: "/media/pages/careers/hero/og.jpg",
  });
}

export default function CareersPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/media/pages/careers/hero/desktop.jpg"
        mobile="/media/pages/careers/hero/mobile.jpg"
        title={t(CAREERS_PAGE.hero.title)}
        subtitle={t(CAREERS_PAGE.hero.subtitle)}
        tone="dark"
        bg="#0C426A"
      />

      {/* STATEMENT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent-beverage mb-6">
            {t(CAREERS_PAGE.statement.eyebrow)}
          </div>
          <p className="text-subhead text-ink/70 leading-relaxed">
            {t(CAREERS_PAGE.statement.paragraph)}
          </p>
        </div>
      </section>

      {/* REALITIES FROM DAY ONE */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(CAREERS_PAGE.reality.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(CAREERS_PAGE.reality.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(CAREERS_PAGE.reality.body)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREERS_PAGE.realities.map((r, i) => (
              <div key={r.title.en} className="bg-white rounded-3xl p-8">
                <div className="text-5xl font-extrabold tracking-tightish text-accent-beverage/20 mb-4">
                  0{i + 1}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {t(r.title)}
                </div>
                <p className="text-ink/60 text-[15px] leading-relaxed">{t(r.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE LOOK FOR */}
      <section data-theme="dark" className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(CAREERS_PAGE.looking.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(CAREERS_PAGE.looking.heading)}
            </h2>
            <p className="mt-4 text-white/60">{t(CAREERS_PAGE.looking.body)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {CAREERS_PAGE.traits.map((trait) => (
              <div key={trait.title.en} className="border-t border-white/15 pt-6">
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {t(trait.title)}
                </div>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {t(trait.body)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(CAREERS_PAGE.divisions.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(CAREERS_PAGE.divisions.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(CAREERS_PAGE.divisions.body)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIVISIONS.map((d) => (
              <div key={d.id} className="bg-[#FAFAFA] rounded-3xl p-7">
                <div
                  className="h-1.5 w-10 rounded-full mb-6"
                  style={{ backgroundColor: d.accentHex }}
                />
                <div className="text-lg font-extrabold tracking-tightish leading-snug mb-2">
                  {t(d.name)}
                </div>
                <p className="text-sm text-ink/55 leading-relaxed">{t(d.tagline)}</p>
                <div className="mt-5 text-xs uppercase tracking-[0.2em] font-bold text-ink/40 tabular-nums">
                  {d.brandCount} {t(CAREERS_PAGE.divisions.brandCountLabel)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-4">
            {t(CAREERS_PAGE.cta.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            {t(CAREERS_PAGE.cta.heading)}
          </h2>
          <p className="mt-6 text-ink/60">{t(CAREERS_PAGE.cta.body)}</p>
          <a
            href="mailto:careers@akasha.co.id"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
          >
            {t(CAREERS_PAGE.cta.label)}
          </a>
        </div>
      </section>
    </>
  );
}
