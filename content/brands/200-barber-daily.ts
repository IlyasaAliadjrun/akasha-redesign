import type { Brand } from "@/lib/brands";

  /* ───────────────── Men's Care ───────────────── */
const entry: Brand = {
    slug: "barber-daily",
    name: "Barber Daily",
    division: "mens",
    // Shown under the CTA headline ("Menuju Ganteng & Wangi bersama Barber Daily.").
    tagline: { en: "Step Up Your Grooming Game with Barber Daily.", id: "Menuju Ganteng & Wangi bersama Barber Daily." },
    hideCtaTagline: true,
    // Becomes the BrandIntro headline (it appends its own period, so none here;
    // no ". " inside so it stays one block).
    ctaHeadline: {
    en: "Step Up Your Grooming Game with Barber Daily.",
    id: "Menuju Ganteng & Wangi bersama Barber Daily.",
  },
    description:
      { en: "The ultimate men's grooming solution, dedicated to helping you discover the perfect personal care routine tailored specifically for Indonesian men", id: "Solusi perawatan pria terbaik yang siap nemenin kalian buat nemuin produk perawatan diri khusus untuk pria Indonesia" },
    accentClass: "bg-brand-bd",
    // Barber Daily brown — sampled from the showcase banner art (#673A17–#6F4524).
    // Drives Learn more / Buy, the About eyebrow, the product wash and the CTA block.
    accentHex: "#6B3F1D",
    // No standalone 3:4 brand card art — CrossSell reads this; the hero renders
    // from `heroLayers`.
    heroImage: "/media/home/hero-carousel/barber-daily.jpg",
    // Hero — flat brown banner (bannerBg; the folder ships no background plate) with
    // the wordmark + wording on the left and the three face-wash SKUs staggered on the
    // right. Hair Energy pattern. Widths use min(vw, vh) so the cluster scales with the
    // shorter axis; every layer carries a `mobile` override (§E).
    // NOTE: each PNG has generous transparent padding (hero/3 fills only ~30% of its
    // square canvas), so the layer boxes below are much larger than the bottles look.
    heroLayers: [
      // Acne Care Oil-Control Face Wash — back, upper middle, drops in from the top.
      { src: "/media/brands/barber-daily/hero/2.png", depth: 34, enterFrom: "top", enterDelay: 0.2,
        width: "min(20vw, 32vh)", aspectRatio: "1531 / 2722", left: "71%", top: "4%",
        mobile: { left: "39%", top: "20%", width: "min(40vw, 28vh)" } },
      // Ultra Sensitive Face Wash — right, enters from the right.
      { src: "/media/brands/barber-daily/hero/3.png", depth: 52, enterFrom: "right", enterDelay: 0.4,
        width: "min(55vw, 80vh)", aspectRatio: "3945 / 3946", left: "62%", top: "23%",
        mobile: { left: "22%", top: "34%", width: "min(85vw, 65vh)" } },
      // Bright Radiance Face Wash — front, largest, enters from the left (1st).
      { src: "/media/brands/barber-daily/hero/1.png", depth: 70, enterFrom: "left", enterDelay: 0,
        width: "min(30vw, 49vh)", aspectRatio: "2161 / 3691", left: "59.3%", top: "23%",
        mobile: { left: "14.5%", top: "31.5%", width: "min(52vw, 36vh)" } },
    ],
    heroContent: {
      logo: "/media/brands/barber-daily/hero/wordmark.png",
      logoAspect: "1553 / 1060",
      logoWidth: "21vw",
      maxWidth: "32vw",
      tagline: { en: "Advanced Grooming, Engineered for Men", id: "Perawatan Terbaik, Diformulasikan untuk Pria." },
      ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
      ctaHref: "#about",
      left: "8%",
      offsetY: "2vh",
      // white text on the dark brown banner (theme omitted = light/white)
      delay: 0.6,
      mobile: { logoWidth: "30vw" },
    },
    bannerBg: "#6B3F1D",
    hero: false,
    // Full Barber Daily range (24 SKU) grouped skincare → haircare → body → tools,
    // mirroring the four showcase banners. `imageScale` only nudges the products whose
    // artwork sits small inside its 2250×2250 canvas (the pomade/gel jars fill ~28% of
    // the frame); every scaled render stays far below the source resolution.
    products: [
      { name: "Face Wash", variant: { en: "Bright Radiance", id: "Bright Radiance" }, image: "/media/brands/barber-daily/product-lineup/products-08.png" },
      { name: "Face Wash", variant: { en: "Acne Care Oil-Control", id: "Acne Care Oil-Control" }, image: "/media/brands/barber-daily/product-lineup/products-01.png" },
      { name: "Face Wash", variant: { en: "Ultra Sensitive", id: "Ultra Sensitive" }, image: "/media/brands/barber-daily/product-lineup/products-09.png" },
      { name: "Moisturizer", variant: { en: "Bright Radiance", id: "Bright Radiance" }, size: { en: "30 mL", id: "30 mL" }, image: "/media/brands/barber-daily/product-lineup/products-03.png", imageScale: 1.15 },
      { name: "Moisturizer", variant: { en: "Bright Radiance", id: "Bright Radiance" }, size: { en: "50 mL", id: "50 mL" }, image: "/media/brands/barber-daily/product-lineup/products-04.png" },
      { name: "Moisturizer", variant: { en: "Acne Care Oil-Control", id: "Acne Care Oil-Control" }, size: { en: "30 mL", id: "30 mL" }, image: "/media/brands/barber-daily/product-lineup/products-05.png", imageScale: 1.15 },
      { name: "Serum", variant: { en: "Bright Radiance", id: "Bright Radiance" }, size: { en: "40 mL", id: "40 mL" }, image: "/media/brands/barber-daily/product-lineup/products-06.png", imageScale: 1.1 },
      { name: "Spot Gel", variant: { en: "Acne Care Oil-Control", id: "Acne Care Oil-Control" }, size: { en: "25 mL", id: "25 mL" }, image: "/media/brands/barber-daily/product-lineup/products-02.png" },
      { name: "Shampoo", variant: { en: "Dandruff & Oil-Control", id: "Dandruff & Oil-Control" }, image: "/media/brands/barber-daily/product-lineup/products-11.png" },
      { name: "4in1", variant: { en: "Shampoo, Conditioner, Body Wash, Face Wash", id: "Shampoo, Conditioner, Body Wash, Face Wash" }, image: "/media/brands/barber-daily/product-lineup/products-19.png" },
      { name: "Hair Tonic", variant: { en: "2in1 Anti-Dandruff & Anti-Hairfall", id: "2in1 Anti-Dandruff & Anti-Hairfall" }, image: "/media/brands/barber-daily/product-lineup/products-12.png" },
      { name: "Styling Gel", variant: { en: "Wet-Look Finish", id: "Wet-Look Finish" }, image: "/media/brands/barber-daily/product-lineup/products-14.png" },
      { name: "Styling Gel", variant: { en: "Wet-Look Finish · Hold Factor 3", id: "Wet-Look Finish · Hold Factor 3" }, image: "/media/brands/barber-daily/product-lineup/products-13.png", imageScale: 1.7 },
      { name: "Pomade", variant: { en: "Strong Compound · Semi-Glossy Finish", id: "Strong Compound · Semi-Glossy Finish" }, image: "/media/brands/barber-daily/product-lineup/products-16.png", imageScale: 1.7 },
      { name: "Pomade", variant: { en: "Strong Compound · Hold Factor 4", id: "Strong Compound · Hold Factor 4" }, image: "/media/brands/barber-daily/product-lineup/products-15.png", imageScale: 1.7 },
      { name: "Pomade", variant: { en: "Medium Compound · Glossy Finish", id: "Medium Compound · Glossy Finish" }, image: "/media/brands/barber-daily/product-lineup/products-18.png", imageScale: 1.7 },
      { name: "Pomade", variant: { en: "Medium Compound · Hold Factor 3", id: "Medium Compound · Hold Factor 3" }, image: "/media/brands/barber-daily/product-lineup/products-17.png", imageScale: 1.7 },
      { name: "Deodorant", variant: { en: "Antiperspirant Power Shield", id: "Antiperspirant Power Shield" }, image: "/media/brands/barber-daily/product-lineup/products-10.png", imageScale: 1.2 },
      { name: "Deodorant", variant: { en: "Antiperspirant Comfort Shield", id: "Antiperspirant Comfort Shield" }, image: "/media/brands/barber-daily/product-lineup/products-07.png", imageScale: 1.25 },
      { name: "Extrait de Parfum", variant: { en: "Pour D'Glass", id: "Pour D'Glass" }, image: "/media/brands/barber-daily/product-lineup/products-23.png" },
      { name: "Extrait de Parfum", variant: { en: "Blossom at Dusk", id: "Blossom at Dusk" }, image: "/media/brands/barber-daily/product-lineup/products-24.png" },
      { name: "Extrait de Parfum", variant: { en: "Lost in Motion", id: "Lost in Motion" }, image: "/media/brands/barber-daily/product-lineup/products-21.png" },
      { name: "Extrait de Parfum", variant: { en: "Own the Night", id: "Own the Night" }, image: "/media/brands/barber-daily/product-lineup/products-22.png" },
      { name: "Razor", variant: { en: "6 Blades", id: "6 Blades" }, image: "/media/brands/barber-daily/product-lineup/products-20.png" },
    ],
    about: [
      { title: { en: "Low pH Formula", id: "Formula pH Rendah" }, image: "/media/brands/barber-daily/about/1.png" },
      { title: { en: "Gentle Formula", id: "Formula Lembut" }, image: "/media/brands/barber-daily/about/2.png" },
    ],
    // Showcase — the "Sabun Cuci Muka Pria No 1" poster, then the four category
    // banners. Each bg ({n}-2) is a designed 4810×2260 brown card with the wording and
    // the caption baked in, so `bannerAspect` keeps it uncropped (the 128 pattern);
    // the product sits centred over the gap between the two words. Every product PNG
    // has heavy transparent padding, hence the >100% `productHeight` values — the
    // visible bottle still lands inside the banner.
    showcase: {
      hero: { en: "/media/brands/barber-daily/showcase/title.en.png", id: "/media/brands/barber-daily/showcase/title.id.png" },
      heroAspect: "5427 / 4242",
      heroOffsetY: "60px",
      heroMobileOffsetY: "23px",
      heroMobileOffsetX: "17px",
      productAlign: "center",
      bannerAspect: "4810 / 2260",
      variants: [
        // SKIN CARE — Acne Care Oil-Control Face Wash
        { bg: { en: "/media/brands/barber-daily/showcase/1-2.en.png", id: "/media/brands/barber-daily/showcase/1-2.id.png" }, product: "/media/brands/barber-daily/showcase/1-1.png",
          bgAspect: "4810 / 2260", productAspect: "1531 / 2722", productHeight: "97%",
          productShiftX: "-2%", productShiftY: "-4%", href: "/brands/barber-daily/skin-care",
          mobile: { productHeight: "110%", productShiftX: "0%", productShiftY: "-4%" } },
        // HAIR CARE — Dandruff & Oil-Control Shampoo
        { bg: { en: "/media/brands/barber-daily/showcase/2-2.en.png", id: "/media/brands/barber-daily/showcase/2-2.id.png" }, product: "/media/brands/barber-daily/showcase/2-1.png",
          bgAspect: "4810 / 2260", productAspect: "3891 / 5524", productHeight: "137%",
          productShiftX: "2%", productShiftY: "10%", href: "/brands/barber-daily/hair-care",
          mobile: { productHeight: "160%", productShiftX: "0%", productShiftY: "10%" } },
        // BODY CARE — Antiperspirant Deodorant
        { bg: { en: "/media/brands/barber-daily/showcase/3-2.en.png", id: "/media/brands/barber-daily/showcase/3-2.id.png" }, product: "/media/brands/barber-daily/showcase/3-1.png",
          bgAspect: "4810 / 2260", productAspect: "2647 / 2646", productHeight: "91%",
          productShiftX: "4%", href: "/brands/barber-daily/body-care",
          mobile: { productHeight: "110%", productShiftX: "0%", productShiftY: "-1%" } },
        // TOOLS — razor, nudged left so it lands over the "O" of the baked wording
        { bg: { en: "/media/brands/barber-daily/showcase/4-2.en.png", id: "/media/brands/barber-daily/showcase/4-2.id.png" }, product: "/media/brands/barber-daily/showcase/4-1.png",
          bgAspect: "4810 / 2260", productAspect: "2045 / 2753", productHeight: "103%",
          productShiftX: "-20%", href: "/brands/barber-daily/tools",
        mobile: { productHeight: "120%", productShiftX: "0%", productShiftY: "-4%" } },
      ],
    },
  };

export default entry;
