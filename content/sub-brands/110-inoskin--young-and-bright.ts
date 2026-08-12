import type { SubBrand } from "@/lib/subBrands";

  // ── Inoskin → Young & Bright ──────────────────────────────────────────────
const entry: SubBrand = {
    slug: "young-and-bright",
    parent: "inoskin",
    name: "Young & Bright",
    tagline: { en: `Bright, glowing skin\nthat visibly reduces fine lines.`, id: `Kulit cerah glowing\nmenyamarkan garis halus.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#897321",
    // Banner is the brand's near-white (#F2F1EF, same as the brand hero) — "-light"
    // tells the navbar to render dark chrome here instead of assuming a dark banner.
    theme: "accent-light",
    bannerBg: "#F2F1EF",
    heroWordmark: "/brand/inoskin/hero/wordmark.png",
    heroWordmarkAspect: "1553 / 549",
    // Products render back-to-front: the moisturizer tube sits behind at the top
    // right, the toner behind-left, and the serum in front and lower — the same
    // cluster the parent showcase banner uses.
    // Widths are `min(vw, vh)` (not the fixed px Creambath uses) so the cluster
    // shrinks with the viewport and never runs into the left-hand wording block at
    // the lg breakpoint; the third `px` term on the serum caps it at half its natural
    // 1471px width so it stays sharp at DPR 2 on very wide screens.
    heroLayers: [
      { src: "/brand/inoskin/young-and-bright/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 34, width: "min(27vw, 56vh, 1196px)", aspectRatio: "2391 / 4018", left: "62%", top: "11%",
        mobile: { left: "46.5%", top: "-5.6%", width: "60%" } },
      { src: "/brand/inoskin/young-and-bright/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 48, width: "min(26vw, 56vh, 1133px)", aspectRatio: "2265 / 3199", left: "54.5%", top: "15%",
        mobile: { left: "2.3%", top: "-6%", width: "58%" } },
      { src: "/brand/inoskin/young-and-bright/hero/3.png", enterFrom: "right", enterDelay: 0.6, depth: 62, width: "min(18.5vw, 36vh, 735px)", aspectRatio: "1471 / 2306", left: "72.5%", top: "35%",
        mobile: { left: "35.6%", top: "22.8%", width: "46%" } },
    ],
    showcaseTitle: "/brand/inoskin/young-and-bright/showcase/title.png",
    showcaseTitleAspect: "4834 / 3846",
    // No `featured` slot: every card asset in this folder is a portrait SKU card —
    // there is no landscape hero card, and the reference doesn't show one either.
    // The visible card canvas is consistently 2304×2987. Files 1, 2 and 5 carry extra
    // transparent canvas padding on different edges, so cover + edge anchoring trims
    // only that padding and keeps every visible card aligned with equal grid gaps.
    cardAspect: "2304 / 2987",
    cards: [
      { image: "/brand/inoskin/young-and-bright/showcase/1.png", imageFit: "cover", imagePosition: "bottom", label: { en: "Young and Bright Toner", id: "Young and Bright Toner" } },
      { image: "/brand/inoskin/young-and-bright/showcase/2.png", imageFit: "cover", imagePosition: "top", label: { en: "Young and Bright Serum", id: "Young and Bright Serum" } },
      { image: "/brand/inoskin/young-and-bright/showcase/3.png", imageFit: "cover", label: { en: "Young and Bright Moisturizer", id: "Young and Bright Moisturizer" } },
      { image: "/brand/inoskin/young-and-bright/showcase/4.png", imageFit: "cover", label: { en: "Collagen Firming Mask", id: "Masker Pengencang Collagen" } },
      { image: "/brand/inoskin/young-and-bright/showcase/5.png", imageFit: "cover", imagePosition: "bottom", label: { en: "Triple Power Cleanser", id: "Pembersih Wajah Triple Power" } },
    ],
  };

export default entry;
