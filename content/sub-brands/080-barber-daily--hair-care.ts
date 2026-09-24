import type { SubBrand } from "@/lib/subBrands";

  // ── Barber Daily → Hair Care ──────────────────────────────────────────────
const entry: SubBrand = {
    slug: "hair-care",
    parent: "barber-daily",
    name: "Hair Care",
    tagline: { en: `Promotes optimal hair and scalp \nhealth.`, id: `Meningkatkan kesehatan\nrambut & kulit kepala.` },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#6B3F1D",
    bannerBg: "#6B3F1D",
    heroWordmark: "/media/brands/barber-daily/lines/hair-care/hero/wordmark.png",
    heroWordmarkAspect: "773 / 527",
    // Shampoo (1) sits centre-left of the cluster and enters from the left; the 2in1
    // hair tonic (2) stands to its right and enters from the right. Both PNGs have
    // wide transparent margins, so the layer boxes are far wider than the bottles.
    heroLayers: [
      { src: "/media/brands/barber-daily/lines/hair-care/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 58,
        width: "min(49vw, 55vh)", aspectRatio: "2554 / 3615", left: "66.5%", top: "10%",
        mobile: { right: "0%", top: "-12%", width: "70%" } },
      { src: "/media/brands/barber-daily/lines/hair-care/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 40,
        width: "min(55vw, 77vh)", aspectRatio: "3891 / 5524", left: "52%", top: "16%",
        mobile: { left: "-8%", top: "-5%", width: "100%" } },
    ],
    showcaseTitle: { en: "/media/brands/barber-daily/lines/hair-care/showcase/title.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/title.id.png" },
    showcaseTitleAspect: "5138 / 3538",
    // Pomade is the one landscape card in the set, so it takes the full-width
    // `featured` slot; the four portrait cards fill the 2-column grid.
    featured: { image: { en: "/media/brands/barber-daily/lines/hair-care/showcase/5.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/5.id.png" }, label: { en: "Pomade", id: "Pomade" } },
    featuredAspect: "4687 / 2222",
    featuredPosition: "bottom",
    showcaseTitleOffsetY: "36px",
    showcaseTitleOffsetX: "-85px",
    showcaseTitleMobileOffsetX: "-47px",
    showcaseTitleMobileOffsetY: "15px",
    cardAspect: "2302 / 2987",
    cards: [
      { image: { en: "/media/brands/barber-daily/lines/hair-care/showcase/1.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/1.id.png" }, label: { en: "Shampoo", id: "Shampoo" } },
      { image: { en: "/media/brands/barber-daily/lines/hair-care/showcase/2.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/2.id.png" }, label: { en: "4 in 1", id: "4 in 1" } },
      { image: { en: "/media/brands/barber-daily/lines/hair-care/showcase/3.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/3.id.png" }, label: { en: "Hair Tonic", id: "Hair Tonic" } },
      { image: { en: "/media/brands/barber-daily/lines/hair-care/showcase/4.en.png", id: "/media/brands/barber-daily/lines/hair-care/showcase/4.id.png" }, label: { en: "Styling Gel", id: "Styling Gel" } },
    ],
  };

export default entry;
