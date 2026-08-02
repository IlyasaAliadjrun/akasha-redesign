import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, type Locale } from "@/lib/locale/paths";
import { LocaleProvider } from "@/lib/locale/LocaleProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

// Fonts are self-hosted (files in ../fonts, sourced from @fontsource) rather than
// fetched from Google Fonts at build time — so builds never depend on the network
// and the real fonts always render. Exposed as `font-sans` / `font-display`.
const jakarta = localFont({
  src: "../fonts/plus-jakarta-sans-variable.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "300 800",
});

// Geometric display font used for brand-hero taglines/CTAs.
const poppins = localFont({
  src: [
    { path: "../fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Locale is always exactly "en"/"id" by the time a request reaches this layout —
// middleware only ever inserts one of those two segments — so this never needs a
// dynamic API (headers()/cookies()) and every page under it stays statically
// generated. dynamicParams=false hardens an unknown locale into a build-time 404.
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  return {
    title: "Akasha Wira International — Great Brands, Great People",
    description:
      locale === "id"
        ? "PT Akasha Wira International Tbk (IDX: ADES). Menghadirkan solusi terbaik dunia untuk meningkatkan kualitas hidup Anda sejak 1985."
        : "PT Akasha Wira International Tbk (IDX: ADES). Bringing the world's best solutions to enhance your quality of life since 1985.",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html lang={locale} className={`${jakarta.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        <LocaleProvider locale={locale}>
          <Navbar />
          <main>{children}</main>
          <Footer locale={locale} />
          <BackToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
