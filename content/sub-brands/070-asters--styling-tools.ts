import type { SubBrand } from "@/lib/subBrands";

  // ── Asters → Styling Tools ────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "styling-tools",
    parent: "asters",
    name: "Styling Tools",
    tagline: { en: "Premium-technology styling tools,\ndesigned to help you achieve salon-quality results.", id: "Penata rambut berteknologi premium,\ndirancang untuk membantu mewujudkan hasil berkualitas salon." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#000000",
    // SubBrandHero always prints its heading, tagline and CTA in white, so the banner
    // must be a deep tone. This is the brand taupe darkened to the point where BOTH
    // halves of the wordmark still read — the near-black "MAKARIZO" and the taupe
    // "asters" — since the line has no light wordmark variant of its own.
    bannerBg: "#FFFFFF",
    theme: "accent-light",
    // No wordmark art of its own — the line shares the Makarizo Asters wordmark
    // that its own showcase title graphic also carries.
    heroWordmark: "/media/brands/asters/hero/wordmark.png",
    heroWordmarkAspect: "1513 / 740",
    heroLayers: [
      { src: "/media/brands/asters/lines/styling-tools/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44, width: "30vw", aspectRatio: "2062 / 2658", left: "58.6%", top: "7.5%",
        mobile: { left: "3%", top: "-27%", width: "90%" } },
    ],
    showcaseTitle: { en: "/media/brands/asters/lines/styling-tools/showcase/title.en.png", id: "/media/brands/asters/lines/styling-tools/showcase/title.id.png" },
    showcaseTitleAspect: "3090 / 3357",
    showcaseTitleOffsetY: "15px",
    cardAspect: "2302 / 2986",
    cards: [
      { image: { en: "/media/brands/asters/lines/styling-tools/showcase/1.en.png", id: "/media/brands/asters/lines/styling-tools/showcase/1.id.png" }, label: { en: "Asters VOLA — volumizing styler", id: "Asters VOLA — penata rambut bervolume" } },
      { image: { en: "/media/brands/asters/lines/styling-tools/showcase/2.en.png", id: "/media/brands/asters/lines/styling-tools/showcase/2.id.png" }, label: { en: "Asters MOVA — hair straightening brush", id: "Asters MOVA — sikat pelurus rambut" } },
      { image: { en: "/media/brands/asters/lines/styling-tools/showcase/3.en.png", id: "/media/brands/asters/lines/styling-tools/showcase/3.id.png" }, label: { en: "Asters High Speed Hair Dryer", id: "Asters High Speed Hair Dryer" } },
      { image: { en: "/media/brands/asters/lines/styling-tools/showcase/4.en.png", id: "/media/brands/asters/lines/styling-tools/showcase/4.id.png" }, label: { en: "Asters High Performance Hair Iron", id: "Asters High Performance Hair Iron" } },
    ],
  };

export default entry;
