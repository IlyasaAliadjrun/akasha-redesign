// Data resmi dari akashainternational.com (PT Akasha Wira International Tbk, IDX: ADES)
import type { Localized } from "@/lib/locale/paths";

export const FINANCIAL_YEARS = [2024, 2023, 2022, 2021, 2020] as const;

// Angka dalam Rp juta, kecuali EPS (Rp)
export const FINANCIALS = {
  netSales:        [1_956_431, 1_525_445, 1_290_992,   935_075,   673_364],
  grossProfit:     [1_006_211,   810_936,   670_752,   499_568,   342_565],
  operatingIncome: [  629_638,   484_693,   452_537,   328_221,   161_962],
  netIncome:       [  527_368,   395_798,   364_972,   265_758,   135_789],
  eps:             [      894,       671,       619,       451,       230], // Rp
  totalAssets:     [2_696_874, 2_085_182, 1_645_582, 1_304_108,   958_791],
  totalEquity:     [2_258_501, 1_729_808, 1_334_836,   969_817,   700_508],
  currentRatio:    [     4.04,      4.12,      3.20,      2.51,      2.97],
};

export const RATIOS = {
  roa:             [20, 19, 22, 20, 14], // Net Income / Total Assets (%)
  roe:             [23, 23, 27, 27, 19], // Net Income / Total Equity (%)
  grossMargin:     [51, 53, 52, 53, 51],
  operatingMargin: [32, 32, 35, 35, 24],
  netMargin:       [27, 26, 28, 28, 20],
};

export const SHARE_ACTIONS: {
  date: Localized<string>;
  action: Localized<string>;
  shares: string;
  par: string;
}[] = [
  {
    date: { en: "31 Mar 1994", id: "31 Mar 1994" },
    action: { en: "Initial Public Offering (IPO)", id: "Penawaran Umum Perdana (IPO)" },
    shares: "15.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "31 Mar 1994", id: "31 Mar 1994" },
    action: { en: "Listing of Founder's Shares", id: "Pencatatan Saham Pendiri" },
    shares: "23.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "4 Aug 1997", id: "4 Agu 1997" },
    action: { en: "Bonus Share Issuance (100 : 294)", id: "Penerbitan Saham Bonus (100 : 294)" },
    shares: "38.000.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "16 Jul 2004", id: "16 Jul 2004" },
    action: { en: "Rights Issue I (100 : 97)", id: "Penawaran Umum Terbatas I (100 : 97)" },
    shares: "73.720.000",
    par: "Rp 1.000",
  },
  {
    date: { en: "5 Dec 2007", id: "5 Des 2007" },
    action: { en: "Rights Issue II", id: "Penawaran Umum Terbatas II" },
    shares: "440.176.800",
    par: "Rp 1.000",
  },
];

export const OUTSTANDING_SHARES = "589.896.800";

export const INVESTOR_SECTIONS: {
  id: string;
  title: Localized<string>;
  desc: Localized<string>;
}[] = [
  {
    id: "financial-highlights",
    title: { en: "Financial Highlights", id: "Ikhtisar Keuangan" },
    desc: {
      en: "Summary of financial performance over the last five years.",
      id: "Ringkasan performa keuangan lima tahun terakhir.",
    },
  },
  {
    id: "financial-report",
    title: { en: "Financial Report", id: "Laporan Keuangan" },
    desc: {
      en: "Audited and quarterly interim financial statements.",
      id: "Laporan keuangan audited dan interim per kuartal.",
    },
  },
  {
    id: "annual-report",
    title: { en: "Annual Report", id: "Laporan Tahunan" },
    desc: {
      en: "Full annual report with strategic review.",
      id: "Laporan tahunan lengkap dengan tinjauan strategis.",
    },
  },
  {
    id: "share-price",
    title: { en: "Share Price", id: "Harga Saham" },
    desc: {
      en: "Real-time movement of ADES share price.",
      id: "Pergerakan harga saham ADES secara real-time.",
    },
  },
  {
    id: "chronological-share",
    title: { en: "Chronological Share", id: "Kronologi Saham" },
    desc: {
      en: "History of corporate actions since the 1994 IPO.",
      id: "Riwayat aksi korporasi sejak IPO 1994.",
    },
  },
  {
    id: "stock-information",
    title: { en: "Stock Information", id: "Informasi Saham" },
    desc: {
      en: "Shareholder structure and capitalization.",
      id: "Struktur pemegang saham dan permodalan.",
    },
  },
  {
    id: "gms",
    title: { en: "General Meeting", id: "Rapat Umum" },
    desc: {
      en: "Notices, materials, and results of the annual GMS.",
      id: "Panggilan, materi, dan hasil RUPS tahunan.",
    },
  },
  {
    id: "disclosure",
    title: { en: "Disclosure", id: "Keterbukaan Informasi" },
    desc: {
      en: "Information disclosure in accordance with POJK regulations.",
      id: "Keterbukaan informasi sesuai POJK.",
    },
  },
];

