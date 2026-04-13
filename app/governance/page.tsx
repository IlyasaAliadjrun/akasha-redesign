import Link from "next/link";
import Image from "next/image";
import { GOVERNANCE_PILLARS, GCG_PRINCIPLES } from "@/lib/investor";

export const metadata = {
  title: "Good Corporate Governance — Akasha Wira International",
  description:
    "Tata kelola perusahaan PT Akasha Wira International Tbk — Anggaran Dasar, Charter Direksi & Komisaris, CSR, dan keterbukaan informasi.",
};

export default function GovernancePage() {
  return (
    <>
      {/* HERO */}
      <section data-theme="dark" className="relative h-[80svh] min-h-[520px] overflow-hidden bg-ink text-white flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
              Good Corporate Governance
            </span>
            <span className="h-px w-8 bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
              GCG
            </span>
          </div>
          <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02] max-w-4xl">
            Tata kelola yang menopang kepercayaan.
          </h1>
          <p className="mt-6 text-subhead text-white/80 max-w-2xl">
            Komitmen pada lima prinsip — transparansi, akuntabilitas, responsibilitas,
            independensi, dan fairness — dalam setiap keputusan perusahaan.
          </p>
        </div>
      </section>

      {/* TARIF PRINCIPLES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 lg:mb-20 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Five principles
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              TARIF — lima prinsip GCG.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {GCG_PRINCIPLES.map((p) => (
              <div key={p.letter} className="relative">
                <div className="text-[80px] lg:text-[96px] font-extrabold tracking-tightish leading-none text-accent-beverage/15">
                  {p.letter}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-2">
                  {p.title}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Governance structure
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Organ perusahaan.
            </h2>
            <p className="mt-4 text-ink/60">
              Struktur dua-tingkat sesuai UU Perseroan Terbatas Indonesia — memisahkan
              fungsi pengelolaan dan pengawasan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "General Meeting of Shareholders",
                s: "Otoritas tertinggi",
                d: "Keputusan strategis seperti persetujuan laporan tahunan, pembagian dividen, dan pengangkatan Direksi serta Komisaris.",
              },
              {
                t: "Board of Commissioners",
                s: "Pengawasan",
                d: "Mengawasi jalannya kepengurusan oleh Direksi dan memberi nasihat kepada Direksi.",
              },
              {
                t: "Board of Directors",
                s: "Pengelolaan",
                d: "Menjalankan pengurusan perusahaan untuk kepentingan dan tujuan perseroan.",
              },
            ].map((o) => (
              <div key={o.t} className="bg-white rounded-3xl p-8">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-4">
                  {o.s}
                </div>
                <div className="text-xl lg:text-2xl font-extrabold tracking-tightish mb-3">
                  {o.t}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE DOCUMENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Documents & Policies
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Dokumen tata kelola.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GOVERNANCE_PILLARS.map((g) => (
              <a
                key={g.id}
                href="#"
                className="group bg-[#FAFAFA] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-beverage/10 flex items-center justify-center text-2xl mb-6">
                  {g.icon}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {g.title}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{g.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent-beverage transition-opacity duration-300 group-hover:opacity-70">
                    Download PDF
                  </span>
                  <span className="w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT / CSR */}
      <section className="py-24 bg-accent-wellness text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-5">
            Corporate Social Responsibility
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Tumbuh bersama komunitas.
          </h2>
          <p className="mt-6 text-white/80 text-lg">
            Kontribusi berkelanjutan kepada lingkungan, kesehatan, pendidikan, dan
            pemberdayaan masyarakat di sekitar area operasi kami.
          </p>
          <a
            href="#"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-white text-ink hover:bg-ink hover:text-white transition-all duration-500"
          >
            Laporan CSR Terbaru
          </a>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
            Investor Centre
          </div>
          <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Lihat performa keuangan ADES.
          </h2>
          <Link
            href="/investor"
            className="mt-10 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
          >
            Ke Investor Centre
          </Link>
        </div>
      </section>
    </>
  );
}
