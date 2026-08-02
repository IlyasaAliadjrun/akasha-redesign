import type { Localized } from "@/lib/locale/paths";

export const CONTACT_PAGE: {
  meta: { title: Localized<string>; description: Localized<string> };
  hero: { title: Localized<string>; subtitle: Localized<string> };
  customerCare: { label: Localized<string>; hours: Localized<string> };
  headOffice: { label: Localized<string> };
  onlineShop: { label: Localized<string> };
} = {
  meta: {
    title: {
      en: "Contact — Akasha Wira International",
      id: "Contact — Akasha Wira International",
    },
    description: {
      en: "Get in touch with PT Akasha Wira International Tbk — Customer Care, Media, Investor Relations.",
      id: "Hubungi PT Akasha Wira International Tbk — Customer Care, Media, Investor Relations.",
    },
  },
  hero: {
    title: {
      en: "Say hello.",
      id: "Say hello.",
    },
    subtitle: {
      en: "Get in touch with us today. Don't hesitate to ask us anything!",
      id: "Hubungi kami sekarang juga. Jangan ragu untuk bertanya apa pun!",
    },
  },
  customerCare: {
    label: {
      en: "Customer Care",
      id: "Customer Care",
    },
    hours: {
      en: "Monday–Friday, 09:00–18:00 WIB",
      id: "Senin–Jumat, 09.00–18.00 WIB",
    },
  },
  headOffice: {
    label: {
      en: "Head Office",
      id: "Head Office",
    },
  },
  onlineShop: {
    label: {
      en: "Online Shop",
      id: "Online Shop",
    },
  },
};
