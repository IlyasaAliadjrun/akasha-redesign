import type { Brand } from "@/lib/brands";
import BrandHero from "@/components/brand/BrandHero";
import BrandIntro from "@/components/brand/BrandIntro";
import BrandAbout from "@/components/brand/BrandAbout";
import BrandShowcase from "@/components/brand/BrandShowcase";
import ProductLineup from "@/components/brand/ProductLineup";
import CrossSell from "@/components/brand/CrossSell";
import BrandCTA from "@/components/brand/BrandCTA";

// Page template for a sub-brand (a brand with a `parent`), e.g. Hair Energy under
// Makarizo. Deliberately the same section order as BrandPage — for now a sub-brand
// differs only in its content, which all comes from lib/brands.ts. This file exists
// as the seam: sub-brand-specific sections diverge here without touching top-level
// brand pages. Hair Energy is the only sub-brand with a full content set so far;
// the rest render the sections their data supports and skip the others.
export default function SubBrandPage({ brand }: { brand: Brand }) {
  return (
    <>
      <BrandHero brand={brand} />
      <ProductLineup brand={brand} />
      <BrandIntro brand={brand} />
      <BrandAbout brand={brand} />
      <BrandShowcase brand={brand} />
      <CrossSell current={brand} />
      <BrandCTA brand={brand} />
    </>
  );
}
