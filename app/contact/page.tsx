import { FACILITIES, CONTACT_INFO } from "@/lib/company";

export const metadata = {
  title: "Contact — Akasha Wira International",
  description: "Hubungi PT Akasha Wira International Tbk — Customer Care, Media, Investor Relations.",
};

export default function ContactPage() {
  const otherSites = FACILITIES.filter(f => f.type !== "Head Office");

  return (
    <>
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
            Get in touch
          </div>
          <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02]">
            Say hello.
          </h1>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Customer Care — Consumer Relations</div>
              <a href={`tel:${CONTACT_INFO.customerCare.phone.replace(/\s/g, '')}`} className="text-2xl font-extrabold tracking-tightish block">
                {CONTACT_INFO.customerCare.phone}
              </a>
              <p className="text-ink/60 text-sm mt-2">{CONTACT_INFO.customerCare.hours}</p>
              <p className="text-ink/40 text-xs mt-4 leading-relaxed">
                Layanan suara dan pesan untuk pertanyaan produk, saran, atau keluhan konsumen.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Head Office</div>
              <p className="text-lg font-bold leading-snug">
                {CONTACT_INFO.headOffice.address}
              </p>
              <p className="text-ink/60 text-sm mt-3">
                PT Akasha Wira International Tbk
              </p>
              <a href={`tel:${CONTACT_INFO.headOffice.phone.replace(/\s/g, '')}`} className="text-ink/60 text-sm block mt-1 hover:text-ink transition">
                T. {CONTACT_INFO.headOffice.phone}
              </a>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Online Shop</div>
              <a href={CONTACT_INFO.onlineShop} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-accent-beverage transition">
                shop.akasha.co.id →
              </a>
              <p className="text-ink/60 text-sm mt-2">Dapatkan produk kami langsung melalui official store.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Media & Corporate</div>
              <a href={`mailto:${CONTACT_INFO.emails.corporateSecretary}`} className="text-lg font-semibold hover:text-accent-beverage transition">
                {CONTACT_INFO.emails.corporateSecretary}
              </a>
              <p className="text-ink/60 text-sm mt-2">Hubungan media, keterbukaan informasi, dan sekretariat perusahaan.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">Careers</div>
              <a href={`mailto:${CONTACT_INFO.emails.careers}`} className="text-lg font-semibold hover:text-accent-beverage transition">
                {CONTACT_INFO.emails.careers}
              </a>
              <p className="text-ink/60 text-sm mt-2">Kirimkan profil atau CV untuk bergabung dengan tim kami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTPRINT / LOCATIONS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Our Footprint
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Regional sites & facilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSites.map((site, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-black/5">
                <div className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-4 ${
                  site.type === "Distribution Hub" ? "text-accent-food" : "text-accent-wellness"
                }`}>
                  {site.type}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-2">
                  {site.location}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {site.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
