"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { locales } from "@/lib/locale/paths";

// Deliberately avoids next/navigation's useSearchParams() — reading it from a
// client component with no Suspense boundary above it forces the whole route out
// of static rendering, and nothing on this site actually depends on query strings.
export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const other = locales.find((l) => l !== locale)!;
  const rest = pathname.replace(/^\/(en|id)/, "") || "/";
  const target = `/${other}${rest}`;

  const switchTo = () => {
    document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${target}${hash}`);
  };

  return (
    <button
      type="button"
      onClick={switchTo}
      aria-label={`Switch language to ${other === "en" ? "English" : "Indonesian"}`}
      className={className}
    >
      {other.toUpperCase()}
    </button>
  );
}
