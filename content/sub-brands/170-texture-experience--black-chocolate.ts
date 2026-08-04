import type { SubBrand } from "@/lib/subBrands";

  // ── Texture Experience → Black Chocolate ──────────────────────────────────
const entry: SubBrand = {
    slug: "black-chocolate",
    parent: "texture-experience",
    name: "Black Chocolate",
    tagline: { en: "Care with Dark Chocolate Extract\nfor Dry & Damaged Hair.", id: "Perawatan dengan Ekstrak Dark Chocolate\nuntuk Rambut Kering & Rusak." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // The reference paints EVERY sub-brand hero in the same light beige with dark
    // wording. SubBrandHero renders its wording in white only, so the banner takes that
    // one shared beige darkened to the minimum that clears white text (10.8:1) while
    // still letting the taupe wordmark read against it (2.1:1) — a single neutral for
    // all five variants, exactly as the reference does. See the note to the brand owner.
    accentHex: "#423A31",
    bannerBg: "#423A31",
    heroWordmark: "/brand/texture-experience/black-chocolate/hero/wordmark.png",
    heroWordmarkAspect: "502 / 214",
    // One composed cluster (creambath tube + Choco Hazelnut hair perfume) → a single
    // layer. The PNG has transparent padding (the products fill ~66% × 76% of the
    // canvas), so the layer box is larger than the pair looks.
    heroLayers: [
      { src: "/brand/texture-experience/black-chocolate/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(43vw, 95vh, 1520px)", aspectRatio: "3040 / 3778", left: "39.5%", top: "-7.9%",
        mobile: { left: "-4.5%", top: "-13.9%", width: "95%" } },
    ],
    showcaseTitle: "/brand/texture-experience/black-chocolate/showcase/title.png",
    showcaseTitleAspect: "3870 / 3233",
    // The creambath line-up ships as a landscape card, so it takes the full-width slot.
    featured: { image: "/brand/texture-experience/black-chocolate/showcase/3.png", label: { en: "Creambath Black Chocolate — sachet, tube & jar", id: "Creambath Black Chocolate — sachet, tube & jar" } },
    featuredAspect: "4695 / 2222",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/texture-experience/black-chocolate/showcase/1.png", label: { en: "Shampoo Black Chocolate", id: "Shampoo Black Chocolate" } },
      { image: "/brand/texture-experience/black-chocolate/showcase/2.png", label: { en: "Conditioner Black Chocolate", id: "Conditioner Black Chocolate" } },
      { image: "/brand/texture-experience/black-chocolate/showcase/4.png", label: { en: "Hair Perfume Choco Hazelnut", id: "Hair Perfume Choco Hazelnut" } },
      { image: "/brand/texture-experience/black-chocolate/showcase/5.png", label: { en: "Smooth-Bright Body Essence Black Chocolate", id: "Smooth-Bright Body Essence Black Chocolate" } },
    ],
  };

export default entry;
