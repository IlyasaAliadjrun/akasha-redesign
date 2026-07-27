import type { SubBrand } from "@/lib/subBrands";

  // ── Salon Daily → Styling ─────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "styling",
    parent: "salon-daily",
    name: "Styling",
    tagline: `Penataan instan dengan kualitas professional salon`,
    ctaText: "Learn more",
    accentHex: "#3C3836",
    // Same warm neutral as the Treatment banner — SubBrandHero's wording is always
    // white, so the reference's cream cannot be used here. See the handover note.
    bannerBg: "#9A7F6A",
    heroWordmark: "/brand/salon-daily/styling/hero/wordmark.png",
    heroWordmarkAspect: "1386 / 294",
    // One finished 3-product cluster (keratin hair spray, styling gel, hair spray).
    heroLayers: [
      { src: "/brand/salon-daily/styling/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 50, width: "min(36vw, 56vh)", aspectRatio: "4252 / 4823", left: "48%", top: "15%",
        mobile: { left: "5%", top: "0%", width: "90%" } },
    ],
    showcaseTitle: "/brand/salon-daily/styling/showcase/title.png",
    showcaseTitleAspect: "4346 / 3205",
    featured: { image: "/brand/salon-daily/styling/showcase/5.png", label: "Salon Daily Professional Keratin Hair Spray Non Aerosol — cocok untuk traveling dan sehari-hari" },
    featuredAspect: "4658 / 2260",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/salon-daily/styling/showcase/1.png", label: "Salon Daily Hair Spray Strong Hold — cocok untuk hasil blow" },
      { image: "/brand/salon-daily/styling/showcase/2.png", label: "Salon Daily Hair Spray — cocok untuk formal styling" },
      { image: "/brand/salon-daily/styling/showcase/3.png", label: "Salon Daily Texturizing Mousse — cocok untuk rambut keriting" },
      { image: "/brand/salon-daily/styling/showcase/4.png", label: "Salon Daily Styling Gel — cocok untuk wet look" },
    ],
  };

export default entry;
