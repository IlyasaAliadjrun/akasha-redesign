import type { SubBrand } from "@/lib/subBrands";

  // ── Concept Ultimax → Bleaching Powder ────────────────────────────────────
const entry: SubBrand = {
    slug: "bleaching-powder",
    parent: "concept-ultimax",
    name: "Bleaching Powder",
    tagline: { en: `A fast, safe bleaching solution that makes\nhair better able to absorb new color pigments.`, id: `Solusi bleaching cepat dan aman yang membuat\nrambut lebih mudah menyerap pigment warna baru.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3E2120",
    // See color-tube: SubBrandHero's wording is always white, so the banner uses the
    // palette's deep brown (rgb(62,33,32)) rather than the reference's pale sage.
    bannerBg: "#E6EAE4",
    theme: "accent-light",
    heroWordmark: "/brand/concept-ultimax/bleaching-powder/hero/wordmark.png",
    heroWordmarkAspect: "2339 / 473",
    heroLayers: [
      { src: "/brand/concept-ultimax/bleaching-powder/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 44, width: "min(34vw, 58vh)", aspectRatio: "2639 / 3297", left: "62%", top: "16%",
        mobile: { left: "1%", top: "-20%", width: "95%" } },
    ],
    // NOTE: no title graphic was delivered for this line — bleaching-powder/showcase/
    // contains a single wide banner. The reference sheet's "Bleaching Powder
    // Profesional Vegan" block (jar + three check points) and the shade cards have no
    // matching asset, so `showcaseTitle` stays unset (the component's own placeholder
    // marks the gap) and the grid is empty. Reported to the design team.
    showcaseTitle: "/brand/concept-ultimax/bleaching-powder/showcase/title.png",
    showcaseTitleAspect: "4661 / 2442",
    featured: { image: "/brand/concept-ultimax/bleaching-powder/showcase/1.png", label: { en: "Bleaching Powder — a fast, safe bleaching solution for hair", id: "Bleaching Powder — solusi bleaching cepat dan aman untuk rambut" } },
    featuredAspect: "5365 / 2434",
    cards: [],
  };

export default entry;
