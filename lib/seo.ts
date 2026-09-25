import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/locale/paths";

// Both values are read at build time — deploy.sh loads /etc/akasha/web.env before
// `npm run build`, so changing either means rebuilding.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://akashainternational.com").replace(/\/+$/, "");

// Indexing is opt-in. Until this site replaces the live WordPress site on the same
// domain, any public copy (staging, Vercel preview) must stay out of search results
// or it competes with — and gets flagged as a duplicate of — the real site.
export const INDEXABLE = process.env.SITE_INDEXABLE === "true";

export const SITE_NAME = "Akasha Wira International";
export const DEFAULT_OG_IMAGE = "/media/shared/og.jpg";

const OG_LOCALE: Record<Locale, string> = { en: "en_US", id: "id_ID" };

// Brand share images come from `npm run og:generate`; a page whose file is
// missing falls back to the default card instead of a broken preview. The list
// of files on disk is built in next.config.mjs — never stat public/ from here
// (see the note there).
const OG_IMAGES = new Set<string>(JSON.parse(process.env.OG_IMAGES || "[]"));

export const shareImage = (src: string) => (OG_IMAGES.has(src) ? src : DEFAULT_OG_IMAGE);

// Search results cut descriptions at ~160 characters. Brand copy is written for
// the page, not for that limit, so keep whole sentences up to it, and top a short
// one up with `extra` (e.g. "Vica by PT Akasha Wira International Tbk.").
export function fitDescription(text: string, extra?: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  let out = "";
  for (const sentence of clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [clean]) {
    const next = `${out} ${sentence.trim()}`.trim();
    if (next.length > max && out) break;
    out = next;
  }
  if (out.length > max) out = `${out.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
  if (extra && out.length < 110 && out.length + extra.length + 1 <= max) out = `${out} ${extra}`;
  return out;
}

// `path` is locale-less and starts with "/" ("" for the home page).
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    "x-default": `/${defaultLocale}${path}`,
  } as Record<Locale | "x-default", string>;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string; // 1200×630, public/media/…
}): Metadata {
  const url = `/${locale}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// Structured data for the company itself — on the home and About pages.
export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "PT Akasha Wira International Tbk",
    alternateName: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/media/shared/logo-color.png`,
    foundingDate: "1985",
    tickerSymbol: "IDX: ADES",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. TB Simatupang Kav. 89, RT 01 RW 02, Kel. Tanjung Barat, Kec. Jagakarsa",
      addressLocality: "Jakarta Selatan",
      postalCode: "12530",
      addressCountry: "ID",
    },
  };
}
