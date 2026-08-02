import type { Localized } from "@/lib/locale/paths";

export const CAREERS_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  body: { paragraph: Localized<string> };
  cta: { label: Localized<string> };
} = {
  meta: {
    title: {
      en: "Careers — Akasha Wira International",
      id: "Careers — Akasha Wira International",
    },
    description: {
      en: "Join the team building Indonesia's biggest brands.",
      id: "Bergabung dengan tim yang membangun brand-brand besar Indonesia.",
    },
  },
  hero: {
    title: {
      en: "Build what matters.",
      id: "Build what matters.",
    },
    subtitle: {
      en: "Build brands loved by millions alongside a cross-functional team that values quality, innovation, and positive impact.",
      id: "Bangun brand yang dicintai jutaan orang bersama tim lintas divisi yang menjunjung kualitas, inovasi, dan dampak positif.",
    },
  },
  body: {
    paragraph: {
      en: "We believe great brands are built by great people. Join a team of innovators, marketers, scientists, and operators — working across 5 divisions and 10+ brands.",
      id: "Kami percaya great brands dibangun oleh great people. Bergabunglah dengan tim yang berisi para inovator, marketer, ilmuwan, dan operator — bekerja lintas 5 divisi dan 10+ brand.",
    },
  },
  cta: {
    label: {
      en: "Send your CV",
      id: "Kirim CV",
    },
  },
};
