import type { Localized } from "@/lib/locale/paths";

// All bilingual copy for app/[locale]/about/page.tsx. Structural values (years,
// person names, numeric stats, percentages, share counts, street addresses,
// proper-noun city/company names) are intentionally left as plain strings.
//
// Sources: akashainternational.com/our-profile and /organization-structure
// (board profiles, organization chart 2025), and Annual Report 2025 — company
// profile pp. 20–27, certifications p. 104, PROPER p. 99.

type TimelineEntry = {
  year: string;
  title: Localized<string>;
  body: Localized<string>;
};

type CoreValueEntry = {
  letter: string; // one letter of "ATEAM"
  title: Localized<string>;
  body: Localized<string>;
};

type FactEntry = {
  label: Localized<string>;
  value: Localized<string>;
  note?: Localized<string>;
};

type BusinessEntry = {
  title: Localized<string>;
  body: Localized<string>;
  plant: string; // where it is made — proper noun
};

type ProfileEntry = {
  name: string;
  role: Localized<string>;
  photo: string; // 5:7 portrait, public/media/pages/about/organization/
  since: Localized<string>; // first appointment to this position
  portfolio?: Localized<string>; // directors: the division they lead
  bio: Localized<string>;
};

type PersonEntry = {
  name: string;
  role?: Localized<string>;
};

type UnitEntry = {
  reportsTo: "commissioners" | "directors";
  label: Localized<string>;
  note: Localized<string>;
  people: PersonEntry[];
};

type DivisionEntry = {
  id: "production" | "commercial" | "enabler"; // drives the accent colour
  label: Localized<string>;
  functions: Localized<string>[];
  people: PersonEntry[];
};

type LocationGroup = {
  kind: "head-office" | "distribution" | "production"; // drives the accent colour
  label: Localized<string>;
  sites: {
    city: string;
    address: string; // official address — identical in both languages
    makes?: Localized<string>;
    note?: Localized<string>;
  }[];
};

export type AchievementEntry = {
  code: string; // standard or programme name — not translated
  kind: "quality" | "food-safety" | "safety" | "environment" | "cosmetics" | "rating"; // icon + tint
  category: Localized<string>;
  title: Localized<string>;
  scope: Localized<string>;
  logo?: string;
};

type StatEntry = {
  n: string;
  l: Localized<string>;
};

