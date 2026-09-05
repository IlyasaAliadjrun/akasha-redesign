import type { SubBrand } from "@/lib/subBrands";

  // ── Asters → Styling Tools ────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "styling-tools",
    parent: "asters",
    name: "Styling Tools",
    tagline: { en: "Premium-technology styling tools,\ndesigned to help you achieve salon-quality results.", id: "Penata rambut berteknologi premium,\ndirancang untuk membantu mewujudkan hasil berkualitas salon." },
    ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
    accentHex: "#A67E6C",
    // SubBrandHero always prints its heading, tagline and CTA in white, so the banner
    // must be a deep tone. This is the brand taupe darkened to the point where BOTH
    // halves of the wordmark still read — the near-black "MAKARIZO" and the taupe
    // "asters" — since the line has no light wordmark variant of its own.
    bannerBg: "#F1EEEA",
    theme: "accent-light",
    // No wordmark art of its own — the line shares the Makarizo Asters wordmark
    // that its own showcase title graphic also carries.
    heroWordmark: "/brand/asters/hero/wordmark.png",
    heroWordmarkAspect: "1513 / 740",
    heroLayers: [
      { src: "/brand/asters/styling-tools/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44, width: "30vw", aspectRatio: "2062 / 2658", left: "58.6%", top: "7.5%",
        mobile: { left: "3%", top: "-27%", width: "90%" } },
    ],
    showcaseTitle: "/brand/asters/styling-tools/showcase/title.png",
    showcaseTitleAspect: "3090 / 3357",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/asters/styling-tools/showcase/1.png", label: { en: "Asters VOLA — volumizing styler", id: "Asters VOLA — penata rambut bervolume" } },
      { image: "/brand/asters/styling-tools/showcase/2.png", label: { en: "Asters MOVA — hair straightening brush", id: "Asters MOVA — sikat pelurus rambut" } },
      { image: "/brand/asters/styling-tools/showcase/3.png", label: { en: "Asters High Speed Hair Dryer", id: "Asters High Speed Hair Dryer" } },
      { image: "/brand/asters/styling-tools/showcase/4.png", label: { en: "Asters High Performance Hair Iron", id: "Asters High Performance Hair Iron" } },
    ],
  };

export default entry;
