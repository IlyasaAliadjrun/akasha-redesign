import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/locale/paths";

const COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function detectFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  for (const lang of preferred) {
    if ((locales as readonly string[]).includes(lang)) return lang as Locale;
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasLocale) {
    // Already locale-prefixed — keep the NEXT_LOCALE cookie in sync with whatever
    // is actually in the URL (bookmarked /id/... link, or a manual edit) so the
    // language switcher's remembered preference stays correct.
    const urlLocale = pathname.split("/")[1];
    const res = NextResponse.next();
    res.cookies.set(COOKIE, urlLocale, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return res;
  }

  const cookieLocale = request.cookies.get(COOKIE)?.value;
  const detected: Locale =
    (cookieLocale && (locales as readonly string[]).includes(cookieLocale)
      ? (cookieLocale as Locale)
      : null) ??
    detectFromAcceptLanguage(request.headers.get("accept-language")) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url, 307);
  res.cookies.set(COOKIE, detected, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Skip Next internals and any request for a file (asset requests always have an
  // extension) — this never intercepts /public asset URLs, only page navigations.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
