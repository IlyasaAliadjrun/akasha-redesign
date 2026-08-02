import { getBrand } from "@/lib/brands";
import type { Locale } from "@/lib/locale/paths";
import { resolveBrand, type ResolvedSubBrand } from "@/lib/locale/resolve";
import SubBrandHero from "./SubBrandHero";
import SubBrandShowcase from "./SubBrandShowcase";
import CrossSell from "@/components/brand/CrossSell";
import BrandCTA from "@/components/brand/BrandCTA";

// Page template for a sub-brand (product line): banner → showcase → cross-sell → CTA.
// Cross-sell and CTA use the PARENT brand (e.g. "Rasakan Hair Energy sekarang").
export default function SubBrandTemplate({
  sub,
  locale,
}: {
  sub: ResolvedSubBrand;
  locale: Locale;
}) {
  const parentBrand = getBrand(sub.parent);
  const parent = parentBrand ? resolveBrand(parentBrand, locale) : undefined;
  return (
    <>
      <SubBrandHero sub={sub} />
      <SubBrandShowcase sub={sub} />
      {parent && <CrossSell current={parent} />}
      {parent && <BrandCTA brand={parent} />}
    </>
  );
}
