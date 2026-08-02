import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/page/PageHero";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";
import { ABOUT_PAGE } from "@/content/pages/about";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return {
    title: ABOUT_PAGE.meta.title[locale],
    description: ABOUT_PAGE.meta.description[locale],
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];

  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/about/hero/desktop.jpg"
        mobile="/about/hero/mobile.jpg"
        title={t(ABOUT_PAGE.hero.title)}
        subtitle={t(ABOUT_PAGE.hero.subtitle)}
        tone="light"
        bg="#AEC0CD"
      />

      {/* VISION */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent-beverage mb-6">
            {t(ABOUT_PAGE.vision.eyebrow)}
          </div>
          <p className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-tightish font-extrabold">
            {t(ABOUT_PAGE.vision.line1)}
            <span className="block text-ink/40 font-light mt-3">
              {t(ABOUT_PAGE.vision.line2)}
            </span>
          </p>
          <div className="mt-16 pt-12 border-t border-black/5 max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent-beverage mb-5">
              {t(ABOUT_PAGE.mission.eyebrow)}
            </div>
            <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.35] font-medium text-ink/75">
              {t(ABOUT_PAGE.mission.body)}
            </p>
          </div>
        </div>
      </section>

      {/* FOUR GREATS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.fourGreats.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.fourGreats.heading)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PAGE.values.map((v, i) => (
              <div key={v.title.en} className="bg-white rounded-3xl p-8">
                <div className="text-5xl font-extrabold tracking-tightish text-accent-beverage/20 mb-4">
                  0{i + 1}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {t(v.title)}
                </div>
                <p className="text-ink/60 text-[15px] leading-relaxed">{t(v.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {ABOUT_PAGE.stats.map((s) => (
              <div key={s.n}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tightish">
                  {s.n}
                </div>
                <div className="mt-3 text-sm text-ink/50 uppercase tracking-[0.2em] font-semibold">
                  {t(s.l)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section data-theme="dark" className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.journey.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.journey.heading)}
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              {t(ABOUT_PAGE.journey.body)}
            </p>
          </div>

          <ol className="relative border-l border-white/15 ml-2">
            {ABOUT_PAGE.timeline.map((item) => (
              <li key={item.year} className="pl-8 pb-10 relative">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white" />
                <div className="text-xs tracking-[0.2em] uppercase text-accent-beverage font-bold mb-1">
                  {item.year}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tightish">
                  {t(item.title)}
                </div>
                <p className="mt-2 text-white/60 max-w-2xl">{t(item.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.leadership.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.leadership.heading)}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-6">
                {t(ABOUT_PAGE.leadership.commissionersLabel)}
              </div>
              <div className="space-y-5">
                {ABOUT_PAGE.commissioners.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-5 bg-[#FAFAFA] rounded-2xl p-5 lg:p-6"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-accent-beverage/15 flex items-center justify-center text-lg font-extrabold text-accent-beverage shrink-0">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-lg lg:text-xl font-extrabold tracking-tightish">
                        {p.name}
                      </div>
                      <div className="text-sm text-ink/55">{t(p.role)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-6">
                {t(ABOUT_PAGE.leadership.directorsLabel)}
              </div>
              <div className="space-y-5">
                {ABOUT_PAGE.directors.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-5 bg-[#FAFAFA] rounded-2xl p-5 lg:p-6"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-ink flex items-center justify-center text-lg font-extrabold text-white shrink-0">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-lg lg:text-xl font-extrabold tracking-tightish">
                        {p.name}
                      </div>
                      <div className="text-sm text-ink/55">{t(p.role)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-ink/50 max-w-3xl">
            {t(ABOUT_PAGE.governanceNote.textBefore)}
            <Link href={href("/governance")} className="underline hover:text-ink">
              {ABOUT_PAGE.governanceNote.linkLabel}
            </Link>
            {t(ABOUT_PAGE.governanceNote.textAfter)}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.footprint.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.footprint.heading)}
            </h2>
            <p className="mt-4 text-ink/60 max-w-xl">
              {t(ABOUT_PAGE.footprint.body)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ABOUT_PAGE.facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-7">
                <div
                  className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-3 ${
                    f.kind === "head-office"
                      ? "text-accent-beverage"
                      : f.kind === "distribution"
                      ? "text-accent-food"
                      : "text-accent-wellness"
                  }`}
                >
                  {t(f.type)}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-1">
                  {f.location}
                </div>
                <p className="text-sm text-ink/55">{t(f.detail)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.ownership.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.ownership.heading)}
            </h2>
            <p className="mt-5 text-ink/65 max-w-lg">
              {t(ABOUT_PAGE.ownership.body)}
            </p>
            <Link
              href={href("/investor")}
              className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
            >
              {t(ABOUT_PAGE.ownership.ctaText)}
            </Link>
          </div>

          <div className="space-y-5">
            <div className="bg-[#FAFAFA] rounded-3xl p-6 lg:p-8">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-sm font-semibold">
                  {ABOUT_PAGE.ownership.shareholders.primary.name}
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                  {ABOUT_PAGE.ownership.shareholders.primary.percent}
                </div>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-accent-beverage" style={{ width: "91.52%" }} />
              </div>
              <div className="mt-2 text-xs text-ink/50 tabular-nums">
                {t(ABOUT_PAGE.ownership.shareholders.primary.shares)}
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-3xl p-6 lg:p-8">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-sm font-semibold">
                  {t(ABOUT_PAGE.ownership.shareholders.public.name)}
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                  {ABOUT_PAGE.ownership.shareholders.public.percent}
                </div>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-ink" style={{ width: "8.48%" }} />
              </div>
              <div className="mt-2 text-xs text-ink/50 tabular-nums">
                {t(ABOUT_PAGE.ownership.shareholders.public.shares)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
