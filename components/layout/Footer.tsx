import Link from "next/link";
import { BRANDS } from "@/lib/brands";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              Brands
            </div>
            <ul className="space-y-2 text-sm">
              {BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="hover:text-white transition">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              Investor Centre
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/investor#financial-highlights" className="hover:text-white transition">Financial Highlights</Link></li>
              <li><Link href="/investor#chronological-share" className="hover:text-white transition">Chronological Share</Link></li>
              <li><Link href="/investor" className="hover:text-white transition">Stock Info (IDX: ADES)</Link></li>
              <li><Link href="/governance" className="hover:text-white transition">Governance (GCG)</Link></li>
              <li><Link href="/governance#csr" className="hover:text-white transition">CSR</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
              Connect
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://shop.akasha.co.id" target="_blank" rel="noreferrer" className="hover:text-white transition">Online Shop</a></li>
              <li><a href="tel:+628111934500" className="hover:text-white transition">+62 811 1934 5000</a></li>
              <li className="text-white/50">Customer Care</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div className="font-extrabold text-white text-lg tracking-tightish">AKASHA</div>
          <div>© 2026 PT Akasha Wira International Tbk · IDX: ADES · Since 1985</div>
        </div>
      </div>
    </footer>
  );
}
