import type { SubBrand } from "@/lib/subBrands";

  // ── Advisor RX → Strong Hair Expert Care ──────────────────────────────────
const entry: SubBrand = {
    slug: "strong-hair",
    parent: "advisor-rx",
    name: "Strong Hair Expert Care",
    // Copy taken verbatim from the line's own showcase banner art.
    tagline: { en: "Helps reduce hair loss,\npremature balding, and promotes hair growth.", id: "Membantu mengurangi rambut rontok,\nkebotakan dini, dan menumbuhkan rambut." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // Strong Hair green — sampled from the line's banner and card art (rgb(0,149,97)).
    accentHex: "#009561",
    bannerBg: "#009561",
    // No wordmark was delivered inside strong-hair/hero/, so the hero carries the
    // parent brand's own Advisor RX lockup (still inside this brand's asset folder).
    heroWordmark: "/brand/advisor-rx/hero/wordmark.png",
    heroWordmarkAspect: "1887 / 486",
    // The four regimen steps, left→right in usage order. Each canvas carries a
    // different amount of transparent margin (the bottle fills 59–85 % of its canvas
    // height), so the widths differ per asset to land them at their true relative
    // sizes and on a shared baseline. The cluster starts at 47 % so it clears the
    // desktop wording block — the h1 "STRONG HAIR EXPERT CARE" is the longest name on
    // any sub-brand page and would otherwise run under the shampoo. Mobile placement
    // is given for EVERY layer because the component's two built-in defaults only
    // cover a two-product hero.
    heroLayers: [
      // 1 — Shampoo (250 mL), tallest, enters from the left.
      { src: "/brand/advisor-rx/strong-hair/hero/1.png", enterFrom: "left", enterDelay: 0, depth: 36, width: "min(32vw, 52vh, 1944px)", aspectRatio: "1 / 1", left: "47%", top: "34%",
        mobile: { left: "-25%", top: "11%", width: "80%" } },
      // 2 — Boosting Mask (100 mL).
      { src: "/brand/advisor-rx/strong-hair/hero/2.png", enterFrom: "top", enterDelay: 0.15, depth: 48, width: "min(19vw, 30vh, 1493px)", aspectRatio: "1 / 1", left: "65%", top: "52%",
        mobile: { left: "20%", top: "40%", width: "46%" } },
      // 3 — Hair Tonic (100 mL).
      { src: "/brand/advisor-rx/strong-hair/hero/3.png", enterFrom: "top", enterDelay: 0.3, depth: 60, width: "min(31.5vw, 50vh, 1711px)", aspectRatio: "1 / 1", left: "68.5%", top: "38%",
        mobile: { left: "28%", top: "16%", width: "79%" } },
      // 4 — Scalp Serum (40 mL), smallest, enters from the right.
      { src: "/brand/advisor-rx/strong-hair/hero/4.png", enterFrom: "right", enterDelay: 0.45, depth: 72, width: "min(9.3vw, 15vh, 746px)", aspectRatio: "1491 / 2058", left: "88.5%", top: "59%",
        mobile: { left: "80%", top: "50%", width: "22%" } },
    ],
    showcaseTitle: "/brand/advisor-rx/strong-hair/showcase/title.png",
    showcaseTitleAspect: "4722 / 3817",
    // No wide featured card in this delivery — the four cards fill a clean 2×2 grid.
    // Card art ratios vary by <1.5 %, so one box ratio holds them all without letterboxing.
    cardAspect: "2303 / 3026",
    cards: [
      { image: "/brand/advisor-rx/strong-hair/showcase/1.png", label: { en: "Strong Hair Shampoo", id: "Strong Hair Shampoo" } },
      { image: "/brand/advisor-rx/strong-hair/showcase/2.png", label: { en: "Strong Hair Boosting Mask", id: "Strong Hair Masker Penguat" } },
      { image: "/brand/advisor-rx/strong-hair/showcase/3.png", label: { en: "Strong Hair Hair Tonic", id: "Strong Hair Tonik Rambut" } },
      { image: "/brand/advisor-rx/strong-hair/showcase/4.png", label: { en: "Strong Hair Scalp Serum", id: "Strong Hair Serum Kulit Kepala" } },
    ],
  };

export default entry;
