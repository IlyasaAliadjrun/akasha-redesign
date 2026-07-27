import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "floaty",
    name: "Floaty",
    division: "food",
    tagline: "Ini Snack Buat Kamu.",
    // Becomes the BrandIntro headline (the reference's "Selamat Datang di Dunia
    // FLOATY yang Hebat dan Menyenangkan!"). BrandIntro appends its own full stop,
    // so the sentence ends without punctuation here; no ". " inside it, so the whole
    // line stays in the bold lead paragraph instead of splitting into a grey second
    // line. Also used as the page's meta description.
    description:
      "Selamat Datang di Dunia FLOATY yang Hebat dan Menyenangkan",
    accentClass: "bg-brand-floaty",
    accentHex: "#4E96D2", // the FLOATY logotype blue on-pack — Learn more / Buy / CTA
    // No dedicated 3:4 brand-card art yet (only CrossSell reads this; the hero itself
    // renders from `heroLayers`). Left on the stock image it shipped with.
    heroImage:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    // Hero — flat Floaty blue banner (bannerBg) with the white wordmark on the left
    // and the three-pack cluster on the right. Same pattern as the Hair Energy hero.
    heroLayers: [
      // hero/1.png is the three packs on one transparent landscape canvas (1795×1021)
      // with ~10% transparent margin each side, so it renders as a single sized layer.
      // 56vw reproduces the reference's cluster width (≈46% of the viewport once the
      // transparent margin is discounted); the 880px cap keeps DPR 2 at 1760px, just
      // inside the 1795px natural width, so it never renders above its own resolution
      // on the widest breakpoints.
      { src: "/brand/floaty/hero/1.png", depth: 30, enterFrom: "right", enterDelay: 0.3,
        // `top` is a % of the hero, but the layer's height comes from vw — so a fixed
        // % drifts as the hero's aspect changes and the cluster ends up stacked above
        // the wordmark on shorter/narrower desktops. The calc keeps the layer's own
        // centre pinned at 45% of the hero (half its height = width × 1021/1795 / 2),
        // so it stays level with the wordmark from 768px all the way up.
        width: "min(56vw, 880px)", aspectRatio: "1795 / 1021", right: "4%",
        top: "calc(45% - min(56vw, 880px) * 0.2844)",
        mobile: { width: "min(98vw, 420px)", left: "1%", top: "45%" } },
    ],
    // Hero WITHOUT wording: the wordmark art already carries the tagline ("Snack tidak
    // seharusnya serius, mereka seharusnya menyenangkan!"), so no separate HTML
    // tagline/CTA is drawn — logo only (BRAND_PAGE_GUIDE §2, "hero tanpa wording").
    // The wordmark is white, so `theme` stays light (white text) over the blue banner
    // and the navbar paints itself white. maxWidth caps the logo at 528px = half its
    // natural 1057px width, so it never renders above its own resolution at DPR 2.
    heroContent: {
      logo: "/brand/floaty/hero/wordmark.png",
      logoAspect: "1057 / 465",
      logoWidth: "33vw",
      maxWidth: "528px",
      left: "8%",
      // No offsetY: the reference's wordmark block sits on the banner's vertical
      // centre, level with the pack cluster, which is BrandHero's default.
      delay: 0.5,
      mobile: { logoWidth: "82vw" },
    },
    bannerBg: "#5A9CD2", // Floaty blue — the same blue as the showcase cards
    // Heading above the carousel — the reference's "Our Product." (default is
    // "Explore the lineup.").
    lineupTitle: "Our Product.",
    // ProductLineup prints "{brand.name} {name} {variant} {size}" on one line, so
    // `name: "Snack"` yields the reference's "Floaty Snack Original 60g". Order and
    // wording follow the reference carousel: 60 g, Terserah, then the 16 g mini.
    // The gram weight rides in `variant` (not `size`) because the card's React key is
    // name+variant: two "Original" SKUs that differ only in `size` would collide.
    products: [
      { name: "Snack", variant: "Original 60g", image: "/brand/floaty/product-lineup/original-60g.png" },
      { name: "Snack", variant: "Terserah 60g", image: "/brand/floaty/product-lineup/terserah-60g.png" },
      { name: "Snack", variant: "Original 16g", image: "/brand/floaty/product-lineup/original-16g.png" },
    ],
    // The about art is a FINISHED card: rounded corners, gradient, and the label are
    // all baked into the image (bottom-left) — exactly where BrandAbout prints its own
    // HTML label. Setting real titles here would render the same words twice, on top of
    // each other, so the label is deliberately blank. The zero-width spaces differ only
    // in length, purely to keep React's list keys unique. Once the designer supplies
    // about art WITHOUT baked-in wording, the real titles belong here.
    about: [
      { title: "​", image: "/brand/floaty/about/1.png" },
      { title: "​​", image: "/brand/floaty/about/2.png" },
      { title: "​​​", image: "/brand/floaty/about/3.png" },
    ],
    // Showcase — title poster then four SKU banners. Each bg ({n}-2) is a designed blue
    // card (2335×1052) whose wording leaves one side clear, and the pack ({n}-1) sits
    // over it — so `bannerAspect` keeps the card uncropped and each pack is nudged into
    // the clear side with `productShiftX`. Every knob is a percentage of a frame whose
    // aspect is locked, so the composition is identical at every breakpoint and no
    // `mobile` override is needed.
    showcase: {
      hero: "/brand/floaty/showcase/title.png",
      heroAspect: "2340 / 1444",
      productAlign: "center",
      bannerAspect: "2335 / 1052",
      // Sizing note: BrandShowcase clips the product to the banner frame, and a 60 g
      // pack fills 83.6% of its own canvas, so 115% is as tall as it can go before the
      // crimped top/bottom would be sliced. That reads a little smaller than the
      // reference, where the pack overflows the card outright — this is the closest
      // fit that still shows the whole pack.
      variants: [
        // SALT & SAVORY — wording left (ends at 53%), Original 60 g to the right.
        { bg: "/brand/floaty/showcase/1-2.png", product: "/brand/floaty/showcase/1-1.png", bgAspect: "2335 / 1052", productAspect: "1504 / 1047", productHeight: "115%", productShiftX: "30%" },
        // FULL OF MYSTERY — wording right (starts at 50%), Terserah to the left.
        { bg: "/brand/floaty/showcase/2-2.png", product: "/brand/floaty/showcase/2-1.png", bgAspect: "2335 / 1052", productAspect: "1504 / 1047", productHeight: "115%", productShiftX: "-26%" },
        // SMALL SIZE · BIG TASTE — wording on both sides, so the 16 g pack is sized to
        // sit inside the 41–58% gap between them, well under the 60 g banners.
        { bg: "/brand/floaty/showcase/3-2.png", product: "/brand/floaty/showcase/3-1.png", bgAspect: "2335 / 1052", productAspect: "1504 / 1047", productHeight: "79%", productShiftX: "-1%" },
        // COMING SOON — wording is a single line across the top, so the unbranded pack
        // is centred and dropped until its flat bottom meets the card's bottom edge.
        { bg: "/brand/floaty/showcase/4-2.png", product: "/brand/floaty/showcase/4-1.png", bgAspect: "2335 / 1052", productAspect: "1503 / 1047", productHeight: "95%", productShiftY: "15%" },
      ],
    },
    reasons: [
      { icon: "😹", title: "Packaging pemancing tawa", body: "Didesain seperti makanan kucing — jadi konten, jadi bahan prank." },
      { icon: "🌾", title: "Tinggi kandungan oat", body: "Berbahan dasar oat, renyah dan ringan di perut." },
      { icon: "🎁", title: "Varian Terserah", body: "Rasa misteri yang bikin penasaran — cocok buat seru-seruan." },
    ],
    features: [
      {
        title: "Ini MAKANAN KUCING",
        body: "…bohong. Ini snack buat kamu. Packaging jenaka yang jadi bahan obrolan.",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ringan beneran",
        body: "Oat-based pillow snack. Renyah, ringan, dan tinggi kandungan oat.",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
