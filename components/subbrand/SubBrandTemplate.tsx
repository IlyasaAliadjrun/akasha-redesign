import { getBrand } from "@/lib/brands";
import type { SubBrand } from "@/lib/subBrands";
import SubBrandHero from "./SubBrandHero";
import SubBrandShowcase from "./SubBrandShowcase";
import CrossSell from "@/components/brand/CrossSell";
import BrandCTA from "@/components/brand/BrandCTA";

// Page template for a sub-brand (product line): banner → showcase → cross-sell → CTA.
// Cross-sell and CTA use the PARENT brand (e.g. "Rasakan Hair Energy sekarang").
export default function SubBrandTemplate({ sub }: { sub: SubBrand }) {
  const parent = getBrand(sub.parent);
  return (
    <>
      <SubBrandHero sub={sub} />
      <SubBrandShowcase sub={sub} />
      {parent && <CrossSell current={parent} />}
      {parent && <BrandCTA brand={parent} />}
    </>
  );
}
