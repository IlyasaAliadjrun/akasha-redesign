import type { SubBrand } from "@/lib/subBrands";

  // ── Salon Daily → Styling ─────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "styling",
    parent: "salon-daily",
    name: "Styling",
    tagline: { en: "Instant styling with professional salon quality", id: "Penataan instan dengan kualitas professional salon" },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3C3836",
    // Same warm neutral as the Treatment banner — SubBrandHero's wording is always
    // white, so the reference's cream cannot be used here. See the handover note.
    bannerBg: "#9A7F6A",
    heroWordmark: "/brand/salon-daily/styling/hero/wordmark.png",
    heroWordmarkAspect: "1386 / 294",
    // One finished 3-product cluster (keratin hair spray, styling gel, hair spray).
    heroLayers: [
      { src: "/brand/salon-daily/styling/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 50, width: "min(58vw, 78vh)", aspectRatio: "4252 / 4823", left: "53%", top: "10%",
        mobile: { left: "-80%", top: "-93%", width: "250%" } },
    ],
    showcaseTitle: "/brand/salon-daily/styling/showcase/title.png",
    showcaseTitleAspect: "4346 / 3205",
    featured: { image: "/brand/salon-daily/styling/showcase/5.png", label: { en: "Salon Daily Professional Keratin Hair Spray Non Aerosol — perfect for travel and everyday use", id: "Salon Daily Professional Keratin Hair Spray Non Aerosol — cocok untuk traveling dan sehari-hari" } },
    featuredAspect: "4658 / 2260",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/salon-daily/styling/showcase/1.png", label: { en: "Salon Daily Hair Spray Strong Hold — perfect for blow-dry results", id: "Salon Daily Hair Spray Strong Hold — cocok untuk hasil blow" } },
      { image: "/brand/salon-daily/styling/showcase/2.png", label: { en: "Salon Daily Hair Spray — perfect for formal styling", id: "Salon Daily Hair Spray — cocok untuk formal styling" } },
      { image: "/brand/salon-daily/styling/showcase/3.png", label: { en: "Salon Daily Texturizing Mousse — perfect for curly hair", id: "Salon Daily Texturizing Mousse — cocok untuk rambut keriting" } },
      { image: "/brand/salon-daily/styling/showcase/4.png", label: { en: "Salon Daily Styling Gel — perfect for a wet look", id: "Salon Daily Styling Gel — cocok untuk wet look" } },
    ],
  };

export default entry;
