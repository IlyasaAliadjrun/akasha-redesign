import type { Localized } from "@/lib/locale/paths";

// All bilingual copy for app/[locale]/about/page.tsx. Structural values (years,
// person names, numeric stats, percentages, share counts, street addresses,
// proper-noun city/company names) are intentionally left as plain strings —
// see the field-by-field notes inline below.

type TimelineEntry = {
  year: string; // structural (year number), not localized
  title: Localized<string>;
  body: Localized<string>;
};

type ValueEntry = {
  // "Great Brands" / "Great People" / "Great Culture" / "Great Systems" are an
  // already-English matched set of brand-pillar names — identical in both
  // locales on purpose, still wrapped for type consistency with the rest of
  // the dictionary.
  title: Localized<string>;
  body: Localized<string>;
};

type PersonEntry = {
  name: string; // proper noun, not localized
  role?: Localized<string>;
};

type OrganizationGroupEntry = {
  label: Localized<string>;
  people: PersonEntry[];
};

type OrganizationRowEntry = {
  groups: [OrganizationGroupEntry, OrganizationGroupEntry];
};

type FacilityEntry = {
  // Structural discriminant the component uses for accent-color switching —
  // NOT rendered, so it stays a plain union instead of Localized<string>.
  kind: "head-office" | "distribution" | "production";
  type: Localized<string>; // display label ("Head Office" / "Kantor Pusat", etc.)
  location: string; // proper noun (Indonesian city name), not localized
  detail: Localized<string>; // addresses are identical en/id; "Manufacturing facility" is translated
};

type StatEntry = {
  n: string; // structural number ("40+", "10", ...), not localized
  l: Localized<string>;
};

