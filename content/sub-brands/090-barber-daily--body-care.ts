import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Body Care ──────────────────────────────────────────────
const entry: SubBrand = {
    slug: "body-care",
    parent: "barber-daily",
    name: "Body Care",
    tagline: "Hilangkan keringat & bau badan.",
    ctaText: "Learn more",
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/brand/barber-daily/body-care/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Deodorant (2) sits upper right and enters from the right; the Extrait de Parfum
    // flacon (1) sits lower left of the cluster and enters from the left, in front.
    heroLayers: [
      { src: "/brand/barber-daily/body-care/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 38,
        width: "min(36vw, 58vh)", aspectRatio: "2647 / 2646", left: "64.5%", top: "6.1%",
        mobile: { right: "0%", top: "2%", width: "58%" } },
      { src: "/brand/barber-daily/body-care/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60,
        width: "min(21.4vw, 34vh)", aspectRatio: "2064 / 2530", left: "53.4%", top: "36.2%",
        mobile: { left: "0%", bottom: "6%", width: "56%" } },
    ],
    // The body-care showcase art ships at the folder root (title/1/2) rather than in a
    // `showcase/` sub-folder — paths follow the files as delivered.
    showcaseTitle: "/brand/barber-daily/body-care/title.png",
    showcaseTitleAspect: "5028 / 2908",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/barber-daily/body-care/1.png", label: "Antiperspirant" },
      { image: "/brand/barber-daily/body-care/2.png", label: "Perfume" },
    ],
  };

export default entry;
