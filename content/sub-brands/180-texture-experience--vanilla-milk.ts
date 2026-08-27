import type { SubBrand } from "@/lib/subBrands";

  // ── Texture Experience → Vanilla Milk ─────────────────────────────────────
const entry: SubBrand = {
    slug: "vanilla-milk",
    parent: "texture-experience",
    name: "Vanilla Milk",
    tagline: { en: "Care with Vanilla Milk Fragrance\nfor Chemically Processed Hair.", id: "Perawatan dengan Aroma Vanilla Milk\nuntuk Rambut Terproses Kimia." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // The reference paints EVERY sub-brand hero in the same light beige with dark
    // wording. SubBrandHero renders its wording in white only, so the banner takes that
    // one shared beige darkened to the minimum that clears white text (10.8:1) while
    // still letting the taupe wordmark read against it (2.1:1) — a single neutral for
    // all five variants, exactly as the reference does. See the note to the brand owner.
    accentHex: "#423A31",
    bannerBg: "#423A31",
    heroWordmark: "/brand/texture-experience/vanilla-milk/hero/wordmark.png",
    heroWordmarkAspect: "502 / 214",
    // One composed cluster (creambath tube + Vanilla Souffle hair perfume) → a single
    // layer. This PNG has the most transparent padding of the five (the products fill
    // only ~48% × 64% of the canvas), so the layer box is far larger than the pair looks.
    heroLayers: [
      { src: "/brand/texture-experience/vanilla-milk/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(43vw, 98vh)", aspectRatio: "3967 / 4372", left: "56%", top: "3%",
        mobile: { left: "-5%", top: "-29%", width: "128%" } },
    ],
    showcaseTitle: "/brand/texture-experience/vanilla-milk/showcase/title.png",
    showcaseTitleAspect: "3605 / 3233",
    // The creambath line-up ships as a landscape card, so it takes the full-width slot.
    featured: { image: "/brand/texture-experience/vanilla-milk/showcase/3.png", label: { en: "Creambath Vanilla Milk — sachet, tube & jar", id: "Creambath Vanilla Milk — sachet, tube & jar" } },
    featuredAspect: "4695 / 2222",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/texture-experience/vanilla-milk/showcase/1.png", label: { en: "Shampoo Vanilla Milk", id: "Shampoo Vanilla Milk" } },
      { image: "/brand/texture-experience/vanilla-milk/showcase/2.png", label: { en: "Conditioner Vanilla Milk", id: "Conditioner Vanilla Milk" } },
      { image: "/brand/texture-experience/vanilla-milk/showcase/4.png", label: { en: "Hair Perfume Vanilla Souffle", id: "Hair Perfume Vanilla Souffle" } },
      { image: "/brand/texture-experience/vanilla-milk/showcase/5.png", label: { en: "Smooth-Bright Body Essence Vanilla Milk", id: "Smooth-Bright Body Essence Vanilla Milk" } },
    ],
  };

export default entry;