export const ABOUT_PAGE = {
  meta: {
    title: {
      en: "About — Akasha Wira International",
      id: "About — Akasha Wira International",
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
    // Official statement, already published in English; id is a faithful
    // translation for the Indonesian reader.
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

  fourGreats: {
    eyebrow: { en: "The Four Greats", id: "Empat Hal Hebat" },
    heading: {
      en: "The four pillars that shape us.",
      id: "Empat pilar yang membentuk kami.",
    },
  },

  values: [
    {
      title: { en: "Great Brands", id: "Great Brands" },
      body: {
        en: "From Nestlé Pure Life to Mujigae — a portfolio of brands trusted and loved by millions of Indonesian families.",
        id: "Dari Nestlé Pure Life hingga Mujigae — portofolio brand yang dipercaya dan dicintai jutaan keluarga Indonesia.",
      },
    },
    {
      title: { en: "Great People", id: "Great People" },
      body: {
        en: "Cross-divisional teams that uphold quality, innovation, and positive impact for consumers.",
        id: "Tim lintas divisi yang menjunjung kualitas, inovasi, dan dampak positif bagi konsumen.",
      },
    },
    {
      title: { en: "Great Culture", id: "Great Culture" },
      body: {
        en: "A work culture that fosters collaboration, continuous learning, and integrity.",
        id: "Budaya kerja yang mendorong kolaborasi, pembelajaran berkelanjutan, dan integritas.",
      },
    },
    {
      title: { en: "Great Systems", id: "Great Systems" },
      body: {
        en: "Measurable manufacturing, distribution, and quality-control processes — from factory to store shelf.",
        id: "Proses manufaktur, distribusi, dan pengendalian mutu yang terukur — dari pabrik ke rak toko.",
      },
    },
  ] satisfies ValueEntry[],

  stats: [
    { n: "40+", l: { en: "Years in business", id: "Tahun berkarya" } },
    { n: "10", l: { en: "Consumer brands", id: "Brand konsumen" } },
    { n: "5", l: { en: "Business divisions", id: "Divisi bisnis" } },
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
      year: "1994",
      title: { en: "Listed on the Exchange", id: "Masuk Bursa" },
      body: {
        en: "IPO of 15 million shares; listed on the Jakarta Stock Exchange on 14 June.",
        id: "IPO 15 juta lembar saham; tercatat di Bursa Efek Jakarta pada 14 Juni.",
      },
    },
    {
      year: "1997",
      title: { en: "Bonus Shares", id: "Bonus Shares" },
      body: {
        en: "Issuance of 38 million bonus shares to strengthen the capital structure.",
        id: "Penerbitan 38 juta bonus shares untuk memperkuat struktur permodalan.",
      },
    },
    {
      year: "2004",
      title: { en: "Global Alliance", id: "Aliansi Global" },
      body: {
        en: "Water Partners Bottling S.A. (a Nestlé & Coca-Cola joint venture) became the majority shareholder. The name changed to PT AdeS Waters Indonesia, Tbk.",
        id: "Water Partners Bottling S.A. (JV Nestlé & Coca-Cola) menjadi pemegang saham mayoritas. Nama berubah jadi PT AdeS Waters Indonesia, Tbk.",
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
      title: { en: "Expansion & Rebranding", id: "Ekspansi & Rebranding" },
      body: {
        en: "The name changed to PT Akasha Wira International Tbk. Expanded into the cosmetics industry through the acquisition of Makarizo.",
        id: "Nama berubah menjadi PT Akasha Wira International Tbk. Ekspansi ke industri kosmetik melalui akuisisi Makarizo.",
      },
    },
    {
      year: "2012",
      title: { en: "P&G Partnership", id: "Partnership P&G" },
      body: {
        en: "Partnership with Procter & Gamble for professional cosmetics distribution.",
        id: "Kerja sama dengan Procter & Gamble untuk distribusi kosmetik profesional.",
      },
    },
    {
      year: "2014",
      title: { en: "Soy Beverages", id: "Minuman Kedelai" },
      body: {
        en: "Launch of a soy beverage line under the Pureal brand.",
        id: "Peluncuran lini minuman kedelai dengan brand Pureal.",
      },
    },
  ] satisfies TimelineEntry[],

  leadership: {
    eyebrow: { en: "Leadership", id: "Kepemimpinan" },
    heading: {
      en: "Leading the journey.",
      id: "Yang memimpin perjalanan.",
    },
    commissionersLabel: {
      en: "Board of Commissioners · Dewan Komisaris",
      id: "Dewan Komisaris · Board of Commissioners",
    },
    directorsLabel: {
      en: "Board of Directors · Direksi",
      id: "Direksi · Board of Directors",
    },
  },

  commissioners: [
    {
      name: "Hanjaya Limanto",
      role: { en: "President Commissioner", id: "Komisaris Utama" },
    },
    {
      name: "Rudy Hidayat",
      role: { en: "Commissioner", id: "Komisaris" },
    },
    {
      name: "Julianto",
      role: { en: "Independent Commissioner", id: "Komisaris Independen" },
    },
  ] satisfies PersonEntry[],

  directors: [
    {
      name: "Fany Soegiarto",
      role: { en: "President Director", id: "Presiden Direktur" },
    },
    {
      name: "Hagi Yufantra",
      role: { en: "Director", id: "Direktur" },
    },
  ] satisfies PersonEntry[],

  organizationRows: [
    {
      groups: [
        {
          label: {
            en: "Audit Committee · Komite Audit",
            id: "Komite Audit · Audit Committee",
          },
          people: [
            {
              name: "Julianto",
              role: { en: "Chairman", id: "Ketua" },
            },
            {
              name: "Zulbahri",
              role: { en: "Member", id: "Anggota" },
            },
            {
              name: "Hastuti",
              role: { en: "Member", id: "Anggota" },
            },
          ],
        },
        {
          label: {
            en: "Internal Audit · Audit Internal",
            id: "Audit Internal · Internal Audit",
          },
          people: [{ name: "Wendi Jaya Wardana" }],
        },
      ],
    },
    {
      groups: [
        {
          label: {
            en: "Corporate Secretary · Sekretaris Perusahaan",
            id: "Sekretaris Perusahaan · Corporate Secretary",
          },
          people: [{ name: "Aprianti Kartika" }],
        },
        {
          label: {
            en: "Production · Produksi",
            id: "Produksi · Production",
          },
          people: [
            { name: "Ependi" },
            { name: "Budi Santoso" },
            { name: "Anjar R. Martadiputra" },
            { name: "Yulizar B. Riyanto" },
            { name: "Rinaldi" },
          ],
        },
      ],
    },
    {
      groups: [
        {
          label: {
            en: "Commercial · Komersial",
            id: "Komersial · Commercial",
          },
          people: [{ name: "Hagi Yufantra" }],
        },
        {
          label: {
            en: "Operations · Operasional",
            id: "Operasional · Operations",
          },
          people: [{ name: "Fany Soegiarto" }],
        },
      ],
    },
  ] satisfies OrganizationRowEntry[],

  governanceNote: {
    // Split around the inline link to the Governance page; the link label
    // itself ("Governance") is a page name and stays identical in both locales.
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

  footprint: {
    eyebrow: { en: "Footprint", id: "Jejak Operasi" },
    heading: {
      en: "Our operations in Indonesia.",
      id: "Operasi kami di Indonesia.",
    },
    body: {
      en: "Two logistics hubs in Jakarta and four factories spread across West Java and East Java — bringing our products closer to consumers across the archipelago.",
      id: "Dua hub logistik di Jakarta dan empat pabrik tersebar di Jawa Barat serta Jawa Timur — mendekatkan produk ke konsumen di seluruh nusantara.",
    },
  },

  facilities: [
    {
      kind: "head-office",
      type: { en: "Head Office", id: "Kantor Pusat" },
      location: "Jakarta Selatan",
      detail: {
        en: "Jl. TB. Simatupang Kav. 89",
        id: "Jl. TB. Simatupang Kav. 89",
      },
    },
    {
      kind: "distribution",
      type: { en: "Distribution Hub", id: "Pusat Distribusi" },
      location: "Jakarta Timur",
      detail: {
        en: "Jl. Pulo Lentut Kav. E.5.a",
        id: "Jl. Pulo Lentut Kav. E.5.a",
      },
    },
    {
      kind: "production",
      type: { en: "Production Site", id: "Lokasi Produksi" },
      location: "Cibinong, Bogor",
      detail: { en: "Manufacturing facility", id: "Fasilitas manufaktur" },
    },
    {
      kind: "production",
      type: { en: "Production Site", id: "Lokasi Produksi" },
      location: "Gunung Putri, Bogor",
      detail: { en: "Manufacturing facility", id: "Fasilitas manufaktur" },
    },
    {
      kind: "production",
      type: { en: "Production Site", id: "Lokasi Produksi" },
      location: "Pasuruan, Jawa Timur",
      detail: { en: "Manufacturing facility", id: "Fasilitas manufaktur" },
    },
    {
      kind: "production",
      type: { en: "Production Site", id: "Lokasi Produksi" },
      location: "Sukabumi, Jawa Barat",
      detail: { en: "Manufacturing facility", id: "Fasilitas manufaktur" },
    },
  ] satisfies FacilityEntry[],

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
    // Rendered as two fixed (not mapped) blocks in the page, each with its own
    // accent color, so this is an object rather than an array.
    shareholders: {
      primary: {
        // Company name — proper noun, not localized.
        name: "Waters Partners Bottling S.A.",
        // Indonesian-formatted percentage/share count, left as-is per prior
        // project decision — only the trailing unit word is localized.
        percent: "91,52%",
        shares: {
          en: "539.896.713 shares",
          id: "539.896.713 lembar",
        },
      },
      public: {
        name: { en: "Public", id: "Publik" } satisfies Localized<string>,
        percent: "8,48%",
        shares: {
          en: "50.000.087 shares",
          id: "50.000.087 lembar",
        },
      },
    },
  },
};
