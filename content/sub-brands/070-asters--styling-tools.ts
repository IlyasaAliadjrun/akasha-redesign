import type { SubBrand } from "@/lib/subBrands";

  // ── Asters → Styling Tools ────────────────────────────────────────────────
const entry: SubBrand = {
    slug: "styling-tools",
    parent: "asters",
    name: "Styling Tools",
    tagline: `Penata rambut berteknologi premium,\ndirancang untuk membantu mewujudkan hasil berkualitas salon.`,
    ctaText: "Learn more",
    accentHex: "#A67E6C",
    // SubBrandHero always prints its heading, tagline and CTA in white, so the banner
    // must be a deep tone. This is the brand taupe darkened to the point where BOTH
    // halves of the wordmark still read — the near-black "MAKARIZO" and the taupe
    // "asters" — since the line has no light wordmark variant of its own.
    bannerBg: "#6E4E40",
    // No wordmark art of its own — the line shares the Makarizo Asters wordmark
    // that its own showcase title graphic also carries.
    heroWordmark: "/brand/asters/hero/wordmark.png",
    heroWordmarkAspect: "1513 / 740",
    heroLayers: [
      { src: "/brand/asters/styling-tools/hero/1.png", enterFrom: "right", enterDelay: 0.3, depth: 44, width: "min(36vw, 420px)", aspectRatio: "2062 / 2658", left: "56%", top: "10%",
        mobile: { left: "11%", top: "2%", width: "78%" } },
    ],
    showcaseTitle: "/brand/asters/styling-tools/showcase/title.png",
    showcaseTitleAspect: "3090 / 3357",
    cardAspect: "2302 / 2986",
    cards: [
      { image: "/brand/asters/styling-tools/showcase/1.png", label: "Asters VOLA — volumizing styler" },
      { image: "/brand/asters/styling-tools/showcase/2.png", label: "Asters MOVA — hair straightening brush" },
      { image: "/brand/asters/styling-tools/showcase/3.png", label: "Asters High Speed Hair Dryer" },
      { image: "/brand/asters/styling-tools/showcase/4.png", label: "Asters High Performance Hair Iron" },
    ],
  };

export default entry;