export const GOVERNANCE_PILLARS: {
  id: string;
  title: Localized<string>;
  desc: Localized<string>;
  icon: string;
}[] = [
  {
    id: "article-of-association",
    title: { en: "Article of Association", id: "Anggaran Dasar" },
    desc: {
      en: "Article of Association — the foundational legal document governing the company's structure, rights, and obligations.",
      id: "Anggaran Dasar — dokumen legal fondasi yang mengatur struktur, hak, dan kewajiban perusahaan.",
    },
    icon: "📜",
  },
  {
    id: "bod-boc-charter",
    title: { en: "BOD & BOC Charter", id: "Direksi & Komisaris Charter" },
    desc: {
      en: "Governance guidelines for the Board of Directors and Board of Commissioners in carrying out their oversight functions.",
      id: "Pedoman tata kelola untuk Dewan Direksi dan Dewan Komisaris dalam menjalankan fungsi pengawasan.",
    },
    icon: "⚖️",
  },
  {
    id: "csr",
    title: { en: "Corporate Social Responsibility", id: "Tanggung Jawab Sosial Perusahaan" },
    desc: {
      en: "Social responsibility programs and sustained contribution to community and environment.",
      id: "Program tanggung jawab sosial dan kontribusi berkelanjutan terhadap komunitas serta lingkungan.",
    },
    icon: "🌱",
  },
  {
    id: "announcement",
    title: { en: "Announcement", id: "Pengumuman" },
    desc: {
      en: "Official company announcements to the public and shareholders.",
      id: "Pengumuman resmi perusahaan kepada publik dan pemegang saham.",
    },
    icon: "📢",
  },
  {
    id: "disclosure",
    title: { en: "Disclosure Information", id: "Keterbukaan Informasi" },
    desc: {
      en: "Material information disclosure per OJK and Indonesia Stock Exchange regulations.",
      id: "Keterbukaan informasi material sesuai ketentuan OJK dan Bursa Efek Indonesia.",
    },
    icon: "🔍",
  },
  {
    id: "gms",
    title: { en: "General Meeting of Shareholders", id: "Rapat Umum Pemegang Saham" },
    desc: {
      en: "Procedures and documentation for the annual and extraordinary General Meeting of Shareholders (GMS).",
      id: "Prosedur dan dokumentasi Rapat Umum Pemegang Saham (RUPS) tahunan dan luar biasa.",
    },
    icon: "🤝",
  },
];

export const GCG_PRINCIPLES: {
  letter: string;
  title: Localized<string>;
  body: Localized<string>;
}[] = [
  {
    letter: "T",
    title: { en: "Transparency", id: "Transparansi" },
    body: {
      en: "Disclosure of material and relevant information in a timely and accurate manner.",
      id: "Pengungkapan informasi yang material dan relevan secara tepat waktu dan akurat.",
    },
  },
  {
    letter: "A",
    title: { en: "Accountability", id: "Akuntabilitas" },
    body: {
      en: "Clarity of function and accountability across every organ of the company.",
      id: "Kejelasan fungsi dan pertanggungjawaban seluruh organ perusahaan.",
    },
  },
  {
    letter: "R",
    title: { en: "Responsibility", id: "Responsibilitas" },
    body: {
      en: "Compliance with regulations and social responsibility toward stakeholders.",
      id: "Kepatuhan terhadap peraturan dan tanggung jawab sosial terhadap stakeholder.",
    },
  },
  {
    letter: "I",
    title: { en: "Independency", id: "Independensi" },
    body: {
      en: "Professional management free of conflicts of interest.",
      id: "Pengelolaan secara profesional tanpa benturan kepentingan.",
    },
  },
  {
    letter: "F",
    title: { en: "Fairness", id: "Fairness" },
    body: {
      en: "Fair and equal treatment for all shareholders.",
      id: "Perlakuan yang adil dan setara bagi seluruh pemegang saham.",
    },
  },
];
