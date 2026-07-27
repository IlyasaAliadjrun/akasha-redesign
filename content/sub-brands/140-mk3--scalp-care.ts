import type { SubBrand } from "@/lib/subBrands";

  // ── MK3 → Scalp Care ──────────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "scalp-care",
    parent: "mk3",
    name: "Scalp Care",
    tagline: `Perawatan profesional untuk rambut\nrontok dan berketombe`,
    ctaText: "Learn more",
    accentHex: "#3E2120",
    // White-only hero wording → brown banner instead of the reference's light beige
    // (see the note handed to the brand owner).
    bannerBg: "#3E2120",
    heroWordmark: "/brand/mk3/scalp-care/hero/wordmark.png",
    heroWordmarkAspect: "1519 / 631",
    // One composed cluster (exfoliator + shampoo + both scalp serums) → a single layer.
    // It fills ~88% × 90% of its canvas, so the layer box is only slightly larger than
    // the visible cluster.
    heroLayers: [
      { src: "/brand/mk3/scalp-care/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 50,
        width: "min(32vw, 57vh)", aspectRatio: "2340 / 2860", left: "56.6%", top: "15.7%",
        mobile: { left: "14%", top: "0%", width: "74%" } },
    ],
    showcaseTitle: "/brand/mk3/scalp-care/showcase/title.png",
    showcaseTitleAspect: "4107 / 3321",
    // These four card graphics carry different amounts of baked-in vertical margin
    // (2302×2986 … 2302×3282). `cardAspect` takes the TALLEST of them so every card is
    // contained by width — all four then render at the same column width, with the
    // shorter ones simply centred in their cell.
    cardAspect: "1151 / 1641",
    cards: [
      { image: "/brand/mk3/scalp-care/showcase/1.png", label: "Scalp Exfoliator Dandruff & Hair Fall" },
      { image: "/brand/mk3/scalp-care/showcase/2.png", label: "Shampoo Dandruff & Hair Fall" },
      { image: "/brand/mk3/scalp-care/showcase/3.png", label: "Scalp Serum Hair Fall Treatment" },
      { image: "/brand/mk3/scalp-care/showcase/4.png", label: "Scalp Serum Dandruff Treatment" },
    ],
  };

export default entry;
