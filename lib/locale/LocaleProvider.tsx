"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { type Locale, localizeAsset, localizeHref } from "./paths";
import { resolveLocale } from "./resolve";

type LocaleContextValue = {
  locale: Locale;
  asset: (path: string) => string;
  href: (path: string) => string;
  // Resolves any value that may be a `Localized<T>` (or a tree containing one) for
  // the current locale — e.g. `t(division.tagline)`. Plain values pass through.
  t: <T>(value: T) => Resolved_<T>;
};

// Local alias so the exported `t` signature doesn't force every call site to
// import Resolved from lib/locale/resolve.
type Resolved_<T> = import("./resolve").Resolved<T>;

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      asset: (path: string) => localizeAsset(locale, path),
      href: (path: string) => localizeHref(locale, path),
      t: <T,>(v: T) => resolveLocale(v, locale) as Resolved_<T>,
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
