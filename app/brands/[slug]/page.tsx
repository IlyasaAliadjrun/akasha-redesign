import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRANDS, getBrand } from "@/lib/brands";
import BrandHero from "@/components/brand/BrandHero";
import BrandIntro from "@/components/brand/BrandIntro";
import ScrollFeatureReveal from "@/components/brand/ScrollFeatureReveal";
import ProductLineup from "@/components/brand/ProductLineup";
import WhyThisProduct from "@/components/brand/WhyThisProduct";
import LifestyleGallery from "@/components/brand/LifestyleGallery";
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

// Lifestyle gallery images per brand (could move into brands.ts if needed)
const lifestyleMap: Record<string, string[]> = {
  "nestle-pure-life": [
    "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
  ],
  "hair-energy": [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop",
  ],
  wonhae: [
    "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=1200&auto=format&fit=crop",
  ],
  "make-it": [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200&auto=format&fit=crop",
  ],
  "makarizo-professional": [
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
  ],
  omoide: [
    "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop",
  ],
  floaty: [
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571101443253-db82d6e64f42?q=80&w=1200&auto=format&fit=crop",
  ],
  vica: [
    "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550505095-81378a674395?q=80&w=1200&auto=format&fit=crop",
  ],
  fitmeup: [
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1200&auto=format&fit=crop",
  ],
};

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);
  if (!brand) notFound();

  const lifestyle = lifestyleMap[brand.slug] ?? [];

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
      {lifestyle.length > 0 && <LifestyleGallery images={lifestyle} />}
      <CrossSell current={brand} />
      <BrandCTA brand={brand} />
    </>
  );
}
