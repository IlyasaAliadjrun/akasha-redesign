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

// An asset field that is either one file shared by both languages, or one file
// per language — used only where the artwork has text baked into the image.
// Language-specific files carry a `.en` / `.id` suffix before the extension.
export type LocalizedAsset = string | Localized<string>;

export const pickLocalized = (value: LocalizedAsset, locale: Locale): string =>
  typeof value === "string" ? value : value[locale];

// public/media and public/documents hold locale-agnostic files: one copy serves
// both languages, so these paths must never get a locale segment. They are also
// the only roots that later move to object storage, so they stay prefix-free.
const SHARED_ROOTS = ["/media/", "/documents/"];
const isShared = (path: string) => SHARED_ROOTS.some((root) => path.startsWith(root));

// Prefixes a local (`/`-leading) path with the locale segment. External URLs
// (Unsplash placeholders still referenced by a few content fields) and shared
// asset roots pass through untouched.
export function localizeAsset(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (!path.startsWith("/")) return path;
  if (isShared(path)) return path;
  return `/${locale}${path}`;
}

// Same rule, for internal navigation hrefs. Same-page anchors ("#about") and
// external URLs are left alone.
export function localizeHref(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  if (isShared(path)) return path;
  return `/${locale}${path}`;
}

// Strips a leading /en or /id segment, e.g. for route-shape comparisons that
// shouldn't care which locale is active ("/en/brands/x" -> "/brands/x").
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|id)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] ?? "/";
}
