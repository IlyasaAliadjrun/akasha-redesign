import type { SubBrand } from "@/lib/subBrands";

  // ── Texture Experience → Mint Sorbet ──────────────────────────────────────
const entry: SubBrand = {
    slug: "mint-sorbet",
    parent: "texture-experience",
    name: "Mint Sorbet",
    tagline: { en: "Care with a Refreshing Mint Sorbet\nSensation for Dandruff-Prone Scalp.", id: "Perawatan dengan Sensasi Mint Sorbet\nSegar untuk Kulit Kepala Berketombe." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // The reference paints EVERY sub-brand hero in the same light beige with dark
    // wording. SubBrandHero renders its wording in white only, so the banner takes that
    // one shared beige darkened to the minimum that clears white text (10.8:1) while
    // still letting the taupe wordmark read against it (2.1:1) — a single neutral for
    // all five variants, exactly as the reference does. See the note to the brand owner.
    accentHex: "#423A31",
    bannerBg: "#423A31",
    heroWordmark: "/brand/texture-experience/mint-sorbet/hero/wordmark.png",
    heroWordmarkAspect: "502 / 214",
    // One composed cluster (Mint Mocktail hair perfume + creambath tube) → a single
    // layer. The PNG has transparent padding (the products fill ~62% × 79% of the
    // canvas), so the layer box is larger than the pair looks.
    heroLayers: [
      { src: "/brand/texture-experience/mint-sorbet/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(43vw, 83vh)", aspectRatio: "3772 / 3748", left: "52%", top: "12%",
        mobile: { left: "-17%", top: "-15%", width: "115%" } },
    ],
    showcaseTitle: "/brand/texture-experience/mint-sorbet/showcase/title.png",
    showcaseTitleAspect: "3332 / 3233",
    // This variant ships no landscape creambath card — all four SKU are portrait cards,
    // so the grid carries them and there is no full-width featured slot (as in the
    // reference).
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/texture-experience/mint-sorbet/showcase/1.png", label: { en: "Shampoo Mint Sorbet", id: "Shampoo Mint Sorbet" } },
      { image: "/brand/texture-experience/mint-sorbet/showcase/2.png", label: { en: "Conditioner Mint Sorbet", id: "Conditioner Mint Sorbet" } },
      { image: "/brand/texture-experience/mint-sorbet/showcase/3.png", label: { en: "Creambath Mint Sorbet", id: "Creambath Mint Sorbet" } },
      { image: "/brand/texture-experience/mint-sorbet/showcase/4.png", label: { en: "Hair Perfume Mint Mocktail", id: "Hair Perfume Mint Mocktail" } },
    ],
  };

export default entry;
