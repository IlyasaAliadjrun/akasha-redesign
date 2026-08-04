import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "fitmeup",
    name: "Fitmeup",
    division: "food",
    // The wordmark art already carries this line ("Sleep Better, Live Better"), so the
    // hero doesn't repeat it — it's still used by BrandCTA and the CrossSell card.
    tagline: { en: "Sleep Better, Live Better.", id: "Tidur Lebih Baik, Hidup Lebih Baik." },
    // Becomes the BrandIntro headline; everything after the first ". " renders as the
    // lighter supporting line.
    description:
      { en: "A relaxation drink with Triple Active Formula. Magnesium, L-Theanine, and L-Tryptophan working together for calmer nights and deeper sleep", id: "Minuman relaksasi dengan Triple Active Formula. Magnesium, L-Theanine, dan L-Tryptophan yang bekerja bersama untuk malam yang lebih tenang dan tidur yang lebih nyenyak" },
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
      { src: "/brand/fitmeup/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3, width: "min(40vw, 55vh)", maxWidth: "820px", aspectRatio: "1639 / 2295", right: "15%", top: "15%",
        mobile: { width: "min(72vw, 45vh)", left: "15%", top: "30%" } },
    ],
    // The wordmark image already includes the "Sleep Better, Live Better" tagline, so
    // there is no separate HTML tagline/subtitle/CTA — logo-only hero (see
    // docs/BRAND_PAGE_GUIDE.md §C). Light theme = white text on the dark magenta banner.
    heroContent: {
      logo: "/brand/fitmeup/hero/wordmark.png",
      logoAspect: "11084 / 4839",
      logoWidth: "26vw",
      left: "9%",
      theme: "light",
      delay: 0.5,
      mobile: { logoWidth: "50vw" },
    },
    bannerBg: "#B8336D", // Fitmeup magenta
    hero: false,
    products: [
      // The packshot is a tight, edge-to-edge crop of the tall bottle, so it fills the
      // square frame's full height at rest. `imageScale` shrinks it enough that the
      // hover zoom (scale-110) doesn't push the cap/base past the frame and clip.
      { name: "Relax", size: { en: "160 mL", id: "160 mL" }, image: "/brand/fitmeup/product-lineup/Packshot_Botol Relax_2025_REV.png", imageScale: 0.85 },
    ],
    about: [
      { title: { en: "Triple Active Formula", id: "Triple Active Formula" }, image: "/brand/fitmeup/about/1.png" },
      { title: { en: "Deeper Sleep Every Night", id: "Tidur Lebih Nyenyak Setiap Malam" }, image: "/brand/fitmeup/about/2.png" },
      { title: { en: "Relaxation in One Bottle", id: "Relaksasi dalam Satu Botol" }, image: "/brand/fitmeup/about/3.jpeg" },
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
      { icon: "🌙", title: { en: "Triple Active Formula", id: "Triple Active Formula" }, body: { en: "Magnesium, L-Theanine, and L-Tryptophan in a single 160 mL bottle.", id: "Magnesium, L-Theanine, dan L-Tryptophan dalam satu botol 160 mL." } },
      { icon: "😴", title: { en: "Helps you sleep more soundly", id: "Bantu tidur lebih nyenyak" }, body: { en: "Calms the body and mind before it's time to rest.", id: "Menenangkan tubuh dan pikiran sebelum waktunya beristirahat." } },
      { icon: "🫧", title: { en: "Convenient and ready to drink", id: "Praktis dan siap minum" }, body: { en: "Just one bottle at night — no measuring, no hassle.", id: "Cukup satu botol di malam hari — tanpa takaran, tanpa ribet." } },
    ],
  };

export default entry;
