import type { SubBrand } from "@/lib/subBrands";

  // ── Concept Ultimax → Color Tube ──────────────────────────────────────────
const entry: SubBrand = {
    slug: "color-tube",
    parent: "concept-ultimax",
    name: "Color Tube",
    tagline: { en: `Permanent hair color.\nVegan Vibrant.`, id: `Pewarna rambut permanen\nVegan Vibrant.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#3E2120",
    // SubBrandHero always sets its wording in white, so the pale sage the reference
    // uses cannot carry it. This is the darkest colour in the Concept Ultimax
    // palette — the deep brown every headline in the artwork is set in
    // (rgb(62,33,32)) — which keeps the white wording and the pink wordmark legible.
    bannerBg: "#E6EAE4",
    theme: "accent-light",
    heroWordmark: "/brand/concept-ultimax/color-tube/hero/wordmark.png",
    heroWordmarkAspect: "2339 / 473",
    // One delivered hero asset: the Color Tube and its Activator in a single PNG.
    // The artwork fills 66 % × 76 % of its canvas, so the layer box is sized well
    // past the visible product to land it at the reference's optical size.
    heroLayers: [
      { src: "/brand/concept-ultimax/color-tube/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 44, width: "min(32vw, 54vh)", aspectRatio: "2658 / 3762", left: "62%", top: "16%",
        mobile: { left: "5%", top: "-25%", width: "90%" } },
    ],
    showcaseTitle: "/brand/concept-ultimax/color-tube/showcase/title.png",
    showcaseTitleAspect: "4103 / 4454",
    // Card art ratios differ by <0.05 %, so one box ratio holds all twelve.
    cardAspect: "2302 / 3075",
    // Reference order is alphabetical by shade family, which is the reverse of the
    // delivered file order.
    cards: [
      { image: "/brand/concept-ultimax/color-tube/showcase/12.png", label: { en: "Hair Color Ash (1)", id: "Hair Color Ash (1)" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/11.png", label: { en: "Hair Color Ash (2)", id: "Hair Color Ash (2)" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/10.png", label: { en: "Hair Color Ash (3)", id: "Hair Color Ash (3)" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/9.png", label: { en: "Hair Color Contrast", id: "Hair Color Contrast" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/8.png", label: { en: "Hair Color Copper", id: "Hair Color Copper" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/7.png", label: { en: "Hair Color Corrector", id: "Hair Color Corrector" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/6.png", label: { en: "Hair Color Extralift", id: "Hair Color Extralift" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/5.png", label: { en: "Hair Color Gold", id: "Hair Color Gold" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/4.png", label: { en: "Hair Color Mahogany", id: "Hair Color Mahogany" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/3.png", label: { en: "Hair Color Natural", id: "Hair Color Natural" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/2.png", label: { en: "Hair Color Red", id: "Hair Color Red" } },
      { image: "/brand/concept-ultimax/color-tube/showcase/1.png", label: { en: "Hair Color Violet", id: "Hair Color Violet" } },
    ],
  };

export default entry;
