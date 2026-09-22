import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/page/PageHero";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";
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
  const href = (p: string) => localizeHref(locale, p);
  const t = <T,>(v: Localized<T>) => v[locale];
  const office = CONTACT_PAGE.headOffice;
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
                {t(CONTACT_PAGE.customerCare.label)}
              </div>
              <a
                href="tel:+6281119345000"
                className="text-2xl font-extrabold tracking-tightish block"
              >
                +62 811 1934 5000
              </a>
              <p className="text-ink/60 text-sm mt-2">{t(CONTACT_PAGE.customerCare.hours)}</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
                {t(CONTACT_PAGE.email.label)}
              </div>
              <a
                href="mailto:info@akashainternational.com"
                className="text-lg font-semibold break-words"
              >
                info@akashainternational.com
              </a>
              <p className="text-ink/60 text-sm mt-2">{t(CONTACT_PAGE.email.note)}</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
                {t(office.label)}
              </div>
              <p className="text-lg font-semibold">{office.company}</p>
              <p className="text-ink/60 text-sm mt-2 leading-relaxed">
                {office.street}
                <br />
                {t(office.district)}
                <br />
                {office.city}
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
                {t(CONTACT_PAGE.onlineShop.label)}
              </div>
              <a
                href="https://shop.akasha.co.id"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold"
              >
                shop.akasha.co.id →
              </a>
              <p className="text-ink/60 text-sm mt-2">{t(CONTACT_PAGE.onlineShop.note)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              {t(CONTACT_PAGE.investorRelations.label)}
            </div>
            <p className="text-xl md:text-2xl leading-[1.35] font-medium text-ink/75">
              {t(CONTACT_PAGE.investorRelations.body)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={href("/investor")}
                className="text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
              >
                {t(CONTACT_PAGE.investorRelations.investorLink)}
              </Link>
              <Link
                href={href("/governance")}
                className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition-all duration-500"
              >
                {t(CONTACT_PAGE.investorRelations.governanceLink)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
