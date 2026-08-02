import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrand } from "@/lib/brands";
import { SUB_BRANDS, getSubBrand } from "@/lib/subBrands";
import { locales, type Locale } from "@/lib/locale/paths";
import { resolveSubBrand } from "@/lib/locale/resolve";
import SubBrandTemplate from "@/components/subbrand/SubBrandTemplate";

// Sub-brand (product-line) pages, e.g. /brands/hair-energy/creambath. Statically
// generated from SUB_BRANDS. Not linked in the navbar — reached from the parent
// brand's showcase (ShowcaseVariant.href).
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SUB_BRANDS.map((s) => ({ locale, slug: s.parent, line: s.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string; line: string };
}): Metadata {
  const sub = getSubBrand(params.slug, params.line);
  const parent = getBrand(params.slug);
  if (!sub || !parent) return {};
  const resolved = resolveSubBrand(sub, params.locale as Locale);
  return {
    title: `${resolved.name} — ${parent.name} — Akasha Wira International`,
    description: resolved.tagline,
  };
}

export default function Page({
  params,
}: {
  params: { locale: string; slug: string; line: string };
}) {
  const sub = getSubBrand(params.slug, params.line);
  // Require a real sub-brand whose parent is a real (non-umbrella) brand.
  if (!sub || !getBrand(sub.parent)) notFound();

  const resolved = resolveSubBrand(sub, params.locale as Locale);
  return <SubBrandTemplate sub={resolved} locale={params.locale as Locale} />;
}
