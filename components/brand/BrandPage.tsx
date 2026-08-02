import type { ResolvedBrand } from "@/lib/locale/resolve";
import BrandHero from "@/components/brand/BrandHero";
import BrandIntro from "@/components/brand/BrandIntro";
import BrandAbout from "@/components/brand/BrandAbout";
import BrandShowcase from "@/components/brand/BrandShowcase";
// Temporarily disabled across all brands:
// import ScrollFeatureReveal from "@/components/brand/ScrollFeatureReveal";
import ProductLineup from "@/components/brand/ProductLineup";
// import WhyThisProduct from "@/components/brand/WhyThisProduct";
import CrossSell from "@/components/brand/CrossSell";
import BrandCTA from "@/components/brand/BrandCTA";

// Page template for a top-level brand. Sub-brands render through SubBrandPage.
export default function BrandPage({ brand }: { brand: ResolvedBrand }) {
  return (
    <>
      <BrandHero brand={brand} />
      <ProductLineup brand={brand} />
      <BrandIntro brand={brand} />
      <BrandAbout brand={brand} />
      <BrandShowcase brand={brand} />
      {/* Temporarily commented out for all brands — re-enable when ready.
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
      */}
      <CrossSell current={brand} />
      <BrandCTA brand={brand} />
    </>
  );
}
