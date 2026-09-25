import type { MetadataRoute } from "next";
import { locales } from "@/lib/locale/paths";
import { pageBrands } from "@/lib/brands";
import { SUB_BRANDS } from "@/lib/subBrands";
import { SITE_URL, languageAlternates } from "@/lib/seo";

// Locale-less paths; every one exists in both languages. Umbrella brands are
// left out on purpose — they 404 (see pageBrands()).
const PATHS = [
  "",
  "/about",
  "/investor",
  "/governance",
  "/careers",
  "/contact",
  ...pageBrands().map((b) => `/brands/${b.slug}`),
  ...SUB_BRANDS.map((s) => `/brands/${s.parent}/${s.slug}`),
];

const absolute = (href: string) => `${SITE_URL}${href}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absolute(href)]),
    );
    return locales.map((locale) => ({
      url: absolute(`/${locale}${path}`),
      alternates: { languages },
    }));
  });
}
