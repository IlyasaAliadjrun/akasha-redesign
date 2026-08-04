import type { SubBrand } from "@/lib/subBrands";

  // ── Texture Experience → Strawberry Yoghurt ───────────────────────────────
const entry: SubBrand = {
    slug: "strawberry-yoghurt",
    parent: "texture-experience",
    name: "Strawberry Yoghurt",
    tagline: { en: "Care with a Fresh and Sweet Fragrance\nfor Smooth & Shiny Hair", id: "Perawatan dengan Wangi Segar dan Manis\nuntuk Rambut Halus & Berkilau" },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // The reference paints EVERY sub-brand hero in the same light beige with dark
    // wording. SubBrandHero renders its wording in white only, so the banner takes that
    // one shared beige darkened to the minimum that clears white text (10.8:1) while
    // still letting the taupe wordmark read against it (2.1:1) — a single neutral for
    // all five variants, exactly as the reference does. See the note to the brand owner.
    accentHex: "#423A31",
    bannerBg: "#423A31",
    heroWordmark: "/brand/texture-experience/strawberry-yoghurt/hero/wordmark.png",
    heroWordmarkAspect: "502 / 214",
    // The folder ships ONE composed cluster (creambath tube + Berry Smoothie hair
    // perfume), so the hero is a single layer. Width is min(vw, vh) so the cluster
    // scales with the shorter axis and never outgrows a short window; the `mobile`
    // values are % of the SubBrandHero mobile cluster box.
    // The PNG carries heavy transparent padding (the products fill ~56% × 75% of the
    // canvas), so the layer box is much larger than the cluster looks.
    heroLayers: [
      { src: "/brand/texture-experience/strawberry-yoghurt/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(47vw, 96vh, 1722px)", aspectRatio: "3443 / 3941", left: "36.9%", top: "-5.5%",
        mobile: { left: "-8.5%", top: "-11%", width: "105%" } },
    ],
    showcaseTitle: "/brand/texture-experience/strawberry-yoghurt/showcase/title.png",
    showcaseTitleAspect: "4169 / 3233",
    // The creambath line-up ships as a landscape card, so it takes the full-width slot.
    featured: { image: "/brand/texture-experience/strawberry-yoghurt/showcase/3.png", label: { en: "Creambath Strawberry Yoghurt — sachet, tube & jar", id: "Creambath Strawberry Yoghurt — sachet, tube & jar" } },
    featuredAspect: "4695 / 2222",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/texture-experience/strawberry-yoghurt/showcase/1.png", label: { en: "Shampoo Strawberry Yoghurt", id: "Shampoo Strawberry Yoghurt" } },
      { image: "/brand/texture-experience/strawberry-yoghurt/showcase/2.png", label: { en: "Conditioner Strawberry Yoghurt", id: "Conditioner Strawberry Yoghurt" } },
      { image: "/brand/texture-experience/strawberry-yoghurt/showcase/4.png", label: { en: "Hair Perfume Berry Smoothie", id: "Hair Perfume Berry Smoothie" } },
      { image: "/brand/texture-experience/strawberry-yoghurt/showcase/5.png", label: { en: "Smooth-Bright Body Essence Strawberry Yoghurt", id: "Smooth-Bright Body Essence Strawberry Yoghurt" } },
    ],
  };

export default entry;
