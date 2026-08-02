import type { SubBrand } from "@/lib/subBrands";

  // ── Texture Experience → Green Tea Butter ─────────────────────────────────
const entry: SubBrand = {
    slug: "green-tea-butter",
    parent: "texture-experience",
    name: "Green Tea Butter",
    tagline: { en: "Care with Green Tea Fragrance and\nL-Theanine Extract for Hair Loss", id: "Perawatan dengan Wangi Teh Hijau dan\nEkstrak L-Theanine untuk Rambut Rontok" },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // The reference paints EVERY sub-brand hero in the same light beige with dark
    // wording. SubBrandHero renders its wording in white only, so the banner takes that
    // one shared beige darkened to the minimum that clears white text (10.8:1) while
    // still letting the taupe wordmark read against it (2.1:1) — a single neutral for
    // all five variants, exactly as the reference does. See the note to the brand owner.
    accentHex: "#423A31",
    bannerBg: "#423A31",
    heroWordmark: "/brand/texture-experience/green-tea-butter/hero/wordmark.png",
    heroWordmarkAspect: "502 / 214",
    // One composed cluster (creambath tube + Tea Blossom hair perfume) → a single
    // layer. The PNG has heavy transparent padding (the products fill ~56% × 77% of the
    // canvas), so the layer box is much larger than the pair looks.
    heroLayers: [
      { src: "/brand/texture-experience/green-tea-butter/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(46vw, 94vh)", aspectRatio: "3463 / 3991", left: "38.7%", top: "-4.3%",
        mobile: { left: "-3.6%", top: "-9.5%", width: "101%" } },
    ],
    showcaseTitle: "/brand/texture-experience/green-tea-butter/showcase/title.png",
    showcaseTitleAspect: "4134 / 3233",
    // This variant ships no landscape creambath card — all four SKU are portrait cards,
    // so the grid carries them and there is no full-width featured slot (as in the
    // reference).
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/texture-experience/green-tea-butter/showcase/1.png", label: { en: "Shampoo Green Tea Butter", id: "Shampoo Green Tea Butter" } },
      { image: "/brand/texture-experience/green-tea-butter/showcase/2.png", label: { en: "Conditioner Green Tea Butter", id: "Conditioner Green Tea Butter" } },
      { image: "/brand/texture-experience/green-tea-butter/showcase/3.png", label: { en: "Creambath Green Tea Butter", id: "Creambath Green Tea Butter" } },
      { image: "/brand/texture-experience/green-tea-butter/showcase/4.png", label: { en: "Hair Perfume Tea Blossom", id: "Hair Perfume Tea Blossom" } },
    ],
  };

export default entry;
