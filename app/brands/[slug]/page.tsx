import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRANDS, getBrand } from "@/lib/brands";
import BrandHero from "@/components/brand/BrandHero";
import BrandIntro from "@/components/brand/BrandIntro";
import ScrollFeatureReveal from "@/components/brand/ScrollFeatureReveal";
import ProductLineup from "@/components/brand/ProductLineup";
import WhyThisProduct from "@/components/brand/WhyThisProduct";
import CrossSell from "@/components/brand/CrossSell";
import BrandCTA from "@/components/brand/BrandCTA";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const brand = getBrand(params.slug);
  if (!brand) return {};
  return {
    title: `${brand.name} — Akasha Wira International`,
    description: brand.description,
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);
  if (!brand) notFound();

  return (
    <>
      <BrandHero brand={brand} />
      <ProductLineup brand={brand} />
      <BrandIntro brand={brand} />
      {brand.features && brand.features.length > 0 && (
        <div id="story">
          <ScrollFeatureReveal
            features={brand.features}
            brandName={brand.name}
            accent={brand.accentHex}
          />
        </div>
      )}
      <WhyThisProduct brand={brand} />
      <CrossSell current={brand} />
      <BrandCTA brand={brand} />
    </>
  );
}
