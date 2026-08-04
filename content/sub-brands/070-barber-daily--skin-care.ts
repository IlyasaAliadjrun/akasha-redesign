import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Skincare ───────────────────────────────────────────────
const entry: SubBrand = {
    slug: "skin-care",
    parent: "barber-daily",
    name: "Skincare",
    tagline: { en: "Helps care for your facial skin every day.", id: "Bantu merawat kulit wajah setiap hari." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/brand/barber-daily/skin-care/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Products render back-to-front. Moisturizer (2) upper right and serum (3) lower
    // right sit behind; the face wash (1) is the large front piece. Positions are % of
    // the banner and each width is min(vw, vh), so the cluster scales with the shorter
    // axis and never outgrows a short window; `mobile` places each product inside the
    // SubBrandHero mobile cluster box (values are % of that box).
    // The PNGs carry heavy transparent padding (2 and 3 fill ~26–29% of a square
    // canvas), so each layer box is much wider than the bottle looks.
    heroLayers: [
      { src: "/brand/barber-daily/skin-care/hero/2.png", enterFrom: "right", enterDelay: 0.35, depth: 34,
        width: "min(37vw, 60vh, 1773px)", aspectRatio: "3545 / 3546", left: "64.6%", top: "4.3%",
        mobile: { right: "0%", top: "0%", width: "58%" } },
      { src: "/brand/barber-daily/skin-care/hero/3.png", enterFrom: "right", enterDelay: 0.5, depth: 46,
        width: "min(38vw, 61vh, 2124px)", aspectRatio: "4248 / 4247", left: "67%", top: "35.4%",
        mobile: { right: "2%", bottom: "2%", width: "62%" } },
      { src: "/brand/barber-daily/skin-care/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 62,
        width: "min(34vw, 55vh, 1226px)", aspectRatio: "2451 / 3838", left: "53.3%", top: "23%",
        mobile: { left: "2%", top: "12%", width: "66%" } },
    ],
    showcaseTitle: "/brand/barber-daily/skin-care/showcase/title.png",
    showcaseTitleAspect: "5711 / 4937",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/barber-daily/skin-care/showcase/1.png", label: { en: "Face Wash", id: "Sabun Cuci Muka" } },
      { image: "/brand/barber-daily/skin-care/showcase/2.png", label: { en: "Moisturizer", id: "Pelembap" } },
      { image: "/brand/barber-daily/skin-care/showcase/3.png", label: { en: "Serum", id: "Serum" } },
      { image: "/brand/barber-daily/skin-care/showcase/4.png", label: { en: "Spot Gel", id: "Gel Totol Jerawat" } },
    ],
  };

export default entry;
