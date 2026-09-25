import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import DivisionCards from "@/components/home/DivisionCards";
import BentoGrid from "@/components/home/BentoGrid";
// import SensoryStrip from "@/components/home/SensoryStrip";
import CompanyStatement from "@/components/home/CompanyStatement";
import type { Locale } from "@/lib/locale/paths";
import { home } from "@/dictionaries/home";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  return pageMetadata({
    locale,
    path: "",
    title: home.meta.title[locale],
    description: home.meta.description[locale],
  });
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return (
    <>
      <script
        type="application/ld+json"
        // "<" is escaped so no string in the data can close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(locale)).replace(/</g, "\\u003c"),
        }}
      />
      <HeroCarousel />
      <DivisionCards />
      <BentoGrid />
      {/* <SensoryStrip /> */}
      <CompanyStatement />
    </>
  );
}
