import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";
import PageHero from "@/components/page/PageHero";
import Icon, { type IconName } from "@/components/page/icons";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";
import { ABOUT_PAGE, type AchievementEntry } from "@/content/pages/about";
import { SHAREHOLDERS, SHAREHOLDING_AS_OF } from "@/lib/investor";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return pageMetadata({
    locale,
    path: "/about",
    title: ABOUT_PAGE.meta.title[locale],
    description: ABOUT_PAGE.meta.description[locale],
    image: "/media/pages/about/hero/og.jpg",
  });
}

// Full class strings (not built at runtime) so Tailwind's scanner keeps them.
const LOCATION_STYLE = {
  "head-office": { icon: "building", text: "text-accent-beverage", tint: "bg-accent-beverage/10", solid: "bg-accent-beverage" },
  distribution: { icon: "truck", text: "text-accent-food", tint: "bg-accent-food/10", solid: "bg-accent-food" },
  production: { icon: "factory", text: "text-accent-wellness", tint: "bg-accent-wellness/10", solid: "bg-accent-wellness" },
} as const satisfies Record<string, { icon: IconName; text: string; tint: string; solid: string }>;

const DIVISION_STYLE = {
  production: { text: "text-accent-wellness", tint: "bg-accent-wellness/10", solid: "bg-accent-wellness" },
  commercial: { text: "text-accent-food", tint: "bg-accent-food/10", solid: "bg-accent-food" },
  enabler: { text: "text-accent-beverage", tint: "bg-accent-beverage/10", solid: "bg-accent-beverage" },
} as const;

const CERT_STYLE = {
  quality: "text-accent-beverage bg-accent-beverage/10",
  "food-safety": "text-accent-food bg-accent-food/10",
  safety: "text-[#B7791F] bg-[#B7791F]/10",
  environment: "text-accent-wellness bg-accent-wellness/10",
  cosmetics: "text-accent-beauty bg-accent-beauty/15",
  rating: "text-[#1D4ED8] bg-[#1D4ED8]/10",
} as const;

