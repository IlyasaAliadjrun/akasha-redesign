import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Tools ──────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "tools",
    parent: "barber-daily",
    name: "Tools",
    tagline: { en: `Enjoy a shaving experience that's\nSmoother, Faster, and More Effective.`, id: `Nikmati pengalaman mencukur yang\nLebih Halus, Cepat, dan Maksimal.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/brand/barber-daily/tools/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Single product: the razor, standing tall on the right half of the banner.
    heroLayers: [
      { src: "/brand/barber-daily/tools/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44,
        width: "min(40.8vw, 65vh)", aspectRatio: "3219 / 4496", left: "51%", top: "3.9%",
        mobile: { left: "19%", top: "8%", width: "62%" } },
    ],
    // The title graphic carries the whole feature block (razor + the four claims), the
    // only showcase asset shipped for this line — no variant cards exist yet.
    showcaseTitle: "/brand/barber-daily/tools/showcase/title.png",
    showcaseTitleAspect: "5601 / 5406",
    cardAspect: "2302 / 2987",
    cards: [],
  };

export default entry;
