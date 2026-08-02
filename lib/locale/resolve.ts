import type { Locale, Localized } from "./paths";
import { localizeAsset } from "./paths";
import type { Brand } from "@/lib/brands";
import type { SubBrand } from "@/lib/subBrands";

export type { Localized };

function isLocalized(value: unknown): value is Localized<unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const keys = Object.keys(value).sort();
  return keys.length === 2 && keys[0] === "en" && keys[1] === "id";
}

// Recursively resolves a data tree for one locale: `Localized<T>` fields collapse
// to their `T` value, `/`-leading string fields (asset paths, internal hrefs) get
// locale-prefixed, and everything else (numbers, booleans, plain proper-noun
// strings, external URLs) passes through unchanged.
export function resolveLocale<T>(value: T, locale: Locale): unknown {
  if (isLocalized(value)) {
    return resolveLocale((value as Localized<unknown>)[locale], locale);
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveLocale(item, locale));
  }
  if (typeof value === "string") {
    return localizeAsset(locale, value);
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(value as Record<string, unknown>)) {
      out[key] = resolveLocale((value as Record<string, unknown>)[key], locale);
    }
    return out;
  }
  return value;
}

// Type-level mirror of resolveLocale: replaces every `Localized<T>` with `T`,
// recursing through arrays/objects. Fields with no Localized<T> anywhere in their
// shape come out structurally identical to the input.
export type Resolved<T> = T extends Localized<infer U>
  ? Resolved<U>
  : T extends (infer E)[]
  ? Resolved<E>[]
  : T extends object
  ? { [K in keyof T]: Resolved<T[K]> }
  : T;

export type ResolvedBrand = Resolved<Brand>;
export type ResolvedSubBrand = Resolved<SubBrand>;

export const resolveBrand = (brand: Brand, locale: Locale): ResolvedBrand =>
  resolveLocale(brand, locale) as ResolvedBrand;

export const resolveSubBrand = (sub: SubBrand, locale: Locale): ResolvedSubBrand =>
  resolveLocale(sub, locale) as ResolvedSubBrand;
