import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "fitmeup",
    name: "Fitmeup",
    division: "food",
    // The wordmark art already carries this line ("Sleep Better, Live Better"), so the
    // hero doesn't repeat it — it's still used by BrandCTA and the CrossSell card.
    tagline: "Sleep Better, Live Better.",
    // Becomes the BrandIntro headline; everything after the first ". " renders as the
    // lighter supporting line.
    description:
      "Minuman relaksasi dengan Triple Active Formula. Magnesium, L-Theanine, dan L-Tryptophan yang bekerja bersama untuk malam yang lebih tenang dan tidur yang lebih nyenyak",
    accentClass: "bg-brand-fitmeup",
    accentHex: "#B8336D", // Fitmeup magenta — sampled from the showcase banner + about art
    // No standalone brand-card art yet — reuse the 3:4 about photo, which already
    // matches the CrossSell tile ratio. The hero itself renders from `heroLayers`.
    heroImage: "/brand/fitmeup/about/3.jpeg",
    // Hero — magenta banner (bannerBg) with the fitmeup lockup on the left and the
    // two-bottle cluster on the right. Same pattern as the Hair Energy hero.
    heroLayers: [
      // hero/1.png is a tight portrait cluster of the two Relax bottles (transparent,
      // 1639×2295), rendered as a *sized* layer for both viewports.
      // DESKTOP: anchored right, capped by height so it never outgrows a short viewport.
      // MOBILE: centred under the wordmark (the 14% left offset centres a 72vw box).
      { src: "/brand/fitmeup/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(34vw, 50vh)", aspectRatio: "1639 / 2295", right: "8%", top: "14%",
        mobile: { width: "min(72vw, 45vh)", left: "14%", top: "35%" } },
    ],
    // The wordmark image already includes the "Sleep Better, Live Better" tagline, so
    // there is no separate HTML tagline/subtitle/CTA — logo-only hero (see
    // docs/BRAND_PAGE_GUIDE.md §C). Light theme = white text on the dark magenta banner.
    heroContent: {
      logo: "/brand/fitmeup/hero/wordmark.png",
      logoAspect: "11084 / 4839",
      logoWidth: "30vw",
      left: "9%",
      theme: "light",
      delay: 0.5,
      mobile: { logoWidth: "66vw" },
    },
    bannerBg: "#B8336D", // Fitmeup magenta
    hero: false,
    products: [
      // ⚠️ public/brand/fitmeup/product-lineup/ does not exist yet, so this SKU renders
      // with ProductLineup's built-in empty stage. Drop a 1200×1200 transparent PNG in
      // that folder and add `image: "/brand/fitmeup/product-lineup/relax-160ml.png"`.
      { name: "Relax", size: "160 mL" },
    ],
    about: [
      { title: "Triple Active Formula", image: "/brand/fitmeup/about/1.png" },
      { title: "Tidur Lebih Nyenyak Setiap Malam", image: "/brand/fitmeup/about/2.png" },
      { title: "Relaksasi dalam Satu Botol", image: "/brand/fitmeup/about/3.jpeg" },
    ],
    // Showcase — title poster ("Triple Active Formula") then the FOR BETTER SLEEP
    // banner. The bg is a designed card with its wording baked in and rounded corners,
    // so `bannerAspect` matches the art's own ratio (nothing gets cover-cropped) and the
    // bottle sits centred over it, Hair Energy style.
    showcase: {
      hero: "/brand/fitmeup/showcase/title.png",
      heroAspect: "5209 / 3179",
      productAlign: "center",
      bannerAspect: "4495 / 1934",
      variants: [
        // 126% keeps the cap just inside the banner's top edge and the base just above
        // the bottom one — the splash then reads between "BETTER" and "SLEEP".
        { bg: "/brand/fitmeup/showcase/1-2.png", product: "/brand/fitmeup/showcase/1-1.png",
          bgAspect: "4495 / 1934", productAspect: "1231 / 1925", productHeight: "126%" },
      ],
    },
    reasons: [
      { icon: "🌙", title: "Triple Active Formula", body: "Magnesium, L-Theanine, dan L-Tryptophan dalam satu botol 160 mL." },
      { icon: "😴", title: "Bantu tidur lebih nyenyak", body: "Menenangkan tubuh dan pikiran sebelum waktunya beristirahat." },
      { icon: "🫧", title: "Praktis dan siap minum", body: "Cukup satu botol di malam hari — tanpa takaran, tanpa ribet." },
    ],
  };

export default entry;
