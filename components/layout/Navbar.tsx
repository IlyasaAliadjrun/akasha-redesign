"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/investor", label: "Investor" },
  { href: "/governance", label: "Governance" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
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

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsHover, setBrandsHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sample sections with data-theme="dark" to decide if navbar sits over a dark area
  useEffect(() => {
    const sample = () => {
      const probeY = 32; // just inside the navbar top region
      const darkSections = document.querySelectorAll<HTMLElement>(
        '[data-theme="dark"]'
      );
      let over = false;
      darkSections.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom >= probeY) over = true;
      });
      setOnDark(over);
    };
    sample();
    window.addEventListener("scroll", sample, { passive: true });
    window.addEventListener("resize", sample);
    const mo = new MutationObserver(sample);
    mo.observe(document.body, { childList: true, subtree: true });
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

  // Navbar is solid (light bg, dark text) UNLESS it's sitting over a dark section.
  // Open menus always force solid for legibility.
  const forcedOpen = menuOpen || brandsHover || mobileOpen;
  const solid = forcedOpen || !onDark;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          solid
            ? "bg-white/85 backdrop-blur-xl border-b border-black/5 text-ink"
            : "bg-transparent border-b border-transparent text-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-extrabold tracking-tightish text-lg transition-opacity duration-300 hover:opacity-70"
          >
            AKASHA
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/about">About</NavLink>

            <button
              onMouseEnter={() => {
                setBrandsHover(true);
                setMenuOpen(true);
              }}
              onFocus={() => setMenuOpen(true)}
              className="relative group text-sm font-medium transition-opacity duration-300 opacity-80 hover:opacity-100"
            >
              <span className="relative inline-flex items-center gap-1.5">
                Brands
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

            <NavLink href="/investor">Investor</NavLink>
            <NavLink href="/governance">Governance</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://shop.akasha.co.id"
              target="_blank"
              rel="noreferrer"
              className={`hidden lg:inline-flex items-center text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.98] ${
                solid
                  ? "border-ink/30 text-ink hover:bg-ink hover:text-white hover:border-ink"
                  : "border-white/70 text-white hover:bg-white hover:text-ink hover:border-white"
              }`}
            >
              Online Shop
            </a>
            <button
              aria-label="Menu"
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
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => {
            setMenuOpen(false);
            setBrandsHover(false);
          }}
          className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <MegaMenu onClose={() => setMenuOpen(false)} />
        </div>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-white text-ink pt-[4.5rem] sm:pt-20 px-4 sm:px-6 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
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
              href={l.href}
              className="transition-opacity duration-300 hover:opacity-60"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href="https://shop.akasha.co.id"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileOpen(false)}
          className="mt-10 mb-20 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white"
        >
          Online Shop →
        </a>
      </div>
    </>
  );
}
