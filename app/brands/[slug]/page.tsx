import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrand, isUmbrella, pageBrands } from "@/lib/brands";
import BrandPage from "@/components/brand/BrandPage";
import SubBrandPage from "@/components/brand/SubBrandPage";

export function generateStaticParams() {
  return pageBrands().map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const brand = getBrand(params.slug);
  if (!brand || isUmbrella(brand)) return {};
  return {
    title: `${brand.name} — Akasha Wira International`,
    description: brand.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);
  // Umbrella brands (Makarizo, Makarizo Professional) only group their sub-brands.
  // They get no page of their own and must not redirect to a child — a 404 keeps
  // the umbrella out of search results and out of the URL space entirely.
  if (!brand || isUmbrella(brand)) notFound();

  return brand.parent ? <SubBrandPage brand={brand} /> : <BrandPage brand={brand} />;
}
