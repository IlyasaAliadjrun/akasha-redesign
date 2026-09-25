import type { Localized } from "@/lib/locale/paths";

// Source: https://akashainternational.com/work-with-us/ — the two paragraphs are
// the official text, kept verbatim in English (Indonesian is a close translation).
// The application form is the company's JotForm, embedded as on the old site.

export const CAREERS_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string> };
  paragraphs: Localized<string>[];
  form: { id: string; title: Localized<string> };
} = {
  meta: {
    title: {
      en: "Work with us — Akasha Wira International",
      id: "Karier — Akasha Wira International",
    },
    description: {
      en: "Developing careers, cross-functional and business units working, autonomy and clear responsibility are realities early on at PT Akasha Wira International Tbk.",
      id: "Karier yang berkembang, kerja lintas fungsi dan unit bisnis, otonomi, serta tanggung jawab yang jelas sejak awal di PT Akasha Wira International Tbk.",
    },
  },

  hero: {
    title: { en: "Work with us.", id: "Berkarier bersama kami." },
  },

  paragraphs: [
    {
      en: "Where your career takes you and how far you progress is only as limited as your aspirations, developing careers, cross-functional and business units working, autonomy and clear responsibility are realities early on when working at PT Akasha Wira International Tbk.",
      id: "Ke mana karier membawa Anda dan sejauh mana Anda berkembang hanya dibatasi oleh aspirasi Anda. Karier yang berkembang, kerja lintas fungsi dan lintas unit bisnis, otonomi, serta tanggung jawab yang jelas sudah menjadi kenyataan sejak awal bekerja di PT Akasha Wira International Tbk.",
    },
    {
      en: "PT Akasha Wira International Tbk, one of the Indonesian consumer goods companies who is evolving towards excellence through innovative breakthroughs, as the producer of Nestle Pure Life and Vica Royal under beverage business line and manufacturer of beauty care products under the trademark of Makarizo, inviting highly motivated individuals with professional knowledge, personal integrity to excel and enjoy facing challenges onto our dynamic organization.",
      id: "PT Akasha Wira International Tbk, salah satu perusahaan barang konsumsi Indonesia yang terus berkembang menuju keunggulan melalui terobosan inovatif, sebagai produsen Nestlé Pure Life dan Vica Royal di lini bisnis minuman serta produsen produk perawatan kecantikan dengan merek Makarizo, mengundang individu bermotivasi tinggi dengan pengetahuan profesional dan integritas pribadi untuk berprestasi dan menikmati tantangan dalam organisasi kami yang dinamis.",
    },
  ],

  form: {
    id: "241727828607061",
    title: { en: "Job application form", id: "Formulir lamaran kerja" },
  },
};
