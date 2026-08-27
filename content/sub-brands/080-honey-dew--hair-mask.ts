import type { SubBrand } from "@/lib/subBrands";

  // ── Honey Dew → Repair Mask ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-mask",
    parent: "honey-dew",
    name: "Repair Mask",
    // Copy taken verbatim from the line's own reference banner.
    tagline: { en: `Intensive hair care mask for\nweekly treatment of dry & damaged hair`, id: `Masker perawatan rambut intensif untuk perawatan\nmingguan bagi rambut yang kering & rusak` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#E0B058",
    // Same honey-brown banner as the other Honey Dew lines — see the note in
    // 070-honey-dew--shampoo.ts.
    bannerBg: "#64402D",
    heroWordmark: "/brand/honey-dew/hair-mask/hero/wordmark.png",
    heroWordmarkAspect: "1789 / 284",
    heroLayers: [
      // The tube only fills 44 % × 57 % of its canvas (measured from the alpha
      // channel), so the canvas has to run much wider than the visible tube (and hang
      // above the banner top) to land the tube at the reference's size and position:
      // ≈27 vw wide, spanning 19 %–74 % of the banner height.
      { src: "/brand/honey-dew/hair-mask/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 40, width: "min(62.5vw, 75vh)", aspectRatio: "3058 / 3865", left: "53%", top: "-2.5%",
        mobile: { left: "12%", top: "-43%", width: "70%" } },
    ],
    showcaseTitle: "/brand/honey-dew/hair-mask/showcase/title.png",
    showcaseTitleAspect: "4950 / 5828",
    // The reference shows the title graphic alone — no variant card grid was
    // delivered for this line (hair-mask/showcase/ holds only title.png).
    cards: [],
  };

export default entry;
