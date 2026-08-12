import type { SubBrand } from "@/lib/subBrands";

  // ── Honey Dew → Deep Moist & Shine Shampoo ────────────────────────────────
const entry: SubBrand = {
    slug: "shampoo",
    parent: "honey-dew",
    name: "Deep Moist & Shine Shampoo",
    // Copy taken verbatim from the line's own reference banner.
    tagline: { en: `Intensive Repair for\nDry, Brittle, and Over-Processed Hair`, id: `Perbaikan Intensif untuk Rambut\nKering, Rapuh, dan Over-Processed` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#E0B058",
    // SubBrandHero always paints its wording white, so the banner takes the brand's
    // own honey-brown (sampled from the showcase title art, rgb(100,64,45)) instead
    // of the reference's light grey — gold wordmark and white copy both stay legible
    // on it. See the handover note about adding a `theme` switch to SubBrandHero.
    bannerBg: "#64402D",
    heroWordmark: "/brand/honey-dew/shampoo/hero/wordmark.png",
    heroWordmarkAspect: "1789 / 284",
    heroLayers: [
      // The bottle fills 82 % × 89 % of its canvas (measured from the alpha channel),
      // so the canvas is only slightly larger than the bottle itself. `width` is the
      // CANVAS width: 29.5vw lands the visible bottle at the reference's ≈24 vw,
      // spanning 21 %–66 % of the banner height on the right.
      { src: "/brand/honey-dew/shampoo/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 40, width: "min(40.5vw, 47vh)", aspectRatio: "1672 / 2451", left: "63%", top: "17%",
        mobile: { left: "-30%", top: "-75%", width: "160%" } },
    ],
    showcaseTitle: "/brand/honey-dew/shampoo/showcase/title.png",
    showcaseTitleAspect: "4539 / 3341",
    // The reference shows the title graphic alone — no variant card grid was
    // delivered for this line (shampoo/showcase/ holds only title.png).
    cards: [],
  };

export default entry;
