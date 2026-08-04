import type { Brand } from "@/lib/brands";

  // 1a — Asters
const entry: Brand = {
    slug: "asters",
    name: "Asters",
    division: "beauty",
    parent: "makarizo",
    tagline: { en: "Beauty tools with the best performance, for everyone.", id: "Alat kecantikan dengan performa terbaik, untuk semua." },
    description: {
      en: "Salon-quality hairstyles every day, right at home. Achieve stunning hair with the premium collection from Makarizo Asters. Equipped with smart heat-protection technology, create long-lasting styles while keeping your hair healthy with ease.",
      id: "Gaya rambut ala salon setiap hari dari rumah. Wujudkan rambut memukau dengan koleksi premium dari Makarizo Asters. Dilengkapi teknologi pelindung panas pintar, ciptakan gaya tahan lama sekaligus jaga kesehatan rambut Anda dengan mudah.",
    },
    accentClass: "bg-brand-asters",
    // Sampled from the "asters" lettering in hero/wordmark.png — the same warm
    // taupe used for every heading baked into the showcase artwork.
    accentHex: "#A67E6C",
    // No standalone 3:4 brand card art — CrossSell (the only reader) crops this
    // 1.10:1 About photo; the motor sits dead centre so it survives the crop.
    heroImage: "/brand/asters/about/1.png",
    // Two styling tools on a warm off-white banner, mirroring the reference: the
    // "G" dryer sits lower and further left, the round-barrel dryer overlaps it
    // from the right and slightly higher. Both PNGs carry wide transparent
    // margins, so the layer `width` is much larger than the visible product —
    // the vh term keeps them inside the banner on short/wide screens.
    heroLayers: [
      { src: "/brand/asters/hero/2.png", depth: 30, enterFrom: "left", enterDelay: 0.15, width: "min(52vw, 63vh)", maxWidth: "1435px", aspectRatio: "2869 / 4903", left: "31%", top: "-3%",
        mobile: { left: "4%", top: "20%", width: "min(70vw, 42vh)" } },
      { src: "/brand/asters/hero/1.png", depth: 52, enterFrom: "right", enterDelay: 0.35, width: "min(32vw, 38vh)", maxWidth: "795px", aspectRatio: "1590 / 3064", left: "59%", top: "14%",
        mobile: { left: "48%", top: "30%", width: "min(44vw, 26vh)" } },
    ],
    heroContent: {
      logo: "/brand/asters/hero/wordmark.png",
      logoAspect: "1513 / 740",
      logoWidth: "32vw",
      maxWidth: "34vw",
      tagline: { en: "Beauty tools with the best performance, for everyone", id: "Alat kecantikan dengan performa terbaik, untuk semua" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      offsetY: "12vh",
      // Warm off-white banner → dark copy (and the navbar paints itself dark).
      theme: "dark",
      delay: 0.6,
      mobile: { logoWidth: "60vw" },
    },
    bannerBg: "#F1EEEA",
    hero: false,
    products: [
      // `imageScale` normalises the SKUs against each other: the artwork is cropped
      // tight per product, so a small accessory (massager, bangs clip) would
      // otherwise render as tall as a hair dryer inside the square stage.
      { name: "VOLA", variant: { en: "Volumizing Styler", id: "Penata Rambut Bervolume" }, image: "/brand/asters/product-lineup/vola-volumizing-styler.png" },
      { name: "MOVA", variant: { en: "Hair Straightening Brush", id: "Sikat Pelurus Rambut" }, image: "/brand/asters/product-lineup/mova-hair-straightening-brush.png" },
      { name: "High Speed Hair Dryer", image: "/brand/asters/product-lineup/high-speed-hair-dryer.png" },
      { name: "High Performance Hair Iron", image: "/brand/asters/product-lineup/high-performance-hair-iron.png" },
      { name: "Scalp Therapy Massager", image: "/brand/asters/product-lineup/scalp-therapy-massager.png", imageScale: 0.55 },
      { name: "Paddle Detangler Brush", image: "/brand/asters/product-lineup/paddle-detangler-brush.png" },
      { name: "Volumizing Bangs Clip", image: "/brand/asters/product-lineup/volumizing-bangs-clip.png", imageScale: 0.68 },
    ],
    about: [
      { title: { en: "Advanced Technology", id: "Teknologi Canggih" }, image: "/brand/asters/about/1.png" },
      { title: { en: "Gentle on Hair", id: "Lembut di Rambut" }, image: "/brand/asters/about/2.png" },
    ],
    showcase: {
      hero: "/brand/asters/showcase/title.png",
      heroAspect: "4591 / 3142",
      heroMaxWidth: "min(100%, 53rem)",
      // The banner art is a finished card (rounded corners + caption baked in), so
      // the frame takes the art's own ratio instead of the 5:2 default — a cover
      // crop would clip the caption sitting at 94% of the artwork height.
      bannerAspect: "4810 / 2261",
      variants: [
        // 1-1.png carries a 14.7% transparent top margin, so the box is lifted
        // (`productShiftY`) to sit the tools optically centred and keep their handles
        // clear of the caption baked into the bottom 85–94% of the banner art.
        { bg: "/brand/asters/showcase/1-2.png", bgAspect: "4810 / 2261", product: "/brand/asters/showcase/1-1.png", productAspect: "2148 / 2363", productHeight: "87%", productShiftX: "10%", productShiftY: "-9%", href: "/brands/asters/styling-tools" },
        { bg: "/brand/asters/showcase/2-2.png", bgAspect: "4810 / 2260", product: "/brand/asters/showcase/2-1.png", productAspect: "2828 / 2058", productHeight: "90%", href: "/brands/asters/hair-accessories" },
      ],
    },
  };

export default entry;
