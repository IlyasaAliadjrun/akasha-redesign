// Data resmi dari akashainternational.com (PT Akasha Wira International Tbk, IDX: ADES)

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

export const SHARE_ACTIONS = [
  { date: "31 Mar 1994", action: "Initial Public Offering (IPO)", shares: "15.000.000", par: "Rp 1.000" },
  { date: "31 Mar 1994", action: "Listing of Founder's Shares", shares: "23.000.000", par: "Rp 1.000" },
  { date: "4 Agu 1997",  action: "Bonus Share Issuance (100 : 294)", shares: "38.000.000", par: "Rp 1.000" },
  { date: "16 Jul 2004", action: "Rights Issue I (100 : 97)", shares: "73.720.000", par: "Rp 1.000" },
  { date: "5 Des 2007",  action: "Rights Issue II", shares: "440.176.800", par: "Rp 1.000" },
];

export const OUTSTANDING_SHARES = "589.896.800";

export const INVESTOR_SECTIONS = [
  { id: "financial-highlights", title: "Financial Highlights", desc: "Ringkasan performa keuangan lima tahun terakhir." },
  { id: "financial-report",     title: "Financial Report",     desc: "Laporan keuangan audited dan interim per kuartal." },
  { id: "annual-report",        title: "Annual Report",        desc: "Laporan tahunan lengkap dengan tinjauan strategis." },
  { id: "share-price",          title: "Share Price",          desc: "Pergerakan harga saham ADES secara real-time." },
  { id: "chronological-share",  title: "Chronological Share",  desc: "Riwayat aksi korporasi sejak IPO 1994." },
  { id: "stock-information",    title: "Stock Information",    desc: "Struktur pemegang saham dan permodalan." },
  { id: "gms",                  title: "General Meeting",      desc: "Panggilan, materi, dan hasil RUPS tahunan." },
  { id: "disclosure",           title: "Disclosure",           desc: "Keterbukaan informasi sesuai POJK." },
];

export const GOVERNANCE_PILLARS = [
  {
    id: "article-of-association",
    title: "Article of Association",
    desc: "Anggaran Dasar — dokumen legal fondasi yang mengatur struktur, hak, dan kewajiban perusahaan.",
    icon: "📜",
  },
  {
    id: "bod-boc-charter",
    title: "Direksi & Komisaris Charter",
    desc: "Pedoman tata kelola untuk Dewan Direksi dan Dewan Komisaris dalam menjalankan fungsi pengawasan.",
    icon: "⚖️",
  },
  {
    id: "csr",
    title: "Corporate Social Responsibility",
    desc: "Program tanggung jawab sosial dan kontribusi berkelanjutan terhadap komunitas serta lingkungan.",
    icon: "🌱",
  },
  {
    id: "announcement",
    title: "Announcement",
    desc: "Pengumuman resmi perusahaan kepada publik dan pemegang saham.",
    icon: "📢",
  },
  {
    id: "disclosure",
    title: "Disclosure Information",
    desc: "Keterbukaan informasi material sesuai ketentuan OJK dan Bursa Efek Indonesia.",
    icon: "🔍",
  },
  {
    id: "gms",
    title: "General Meeting of Shareholders",
    desc: "Prosedur dan dokumentasi Rapat Umum Pemegang Saham (RUPS) tahunan dan luar biasa.",
    icon: "🤝",
  },
];

export const GCG_PRINCIPLES = [
  { letter: "T", title: "Transparansi",   body: "Pengungkapan informasi yang material dan relevan secara tepat waktu dan akurat." },
  { letter: "A", title: "Akuntabilitas",  body: "Kejelasan fungsi dan pertanggungjawaban seluruh organ perusahaan." },
  { letter: "R", title: "Responsibilitas", body: "Kepatuhan terhadap peraturan dan tanggung jawab sosial terhadap stakeholder." },
  { letter: "I", title: "Independensi",   body: "Pengelolaan secara profesional tanpa benturan kepentingan." },
  { letter: "F", title: "Fairness",       body: "Perlakuan yang adil dan setara bagi seluruh pemegang saham." },
];
