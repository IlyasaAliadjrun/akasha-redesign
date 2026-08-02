import type { Metadata } from "next";
import PageHero from "@/components/page/PageHero";
import { type Locale, type Localized } from "@/lib/locale/paths";
import { CONTACT_PAGE } from "@/content/pages/contact";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale as Locale;
  return {
    title: CONTACT_PAGE.meta.title[locale],
    description: CONTACT_PAGE.meta.description[locale],
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <>
      {/* HERO */}
      <PageHero
        desktop="/contact/hero/desktop.jpg"
        mobile="/contact/hero/mobile.jpg"
        title={t(CONTACT_PAGE.hero.title)}
        subtitle={t(CONTACT_PAGE.hero.subtitle)}
        tone="light"
        bg="#E5B91A"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">{t(CONTACT_PAGE.customerCare.label)}</div>
              <a href="tel:+628111934500" className="text-2xl font-extrabold tracking-tightish block">+62 811 1934 5000</a>
              <p className="text-ink/60 text-sm mt-2">{t(CONTACT_PAGE.customerCare.hours)}</p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">{t(CONTACT_PAGE.headOffice.label)}</div>
              <p className="text-lg">Jakarta, Indonesia</p>
              <p className="text-ink/60 text-sm mt-2">PT Akasha Wira International Tbk</p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">{t(CONTACT_PAGE.onlineShop.label)}</div>
              <a href="https://shop.akasha.co.id" target="_blank" rel="noreferrer" className="text-lg font-semibold">
                shop.akasha.co.id →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
