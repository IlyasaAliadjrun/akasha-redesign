import type { Metadata } from "next";
import PageHero from "@/components/page/PageHero";
import { type Locale, type Localized } from "@/lib/locale/paths";
import { CAREERS_PAGE } from "@/content/pages/careers";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return {
    title: CAREERS_PAGE.meta.title[locale],
    description: CAREERS_PAGE.meta.description[locale],
  };
}

export default function CareersPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/careers/hero/desktop.jpg"
        mobile="/careers/hero/mobile.jpg"
        title={t(CAREERS_PAGE.hero.title)}
        subtitle={t(CAREERS_PAGE.hero.subtitle)}
        tone="dark"
        bg="#0C426A"
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-subhead text-ink/70 leading-relaxed">
            {t(CAREERS_PAGE.body.paragraph)}
          </p>
          <div className="mt-10">
            <a href="mailto:careers@akasha.co.id" className="inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition">
              {t(CAREERS_PAGE.cta.label)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