export const ABOUT_PAGE = {
  meta: {
    title: {
      en: "About us — Akasha Wira International",
      id: "Tentang kami — Akasha Wira International",
    },
    description: {
      en: "PT Akasha Wira International Tbk (IDX: ADES). Building great brands that have touched every moment of Indonesian consumers' lives since 1985.",
      id: "PT Akasha Wira International Tbk (IDX: ADES). Sejak 1985 membangun brand-brand hebat yang menyentuh setiap momen konsumen Indonesia.",
    },
  },

  hero: {
    title: {
      en: "Great brands through great people.",
      id: "Brand hebat melalui orang-orang hebat.",
    },
    subtitle: {
      en: "Building the quality of life of Indonesian consumers for four decades through brands that touch everyday moments.",
      id: "Membangun kualitas hidup konsumen Indonesia selama empat dekade melalui brand-brand yang menyentuh momen sehari-hari.",
    },
  },

  vision: {
    eyebrow: { en: "Our Vision", id: "Visi Kami" },
    line1: {
      en: "To bring the world's best solutions",
      id: "Menghadirkan solusi terbaik dunia",
    },
    line2: {
      en: "to enhance our consumer's quality of life.",
      id: "untuk meningkatkan kualitas hidup konsumen kami.",
    },
  },

  mission: {
    eyebrow: { en: "Our Mission", id: "Misi Kami" },
    body: {
      en: "Building great brands which deliver best consumer solution through great people, great culture, and great system.",
      id: "Membangun brand-brand hebat yang menghadirkan solusi terbaik bagi konsumen melalui orang-orang hebat, budaya hebat, dan sistem hebat.",
    },
  },

  // ── Company overview ───────────────────────────────────────────────────────
  overview: {
    eyebrow: { en: "Company overview", id: "Sekilas perusahaan" },
    heading: {
      en: "Four decades, four industries.",
      id: "Empat dekade, empat industri.",
    },
    body: {
      en: "PT Akasha Wira International Tbk was established in 1985 as PT Alfindo Putrasetia and has carried its current name since 2010. A foreign-investment company listed on the Indonesia Stock Exchange as ADES, it is controlled by Sofos Pte. Ltd. of Singapore.",
      id: "PT Akasha Wira International Tbk berdiri pada 1985 dengan nama PT Alfindo Putrasetia dan memakai nama saat ini sejak 2010. Sebagai perusahaan penanaman modal asing yang tercatat di Bursa Efek Indonesia dengan kode ADES, perusahaan dikendalikan oleh Sofos Pte. Ltd. dari Singapura.",
    },
    businessLabel: { en: "What we make today", id: "Yang kami produksi saat ini" },
    plantLabel: { en: "Made in", id: "Diproduksi di" },
  },

  facts: [
    {
      label: { en: "Established", id: "Didirikan" },
      value: { en: "1985", id: "1985" },
      note: { en: "as PT Alfindo Putrasetia", id: "sebagai PT Alfindo Putrasetia" },
    },
    {
      label: { en: "Current name", id: "Nama saat ini" },
      value: { en: "Since 2010", id: "Sejak 2010" },
      note: { en: "PT Akasha Wira International Tbk", id: "PT Akasha Wira International Tbk" },
    },
    {
      label: { en: "Listed", id: "Tercatat di bursa" },
      value: { en: "14 June 1994", id: "14 Juni 1994" },
      note: { en: "Indonesia Stock Exchange · ADES", id: "Bursa Efek Indonesia · ADES" },
    },
    {
      label: { en: "Investment status", id: "Status penanaman modal" },
      value: { en: "Foreign investment (PMA)", id: "Penanaman modal asing (PMA)" },
      note: { en: "BKPM approval No. 42/V/PMA/2006", id: "Persetujuan BKPM No. 42/V/PMA/2006" },
    },
    {
      label: { en: "Controlling shareholder", id: "Pemegang saham pengendali" },
      value: { en: "Sofos Pte. Ltd.", id: "Sofos Pte. Ltd." },
      note: {
        en: "Singapore, through Water Partners Bottling S.A., since 2008",
        id: "Singapura, melalui Water Partners Bottling S.A., sejak 2008",
      },
    },
    {
      label: { en: "Articles of Association", id: "Anggaran Dasar" },
      value: { en: "Deed No. 22, 2023", id: "Akta No. 22, 2023" },
      note: {
        en: "Latest amendment: purpose, objectives and business activities",
        id: "Perubahan terakhir: maksud, tujuan, dan kegiatan usaha",
      },
    },
  ] satisfies FactEntry[],

  business: [
    {
      title: { en: "Bottled drinking water", id: "Air minum dalam kemasan" },
      body: {
        en: "Commercial production since 1986. Nestlé Pure Life since 2004, Vica Royal gallons since 2007 and Vica 600 ml since 2020.",
        id: "Produksi komersial sejak 1986. Nestlé Pure Life sejak 2004, galon Vica Royal sejak 2007, dan Vica 600 ml sejak 2020.",
      },
      plant: "Cibinong · Pasuruan",
    },
    {
      title: { en: "Cosmetics", id: "Kosmetika" },
      body: {
        en: "Hair care since 2010, when the Makarizo production line was acquired — consumer and professional salon ranges.",
        id: "Perawatan rambut sejak 2010, saat lini produksi Makarizo diakuisisi — untuk konsumen maupun salon profesional.",
      },
      plant: "Gunung Putri",
    },
    {
      title: { en: "Beverages", id: "Minuman" },
      body: {
        en: "Soy milk from 2014, Mujigae banana milk from 2019, and ready-to-drink Creamy Banana Milk and Cheesecake Milk in 2025.",
        id: "Susu kedelai sejak 2014, susu pisang Mujigae sejak 2019, dan minuman siap saji Creamy Banana Milk serta Cheesecake Milk pada 2025.",
      },
      plant: "Cicurug, Sukabumi",
    },
    {
      title: { en: "Foods", id: "Makanan" },
      body: {
        en: "Korean ready-to-eat meals since 2020, expanded in 2025 with snacks and confectionery under Wonhae and Floaty.",
        id: "Makanan Korea siap saji sejak 2020, diperluas pada 2025 dengan camilan dan kembang gula di bawah Wonhae dan Floaty.",
      },
      plant: "Cicurug, Sukabumi",
    },
  ] satisfies BusinessEntry[],

  // ── Core value ─────────────────────────────────────────────────────────────
  coreValue: {
    eyebrow: { en: "Core value", id: "Nilai inti" },
    heading: {
      en: "ATEAM — how we work.",
      id: "ATEAM — cara kami bekerja.",
    },
    body: {
      en: "Five values, one word: the way every Akasha team works together.",
      id: "Lima nilai, satu kata: cara setiap tim Akasha bekerja bersama.",
    },
  },

  values: [
    {
      letter: "A",
      title: { en: "Act with integrity", id: "Bertindak dengan integritas" },
      body: {
        en: "Doing the right thing, ethically, morally and legally.",
        id: "Melakukan hal yang benar secara etis, moral, dan hukum.",
      },
    },
    {
      letter: "T",
      title: { en: "Take the lead", id: "Mengambil peran memimpin" },
      body: {
        en: "Taking ownership and delivering on our commitment.",
        id: "Mengambil tanggung jawab dan menunaikan komitmen kami.",
      },
    },
    {
      letter: "E",
      title: { en: "Excel in everything we do", id: "Unggul dalam semua yang kami kerjakan" },
      body: {
        en: "Striving for quality in everything we do.",
        id: "Mengupayakan kualitas dalam setiap hal yang kami kerjakan.",
      },
    },
    {
      letter: "A",
      title: { en: "Achieve our goals together", id: "Mencapai tujuan bersama" },
      body: {
        en: "Working collaboratively towards common goals.",
        id: "Bekerja sama untuk mencapai tujuan bersama.",
      },
    },
    {
      letter: "M",
      title: { en: "Move forward with innovation", id: "Melangkah maju dengan inovasi" },
      body: {
        en: "Challenging the norm passionately to improve the way we work.",
        id: "Menantang kebiasaan dengan penuh semangat untuk memperbaiki cara kami bekerja.",
      },
    },
  ] satisfies CoreValueEntry[],

  stats: [
    { n: "40+", l: { en: "Years in business", id: "Tahun berkarya" } },
    { n: "10", l: { en: "Consumer brands", id: "Brand konsumen" } },
    { n: "4", l: { en: "Industries", id: "Industri" } },
    { n: "6", l: { en: "Operating locations", id: "Lokasi operasional" } },
  ] satisfies StatEntry[],

  journey: {
    eyebrow: { en: "Our Journey", id: "Perjalanan Kami" },
    heading: {
      en: "Four decades of our journey.",
      id: "Empat dekade perjalanan.",
    },
    body: {
      en: "From a local bottled-water company in 1985 to a multi-division FMCG group today.",
      id: "Dari perusahaan air minum lokal di 1985 hingga grup FMCG multi-divisi hari ini.",
    },
  },

  timeline: [
    {
      year: "1985",
      title: { en: "Foundation", id: "Fondasi" },
      body: {
        en: "The company was established as PT Alfindo Putrasetia.",
        id: "Perusahaan berdiri sebagai PT Alfindo Putrasetia.",
      },
    },
    {
      year: "1986",
      title: { en: "First bottle", id: "Botol pertama" },
      body: {
        en: "Commercial production of bottled drinking water began.",
        id: "Produksi komersial air minum dalam kemasan dimulai.",
      },
    },
    {
      year: "1994",
      title: { en: "Listed on the exchange", id: "Masuk bursa" },
      body: {
        en: "Public offering of 15 million shares; all 38 million shares listed on the Jakarta Stock Exchange on 14 June.",
        id: "Penawaran umum 15 juta lembar saham; seluruh 38 juta saham tercatat di Bursa Efek Jakarta pada 14 Juni.",
      },
    },
    {
      year: "1997",
      title: { en: "Bonus shares", id: "Saham bonus" },
      body: {
        en: "Issuance of 38 million bonus shares to strengthen the capital structure.",
        id: "Penerbitan 38 juta saham bonus untuk memperkuat struktur permodalan.",
      },
    },
    {
      year: "2004",
      title: { en: "Global alliance", id: "Aliansi global" },
      body: {
        en: "Water Partners Bottling S.A. (a Nestlé & Coca-Cola joint venture) became the majority shareholder. The name changed to PT AdeS Waters Indonesia, Tbk, and Nestlé Pure Life was launched.",
        id: "Water Partners Bottling S.A. (JV Nestlé & Coca-Cola) menjadi pemegang saham mayoritas. Nama berubah jadi PT AdeS Waters Indonesia, Tbk, dan Nestlé Pure Life diluncurkan.",
      },
    },
    {
      year: "2007",
      title: { en: "Vica Royal", id: "Vica Royal" },
      body: {
        en: "Launch of Vica Royal gallon products, widening the home-delivery water range.",
        id: "Peluncuran produk galon Vica Royal, memperluas lini air minum untuk rumah tangga.",
      },
    },
    {
      year: "2008",
      title: { en: "Sofos Pte. Ltd.", id: "Sofos Pte. Ltd." },
      body: {
        en: "Sofos Pte. Ltd. (Singapore) acquired the controlling shares.",
        id: "Sofos Pte. Ltd. (Singapura) mengakuisisi saham pengendali.",
      },
    },
    {
      year: "2010",
      title: { en: "Expansion & rebranding", id: "Ekspansi & rebranding" },
      body: {
        en: "The name changed to PT Akasha Wira International Tbk. Expanded into cosmetics through the acquisition of the Makarizo production line.",
        id: "Nama berubah menjadi PT Akasha Wira International Tbk. Ekspansi ke kosmetika melalui akuisisi lini produksi Makarizo.",
      },
    },
    {
      year: "2012",
      title: { en: "P&G partnership", id: "Kerja sama P&G" },
      body: {
        en: "Partnership with Procter & Gamble for professional cosmetics distribution.",
        id: "Kerja sama dengan Procter & Gamble untuk distribusi kosmetik profesional.",
      },
    },
    {
      year: "2014",
      title: { en: "Soy beverages", id: "Minuman kedelai" },
      body: {
        en: "The Sukabumi facility was reactivated to produce a soy beverage line under the Pureal brand.",
        id: "Fasilitas Sukabumi diaktifkan kembali untuk memproduksi lini minuman kedelai dengan brand Pureal.",
      },
    },
    {
      year: "2019",
      title: { en: "Mujigae banana milk", id: "Susu pisang Mujigae" },
      body: {
        en: "Banana-flavoured milk under the Mujigae brand widened the beverage range.",
        id: "Susu rasa pisang dengan merek Mujigae memperluas lini minuman.",
      },
    },
    {
      year: "2020",
      title: { en: "Into foods", id: "Masuk ke makanan" },
      body: {
        en: "Korean ready-to-eat meals began at the Sukabumi plant, and Vica launched in 600 ml bottles.",
        id: "Produksi makanan Korea siap saji dimulai di pabrik Sukabumi, dan Vica hadir dalam kemasan 600 ml.",
      },
    },
    {
      year: "2025",
      title: { en: "New product lines", id: "Lini produk baru" },
      body: {
        en: "Nestlé Pure Life 15 L PET gallons, Fitmeup, ready-to-drink milks, and Wonhae and Floaty snacks and confectionery.",
        id: "Galon PET 15 L Nestlé Pure Life, Fitmeup, susu siap minum, serta camilan dan kembang gula Wonhae dan Floaty.",
      },
    },
  ] satisfies TimelineEntry[],

  // ── Organization structure ─────────────────────────────────────────────────
  organization: {
    eyebrow: { en: "Organization structure", id: "Struktur organisasi" },
    heading: {
      en: "The people who lead Akasha.",
      id: "Yang memimpin Akasha.",
    },
    body: {
      en: "Delivering the best quality consumer solution to address consumer needs for a quality lifestyle, to sustain our commitment to stakeholders — through our great people, great culture, and great system.",
      id: "Menghadirkan solusi konsumen berkualitas terbaik untuk menjawab kebutuhan gaya hidup berkualitas, demi menjaga komitmen kami kepada para pemangku kepentingan — melalui orang-orang hebat, budaya hebat, dan sistem hebat.",
    },
    commissionersLabel: {
      en: "Board of Commissioners · Dewan Komisaris",
      id: "Dewan Komisaris · Board of Commissioners",
    },
    directorsLabel: {
      en: "Board of Directors · Direksi",
      id: "Direksi · Board of Directors",
    },
    sinceLabel: { en: "In office since", id: "Menjabat sejak" },
    unitsLabel: {
      en: "Committees & divisions",
      id: "Komite & divisi",
    },
    unitsHeading: {
      en: "How the company is run.",
      id: "Bagaimana perusahaan dijalankan.",
    },
    reportsToCommissioners: {
      en: "Reports to the Board of Commissioners",
      id: "Melapor kepada Dewan Komisaris",
    },
    reportsToDirectors: {
      en: "Reports to the Board of Directors",
      id: "Melapor kepada Direksi",
    },
    divisionsLabel: { en: "Divisions", id: "Divisi" },
  },

  commissioners: [
    {
      name: "Hanjaya Limanto",
      role: { en: "President Commissioner", id: "Presiden Komisaris" },
      photo: "/media/pages/about/organization/hanjaya-limanto.jpg",
      since: { en: "20 June 2008", id: "20 Juni 2008" },
      bio: {
        en: "Chemical engineering graduate of Institut Teknologi Sepuluh Nopember, Surabaya, and an ADB/East-West Center scholar for his MBA at the University of Hawaii. Previously with Procter & Gamble, JDVC/Sycamore Capital, CDC Capital Partners, Roundhill and Sofos Partners across Indonesia, Japan and Singapore. Also a Commissioner of PT Yupi Indo Jelly Gum, PT Tirta Marta and PT O3 Technology.",
        id: "Lulusan teknik kimia Institut Teknologi Sepuluh Nopember, Surabaya, dan penerima beasiswa ADB/East-West Center untuk program MBA di University of Hawaii. Sebelumnya berkarier di Procter & Gamble, JDVC/Sycamore Capital, CDC Capital Partners, Roundhill, dan Sofos Partners di Indonesia, Jepang, dan Singapura. Juga menjabat Komisaris PT Yupi Indo Jelly Gum, PT Tirta Marta, dan PT O3 Technology.",
      },
    },
    {
      name: "Rudy Hidayat",
      role: { en: "Commissioner", id: "Komisaris" },
      photo: "/media/pages/about/organization/rudy-hidayat.jpg",
      since: { en: "17 June 2026", id: "17 Juni 2026" },
      bio: {
        en: "Master of Science in Industrial Engineering and Management Sciences, Eindhoven University of Technology (1996). Formerly Sales Director of PT Multi Bintang Indonesia Tbk, Special Project Director at Heineken Asia Pacific, Independent Commissioner of PT Jobubu Jarum Minahasa Tbk, and most recently President Director of PT Blue Gas Indonesia.",
        id: "Master of Science di bidang Industrial Engineering and Management Sciences, Eindhoven University of Technology (1996). Pernah menjabat Sales Director PT Multi Bintang Indonesia Tbk, Special Project Director Heineken Asia Pacific, Komisaris Independen PT Jobubu Jarum Minahasa Tbk, dan terakhir Presiden Direktur PT Blue Gas Indonesia.",
      },
    },
    {
      name: "Julianto",
      role: { en: "Independent Commissioner", id: "Komisaris Independen" },
      photo: "/media/pages/about/organization/julianto.jpg",
      since: { en: "21 June 2023", id: "21 Juni 2023" },
      bio: {
        en: "Chemical engineering graduate of Institut Teknologi Sepuluh Nopember, Surabaya, with a Master of Management from Universitas Indonesia. Previously at PT Filma Utama Soap, General Manager at PT Multifragrance and Director at PT Symrise. Chairs the Audit Committee, and has no affiliation with any director, commissioner or major or controlling shareholder.",
        id: "Lulusan teknik kimia Institut Teknologi Sepuluh Nopember, Surabaya, dengan gelar Magister Manajemen dari Universitas Indonesia. Sebelumnya di PT Filma Utama Soap, General Manager PT Multifragrance, dan Direktur PT Symrise. Menjabat Ketua Komite Audit dan tidak memiliki hubungan afiliasi dengan anggota Direksi, Dewan Komisaris, maupun pemegang saham utama atau pengendali.",
      },
    },
  ] satisfies ProfileEntry[],

  directors: [
    {
      name: "Fany Soegiarto",
      role: { en: "President Director", id: "Presiden Direktur" },
      photo: "/media/pages/about/organization/fany-soegiarto.jpg",
      since: { en: "17 June 2026", id: "17 Juni 2026" },
      portfolio: { en: "Leads the Enabler division", id: "Memimpin divisi Operasional" },
      bio: {
        en: "Bachelor of Economics from Tarumanagara University and an MBA in Banking and Finance from Nanyang Business School, Singapore. Senior auditor at Ernst & Young Jakarta and Grant Thornton Singapore, Head of Finance and Accounting at PT Roundhill Nusantara and Investment Officer at Aureos Capital, then Senior Finance and Accounting Manager at Akasha.",
        id: "Sarjana Ekonomi dari Universitas Tarumanagara dan MBA bidang Perbankan dan Keuangan dari Nanyang Business School, Singapura. Pernah menjadi senior auditor di Ernst & Young Jakarta dan Grant Thornton Singapura, Head of Finance and Accounting PT Roundhill Nusantara, dan Investment Officer Aureos Capital, lalu Senior Finance and Accounting Manager di Akasha.",
      },
    },
    {
      name: "Hagi Yufantra",
      role: { en: "Director", id: "Direktur" },
      photo: "/media/pages/about/organization/hagi-yufantra.jpg",
      since: { en: "17 June 2026", id: "17 Juni 2026" },
      portfolio: { en: "Leads the Commercial division", id: "Memimpin divisi Komersial" },
      bio: {
        en: "Bachelor of Economics, majoring in marketing, from Prasetiya Mulya Business School (2016). Joined Akasha in 2016 in e-commerce business development and rose to Senior Manager Marketing before his appointment to the Board.",
        id: "Sarjana Ekonomi jurusan pemasaran dari Prasetiya Mulya Business School (2016). Bergabung dengan Akasha pada 2016 di pengembangan bisnis e-commerce hingga menjadi Senior Manager Marketing sebelum diangkat sebagai Direktur.",
      },
    },
  ] satisfies ProfileEntry[],

  units: [
    {
      reportsTo: "commissioners",
      label: { en: "Audit Committee", id: "Komite Audit" },
      note: {
        en: "Assists the Board of Commissioners in overseeing financial reporting, internal control and audit.",
        id: "Membantu Dewan Komisaris mengawasi pelaporan keuangan, pengendalian internal, dan audit.",
      },
      people: [
        { name: "Julianto", role: { en: "Chairman", id: "Ketua" } },
        { name: "Zulbahri", role: { en: "Member", id: "Anggota" } },
        { name: "Hastuti", role: { en: "Member", id: "Anggota" } },
      ],
    },
    {
      reportsTo: "directors",
      label: { en: "Internal Audit", id: "Audit Internal" },
      note: {
        en: "Independent assurance over risk management, control and governance.",
        id: "Penjaminan independen atas manajemen risiko, pengendalian, dan tata kelola.",
      },
      people: [{ name: "Wendi Jaya Wardana" }],
    },
    {
      reportsTo: "directors",
      label: { en: "Corporate Secretary", id: "Sekretaris Perusahaan" },
      note: {
        en: "Our link with regulators, the stock exchange, shareholders and the public.",
        id: "Penghubung dengan regulator, bursa efek, pemegang saham, dan publik.",
      },
      people: [{ name: "Aprianti Kartika" }],
    },
  ] satisfies UnitEntry[],

  divisions: [
    {
      id: "production",
      label: { en: "Production", id: "Produksi" },
      functions: [
        { en: "Plant management", id: "Manajemen pabrik" },
        { en: "Quality", id: "Kualitas" },
        { en: "Project management", id: "Manajemen proyek" },
        { en: "Industrial performance", id: "Kinerja industrial" },
        { en: "Safety, health & environment", id: "Keselamatan, kesehatan & lingkungan" },
        { en: "Supply chain", id: "Supply chain" },
      ],
      people: [
        { name: "Ependi" },
        { name: "Budi Santoso" },
        { name: "Anjar R. Martadiputra" },
        { name: "Yulizar B. Riyanto" },
        { name: "Rinaldi" },
      ],
    },
    {
      id: "commercial",
      label: { en: "Commercial", id: "Komersial" },
      functions: [
        { en: "Sales", id: "Penjualan" },
        { en: "Marketing", id: "Pemasaran" },
      ],
      people: [{ name: "Hagi Yufantra", role: { en: "Director", id: "Direktur" } }],
    },
    {
      id: "enabler",
      label: { en: "Enabler", id: "Operasional" },
      functions: [
        { en: "Finance & control", id: "Keuangan & kontrol" },
        { en: "Legal", id: "Hukum" },
        { en: "Human resources", id: "Sumber daya manusia" },
        { en: "General services", id: "Layanan umum" },
        { en: "Procurement", id: "Pengadaan" },
      ],
      people: [{ name: "Fany Soegiarto", role: { en: "President Director", id: "Presiden Direktur" } }],
    },
  ] satisfies DivisionEntry[],

  governanceNote: {
    // Split around the inline link to the Governance page.
    textBefore: {
      en: "A two-tier structure under Indonesia's Limited Liability Company Law — the Board of Commissioners oversees the running of the company, while the Board of Directors manages its operations. More on the ",
      id: "Struktur dua-tingkat sesuai UU Perseroan Terbatas Indonesia — Komisaris mengawasi jalannya perseroan, Direksi menjalankan pengelolaan perusahaan. Selengkapnya di halaman ",
    },
    linkLabel: "Governance",
    textAfter: {
      en: " page.",
      id: ".",
    },
  },

  // ── Locations ──────────────────────────────────────────────────────────────
  footprint: {
    eyebrow: { en: "Footprint", id: "Jejak operasi" },
    heading: {
      en: "Our operations in Indonesia.",
      id: "Operasi kami di Indonesia.",
    },
    body: {
      en: "Head office and distribution hub in Jakarta, and four factories across West and East Java — bringing our products closer to consumers across the archipelago.",
      id: "Kantor pusat dan pusat distribusi di Jakarta, serta empat pabrik di Jawa Barat dan Jawa Timur — mendekatkan produk ke konsumen di seluruh nusantara.",
    },
    makesLabel: { en: "Produces", id: "Memproduksi" },
    mapsLabel: { en: "Open in Google Maps", id: "Buka di Google Maps" },
  },

  locations: [
    {
      kind: "head-office",
      label: { en: "Head office", id: "Kantor pusat" },
      sites: [
        {
          city: "Jakarta Selatan",
          address: "Jl. TB Simatupang Kav. 89, RT 01 RW 02, Kel. Tanjung Barat, Kec. Jagakarsa, Jakarta Selatan, DKI Jakarta 12530",
        },
      ],
    },
    {
      kind: "distribution",
      label: { en: "Distribution hub", id: "Pusat distribusi" },
      sites: [
        {
          city: "Jakarta Timur",
          address: "Jl. Pulo Lentut Kav. E.5.a, Kawasan Industri Pulogadung, Kec. Cakung, Jakarta Timur, DKI Jakarta 13920",
        },
      ],
    },
    {
      kind: "production",
      label: { en: "Production sites", id: "Lokasi produksi" },
      sites: [
        {
          city: "Cibinong, Bogor",
          address: "Jl. Raya Tapos Km 1, Kranji RT 001 RW 011, Kel. Ciriung, Kec. Cibinong, Kab. Bogor, Jawa Barat 16918",
          makes: { en: "Bottled drinking water", id: "Air minum dalam kemasan" },
        },
        {
          city: "Pasuruan, Jawa Timur",
          address: "Jl. Raya Surabaya–Malang Km 59, Desa Sengonagung, Kec. Purwosari, Kab. Pasuruan, Jawa Timur 67162",
          makes: { en: "Bottled drinking water", id: "Air minum dalam kemasan" },
          note: {
            en: "Land for a plant expansion acquired in 2025.",
            id: "Lahan untuk perluasan pabrik dibeli pada 2025.",
          },
        },
        {
          city: "Gunung Putri, Bogor",
          address: "Jl. Kampung Cikuda, RT 002 RW 07, Desa Wanaherang, Kec. Gunung Putri, Kab. Bogor, Jawa Barat 16965",
          makes: { en: "Cosmetics", id: "Kosmetika" },
        },
        {
          city: "Cicurug, Sukabumi",
          address: "Jl. Raya Siliwangi Km 1, RT 001 RW 001, Desa Benda, Kec. Cicurug, Kab. Sukabumi, Jawa Barat 43359",
          makes: { en: "Food and beverages", id: "Makanan dan minuman" },
        },
      ],
    },
  ] satisfies LocationGroup[],

  // ── Achievements ───────────────────────────────────────────────────────────
  achievements: {
    eyebrow: { en: "Achievements", id: "Pencapaian" },
    heading: {
      en: "Certified to international standards.",
      id: "Tersertifikasi standar internasional.",
    },
    body: {
      en: "The management systems and ratings in place across our operations, as reported in the 2025 Annual Report.",
      id: "Sistem manajemen dan peringkat yang diterapkan di seluruh operasi kami, sebagaimana dilaporkan dalam Laporan Tahunan 2025.",
    },
    // PROPER ratings from best to lowest, as set by the Ministry of Environment.
    properScale: [
      { en: "Gold", id: "Emas" },
      { en: "Green", id: "Hijau" },
      { en: "Blue", id: "Biru" },
      { en: "Red", id: "Merah" },
      { en: "Black", id: "Hitam" },
    ],
    properCurrent: 2, // index into properScale — Blue
  },

  certifications: [
    {
      code: "ISO 9001:2015",
      logo: "/media/pages/about/certifications/iso.png",
      kind: "quality",
      category: { en: "Quality", id: "Mutu" },
      title: { en: "Quality management", id: "Manajemen mutu" },
      scope: { en: "Beverages and cosmetics", id: "Minuman dan kosmetika" },
    },
    {
      code: "FSSC 22000 v6.0",
      logo: "/media/pages/about/certifications/fssc-22000.png",
      kind: "food-safety",
      category: { en: "Food safety", id: "Keamanan pangan" },
      title: { en: "Food safety management", id: "Manajemen keamanan pangan" },
      scope: { en: "Beverage production", id: "Produksi minuman" },
    },
    {
      code: "ISO 45001:2018",
      logo: "/media/pages/about/certifications/iso.png",
      kind: "safety",
      category: { en: "Health & safety", id: "K3" },
      title: { en: "Occupational health & safety", id: "Keselamatan & kesehatan kerja" },
      scope: { en: "Beverage production", id: "Produksi minuman" },
    },
    {
      code: "ISO 14001:2015",
      logo: "/media/pages/about/certifications/iso.png",
      kind: "environment",
      category: { en: "Environment", id: "Lingkungan" },
      title: { en: "Environmental management", id: "Manajemen lingkungan" },
      scope: { en: "Business operations", id: "Operasional bisnis" },
    },
    {
      code: "CPKB",
      logo: "/media/pages/about/certifications/bpom.png",
      kind: "cosmetics",
      category: { en: "Cosmetics · BPOM", id: "Kosmetika · BPOM" },
      title: { en: "Good cosmetics manufacturing practice", id: "Cara Pembuatan Kosmetik yang Baik" },
      scope: { en: "Cosmetics production", id: "Produksi kosmetika" },
    },
    {
      code: "PROPER",
      logo: "/media/pages/about/certifications/proper.png",
      kind: "rating",
      category: { en: "Environmental rating", id: "Peringkat lingkungan" },
      title: {
        en: "Environmental performance rating",
        id: "Peringkat kinerja pengelolaan lingkungan",
      },
      scope: {
        en: "Meets every environmental requirement set by the Ministry of Environment",
        id: "Memenuhi seluruh persyaratan pengelolaan lingkungan dari Kementerian Lingkungan Hidup",
      },
    },
  ] satisfies AchievementEntry[],

  // ── Ownership ──────────────────────────────────────────────────────────────
  ownership: {
    eyebrow: { en: "Ownership", id: "Kepemilikan" },
    heading: {
      en: "Shareholding structure.",
      id: "Struktur pemegang saham.",
    },
    body: {
      en: "A total of 589.896.800 shares outstanding, held by a strategic controlling shareholder and public shareholders.",
      id: "Total 589.896.800 lembar saham beredar, terdiri dari pengendali strategis dan saham publik.",
    },
    ctaText: {
      en: "Go to Investor Centre",
      id: "Ke Investor Centre",
    },
    // The figures themselves live in lib/investor.ts (SHAREHOLDERS) so the
    // About and Investor pages can never drift apart.
    sharesUnit: { en: "shares", id: "lembar" } satisfies Localized<string>,
  },
};
