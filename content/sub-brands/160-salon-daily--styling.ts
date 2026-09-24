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
    heroWordmark: "/media/brands/salon-daily/lines/styling/hero/wordmark.png",
    heroWordmarkAspect: "1386 / 294",
    // One finished 3-product cluster (keratin hair spray, styling gel, hair spray).
    heroLayers: [
      { src: "/media/brands/salon-daily/lines/styling/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 50, width: "min(58vw, 78vh)", aspectRatio: "4252 / 4823", left: "53%", top: "10%",
        mobile: { left: "-20%", top: "-33%", width: "128%" } },
    ],
    showcaseTitle: { en: "/media/brands/salon-daily/lines/styling/showcase/title.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/title.id.png" },
    showcaseTitleAspect: "4346 / 3205",
    featured: { image: { en: "/media/brands/salon-daily/lines/styling/showcase/5.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/5.id.png" }, label: { en: "Salon Daily Professional Keratin Hair Spray Non Aerosol — perfect for travel and everyday use", id: "Salon Daily Professional Keratin Hair Spray Non Aerosol — cocok untuk traveling dan sehari-hari" } },
    featuredAspect: "4658 / 2260",
    cardAspect: "2302 / 2986",
    cards: [
      { image: { en: "/media/brands/salon-daily/lines/styling/showcase/1.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/1.id.png" }, label: { en: "Salon Daily Hair Spray Strong Hold — perfect for blow-dry results", id: "Salon Daily Hair Spray Strong Hold — cocok untuk hasil blow" } },
      { image: { en: "/media/brands/salon-daily/lines/styling/showcase/2.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/2.id.png" }, label: { en: "Salon Daily Hair Spray — perfect for formal styling", id: "Salon Daily Hair Spray — cocok untuk formal styling" } },
      { image: { en: "/media/brands/salon-daily/lines/styling/showcase/3.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/3.id.png" }, label: { en: "Salon Daily Texturizing Mousse — perfect for curly hair", id: "Salon Daily Texturizing Mousse — cocok untuk rambut keriting" } },
      { image: { en: "/media/brands/salon-daily/lines/styling/showcase/4.en.png", id: "/media/brands/salon-daily/lines/styling/showcase/4.id.png" }, label: { en: "Salon Daily Styling Gel — perfect for a wet look", id: "Salon Daily Styling Gel — cocok untuk wet look" } },
    ],
  };

export default entry;
