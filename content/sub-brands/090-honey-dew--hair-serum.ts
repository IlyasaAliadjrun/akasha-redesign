import type { SubBrand } from "@/lib/subBrands";

  // ── Honey Dew → Hair Serum ────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-serum",
    parent: "honey-dew",
    name: "Hair Serum",
    // Copy taken verbatim from the line's own reference banner.
    tagline: { en: `Hair serum that moisturizes and\nadds shine, with honey extract to revitalize hair`, id: `Serum rambut yang melembapkan rambut dan\nmemberi kilau, serta ekstrak madu untuk revitalisasi rambut` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#E0B058",
    // Same honey-brown banner as the other Honey Dew lines — see the note in
    // 070-honey-dew--shampoo.ts.
    bannerBg: "#64402D",
    heroWordmark: "/brand/honey-dew/hair-serum/hero/wordmark.png",
    heroWordmarkAspect: "1789 / 284",
    heroLayers: [
      // ASSET GAP: no product PNG was delivered inside hair-serum/hero/ (the folder
      // holds only wordmark.png), so the brand's own two-tube showcase render stands
      // in. Reported to the brand team — swap to hair-serum/hero/1.png once the real
      // hero art arrives.
      // The pair fills 57 % × 62 % of its canvas, so `width` (the canvas) runs much
      // wider than the tubes. Sized to the reference's ≈33 vw cluster width; the
      // stand-in art lays the two tubes side by side rather than the reference's
      // diagonal stack, so its height cannot also be matched.
      // `left` is pushed past the reference's own x so the (wider) stand-in cluster
      // still clears the tagline's right edge instead of sitting on top of it.
      { src: "/brand/honey-dew/showcase/2-1.png", enterFrom: "right", enterDelay: 0.2, depth: 40, width: "min(65.5vw, 77vh, 1200px)", aspectRatio: "2399 / 2689", left: "58%", top: "7%",
        mobile: { left: "-75%", top: "-100%", width: "260%" } },
    ],
    showcaseTitle: "/brand/honey-dew/hair-serum/showcase/title.png",
    showcaseTitleAspect: "5256 / 4153",
    // Both card graphics are 2302×2986 / 2301×2986 — one shared ratio.
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/honey-dew/hair-serum/showcase/1.png", label: { en: "Honey Dew Nutriv Serum", id: "Honey Dew Nutriv Serum" } },
      { image: "/brand/honey-dew/hair-serum/showcase/2.png", label: { en: "Honey Dew Restructuring Serum", id: "Honey Dew Restructuring Serum" } },
    ],
  };

export default entry;
