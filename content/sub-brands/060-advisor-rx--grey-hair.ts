import type { SubBrand } from "@/lib/subBrands";

  // ── Advisor RX → Grey Hair Expert Care ────────────────────────────────────
const entry: SubBrand = {
    slug: "grey-hair",
    parent: "advisor-rx",
    name: "Grey Hair Expert Care",
    // Copy taken verbatim from the line's own showcase banner art.
    tagline: { en: "Helps reduce grey hair,\nand restores natural hair color.", id: "Membantu mengurangi rambut uban,\ndan menghitamkan rambut." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // Grey Hair rose — sampled from the line's banner and card art (rgb(247,162,154)).
    accentHex: "#F7A29A",
    bannerBg: "#F7A29A",
    // No wordmark was delivered inside grey-hair/hero/, so the hero carries the
    // parent brand's own Advisor RX lockup (still inside this brand's asset folder).
    heroWordmark: "/brand/advisor-rx/hero/wordmark.png",
    heroWordmarkAspect: "1887 / 486",
    // The three regimen steps, left→right in usage order. Each canvas carries a
    // different amount of transparent margin (the bottle fills 74–82 % of its canvas
    // height), so the widths differ per asset to land them at their true relative
    // sizes and on a shared baseline. Mobile placement is given for EVERY layer
    // because the component's two built-in defaults only cover a two-product hero.
    heroLayers: [
      // 1 — Shampoo (250 mL), tallest, enters from the left.
      { src: "/brand/advisor-rx/grey-hair/hero/1.png", enterFrom: "left", enterDelay: 0, depth: 36, width: "min(31vw, 54vh, 1517px)", aspectRatio: "1 / 1", left: "51%", top: "29%",
        mobile: { left: "-14%", top: "20%", width: "65%" } },
      // 2 — Boosting Mask (100 mL).
      { src: "/brand/advisor-rx/grey-hair/hero/2.png", enterFrom: "top", enterDelay: 0.2, depth: 54, width: "min(21vw, 37vh, 1521px)", aspectRatio: "1 / 1", left: "69.5%", top: "47%",
        mobile: { left: "33%", top: "41%", width: "44%" } },
      // 3 — Scalp Serum (40 mL), smallest, enters from the right.
      { src: "/brand/advisor-rx/grey-hair/hero/3.png", enterFrom: "right", enterDelay: 0.4, depth: 72, width: "min(17vw, 30vh, 1195px)", aspectRatio: "1 / 1", left: "81%", top: "53%",
        mobile: { left: "64%", top: "48%", width: "36%" } },
    ],
    showcaseTitle: "/brand/advisor-rx/grey-hair/showcase/title.png",
    showcaseTitleAspect: "4713 / 3163",
    // No wide featured card in this delivery — the three cards run in the 2-column
    // grid. Card art ratios vary by <1.5 %, so one box ratio holds them all.
    cardAspect: "2303 / 3026",
    cards: [
      { image: "/brand/advisor-rx/grey-hair/showcase/1.png", label: { en: "Grey Hair Shampoo", id: "Grey Hair Shampoo" } },
      { image: "/brand/advisor-rx/grey-hair/showcase/2.png", label: { en: "Grey Hair Boosting Mask", id: "Grey Hair Masker Penguat" } },
      { image: "/brand/advisor-rx/grey-hair/showcase/3.png", label: { en: "Grey Hair Scalp Serum", id: "Grey Hair Serum Kulit Kepala" } },
    ],
  };

export default entry;
