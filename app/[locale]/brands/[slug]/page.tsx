import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrand, isUmbrella, pageBrands } from "@/lib/brands";
import { locales, type Locale } from "@/lib/locale/paths";
import { resolveBrand } from "@/lib/locale/resolve";
import { fitDescription, pageMetadata, shareImage } from "@/lib/seo";
import { BRAND } from "@/dictionaries/brand";
import BrandPage from "@/components/brand/BrandPage";
import SubBrandPage from "@/components/brand/SubBrandPage";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageBrands().map((b) => ({ locale, slug: b.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const brand = getBrand(params.slug);
  if (!brand || isUmbrella(brand)) return {};
  const locale = params.locale as Locale;
  const resolved = resolveBrand(brand, locale);
  return pageMetadata({
    locale,
    path: `/brands/${brand.slug}`,
    title: `${resolved.name} — Akasha Wira International`,
    description: fitDescription(
      resolved.description,
      BRAND.seo.brandDescription[locale].replace("{brand}", resolved.name),
    ),
    image: shareImage(`/media/brands/${brand.slug}/hero/og.jpg`),
  });
}

export default function Page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const brand = getBrand(params.slug);
  // Umbrella brands (Makarizo, Makarizo Professional) only group their sub-brands.
  // They get no page of their own and must not redirect to a child — a 404 keeps
  // the umbrella out of search results and out of the URL space entirely.
  if (!brand || isUmbrella(brand)) notFound();

  const resolved = resolveBrand(brand, params.locale as Locale);
  return resolved.parent ? (
    <SubBrandPage brand={resolved} />
  ) : (
    <BrandPage brand={resolved} />
  );
}
