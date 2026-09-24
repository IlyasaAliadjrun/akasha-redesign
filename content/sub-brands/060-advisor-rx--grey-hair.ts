import type { SubBrand } from "@/lib/subBrands";

  // ── Advisor RX → Grey Hair Expert Care ────────────────────────────────────
const entry: SubBrand = {
    slug: "grey-hair",
    parent: "advisor-rx",
    name: "Grey Hair",
    // Copy taken verbatim from the line's own showcase banner art.
    tagline: { en: "Helps reduce gray hair, repigments \nhair & restores natural hair color", id: "Membantu mengurangi rambut uban,\ndan menghitamkan rambut." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    // Grey Hair rose — sampled from the line's banner and card art (rgb(247,162,154)).
    accentHex: "#000000",
    bannerBg: "#F4F4F4",
    theme: "accent-light",
    // No wordmark was delivered inside grey-hair/hero/, so the hero carries the
    // parent brand's own Advisor RX lockup (still inside this brand's asset folder).
    heroWordmark: "/media/brands/advisor-rx/hero/wordmark.png",
    heroWordmarkAspect: "1887 / 486",
    // The three regimen steps, left→right in usage order. Each canvas carries a
    // different amount of transparent margin (the bottle fills 74–82 % of its canvas
    // height), so the widths differ per asset to land them at their true relative
    // sizes and on a shared baseline. Mobile placement is given for EVERY layer
    // because the component's two built-in defaults only cover a two-product hero.
    heroLayers: [
      // 3 — Scalp Serum (40 mL), smallest, enters from the right.
      { src: "/media/brands/advisor-rx/lines/grey-hair/hero/3.png", enterFrom: "right", enterDelay: 0.4, depth: 72, width: "min(35vw, 48vh)", aspectRatio: "1 / 1", left: "68.2%", top: "20%",
        mobile: { left: "27%", top: "-12%", width: "80%" } },
      // 2 — Boosting Mask (100 mL).
      { src: "/media/brands/advisor-rx/lines/grey-hair/hero/2.png", enterFrom: "top", enterDelay: 0.2, depth: 54, width: "min(45vw, 61vh)", aspectRatio: "1 / 1", left: "60.4%", top: "34%",
        mobile: { left: "10%", top: "15%", width: "85%" } },
      // 1 — Shampoo (250 mL), tallest, enters from the left.
      { src: "/media/brands/advisor-rx/lines/grey-hair/hero/1.png", enterFrom: "left", enterDelay: 0, depth: 36, width: "min(45vw, 68vh)", aspectRatio: "1 / 1", left: "51%", top: "11.5%",
        mobile: { left: "-13%", top: "-20%", width: "90%" } },
      
    ],
    showcaseTitle: { en: "/media/brands/advisor-rx/lines/grey-hair/showcase/title.en.png", id: "/media/brands/advisor-rx/lines/grey-hair/showcase/title.id.png" },
    showcaseTitleAspect: "4713 / 3163",
    showcaseTitleOffsetY: "-40px",
    // No wide featured card in this delivery — the three cards run in the 2-column
    // grid. Card art ratios vary by <1.5 %, so one box ratio holds them all.
    cardAspect: "2303 / 3026",
    cards: [
      { image: { en: "/media/brands/advisor-rx/lines/grey-hair/showcase/1.en.png", id: "/media/brands/advisor-rx/lines/grey-hair/showcase/1.id.png" }, label: { en: "Grey Hair Shampoo", id: "Grey Hair Shampoo" } },
      { image: { en: "/media/brands/advisor-rx/lines/grey-hair/showcase/2.en.png", id: "/media/brands/advisor-rx/lines/grey-hair/showcase/2.id.png" }, label: { en: "Grey Hair Boosting Mask", id: "Grey Hair Masker Penguat" } },
      { image: { en: "/media/brands/advisor-rx/lines/grey-hair/showcase/3.en.png", id: "/media/brands/advisor-rx/lines/grey-hair/showcase/3.id.png" }, label: { en: "Grey Hair Scalp Serum", id: "Grey Hair Serum Kulit Kepala" } },
    ],
  };

export default entry;
