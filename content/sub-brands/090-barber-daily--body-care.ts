import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Body Care ──────────────────────────────────────────────
const entry: SubBrand = {
    slug: "body-care",
    parent: "barber-daily",
    name: "Body Care",
    tagline: { en: "Eliminates sweat & body odor.", id: "Hilangkan keringat & bau badan." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/brand/barber-daily/body-care/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Deodorant (2) sits upper right and enters from the right; the Extrait de Parfum
    // flacon (1) sits lower left of the cluster and enters from the left, in front.
    heroLayers: [
      { src: "/brand/barber-daily/body-care/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 38,
        width: "min(43vw, 65vh)", aspectRatio: "2647 / 2646", left: "66.5%", top: "7.1%",
        mobile: { right: "-12%", top: "-16%", width: "80%" } },
      { src: "/brand/barber-daily/body-care/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60,
        width: "min(31vw, 44vh)", aspectRatio: "2064 / 2530", left: "55.4%", top: "34%",
        mobile: { left: "0%", bottom: "2%", width: "65%" } },
    ],
    // The body-care showcase art ships at the folder root (title/1/2) rather than in a
    // `showcase/` sub-folder — paths follow the files as delivered.
    showcaseTitle: "/brand/barber-daily/body-care/title.png",
    showcaseTitleAspect: "5028 / 2908",
    cardAspect: "2302 / 2987",
    cards: [
      { image: "/brand/barber-daily/body-care/1.png", label: { en: "Antiperspirant", id: "Antiperspirant" } },
      { image: "/brand/barber-daily/body-care/2.png", label: { en: "Perfume", id: "Perfume" } },
    ],
  };

export default entry;
