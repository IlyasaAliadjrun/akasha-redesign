import type { Brand } from "@/lib/brands";

const entry: Brand = {
    slug: "omoide",
    name: "Omoide",
    division: "food",
    tagline: "A bowl of Japanese memories.",
    description:
      "Udon instan yang membawa rasa kenangan Jepang dengan penyajian praktis dan harga terjangkau.",
    accentClass: "bg-brand-omoide",
    accentHex: "#C17817",
    heroImage:
      "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1800&auto=format&fit=crop",
    hero: false,
    products: [
      { name: "Carbonara Udon", variant: "Creamy Cheese", size: "260g · 150 cal" },
      { name: "Kake Udon", variant: "Classic Broth", size: "215g · 50 cal" },
    ],
    reasons: [
      { icon: "🍜", title: "Tekstur udon asli", body: "Lembut, kenyal, tebal — dibuat dengan standar udon Jepang." },
      { icon: "🧀", title: "Parmesan asli di Carbonara", body: "Bukan perasa — saus dibuat dengan keju Parmesan sungguhan." },
      { icon: "🐟", title: "Kaldu katsuo tradisional", body: "Kake Udon memakai kaldu ikan yang melalui proses smoking ala Jepang." },
    ],
    features: [
      {
        title: "Carbonara Udon",
        body: "Udon lembut dengan saus carbonara kaya dari Parmesan asli. Milky, cheesy, thick.",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Kake Udon",
        body: "Kaldu umami yang halus dari ikan katsuo — sederhana tapi penuh jiwa.",
        image:
          "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  };

export default entry;
