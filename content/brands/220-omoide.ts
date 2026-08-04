import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "omoide",
    name: "Omoide",
    division: "food",
    tagline: { en: "Authentic Japanese cuisine, made for you.", id: "Kuliner Jepang yang otentik untuk kamu." },
    // No trailing period: BrandIntro appends its own to the first sentence, so a
    // period here renders as "khasnya..".
    description:
      { en: "We bring authentic Japanese deliciousness closer through high-quality, convenient products, without losing its signature character", id: "Kami membawa kelezatan asli Jepang lebih dekat melalui produk berkualitas tinggi yang praktis, tanpa mengurangi karakter khasnya" },
    accentClass: "bg-brand-omoide",
    // Gold from the reference: the lineup's Learn more / Buy pills and the
    // "About Omoide" eyebrow are all #C17817. The maroon (#6E0F1D) in the
    // reference is type colour, which the shared components own.
    accentHex: "#C17817",
    // No standalone brand card art — CrossSell wants a 3:4 tile, and the
    // lifestyle shot from `about` is already exactly that ratio.
    heroImage: "/brand/omoide/about/3.jpg",
    heroLayers: [
      // Warm cream gradient banner (back). Non-sized => full-bleed cover.
      { src: "/brand/omoide/hero/bg.jpg", depth: 18, enterDelay: 0 },
      // Tsukune pack pair — enters from the right, sits in the banner's right
      // half. Width is clamped against vh so a short viewport can't blow the
      // pack past the banner's bottom edge.
      // Geometry is set on the LAYER BOX, and 1.png carries ~6% transparent margin
      // on every side, so the box runs wider/higher than the pack you actually see:
      // 44.7vw of box => 40vw of visible pack, landing it exactly where the
      // reference puts it (x 939-1708, y 178-935 of a 1920x1084 banner).
      { src: "/brand/omoide/hero/1.png", depth: 60, enterFrom: "right", enterDelay: 0.25,
        width: "min(44.7vw, 79.5vh)", maxWidth: "895px", aspectRatio: "1789 / 1771", left: "46.2%", top: "11.7%",
        mobile: { left: "6%", top: "27.5%", width: "min(86vw, 45vh)" } },
    ],
    heroContent: {
      logo: "/brand/omoide/hero/wordmark.png",
      logoAspect: "1800 / 902",
      logoWidth: "21.6vw",
      maxWidth: "30vw",
      tagline: { en: "Taste of Japan", id: "Cita Rasa Jepang" },
      subtitle: { en: "inspired by authentic Japanese culinary tradition", id: "terinspirasi dari tradisi kuliner Jepang asli" },
      left: "13.7%",
      offsetY: "-8.1vh",
      // Light cream banner => dark type, and the navbar paints itself to match.
      theme: "dark",
      delay: 0.55,
      mobile: { logoWidth: "56vw" },
    },
    bannerBg: "#F5DEC6",
    hero: false,
    products: [
      { name: "Tsukune", variant: { en: "Original", id: "Original" }, size: { en: "60g", id: "60g" }, image: "/brand/omoide/product-lineup/tsukune.png" },
    ],
    reasons: [
      { icon: "🍢", title: { en: "Chunky & juicy", id: "Tebal & Berisi" }, body: { en: "Japanese-style chicken meatball skewers with a thick, juicy texture.", id: "Sate bakso ayam ala Jepang dengan tekstur tebal dan berisi." } },
      { icon: "🐔", title: { en: "Minced chicken meat", id: "Daging ayam cincang" }, body: { en: "Made from quality chicken, coarsely ground in the classic tsukune style.", id: "Dibuat dari daging ayam berkualitas, digiling kasar khas tsukune." } },
      { icon: "⏱️", title: { en: "Fully cooked, ready to eat", id: "Sudah matang, tinggal makan" }, body: { en: "Just warm it up briefly — convenient anytime.", id: "Cukup hangatkan sebentar — praktis untuk kapan saja." } },
      { icon: "🏭", title: { en: "Carefully controlled production", id: "Proses produksi terjaga" }, body: { en: "Produced to high quality standards and halal-certified.", id: "Diproduksi dengan standar mutu tinggi dan bersertifikat halal." } },
    ],
    about: [
      { title: { en: "Authentic Japanese flavor", id: "Cita rasa Jepang asli" }, image: "/brand/omoide/about/1.jpg" },
      { title: { en: "High-quality production process", id: "Proses produksi yang berkualitas tinggi" }, image: "/brand/omoide/about/2.jpg" },
      { title: { en: "Japanese cuisine ready to enjoy", id: "Kuliner Jepang yang siap disantap" }, image: "/brand/omoide/about/3.jpg" },
    ],
    showcase: {
      hero: "/brand/omoide/showcase/title.png",
      heroAspect: "2439 / 1244",
      // The variant art is a finished, self-contained card (rounded corners and
      // its own padding baked in), so the frame takes the art's exact ratio and
      // the scroll drift is off — a drift would slide the card's own edge into
      // view. Same pattern as Nestle Pure Life.
      bannerAspect: "2301 / 1046",
      parallax: false,
      variants: [
        { bg: "/brand/omoide/showcase/1-2.png", bgAspect: "2301 / 1046",
          product: "/brand/omoide/showcase/1-1.png", productAspect: "1789 / 1771",
          // Reference sits the pack in the card's left third, just clear of the
          // "TSUKUNE" lockup baked into the art. As in the hero, these size the
          // BOX — 1-1.png's ~6% transparent margin means the visible pack is
          // 89% of it, so the box runs bigger than the pack you see.
          productHeight: "82.8%", productShiftX: "-67.7%", productShiftY: "-0.9%" },
      ],
    },
    features: [
      {
        title: { en: "Authentic Japanese flavor", id: "Cita rasa Jepang asli" },
        body: { en: "Japanese-style chicken meatball skewers, made from quality chicken — juicy and ready to enjoy.", id: "Sate bakso ayam ala Jepang, dibuat dari daging ayam berkualitas — juicy dan siap dinikmati." },
        image: "/brand/omoide/about/1.jpg",
      },
      {
        title: { en: "High-quality production process", id: "Proses produksi yang berkualitas tinggi" },
        body: { en: "Every tsukune is shaped and packed to a quality standard maintained from start to finish.", id: "Setiap tsukune dicetak dan dikemas dengan standar mutu yang terjaga dari awal sampai akhir." },
        image: "/brand/omoide/about/2.jpg",
      },
      {
        title: { en: "Japanese cuisine ready to enjoy", id: "Kuliner Jepang yang siap disantap" },
        body: { en: "Fully cooked, just warm it up — Japanese deliciousness that's convenient anytime.", id: "Sudah matang, tinggal hangatkan — kelezatan Jepang yang praktis untuk kapan saja." },
        image: "/brand/omoide/about/3.jpg",
      },
    ],
  };

export default entry;
