import type { SubBrand } from "@/lib/subBrands";

  // ── Concept Ultimax → Cream Developer ─────────────────────────────────────
const entry: SubBrand = {
    slug: "cream-developer",
    parent: "concept-ultimax",
    name: "Cream Developer",
    tagline: { en: `Activator cream with Aloe Vera\nfor perfect color oxidation.`, id: `Krim aktivator dengan Aloe Vera\nuntuk mengoksidasi warna secara sempurna.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#E34686",
    // See color-tube: SubBrandHero's wording is always white, so the banner uses the
    // palette's deep brown (rgb(62,33,32)) rather than the reference's pale sage.
    bannerBg: "#3E2120",
    heroWordmark: "/brand/concept-ultimax/cream-developer/hero/wordmark.png",
    heroWordmarkAspect: "2339 / 473",
    // The delivered hero PNG is an almost-square canvas with generous margin — the
    // two bottles fill only 50 % × 69 % of it — hence the wide layer box.
    heroLayers: [
      { src: "/brand/concept-ultimax/cream-developer/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 44, width: "min(38vw, 62vh)", aspectRatio: "3945 / 4041", left: "50%", top: "18%",
        mobile: { left: "0%", top: "0%", width: "100%" } },
    ],
    showcaseTitle: "/brand/concept-ultimax/cream-developer/showcase/title.png",
    showcaseTitleAspect: "4423 / 3479",
    // The Activator banner is the one wide card in the set, so it takes the featured
    // slot. (SubBrandShowcase renders `featured` above the grid; the reference sheet
    // shows it below — the section anatomy is fixed, so the position follows the
    // component.)
    featured: { image: "/brand/concept-ultimax/cream-developer/showcase/5.png", label: { en: "Activator — activator cream for maximum color absorption", id: "Activator — krim aktivator untuk penyerapan warna yang lebih maksimal" } },
    featuredAspect: "4845 / 2436",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/concept-ultimax/cream-developer/showcase/1.png", label: { en: "Cream Developer 10 Vol", id: "Cream Developer 10 Vol" } },
      { image: "/brand/concept-ultimax/cream-developer/showcase/2.png", label: { en: "Cream Developer 20 Vol", id: "Cream Developer 20 Vol" } },
      { image: "/brand/concept-ultimax/cream-developer/showcase/3.png", label: { en: "Cream Developer 30 Vol", id: "Cream Developer 30 Vol" } },
      { image: "/brand/concept-ultimax/cream-developer/showcase/4.png", label: { en: "Cream Developer 40 Vol", id: "Cream Developer 40 Vol" } },
    ],
  };

export default entry;
