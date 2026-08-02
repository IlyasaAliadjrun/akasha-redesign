import Link from "next/link";
import type { Metadata } from "next";
import { GOVERNANCE_PILLARS, GCG_PRINCIPLES } from "@/lib/investor";
import { GOVERNANCE_PAGE } from "@/content/pages/governance";
import PageHero from "@/components/page/PageHero";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return {
    title: GOVERNANCE_PAGE.meta.title[locale],
    description: GOVERNANCE_PAGE.meta.description[locale],
  };
}

export default function GovernancePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/governance/hero/desktop.jpg"
        mobile="/governance/hero/mobile.jpg"
        title={t(GOVERNANCE_PAGE.hero.title)}
        subtitle={t(GOVERNANCE_PAGE.hero.subtitle)}
        tone="dark"
        bg="#880E17"
      />

      {/* TARIF PRINCIPLES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 lg:mb-20 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.principles.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.principles.heading)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {GCG_PRINCIPLES.map((p) => (
              <div key={p.letter} className="relative">
                <div className="text-[80px] lg:text-[96px] font-extrabold tracking-tightish leading-none text-accent-beverage/15">
                  {p.letter}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-2">
                  {t(p.title)}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{t(p.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.structure.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.structure.heading)}
            </h2>
            <p className="mt-4 text-ink/60">
              {t(GOVERNANCE_PAGE.structure.paragraph)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GOVERNANCE_PAGE.structure.cards.map((o) => (
              <div key={t(o.title)} className="bg-white rounded-3xl p-8">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-4">
                  {t(o.subtitle)}
                </div>
                <div className="text-xl lg:text-2xl font-extrabold tracking-tightish mb-3">
                  {t(o.title)}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{t(o.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE DOCUMENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.documents.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.documents.heading)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GOVERNANCE_PILLARS.map((g) => (
              <a
                key={g.id}
                href="#"
                className="group bg-[#FAFAFA] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-beverage/10 flex items-center justify-center text-2xl mb-6">
                  {g.icon}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {t(g.title)}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{t(g.desc)}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                    {t(GOVERNANCE_PAGE.documents.downloadLabel)}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT / CSR */}
      <section className="py-24 bg-accent-wellness text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-5">
            {t(GOVERNANCE_PAGE.csr.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            {t(GOVERNANCE_PAGE.csr.heading)}
          </h2>
          <p className="mt-6 text-white/80 text-lg">
            {t(GOVERNANCE_PAGE.csr.paragraph)}
          </p>
          <a
            href="#"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition-all duration-500"
          >
            {t(GOVERNANCE_PAGE.csr.cta)}
          </a>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
            {t(GOVERNANCE_PAGE.investorCta.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            {t(GOVERNANCE_PAGE.investorCta.heading)}
          </h2>
          <Link
            href={href("/investor")}
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
          >
            {t(GOVERNANCE_PAGE.investorCta.linkText)}
          </Link>
        </div>
      </section>
    </>
  );
}
