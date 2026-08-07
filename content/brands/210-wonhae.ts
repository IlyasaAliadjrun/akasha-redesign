import type { Brand } from "@/lib/brands";

  /* ───────────────── Food and Beverage ───────────────── */
const entry: Brand = {
    slug: "wonhae",
    name: "Wonhae",
    division: "food",
    tagline: { en: "It's All You Want.", id: "Semua yang Kamu Inginkan." },
    // Becomes the BrandIntro headline (it appends its own period, so none here).
    description:
      { en: "Authentic South Korean flavors, curated especially for you", id: "Cita rasa autentik Korea Selatan, dikurasi khusus untuk Anda" },
    accentClass: "bg-brand-wonhae",
    accentHex: "#E63946", // Wonhae red — Learn more / Buy / CTA
    heroImage:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1800&auto=format&fit=crop",
    // Hero — yellow banner (bannerBg) with the WONHAE lockup on the left and the
    // product cluster on the right. Same pattern as the Hair Energy hero.
    heroLayers: [
      { src: "/brand/wonhae/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        width: "min(60vw, 100vh)", aspectRatio: "1949 / 1828", right: "5%", top: "5%",
        mobile: { width: "min(90vw, 410px)", left: "5%", top: "33%" } },
    ],
    // The wordmark image already includes the "IT'S ALL YOU WANT" heading + subtitle
    // (per the updated asset / reference), so no separate HTML tagline is drawn — just
    // the lockup. Dark text theme keeps the navbar legible on the yellow banner.
    heroContent: {
      logo: "/brand/wonhae/hero/wordmark.png",
      logoAspect: "1000 / 579",
      logoWidth: "min(30vw, 760px)",
      left: "9%",
      offsetY: "3.5vh",
      theme: "dark",
      delay: 0.5,
      mobile: { 
        logoWidth: "40vw", 
        logo: "/brand/wonhae/hero/wordmark-mobile.png", 
        tagline: { en: "IT'S ALL YOU WANT.", id: "Semua Keinginan Ada di Wonhae." },
        ctaText: { en: "Learn more", id: "Pelajari lebih lanjut" },
        ctaHref: "#about",
      },
    },
    bannerBg: "#FFDD58", // Wonhae yellow
    hero: true,
    products: [
      // Ready to eat — topokki & ramyun
      { name: "Spicy Rapokki", size: { en: "155 g", id: "155 g" }, image: "/brand/wonhae/product-lineup/spicy-rapokki-155g.png" },
      { name: "Topokki", variant: { en: "Carbonara", id: "Carbonara" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-carbonara-80g.png" },
      { name: "Topokki Kids", variant: { en: "Carbonara", id: "Carbonara" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-kids-carbo-new-80g.png" },
      { name: "Topokki Kids", variant: { en: "Baby Shark", id: "Baby Shark" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-kids-baby-shark-80g.png" },
      { name: "Black Fried Ramyun", size: { en: "125 g", id: "125 g" }, image: "/brand/wonhae/product-lineup/black-fried-ramyun-125g-front.png" },
      { name: "Cheese Ramyun", size: { en: "120 g", id: "120 g" }, image: "/brand/wonhae/product-lineup/cheese-ramyun-120gr.png" },
      { name: "Cheese Ramyun", size: { en: "90 g", id: "90 g" }, image: "/brand/wonhae/product-lineup/cheese-ramyun-90g.png" },
      { name: "Fried Rose Ramyun", size: { en: "120 g", id: "120 g" }, image: "/brand/wonhae/product-lineup/fried-rose-ramyun-120gr.png" },
      { name: "Fried Rose Ramyun", size: { en: "97 g", id: "97 g" }, image: "/brand/wonhae/product-lineup/fried-rose-ramyun-97g.png" },
      { name: "Fried Corn Cheese Ramyun", size: { en: "120 g", id: "120 g" }, image: "/brand/wonhae/product-lineup/fried-corn-cheese-ramyun-120gr.png" },
      // Snacks
      { name: "Topokki Snack", variant: { en: "Creamy Rose", id: "Creamy Rose" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-rose-80-gr.png" },
      { name: "Topokki Snack", variant: { en: "Sweet & Spicy", id: "Sweet & Spicy" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-ss-80-gr.png" },
      { name: "Topokki Snack", variant: { en: "Cheese Buldak", id: "Cheese Buldak" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-cheese-buldak-80g.png" },
      { name: "Topokki Snack", variant: { en: "Cheese Truffle Mayo", id: "Cheese Truffle Mayo" }, size: { en: "80 g", id: "80 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-cheese-truffle-mayo-80gr.png" },
      { name: "Topokki Snack", variant: { en: "Creamy Rose", id: "Creamy Rose" }, size: { en: "16 g", id: "16 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-creamy-rose-16gr.png" },
      { name: "Topokki Snack", variant: { en: "Sweet & Spicy", id: "Sweet & Spicy" }, size: { en: "16 g", id: "16 g" }, image: "/brand/wonhae/product-lineup/topokki-snack-spicy-sweet-16gr.png" },
      { name: "Potato Snack", variant: { en: "Spicy Korean", id: "Spicy Korean" }, size: { en: "60 g", id: "60 g" }, image: "/brand/wonhae/product-lineup/potatosnack-spicy-korean-60gr.png" },
      { name: "Nori Crispy", image: "/brand/wonhae/product-lineup/nori-crispy.png" },
      { name: "Beef Seaweed", size: { en: "120 g", id: "120 g" }, image: "/brand/wonhae/product-lineup/beef-seaweed-120gr.png" },
      { name: "Churros Snack", variant: { en: "Original", id: "Original" }, size: { en: "60 g", id: "60 g" }, image: "/brand/wonhae/product-lineup/churros-original.png" },
      { name: "Churros Snack", variant: { en: "Peanut Butter", id: "Peanut Butter" }, size: { en: "60 g", id: "60 g" }, image: "/brand/wonhae/product-lineup/churros-peanut-butter.png" },
      // Confectionery
      { name: "Banana Bites", variant: { en: "Original", id: "Original" }, size: { en: "60 g", id: "60 g" }, image: "/brand/wonhae/product-lineup/banana-bites-ori-60gr.png" },
      { name: "Banana Bites", variant: { en: "Choco", id: "Choco" }, size: { en: "60 g", id: "60 g" }, image: "/brand/wonhae/product-lineup/banana-bites-choco-60gr.png" },
      { name: "Banana Bites", size: { en: "12 g", id: "12 g" }, image: "/brand/wonhae/product-lineup/banana-bites-12gr.png" },
      { name: "Matcha Berry Bites", image: "/brand/wonhae/product-lineup/matcha-berry-bites-mockup.png" },
      { name: "Pistachio Choco Bites", size: { en: "30 g", id: "30 g" }, image: "/brand/wonhae/product-lineup/pistachio-choco-bites-30g.png" },
      { name: "Strawberry Cheesecake Bites", size: { en: "30 g", id: "30 g" }, image: "/brand/wonhae/product-lineup/strawberry-cheesecake-30g.png" },
      { name: "Choco Gummy", size: { en: "35 g", id: "35 g" }, image: "/brand/wonhae/product-lineup/choco-gummy-35-gr.png" },
      { name: "Yogurt Gummy", size: { en: "48 g", id: "48 g" }, image: "/brand/wonhae/product-lineup/yogurt-gummy-48gr.png" },
      // Ready to drink
      { name: "Banana Milk", variant: { en: "Original", id: "Original" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/wonhae/product-lineup/banana-milk-ori.png" },
      { name: "Banana Milk", variant: { en: "Choco", id: "Choco" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/wonhae/product-lineup/banana-milk-choco.png" },
      { name: "Banana Milk", variant: { en: "Creamy", id: "Creamy" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/wonhae/product-lineup/banana-milk-creamy.png" },
      { name: "Banana Milk", variant: { en: "Strawberry", id: "Strawberry" }, size: { en: "250 mL", id: "250 mL" }, image: "/brand/wonhae/product-lineup/banana-milk-strawberry.png" },
      { name: "Watermelon Milk", size: { en: "180 mL", id: "180 mL" }, image: "/brand/wonhae/product-lineup/watermelon-milk-180ml.png" },
      { name: "Melon Milk", size: { en: "180 mL", id: "180 mL" }, image: "/brand/wonhae/product-lineup/melon-milk-180ml-alfamart.png" },
      { name: "Cheesecake Milk", size: { en: "250 mL", id: "250 mL" }, image: "/brand/wonhae/product-lineup/cheesecake-milk-250ml.png" },
      { name: "DIY Cafe", variant: { en: "Blue Lemonade", id: "Blue Lemonade" }, size: { en: "180 mL", id: "180 mL" }, image: "/brand/wonhae/product-lineup/diy-cafe-front-blue-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: { en: "Peach Lemonade", id: "Peach Lemonade" }, size: { en: "180 mL", id: "180 mL" }, image: "/brand/wonhae/product-lineup/diy-cafe-front-peach-lemonade-180ml.png" },
      { name: "DIY Cafe", variant: { en: "Pineapple Lemonade", id: "Pineapple Lemonade" }, size: { en: "180 mL", id: "180 mL" }, image: "/brand/wonhae/product-lineup/diy-cafe-front-pineapple-lemonade-180ml.png" },
    ],
    about: [
      { title: { en: "Authentic Korean Flavor", id: "Cita Rasa Korea yang Autentik" }, image: "/brand/wonhae/about/1.png" },
      { title: { en: "A Wide Variety of Products", id: "Beragam Pilihan Produk" }, image: "/brand/wonhae/about/2.png" },
      { title: { en: "High-Quality Ingredients", id: "Bahan Baku Berkualitas Tinggi" }, image: "/brand/wonhae/about/3.png" },
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
        { bg: "/brand/wonhae/showcase/1-2.png", product: "/brand/wonhae/showcase/1-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "100%" },
        // READY TO DRINK — cluster centred
        { bg: "/brand/wonhae/showcase/2-2.png", product: "/brand/wonhae/showcase/2-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "100%" },
        // CONFECTIONERY — wording left, cluster right
        { bg: "/brand/wonhae/showcase/3-2.png", product: "/brand/wonhae/showcase/3-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "100%"},
        // SNACKS — cluster left, wording right
        { bg: "/brand/wonhae/showcase/4-2.png", product: "/brand/wonhae/showcase/4-1.png", bgAspect: "1121 / 505", productAspect: "722 / 502", productHeight: "100%", productShiftX: "-30%" },
      ],
    },
    reasons: [
      { icon: "🇰🇷", title: { en: "Authentic Korean taste", id: "Rasa otentik Korea" }, body: { en: "Developed with direct reference to Korean street food — not just inspired by it.", id: "Dikembangkan dengan referensi langsung ke street food Korea — bukan sekadar terinspirasi." } },
      { icon: "⏱️", title: { en: "Ready in 3 minutes", id: "Siap dalam 3 menit" }, body: { en: "All Mujigae products are quick and easy to prepare — perfect for late-night cravings.", id: "Semua produk Mujigae praktis diolah — cocok untuk lapar tengah malam." } },
      { icon: "🌶️", title: { en: "A range of spice levels", id: "Variasi level pedas" }, body: { en: "From mild carbonara to spicy rose — there's something for every palate.", id: "Dari mild carbonara sampai spicy rose — ada untuk setiap lidah." } },
      { icon: "🛒", title: { en: "Available at minimarkets", id: "Tersedia di mini-market" }, body: { en: "Available at Alfamart, Indomaret, and your favorite e-commerce platforms.", id: "Hadir di Alfamart, Indomaret, dan e-commerce favoritmu." } },
    ],
    features: [
      {
        title: { en: "Topokki at home, tastes like Myeongdong", id: "Topokki di rumah, rasa seperti di Myeongdong" },
        body: { en: "A soft, chewy bite with an authentic sweet-spicy sauce — ready in minutes.", id: "Kunyahan empuk dengan saus pedas-manis yang otentik — siap dalam menit." },
        image:
          "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "Ramyun with a twist", id: "Ramyun dengan twist" },
        body: { en: "Butter Corn, Cheese, Fried Rose — a modern touch on your favorite Korean noodles.", id: "Butter Corn, Cheese, Fried Rose — sentuhan modern untuk mie Korea favoritmu." },
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: { en: "Snack time, upgraded", id: "Waktu Ngemil, Level Up" },
        body: { en: "Banana Milk Bites, Nori Crispy, Potato Spicy — your go-to for hanging out & scrolling.", id: "Banana Milk Bites, Nori Crispy, Potato Spicy — teman ngumpul & scroll." },
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
