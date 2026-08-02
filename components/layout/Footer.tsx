import Link from "next/link";
import { BRANDS, brandHref } from "@/lib/brands";
import { localizeHref, type Locale, type Localized } from "@/lib/locale/paths";
import { NAV, FOOTER } from "@/dictionaries/layout";

export default function Footer({ locale }: { locale: Locale }) {
  const href = (path: string) => localizeHref(locale, path);
  const t = <T,>(v: Localized<T>) => v[locale];
  return (
    <footer className="bg-[#0A0A0A] text-white/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              {t(FOOTER.brandsHeading)}
            </div>
            <ul className="space-y-2 text-sm">
              {BRANDS.filter((b) => !b.parent).map((b) => (
                <li key={b.slug}>
                  <Link href={href(brandHref(b.slug))} className="hover:text-white transition">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              {t(FOOTER.companyHeading)}
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href={href("/about")} className="hover:text-white transition">{t(NAV.about)}</Link></li>
              <li><Link href={href("/careers")} className="hover:text-white transition">{t(NAV.careers)}</Link></li>
              <li><Link href={href("/contact")} className="hover:text-white transition">{t(NAV.contact)}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              {t(FOOTER.investorHeading)}
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href={href("/investor") + "#financial-highlights"} className="hover:text-white transition">{t(FOOTER.financialHighlights)}</Link></li>
              <li><Link href={href("/investor") + "#chronological-share"} className="hover:text-white transition">{t(FOOTER.chronologicalShare)}</Link></li>
              <li><Link href={href("/investor")} className="hover:text-white transition">{t(FOOTER.stockInfo)}</Link></li>
              <li><Link href={href("/governance")} className="hover:text-white transition">{t(FOOTER.governanceGcg)}</Link></li>
              <li><Link href={href("/governance") + "#csr"} className="hover:text-white transition">{t(FOOTER.csr)}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              {t(FOOTER.connectHeading)}
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://shop.akasha.co.id" target="_blank" rel="noreferrer" className="hover:text-white transition">{t(NAV.onlineShop)}</a></li>
              <li><a href="tel:+628111934500" className="hover:text-white transition">+62 811 1934 5000</a></li>
              <li className="text-white/50">{t(FOOTER.customerCare)}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div className="font-extrabold text-white text-lg tracking-tightish">AKASHA</div>
          <div>{t(FOOTER.copyright)}</div>
        </div>
      </div>
    </footer>
  );
}
