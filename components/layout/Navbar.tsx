"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { stripLocale } from "@/lib/locale/paths";
import { NAV } from "@/dictionaries/layout";

const NAV_LINKS = [
  { href: "/about", label: NAV.about },
  { href: "/investor", label: NAV.investor },
  { href: "/governance", label: NAV.governance },
  { href: "/careers", label: NAV.careers },
  { href: "/contact", label: NAV.contact },
];

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-sm font-medium transition-opacity duration-300 hover:opacity-100 opacity-80"
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 right-0 -bottom-1 h-px bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
      </span>
    </Link>
  );
}

// Themed section the navbar currently sits over:
//   "dark"  → transparent bar, white content (logo putih)
//   "light" → transparent bar, dark content (logo warna)
//   null    → solid white bar (body sections), dark content
type Theme = "dark" | "light" | null;

// Routes whose first section is `data-theme="dark"` — used to seed the initial
// state so the navbar paints correctly before the DOM sample runs. Compared after
// stripping the /en or /id locale prefix, so it doesn't care which locale is active.
const startsOnDark = (path: string) => {
  const p = stripLocale(path);
  return p === "/" || p.startsWith("/brands/");
};

// MK3 line pages keep their brown navbar while the light hero is underneath.
// At the showcase, the navbar returns to its standard section-based treatment.
const isMk3SubBrand = (path: string) =>
  /^\/brands\/mk3\/(damage-repair|color-revive|scalp-care)\/?$/.test(
    stripLocale(path)
  );

export default function Navbar() {
  const pathname = usePathname() || "/";
  const { asset, href, t } = useLocale();
  const [overTheme, setOverTheme] = useState<Theme>(() =>
    isMk3SubBrand(pathname) ? "light" : startsOnDark(pathname) ? "dark" : null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsHover, setBrandsHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeBrandsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openBrands = () => {
    if (closeBrandsTimer.current) clearTimeout(closeBrandsTimer.current);
    setBrandsHover(true);
    setMenuOpen(true);
  };

  // Delay close so the cursor has time to travel from button to dropdown panel.
  const scheduleCloseBrands = () => {
    if (closeBrandsTimer.current) clearTimeout(closeBrandsTimer.current);
    closeBrandsTimer.current = setTimeout(() => {
      setBrandsHover(false);
      setMenuOpen(false);
    }, 150);
  };

  // Sample which themed section (if any) the navbar sits over.
  useEffect(() => {
    // Reset to the route's known starting state when pathname changes — avoids
    // carrying a stale theme across route transitions before the first sample.
    setOverTheme(
      isMk3SubBrand(pathname) ? "light" : startsOnDark(pathname) ? "dark" : null
    );
    const sample = () => {
      const probeY = 32; // just inside the navbar top region
      const themed = document.querySelectorAll<HTMLElement>("[data-theme]");
      let theme: Theme = null;
      themed.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom >= probeY) {
          theme = (el.getAttribute("data-theme") as Theme) ?? null;
        }
      });
      setOverTheme(theme);
    };
    sample();
    window.addEventListener("scroll", sample, { passive: true });
    window.addEventListener("resize", sample);
    const mo = new MutationObserver(sample);
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      window.removeEventListener("scroll", sample);
      window.removeEventListener("resize", sample);
      mo.disconnect();
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Body sections and open menus use the standard solid white bar. The three MK3
  // line heroes use their brown brand bar; all other themed heroes stay transparent.
  // Content (text + logo) goes dark whenever it isn't over a dark treatment.
  const forcedOpen = menuOpen || brandsHover || mobileOpen;
  const mk3HeroNav = isMk3SubBrand(pathname) && overTheme === "light" && !forcedOpen;
  const navSolid = forcedOpen || overTheme === null || mk3HeroNav;
  const darkContent = !mk3HeroNav && (navSolid || overTheme === "light");

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mk3HeroNav
            ? "bg-[#3E2120] border-b border-[#3E2120]"
            : navSolid
            ? "bg-white/85 backdrop-blur-xl border-b border-black/5"
            : "bg-transparent border-b border-transparent"
        } ${darkContent ? "text-ink" : "text-white"}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-14 sm:h-16 md:h-20 lg:h-24 flex items-center justify-between">
          <Link
            href={href("/")}
            aria-label="Akasha — home"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-70"
          >
            <Image
              src={asset(darkContent ? "/shared/logo-color.png" : "/shared/logo-white.png")}
              alt="Akasha"
              width={240}
              height={72}
              priority
              className="h-12 sm:h-14 md:h-[72px] lg:h-[84px] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href={href("/about")}>{t(NAV.about)}</NavLink>

            <button
              onMouseEnter={openBrands}
              onMouseLeave={scheduleCloseBrands}
              onFocus={openBrands}
              className="relative group text-sm font-medium transition-opacity duration-300 opacity-80 hover:opacity-100"
            >
              <span className="relative inline-flex items-center gap-1.5">
                {t(NAV.brands)}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <span
                  className={`absolute left-0 right-4 -bottom-1 h-px bg-current origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </button>

            <NavLink href={href("/investor")}>{t(NAV.investor)}</NavLink>
            <NavLink href={href("/governance")}>{t(NAV.governance)}</NavLink>
            <NavLink href={href("/careers")}>{t(NAV.careers)}</NavLink>
            <NavLink href={href("/contact")}>{t(NAV.contact)}</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher
              className={`hidden lg:inline-flex items-center text-sm font-semibold w-9 h-9 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.98] justify-center ${
                darkContent
                  ? "border-ink/30 text-ink hover:bg-ink hover:text-white hover:border-ink"
                  : "border-white/70 text-white hover:bg-white hover:text-ink hover:border-white"
              }`}
            />
            <a
              href="https://shop.akasha.co.id"
              target="_blank"
              rel="noreferrer"
              className={`hidden lg:inline-flex items-center text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.98] ${
                darkContent
                  ? "border-ink/30 text-ink hover:bg-ink hover:text-white hover:border-ink"
                  : "border-white/70 text-white hover:bg-white hover:text-ink hover:border-white"
              }`}
            >
              {t(NAV.onlineShop)}
            </a>
            <button
              aria-label={t(NAV.menu)}
              className="lg:hidden w-10 h-10 flex items-center justify-center relative"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                className={`absolute block w-6 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block w-6 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={openBrands}
          onMouseLeave={scheduleCloseBrands}
          className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <MegaMenu onClose={() => setMenuOpen(false)} />
        </div>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-white text-ink pt-[4.5rem] sm:pt-20 md:pt-24 px-4 sm:px-6 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <MegaMenu onClose={() => setMobileOpen(false)} mobile />
        <div className="mt-8 flex flex-col gap-4 text-lg font-medium">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              onClick={() => setMobileOpen(false)}
              href={href(l.href)}
              className="transition-opacity duration-300 hover:opacity-60"
            >
              {t(l.label)}
            </Link>
          ))}
        </div>
        <div className="mt-10 mb-20 flex items-center gap-3">
          <a
            href="https://shop.akasha.co.id"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white"
          >
            {t(NAV.onlineShop)} →
          </a>
          <LanguageSwitcher className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink/15 text-sm font-semibold" />
        </div>
      </div>
    </>
  );
}