// PROPER colours are the programme's own rating names, best to lowest.
const PROPER_SWATCH = ["bg-[#C9A227]", "bg-[#2F9E44]", "bg-[#1D4ED8]", "bg-[#D63A3A]", "bg-ink"] as const;

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const initials = (name: string) =>
  name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];

  const profiles = (
    label: Localized<string>,
    people: typeof ABOUT_PAGE.commissioners | typeof ABOUT_PAGE.directors,
  ) => (
    <div>
      <div className="mb-6 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
        {t(label)}
      </div>
      <div className="space-y-5">
        {people.map((p) => (
          <article
            key={p.name}
            className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 rounded-3xl bg-[#FAFAFA] p-5 lg:p-6"
          >
            <div className="relative aspect-[5/7] w-28 shrink-0 overflow-hidden rounded-2xl bg-ink/5 sm:row-span-2 sm:w-40 lg:w-[180px] xl:w-[200px]">
              <Image
                src={p.photo}
                alt={p.name}
                fill
                sizes="(min-width: 1280px) 200px, (min-width: 1024px) 180px, (min-width: 640px) 160px, 112px"
                className="object-cover object-top"
              />
            </div>
            <header className="min-w-0 self-center sm:self-start">
              <div className="text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-accent-beverage">
                {t(p.role)}
              </div>
              <h3 className="mt-1 text-xl font-extrabold tracking-tightish lg:text-2xl">
                {p.name}
              </h3>
              <div className="mt-1 text-xs text-ink/50">
                {t(ABOUT_PAGE.organization.sinceLabel)} {t(p.since)}
              </div>
              {"portfolio" in p && p.portfolio && (
                <div className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-ink/70">
                  {t(p.portfolio)}
                </div>
              )}
            </header>
            <p className="col-span-2 text-sm leading-relaxed text-ink/60 sm:col-span-1 sm:col-start-2">
              {t(p.bio)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <script
        type="application/ld+json"
        // "<" is escaped so no string in the data can close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(locale)).replace(/</g, "\\u003c"),
        }}
      />
      {/* HERO */}
      <PageHero
        desktop="/media/pages/about/hero/desktop.jpg"
        mobile="/media/pages/about/hero/mobile.jpg"
        title={t(ABOUT_PAGE.hero.title)}
        subtitle={t(ABOUT_PAGE.hero.subtitle)}
        tone="light"
        bg="#AEC0CD"
      />

      {/* VISION & MISSION */}
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

      {/* COMPANY OVERVIEW */}
      <section id="overview" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.overview.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.overview.heading)}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              {t(ABOUT_PAGE.overview.body)}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 border-y border-ink/10 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_PAGE.facts.map((f) => (
              <div key={f.label.en}>
                <dt className="text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                  {t(f.label)}
                </dt>
                <dd className="mt-2 text-2xl font-extrabold tracking-tightish">{t(f.value)}</dd>
                {f.note && <dd className="mt-1 text-sm text-ink/55">{t(f.note)}</dd>}
              </div>
            ))}
          </dl>

          <div className="mt-14 mb-6 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
            {t(ABOUT_PAGE.overview.businessLabel)}
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ABOUT_PAGE.business.map((b) => (
              <div key={b.title.en} className="flex flex-col rounded-3xl bg-white p-7">
                <div className="mb-3 text-xl font-extrabold tracking-tightish">{t(b.title)}</div>
                <p className="flex-1 text-[15px] leading-relaxed text-ink/60">{t(b.body)}</p>
                <div className="mt-6 border-t border-ink/5 pt-4 text-xs text-ink/50">
                  {t(ABOUT_PAGE.overview.plantLabel)}{" "}
                  <span className="font-semibold text-ink/75">{b.plant}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUE — ATEAM */}
      <section id="core-value" className="scroll-mt-24 py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14 lg:mb-20">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.coreValue.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.coreValue.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(ABOUT_PAGE.coreValue.body)}</p>
          </div>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {ABOUT_PAGE.values.map((v, i) => (
              <li key={v.title.en} className="relative">
                <div
                  aria-hidden
                  className="text-[80px] lg:text-[112px] font-extrabold tracking-tightish leading-none text-accent-beverage/15"
                >
                  {v.letter}
                </div>
                <div className="mt-1 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40">
                  0{i + 1}
                </div>
                <div className="mt-2 text-xl font-extrabold tracking-tightish">{t(v.title)}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(v.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {ABOUT_PAGE.stats.map((s) => (
              <div key={s.l.en}>
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
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
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

      {/* ORGANIZATION STRUCTURE */}
      <section id="organization-structure" className="scroll-mt-24 py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.organization.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.organization.heading)}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">
              {t(ABOUT_PAGE.organization.body)}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {profiles(ABOUT_PAGE.organization.commissionersLabel, ABOUT_PAGE.commissioners)}
            {profiles(ABOUT_PAGE.organization.directorsLabel, ABOUT_PAGE.directors)}
          </div>

          <div className="mt-24 border-t border-ink/10 pt-16">
            <div className="text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-accent-beverage">
              {t(ABOUT_PAGE.organization.unitsLabel)}
            </div>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tightish lg:text-4xl">
              {t(ABOUT_PAGE.organization.unitsHeading)}
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {ABOUT_PAGE.units.map((unit) => (
                <article key={unit.label.en} className="flex flex-col rounded-3xl bg-[#FAFAFA] p-6 lg:p-7">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-white px-3 py-1.5 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.12em] text-ink/55">
                    <Icon name="shield" className="h-3.5 w-3.5 text-accent-beverage" />
                    {t(
                      unit.reportsTo === "commissioners"
                        ? ABOUT_PAGE.organization.reportsToCommissioners
                        : ABOUT_PAGE.organization.reportsToDirectors,
                    )}
                  </div>
                  <h4 className="mt-5 text-xl font-extrabold tracking-tightish">{t(unit.label)}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">{t(unit.note)}</p>
                  <ul className="mt-6 space-y-3 border-t border-ink/10 pt-5">
                    {unit.people.map((person) => (
                      <li key={person.name} className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                          {initials(person.name)}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-bold leading-tight">{person.name}</span>
                          {"role" in person && person.role && (
                            <span className="block text-xs text-ink/50">{t(person.role)}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mb-5 mt-14 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
              {t(ABOUT_PAGE.organization.divisionsLabel)}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {ABOUT_PAGE.divisions.map((division) => {
                const style = DIVISION_STYLE[division.id];
                return (
                  <article key={division.id} className="relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 p-6 lg:p-7">
                    <span className={`absolute inset-x-0 top-0 h-1.5 ${style.solid}`} aria-hidden />
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className={`text-2xl font-extrabold tracking-tightish ${style.text}`}>{t(division.label)}</h4>
                      <span className="text-xs tabular-nums text-ink/40">{division.people.length}</span>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {division.functions.map((fn) => (
                        <li key={fn.en} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.tint} ${style.text}`}>
                          {t(fn)}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex-1 space-y-3 border-t border-ink/10 pt-5">
                      {division.people.map((person) => (
                        <li key={person.name} className="flex items-center gap-3">
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-bold ${style.tint} ${style.text}`}>
                            {initials(person.name)}
                          </span>
                          <span className="min-w-0">
                            <span className="block font-bold leading-tight">{person.name}</span>
                            {"role" in person && person.role && (
                              <span className="block text-xs text-ink/50">{t(person.role)}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 text-sm text-ink/50 max-w-3xl">
            {t(ABOUT_PAGE.governanceNote.textBefore)}
            <Link href={href("/governance")} className="underline hover:text-ink">
              {ABOUT_PAGE.governanceNote.linkLabel}
            </Link>
            {t(ABOUT_PAGE.governanceNote.textAfter)}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="scroll-mt-24 py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.footprint.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.footprint.heading)}
            </h2>
            <p className="mt-4 text-ink/60 max-w-xl">{t(ABOUT_PAGE.footprint.body)}</p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2">
            {ABOUT_PAGE.locations.map((group) => {
              const style = LOCATION_STYLE[group.kind];
              const wide = group.sites.length > 2;
              return (
                <div key={group.kind} className={wide ? "md:col-span-2" : ""}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`grid h-9 w-9 place-items-center rounded-full ${style.tint} ${style.text}`}>
                      <Icon name={style.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="text-lg font-extrabold tracking-tightish">{t(group.label)}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums ${style.tint} ${style.text}`}>
                      {group.sites.length}
                    </span>
                  </div>
                  <div className={`grid grid-cols-1 gap-5 ${wide ? "md:grid-cols-2 xl:grid-cols-4" : ""}`}>
                    {group.sites.map((site) => (
                      <article key={site.city} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_0_rgba(10,10,10,0.04)] transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(10,10,10,0.25)]">
                        <div className={`relative h-24 ${style.tint}`}>
                          <div
                            className={`absolute inset-0 opacity-[0.18] ${style.text}`}
                            style={{
                              backgroundImage:
                                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                              backgroundSize: "22px 22px",
                            }}
                            aria-hidden
                          />
                          <span className={`absolute bottom-0 left-6 grid h-11 w-11 translate-y-1/2 place-items-center rounded-full text-white shadow-lg ring-4 ring-white ${style.solid}`}>
                            <Icon name="pin" className="h-5 w-5" />
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
                          <h4 className="text-xl font-extrabold tracking-tightish">{site.city}</h4>
                          <address className="mt-2 flex-1 text-sm not-italic leading-relaxed text-ink/60">
                            {site.address}
                          </address>
                          {"makes" in site && site.makes && (
                            <div className="mt-5">
                              <div className="text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                                {t(ABOUT_PAGE.footprint.makesLabel)}
                              </div>
                              <div className={`mt-1.5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${style.tint} ${style.text}`}>
                                {t(site.makes)}
                              </div>
                            </div>
                          )}
                          {"note" in site && site.note && (
                            <p className="mt-3 text-xs leading-relaxed text-ink/50">{t(site.note)}</p>
                          )}
                          <a
                            href={mapsUrl(site.address)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center justify-between gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white"
                          >
                            {t(ABOUT_PAGE.footprint.mapsLabel)}
                            <Icon name="arrow-up-right" className="h-4 w-4" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="scroll-mt-24 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.achievements.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.achievements.heading)}
            </h2>
            <p className="mt-4 text-ink/60">{t(ABOUT_PAGE.achievements.body)}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(ABOUT_PAGE.certifications as AchievementEntry[]).map((c) => {
              const logo = c.logo;
              return (
                <article key={c.code} className="flex flex-col rounded-3xl bg-[#FAFAFA] p-6 lg:p-7">
                  {logo ? (
                    <div className="flex h-24 items-center rounded-2xl bg-white px-5">
                      <div className="relative h-14 w-full max-w-[180px]">
                        <Image src={logo} alt={c.code} fill sizes="180px" className="object-contain object-left" />
                      </div>
                    </div>
                  ) : (
                    <span className={`grid h-16 w-16 place-items-center rounded-2xl ${CERT_STYLE[c.kind]}`}>
                      <Icon name={c.kind} className="h-8 w-8" />
                    </span>
                  )}
                  <div className="mt-6 text-[11px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
                    {t(c.category)}
                  </div>
                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-tightish">{c.code}</h3>
                  <div className="mt-1 font-semibold text-ink/80">{t(c.title)}</div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">{t(c.scope)}</p>
                  {c.kind === "rating" && (
                    <div className="mt-5" role="img" aria-label={`PROPER: ${t(ABOUT_PAGE.achievements.properScale[ABOUT_PAGE.achievements.properCurrent])}`}>
                      <div className="flex gap-1">
                        {ABOUT_PAGE.achievements.properScale.map((level, i) => (
                          <span
                            key={level.en}
                            className={`h-2 flex-1 rounded-full ${PROPER_SWATCH[i]} ${
                              i === ABOUT_PAGE.achievements.properCurrent ? "" : "opacity-20"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="mt-1.5 flex text-[11px] lg:text-[10px] text-ink/45" aria-hidden>
                        {ABOUT_PAGE.achievements.properScale.map((level, i) => (
                          <span
                            key={level.en}
                            className={`flex-1 text-center ${
                              i === ABOUT_PAGE.achievements.properCurrent ? "font-bold text-[#1D4ED8]" : ""
                            }`}
                          >
                            {t(level)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] lg:text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(ABOUT_PAGE.ownership.eyebrow)}
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              {t(ABOUT_PAGE.ownership.heading)}
            </h2>
            <p className="mt-5 text-ink/65 max-w-lg">{t(ABOUT_PAGE.ownership.body)}</p>
            <Link
              href={href("/investor")}
              className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
            >
              {t(ABOUT_PAGE.ownership.ctaText)}
            </Link>
          </div>

          <div className="space-y-5">
            {SHAREHOLDERS.map((s, i) => (
              <div key={t(s.name)} className="bg-white rounded-3xl p-6 lg:p-8">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <div className="text-sm font-semibold">{t(s.name)}</div>
                  <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                    {s.percent}
                  </div>
                </div>
                <div className="h-2 bg-[#FAFAFA] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${i === 0 ? "bg-accent-beverage" : "bg-ink"}`}
                    style={{ width: `${s.ratio * 100}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-ink/50 tabular-nums">
                  {s.shares} {t(ABOUT_PAGE.ownership.sharesUnit)}
                </div>
              </div>
            ))}
            <div className="text-xs text-ink/40">{t(SHAREHOLDING_AS_OF)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
