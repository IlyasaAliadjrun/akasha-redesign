import type { SubBrand } from "@/lib/subBrands";

  // ── Honey Dew → Repair Mask ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-mask",
    parent: "honey-dew",
    name: "Repair Mask",
    // Copy taken verbatim from the line's own reference banner.
    tagline: { en: `Intensive hair care mask for\nweekly treatment of dry & damaged hair`, id: `Masker perawatan rambut intensif untuk perawatan\nmingguan bagi rambut yang kering & rusak` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#64402D",
    // Same honey-brown banner as the other Honey Dew lines — see the note in
    // 070-honey-dew--shampoo.ts.
    bannerBg: "#EFEFEF",
    theme: "accent-light",
    heroWordmark: "/media/brands/honey-dew/lines/hair-mask/hero/wordmark.png",
    heroWordmarkAspect: "1789 / 284",
    heroWordmarkWidth: "25vw",
    heroWordmarkMobileWidth: "45vw",
    heroLayers: [
      // The tube only fills 44 % × 57 % of its canvas (measured from the alpha
      // channel), so the canvas has to run much wider than the visible tube (and hang
      // above the banner top) to land the tube at the reference's size and position:
      // ≈27 vw wide, spanning 19 %–74 % of the banner height.
      { src: "/media/brands/honey-dew/lines/hair-mask/hero/1.png", enterFrom: "right", enterDelay: 0.2, depth: 40, width: "min(67vw, 80vh)", aspectRatio: "3058 / 3865", left: "55%", top: "1%",
        mobile: { left: "-13%", top: "-45%", width: "125%" } },
    ],
    showcaseTitle: { en: "/media/brands/honey-dew/lines/hair-mask/showcase/title.en.png", id: "/media/brands/honey-dew/lines/hair-mask/showcase/title.id.png" },
    showcaseTitleAspect: "4950 / 5828",
    // The reference shows the title graphic alone — no variant card grid was
    // delivered for this line (hair-mask/showcase/ holds only title.png).
    cards: [],
  };

export default entry;
