import type { Brand } from "@/lib/brands";

  // 1e — 128
const entry: Brand = {
    slug: "128",
    name: "128",
    division: "beauty",
    tagline: { en: "Beauty Secrets from the Ocean Floor.", id: "Rahasia Kecantikan dari Dasar Samudera." },
    // Becomes the BrandIntro headline (it appends its own period, so none here).
    description: {
      en: "Indonesia's first skincare with Saccharina Japonica, which moisturizes, soothes, and is rich in antioxidants",
      id: "Skincare pertama di Indonesia dengan Saccharina Japonica, yang melembapkan, menenangkan, dan kaya antioksidan",
    },
    accentClass: "bg-brand-128",
    accentHex: "#E8735C", // 128 coral — Learn more / Buy / CTA
    heroImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop",
    // Hero — coral banner (bannerBg) with the "128" wordmark + tagline on the left and
    // the product cluster (composited from hero/1–4) on the right. Hair Energy pattern.
    heroLayers: [
      { src: "/brand/128/hero/cluster.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(52vw, 65vh, 700px)", aspectRatio: "3493 / 2130", right: "1%", top: "20%",
        mobile: { width: "min(96vw, 41vh, 440px)", left: "2%", top: "34%" } },
    ],
    heroContent: {
      logo: "/brand/128/hero/wordmark.png",
      logoAspect: "2160 / 1415",
      logoWidth: "16vw",
      maxWidth: "36vw",
      tagline: { en: "Beauty Secrets\nfrom the Ocean Floor", id: "Rahasia Kecantikan\ndari Dasar Samudera" },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "9%",
      // white text on the coral banner (theme omitted = white)
      delay: 0.5,
      mobile: { logoWidth: "35vw" },
    },
    bannerBg: "#FBA084", // 128 coral
    hero: true,
    // Full skincare line-up (9 SKU across the four ranges).
    products: [
      { name: "Facial Wash", variant: { en: "Bright & Radiance", id: "Bright & Radiance" }, image: "/brand/128/product-lineup/facial-wash-bright-radiance.png" },
      { name: "Toner", variant: { en: "Bright & Radiance", id: "Bright & Radiance" }, image: "/brand/128/product-lineup/toner-bright-radiance.png" },
      { name: "Serum", variant: { en: "Bright & Radiance", id: "Bright & Radiance" }, image: "/brand/128/product-lineup/serum-bright-radiance.png" },
      { name: "Moisturizer", variant: { en: "Bright & Radiance", id: "Bright & Radiance" }, image: "/brand/128/product-lineup/moisturizer-bright-radiance.png" },
      { name: "Facial Wash", variant: { en: "Intensive Barrier Care", id: "Intensive Barrier Care" }, image: "/brand/128/product-lineup/facial-wash-intensive-barrier-care.png" },
      { name: "Primer", variant: { en: "Intensive Barrier Care", id: "Intensive Barrier Care" }, image: "/brand/128/product-lineup/primer-intensive-barrier-care.png" },
      { name: "Boost", variant: { en: "Intensive Barrier Care", id: "Intensive Barrier Care" }, image: "/brand/128/product-lineup/boost-intensive-barrier-care.png" },
      { name: "Moisturizer", variant: { en: "Pro Acne Defense", id: "Pro Acne Defense" }, image: "/brand/128/product-lineup/moisturizer-pro-acne-defense.png" },
      { name: "Moisturizer", variant: { en: "Advanced Age Repair", id: "Advanced Age Repair" }, image: "/brand/128/product-lineup/moisturizer-advanced-age-repair.png" },
    ],
    about: [
      { title: { en: "Enriched with Saccharina Japonica", id: "Diperkaya Saccharina Japonica" }, image: "/brand/128/about/1.png" },
      { title: { en: "Moisturizes Skin", id: "Melembapkan Kulit" }, image: "/brand/128/about/2.png" },
      { title: { en: "Stronger Skin Barrier", id: "Skin Barrier Lebih Kuat" }, image: "/brand/128/about/3.png" },
    ],
    // Showcase — title poster then four range banners. Each bg ({n}-last) is a designed
    // coral/nude/green/purple text card (2160×1015), and the product cluster ({cluster-n},
    // composited from that range's product PNGs) sits centred over it. bannerAspect keeps
    // the designed card uncropped.
    showcase: {
      hero: "/brand/128/showcase/title.png",
      heroAspect: "2160 / 1348",
      heroMaxWidth: "min(92vw, 46rem)",
      productAlign: "center",
      bannerAspect: "2160 / 1015",
      variants: [
        // BRIGHT & RADIANCE — 4 products (wide cluster → sits centred, text peeks at edges)
        { bg: "/brand/128/showcase/1-5.png", product: "/brand/128/showcase/cluster-1.png", bgAspect: "2160 / 1015", productAspect: "3307 / 2090", productHeight: "88%" },
        // INTENSIVE BARRIER CARE — 3 products
        { bg: "/brand/128/showcase/2-4.png", product: "/brand/128/showcase/cluster-2.png", bgAspect: "2160 / 1015", productAspect: "2661 / 2090", productHeight: "94%" },
        // PRO ACNE DEFENSE — 2 products, nudged left of the wording
        { bg: "/brand/128/showcase/3-3.png", product: "/brand/128/showcase/cluster-3.png", bgAspect: "2160 / 1015", productAspect: "1802 / 2090", productHeight: "102%", productShiftX: "-24%" },
        // ADVANCED AGE REPAIR — 1 product, slightly left of centre
        { bg: "/brand/128/showcase/4-2.png", product: "/brand/128/showcase/cluster-4.png", bgAspect: "2160 / 1015", productAspect: "1494 / 2090", productHeight: "102%", productShiftX: "-6%" },
      ],
    },
  };

export default entry;
