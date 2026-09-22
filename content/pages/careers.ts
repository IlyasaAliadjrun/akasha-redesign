import type { Localized } from "@/lib/locale/paths";

type CareerCard = {
  title: Localized<string>;
  body: Localized<string>;
};

export const CAREERS_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  statement: { eyebrow: Localized<string>; paragraph: Localized<string> };
  reality: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    body: Localized<string>;
  };
  realities: CareerCard[];
  looking: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    body: Localized<string>;
  };
  traits: CareerCard[];
  divisions: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    body: Localized<string>;
    brandCountLabel: Localized<string>;
  };
  cta: {
    eyebrow: Localized<string>;
    heading: Localized<string>;
    body: Localized<string>;
    label: Localized<string>;
  };
} = {
  meta: {
    title: {
      en: "Work With Us — Akasha Wira International",
      id: "Work With Us — Akasha Wira International",
    },
    description: {
      en: "Join the team building Indonesia's biggest brands. Developing careers, cross-functional work, autonomy, and clear responsibility from day one.",
      id: "Bergabung dengan tim yang membangun brand-brand besar Indonesia. Pengembangan karier, kerja lintas fungsi, otonomi, dan tanggung jawab yang jelas sejak hari pertama.",
    },
  },

  hero: {
    title: {
      en: "Work with us.",
      id: "Work with us.",
    },
    // Parafrase dekat dari pernyataan karier di halaman resmi Work With Us.
    subtitle: {
      en: "Where your career takes you, and how far you progress, is only as limited as your aspirations.",
      id: "Sejauh mana karier membawa Anda hanya dibatasi oleh aspirasi Anda sendiri.",
    },
  },

  statement: {
    eyebrow: { en: "Who we are", id: "Siapa kami" },
    paragraph: {
      en: "PT Akasha Wira International Tbk is one of the Indonesian consumer goods companies evolving towards excellence through innovative breakthroughs. We invite highly motivated individuals with professional knowledge and personal integrity to excel, and to enjoy facing challenges, within our dynamic organisation.",
      id: "PT Akasha Wira International Tbk adalah salah satu perusahaan barang konsumsi Indonesia yang terus berkembang menuju keunggulan lewat terobosan inovatif. Kami mengundang individu bermotivasi tinggi dengan pengetahuan profesional dan integritas pribadi untuk berprestasi, serta menikmati tantangan, di dalam organisasi kami yang dinamis.",
    },
  },

  reality: {
    eyebrow: { en: "Early on", id: "Sejak awal" },
    heading: {
      en: "Four things that are real from day one.",
      id: "Empat hal yang nyata sejak hari pertama.",
    },
    body: {
      en: "Not perks waiting at the end of a long ladder — these are the working conditions from the start.",
      id: "Bukan fasilitas yang menunggu di ujung tangga panjang — ini kondisi kerja sejak awal.",
    },
  },

  realities: [
    {
      title: { en: "Developing careers", id: "Karier yang berkembang" },
      body: {
        en: "Progression is measured by what you are ready to take on, not by how long you have been here.",
        id: "Kemajuan diukur dari apa yang siap Anda pikul, bukan dari berapa lama Anda di sini.",
      },
    },
    {
      title: { en: "Cross-functional work", id: "Kerja lintas fungsi" },
      body: {
        en: "Marketing, R&D, manufacturing, and distribution solve problems in the same room.",
        id: "Marketing, R&D, manufaktur, dan distribusi memecahkan masalah di ruangan yang sama.",
      },
    },
    {
      title: { en: "Across business units", id: "Lintas unit bisnis" },
      body: {
        en: "From bottled water to beauty care — exposure to different categories, consumers, and channels.",
        id: "Dari air minum dalam kemasan sampai beauty care — bersinggungan dengan kategori, konsumen, dan kanal yang berbeda.",
      },
    },
    {
      title: { en: "Autonomy & clear responsibility", id: "Otonomi & tanggung jawab jelas" },
      body: {
        en: "You own your scope, and it is clear to everyone what that scope is.",
        id: "Anda memegang ruang lingkup sendiri, dan semua orang tahu persis batasnya.",
      },
    },
  ],

  looking: {
    eyebrow: { en: "Who we look for", id: "Yang kami cari" },
    heading: {
      en: "Highly motivated people.",
      id: "Orang-orang bermotivasi tinggi.",
    },
    body: {
      en: "Great brands are built by great people — the first of our four greats.",
      id: "Great brands dibangun oleh great people — yang pertama dari empat hal hebat kami.",
    },
  },

  traits: [
    {
      title: { en: "Professional knowledge", id: "Pengetahuan profesional" },
      body: {
        en: "Real depth in your craft, and the habit of keeping it current.",
        id: "Kedalaman nyata di bidang Anda, dan kebiasaan terus memperbaruinya.",
      },
    },
    {
      title: { en: "Personal integrity", id: "Integritas pribadi" },
      body: {
        en: "Doing the right thing when the shortcut would be easier and nobody would notice.",
        id: "Melakukan hal yang benar saat jalan pintas lebih mudah dan tak ada yang melihat.",
      },
    },
    {
      title: { en: "Drive to excel", id: "Dorongan untuk unggul" },
      body: {
        en: "A standard for your own work that sits above what was asked of you.",
        id: "Standar atas pekerjaan sendiri yang lebih tinggi dari yang diminta.",
      },
    },
    {
      title: { en: "Enjoying the challenge", id: "Menikmati tantangan" },
      body: {
        en: "A dynamic organisation is only comfortable for people who like the pace.",
        id: "Organisasi yang dinamis hanya nyaman bagi orang yang menyukai iramanya.",
      },
    },
  ],

  divisions: {
    eyebrow: { en: "Where you could work", id: "Tempat Anda bisa bekerja" },
    heading: {
      en: "Four divisions, one company.",
      id: "Empat divisi, satu perusahaan.",
    },
    body: {
      en: "From mineral water to beauty and men's care — each division runs its own brands, factories, and routes to market.",
      id: "Dari air mineral sampai beauty dan men's care — tiap divisi menjalankan brand, pabrik, dan jalur distribusinya sendiri.",
    },
    brandCountLabel: { en: "brands", id: "brand" },
  },

  cta: {
    eyebrow: { en: "Apply", id: "Melamar" },
    heading: {
      en: "Tell us what you want to build.",
      id: "Ceritakan apa yang ingin Anda bangun.",
    },
    body: {
      en: "Send your CV along with a short note about the division and role you are aiming for.",
      id: "Kirim CV Anda beserta catatan singkat tentang divisi dan peran yang Anda tuju.",
    },
    label: {
      en: "Send your CV",
      id: "Kirim CV",
    },
  },
};
