import type { Brand } from "@/lib/brands";

  /* ───────────────── Food and Beverage ───────────────── */
const entry: Brand = {
    slug: "wonhae",
    name: "Wonhae",
    division: "food",
    tagline: "It's All You Want.",
    // Becomes the BrandIntro headline (it appends its own period, so none here).
    description:
      "Cita rasa autentik Korea Selatan, dikurasi khusus untuk Anda",
    accentClass: "bg-brand-wonhae",
    accentHex: "#E63946", // Wonhae red — Learn more / Buy / CTA
    heroImage:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1800&auto=format&fit=crop",
    // Hero — yellow banner (bannerBg) with the WONHAE lockup on the left and the
    // product cluster on the right. Same pattern as the Hair Energy hero.
    heroLayers: [
      { src: "/brand/wonhae/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(46vw, 620px)", aspectRatio: "1949 / 1828", right: "3%", top: "14%",
        mobile: { width: "min(90vw, 410px)", left: "5%", top: "33%" } },
    ],
    // The wordmark image already includes the "IT'S ALL YOU WANT" heading + subtitle
    // (per the updated asset / reference), so no separate HTML tagline is drawn — just
    // the lockup. Dark text theme keeps the navbar legible on the yellow banner.
    heroContent: {
      logo: "/brand/wonhae/hero/wordmark.png",
      logoAspect: "1000 / 579",
      logoWidth: "26vw",
      left: "9%",
      theme: "dark",
      delay: 0.5,
      mobile: { logoWidth: "62vw" },
    },
    bannerBg: "#FFDD58", // Wonhae yellow
    hero: true,
    products: [
      // Ready to eat — topokki & ramyun
      { name: "Spicy Rapokki", size: "155 g", image: "/brand/wonhae/product-lineup/spicy-rapokki-155g.png" },
      { name: "Topokki", variant: "Carbonara", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-carbonara-80g.png" },
      { name: "Topokki Kids", variant: "Carbonara", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-kids-carbo-new-80g.png" },
      { name: "Topokki Kids", variant: "Baby Shark", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-kids-baby-shark-80g.png" },
      { name: "Black Fried Ramyun", size: "125 g", image: "/brand/wonhae/product-lineup/black-fried-ramyun-125g-front.png" },
      { name: "Cheese Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/cheese-ramyun-120gr.png" },
      { name: "Cheese Ramyun", size: "90 g", image: "/brand/wonhae/product-lineup/cheese-ramyun-90g.png" },
      { name: "Fried Rose Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/fried-rose-ramyun-120gr.png" },
      { name: "Fried Rose Ramyun", size: "97 g", image: "/brand/wonhae/product-lineup/fried-rose-ramyun-97g.png" },
      { name: "Fried Corn Cheese Ramyun", size: "120 g", image: "/brand/wonhae/product-lineup/fried-corn-cheese-ramyun-120gr.png" },
      // Snacks
      { name: "Topokki Snack", variant: "Creamy Rose", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-rose-80-gr.png" },
      { name: "Topokki Snack", variant: "Sweet & Spicy", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-ss-80-gr.png" },
      { name: "Topokki Snack", variant: "Cheese Buldak", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-cheese-buldak-80g.png" },
      { name: "Topokki Snack", variant: "Cheese Truffle Mayo", size: "80 g", image: "/brand/wonhae/product-lineup/topokki-snack-cheese-truffle-mayo-80gr.png" },
      { name: "Topokki Snack", variant: "Creamy Rose", size: "16 g", image: "/brand/wonhae/product-lineup/topokki-snack-creamy-rose-16gr.png" },
      { name: "Topokki Snack", variant: "Sweet & Spicy", size: "16 g", image: "/brand/wonhae/product-lineup/topokki-snack-spicy-sweet-16gr.png" },
      { name: "Potato Snack", variant: "Spicy Korean", size: "60 g", image: "/brand/wonhae/product-lineup/potatosnack-spicy-korean-60gr.png" },
      { name: "Nori Crispy", image: "/brand/wonhae/product-lineup/nori-crispy.png" },
      { name: "Beef Seaweed", size: "120 g", image: "/brand/wonhae/product-lineup/beef-seaweed-120gr.png" },
      { name: "Churros Snack", variant: "Original", size: "60 g", image: "/brand/wonhae/product-lineup/churros-original.png" },
      { name: "Churros Snack", variant: "Peanut Butter", size: "60 g", image: "/brand/wonhae/product-lineup/churros-peanut-butter.png" },
      // Confectionery
      { name: "Banana Bites", variant: "Original", size: "60 g", image: "/brand/wonhae/product-lineup/banana-bites-ori-60gr.png" },
      { name: "Banana Bites", variant: "Choco", size: "60 g", image: "/brand/wonhae/product-lineup/banana-bites-choco-60gr.png" },
      { name: "Banana Bites", size: "12 g", image: "/brand/wonhae/product-lineup/banana-bites-12gr.png" },
      { name: "Matcha Berry Bites", image: "/brand/wonhae/product-lineup/matcha-berry-bites-mockup.png" },
      { name: "Pistachio Choco Bites", size: "30 g", image: "/brand/wonhae/product-lineup/pistachio-choco-bites-30g.png" },
      { name: "Strawberry Cheesecake Bites", size: "30 g", image: "/brand/wonhae/product-lineup/strawberry-cheesecake-30g.png" },
      { name: "Choco Gummy", size: "35 g", image: "/brand/wonhae/product-lineup/choco-gummy-35-gr.png" },
      { name: "Yogurt Gummy", size: "48 g", image: "/brand/wonhae/product-lineup/yogurt-gummy-48gr.png" },
      // Ready to drink
      { name: "Banana Milk", variant: "Original", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-ori.png" },
      { name: "Banana Milk", variant: "Choco", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-choco.png" },
      { name: "Banana Milk", variant: "Creamy", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-creamy.png" },
      { name: "Banana Milk", variant: "Strawberry", size: "250 mL", image: "/brand/wonhae/product-lineup/banana-milk-strawberry.png" },
      { name: "Watermelon Milk", size: "180 mL", image: "/brand/wonhae/product-lineup/watermelon-milk-180ml.png" },
      { name: "Melon Milk", size: "180 mL", image: "/brand/wonhae/product-lineup/melon-milk-180ml-alfamart.png" },
      { name: "Cheesecake Milk", size: "250 mL", image: "/brand/wonhae/product-lineup/cheesecake-milk-250ml.png" },
      { name: "DIY Cafe", variant: "Blue Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-blue-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: "Peach Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-peach-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: "Pineapple Lemonade", size: "180 mL", image: "/brand/wonhae/product-lineup/diy-cafe-front-pineapple-lemonade-180ml.png" },
    ],
    about: [
      { title: "Cita Rasa Korea yang Autentik", image: "/brand/wonhae/about/1.png" },
      { title: "Beragam Pilihan Produk", image: "/brand/wonhae/about/2.png" },
      { title: "Bahan Baku Berkualitas Tinggi", image: "/brand/wonhae/about/3.png" },
    ],
    // Showcase — title poster then four category banners. Each bg ({n}-2) carries the
    // baked wording, and the product cluster ({n}-1) sits OVER it, so productAlign is
    // "center" (Hair Energy pattern). Banners 3 & 4 place the cluster to one side, so
    // they get a productShiftX; banners 1 & 2 stay centred.
    showcase: {
      hero: "/brand/wonhae/showcase/title.png",
      heroAspect: "2340 / 1443",
      heroMaxWidth: "min(92vw, 52rem)",
      productAlign: "center",
      variants: [
        // READY TO EAT — cluster centred
        { bg: "/brand/wonhae/showcase/1-2.png", product: "/brand/wonhae/showcase/1-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "112%" },
        // READY TO DRINK — cluster centred
        { bg: "/brand/wonhae/showcase/2-2.png", product: "/brand/wonhae/showcase/2-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "104%" },
        // CONFECTIONERY — wording left, cluster right
        { bg: "/brand/wonhae/showcase/3-2.png", product: "/brand/wonhae/showcase/3-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "110%", productShiftX: "26%" },
        // SNACKS — cluster left, wording right
        { bg: "/brand/wonhae/showcase/4-2.png", product: "/brand/wonhae/showcase/4-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "112%", productShiftX: "-25%" },
      ],
    },
    reasons: [
      { icon: "🇰🇷", title: "Rasa otentik Korea", body: "Dikembangkan dengan referensi langsung ke street food Korea — bukan sekadar terinspirasi." },
      { icon: "⏱️", title: "Siap dalam 3 menit", body: "Semua produk Mujigae praktis diolah — cocok untuk lapar tengah malam." },
      { icon: "🌶️", title: "Variasi level pedas", body: "Dari mild carbonara sampai spicy rose — ada untuk setiap lidah." },
      { icon: "🛒", title: "Tersedia di mini-market", body: "Hadir di Alfamart, Indomaret, dan e-commerce favoritmu." },
    ],
    features: [
      {
        title: "Topokki di rumah, rasa seperti di Myeongdong",
        body: "Kunyahan empuk dengan saus pedas-manis yang otentik — siap dalam menit.",
        image:
          "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ramyun dengan twist",
        body: "Butter Corn, Cheese, Fried Rose — sentuhan modern untuk mie Korea favoritmu.",
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Snack time, upgraded",
        body: "Banana Milk Bites, Nori Crispy, Potato Spicy — teman ngumpul & scroll.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
