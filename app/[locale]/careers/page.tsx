import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/page/PageHero";
import { type Locale, type Localized } from "@/lib/locale/paths";
import { CAREERS_PAGE } from "@/content/pages/careers";

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
      <PageHero
        desktop="/media/pages/careers/hero/desktop.jpg"
        mobile="/media/pages/careers/hero/mobile.jpg"
        title={t(CAREERS_PAGE.hero.title)}
        tone="dark"
        bg="#0C426A"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-3xl space-y-5">
            {CAREERS_PAGE.paragraphs.map((p) => (
              <p key={p.en} className="text-[17px] leading-relaxed text-ink/70">
                {t(p)}
              </p>
            ))}
          </div>

          {/* The company's own JotForm (vacancies + upload). An iframe cannot size
              itself to its content, so the frame is tall and scrolls inside. */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-[#FAFAFA]">
            <iframe
              src={`https://form.jotform.com/${CAREERS_PAGE.form.id}`}
              title={t(CAREERS_PAGE.form.title)}
              loading="lazy"
              allow="geolocation; microphone; camera; fullscreen"
              className="block h-[720px] w-full border-0 lg:h-[680px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
