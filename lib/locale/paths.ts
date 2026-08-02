// Locale routing primitives — plain functions, safe to import from Server
// Components (no "use client", no React) as well as client components/hooks.

export type Locale = "en" | "id";
export const locales: readonly Locale[] = ["en", "id"];
export const defaultLocale: Locale = "en";

// A copy field available in both languages. Content files (lib/brands.ts,
// lib/subBrands.ts, lib/investor.ts, content/brands/*.ts, content/sub-brands/*.ts)
// wrap any translatable string in this shape; lib/locale/resolve.ts collapses it
// to a plain string for the active locale at render time.
export type Localized<T = string> = { en: T; id: T };

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Prefixes a local (`/`-leading) path with the locale segment. External URLs
// (Unsplash placeholders still referenced by a few content fields) pass through
// untouched, since they never lived under a locale-specific public/ folder.
export function localizeAsset(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (!path.startsWith("/")) return path;
  return `/${locale}${path}`;
}

// Same rule, for internal navigation hrefs. Same-page anchors ("#about") and
// external URLs are left alone.
export function localizeHref(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  return `/${locale}${path}`;
}

// Strips a leading /en or /id segment, e.g. for route-shape comparisons that
// shouldn't care which locale is active ("/en/brands/x" -> "/brands/x").
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|id)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] ?? "/";
}
