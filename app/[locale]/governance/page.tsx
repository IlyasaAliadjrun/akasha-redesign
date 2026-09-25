import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  GOVERNANCE_PILLARS,
  GCG_PRINCIPLES,
  GMS_ARCHIVE,
  DISCLOSURES,
  ANNOUNCEMENTS,
  CSR_REPORTS,
  SUSTAINABILITY_REPORTS,
} from "@/lib/investor";
import { GOVERNANCE_PAGE } from "@/content/pages/governance";
import PageHero from "@/components/page/PageHero";
import FoldedArchive from "@/components/page/FoldedArchive";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return pageMetadata({
    locale,
    path: "/governance",
    title: GOVERNANCE_PAGE.meta.title[locale],
    description: GOVERNANCE_PAGE.meta.description[locale],
    image: "/media/pages/governance/hero/og.jpg",
  });
}

export default function GovernancePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/media/pages/governance/hero/desktop.jpg"
        mobile="/media/pages/governance/hero/mobile.jpg"
        title={t(GOVERNANCE_PAGE.hero.title)}
        subtitle={t(GOVERNANCE_PAGE.hero.subtitle)}
        tone="dark"
        bg="#880E17"
      />

      {/* TARIF PRINCIPLES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 lg:mb-20 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
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
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
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
                <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-4">
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
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
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
                href={g.href}
                {...(g.href.startsWith("#")
                  ? {}
                  : { target: "_blank", rel: "noreferrer" })}
                className="group flex flex-col bg-[#FAFAFA] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-beverage/10 flex items-center justify-center text-2xl mb-6">
                  {g.icon}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {t(g.title)}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{t(g.desc)}</p>
                {g.note && (
                  <p className="mt-4 text-xs text-ink/45 leading-relaxed">{t(g.note)}</p>
                )}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                    {g.href.startsWith("#")
                      ? t(GOVERNANCE_PAGE.documents.viewLabel)
                      : t(GOVERNANCE_PAGE.documents.downloadLabel)}
                  </span>
                  <span className="w-9 h-9 shrink-0 rounded-full bg-ink/5 flex items-center justify-center transition-all duration-500 group-hover:bg-ink group-hover:text-white">
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

      {/* GENERAL MEETING OF SHAREHOLDERS */}
      <section id="gms" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.gms.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.gms.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(GOVERNANCE_PAGE.gms.paragraph)}</p>
          </div>

          <FoldedArchive
            items={GMS_ARCHIVE}
            yearOf={(m) => m.year}
            locale={locale}
            gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            render={(m) => (
              <div key={m.year} className="bg-white rounded-3xl p-7">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <div className="text-3xl font-extrabold tracking-tightish tabular-nums">
                    {m.year}
                  </div>
                  <div className="text-xs text-ink/40">
                    {m.documents.length} {t(GOVERNANCE_PAGE.gms.documentsLabel)}
                  </div>
                </div>
                <div className="text-sm text-ink/55 mb-5">{t(m.date)}</div>
                <div className="space-y-3">
                  {m.documents.map((d) => (
                    <a
                      key={d.file}
                      href={d.file}
                      target="_blank"
                      rel="noreferrer"
                      className="group -my-3 flex items-center justify-between gap-4 border-b border-ink/5 py-3 last:border-0"
                    >
                      <span className="text-sm text-ink/70 transition-colors group-hover:text-ink">
                        {t(d.label)}
                      </span>
                      <span className="text-xs font-semibold text-accent-beverage shrink-0 transition-opacity duration-300 group-hover:opacity-70">
                        PDF
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* DISCLOSURE INFORMATION */}
      <section id="disclosure" className="scroll-mt-24 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.disclosure.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.disclosure.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(GOVERNANCE_PAGE.disclosure.paragraph)}</p>
          </div>

          <div className="border-t border-ink/10">
            {DISCLOSURES.map((d, i) => (
              <a
                key={d.file}
                href={d.file}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-1 border-b border-ink/5 py-5 transition-colors hover:bg-ink/[0.02] sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-ink/40 sm:w-40 sm:shrink-0">
                  {t(d.date)}
                </span>
                <span className="text-[15px] leading-relaxed text-ink/80 transition-colors group-hover:text-ink">
                  {t(d.title)}
                </span>
                <span className="text-xs font-semibold text-accent-beverage sm:ml-auto sm:shrink-0">
                  PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section id="announcement" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(GOVERNANCE_PAGE.announcement.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(GOVERNANCE_PAGE.announcement.heading)}
            </h2>
            <p className="mt-4 text-ink/60">
              {t(GOVERNANCE_PAGE.announcement.paragraph)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ANNOUNCEMENTS.map((a) => (
              <a
                key={a.file}
                href={a.file}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
              >
                <span className="text-lg font-extrabold tracking-tightish leading-snug">
                  {t(a.title)}
                </span>
                <span className="w-9 h-9 shrink-0 rounded-full bg-ink/5 flex items-center justify-center transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT / CSR */}
      <section
        id="csr"
        data-theme="dark"
        className="scroll-mt-24 py-24 bg-accent-wellness text-white"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-5">
            {t(GOVERNANCE_PAGE.csr.eyebrow)}
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            {t(GOVERNANCE_PAGE.csr.heading)}
          </h2>
          <p className="mt-6 text-white/80 text-lg">
            {t(GOVERNANCE_PAGE.csr.paragraph)}
          </p>

          <div className="mt-12">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-white/60 mb-5">
              {t(GOVERNANCE_PAGE.csr.reportsLabel)}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CSR_REPORTS.map((r) => (
                <a
                  key={r.year}
                  href={r.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-white hover:text-ink"
                >
                  <span className="font-semibold tabular-nums">{r.year}</span>
                  <span className="opacity-70">
                    {" "}
                    · {t(GOVERNANCE_PAGE.csr.reportRef)} {r.page}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href={SUSTAINABILITY_REPORTS[0].file}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition-all duration-500"
          >
            {t(GOVERNANCE_PAGE.csr.cta)}
          </a>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
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
