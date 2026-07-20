import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrand } from "@/lib/brands";
import { SUB_BRANDS, getSubBrand } from "@/lib/subBrands";
import SubBrandTemplate from "@/components/subbrand/SubBrandTemplate";

// Sub-brand (product-line) pages, e.g. /brands/hair-energy/creambath. Statically
// generated from SUB_BRANDS. Not linked in the navbar — reached from the parent
// brand's showcase (ShowcaseVariant.href).
export function generateStaticParams() {
  return SUB_BRANDS.map((s) => ({ slug: s.parent, line: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; line: string };
}): Metadata {
  const sub = getSubBrand(params.slug, params.line);
  const parent = getBrand(params.slug);
  if (!sub || !parent) return {};
  return {
    title: `${sub.name} — ${parent.name} — Akasha Wira International`,
    description: sub.tagline,
  };
}

export default function Page({
  params,
}: {
  params: { slug: string; line: string };
}) {
  const sub = getSubBrand(params.slug, params.line);
  // Require a real sub-brand whose parent is a real (non-umbrella) brand.
  if (!sub || !getBrand(sub.parent)) notFound();
  return <SubBrandTemplate sub={sub} />;
}
