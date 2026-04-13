import Link from "next/link";

export const metadata = {
  title: "About — Akasha Wira International",
  description:
    "PT Akasha Wira International Tbk (IDX: ADES). Sejak 1985 membangun brand-brand hebat yang menyentuh setiap momen konsumen Indonesia.",
};

const TIMELINE = [
  { year: "1985", title: "Fondasi", body: "Perusahaan berdiri sebagai PT Alfindo Putrasetia." },
  { year: "1994", title: "Masuk Bursa", body: "IPO 15 juta lembar saham; tercatat di Bursa Efek Jakarta pada 14 Juni." },
  { year: "1997", title: "Bonus Shares", body: "Penerbitan 38 juta bonus shares untuk memperkuat struktur permodalan." },
  { year: "2004", title: "Aliansi Global", body: "Water Partners Bottling S.A. (JV Nestlé & Coca-Cola) menjadi pemegang saham mayoritas. Nama berubah jadi PT AdeS Waters Indonesia, Tbk." },
  { year: "2008", title: "Sofos Pte. Ltd.", body: "Sofos Pte. Ltd. (Singapura) mengakuisisi saham pengendali." },
  { year: "2010", title: "Ekspansi & Rebranding", body: "Nama berubah menjadi PT Akasha Wira International Tbk. Ekspansi ke industri kosmetik melalui akuisisi Makarizo." },
  { year: "2012", title: "Partnership P&G", body: "Kerja sama dengan Procter & Gamble untuk distribusi kosmetik profesional." },
  { year: "2014", title: "Minuman Kedelai", body: "Peluncuran lini minuman kedelai dengan brand Pureal." },
];

const VALUES = [
  {
    title: "Great Brands",
    body: "Dari Nestlé Pure Life hingga Mujigae — portofolio brand yang dipercaya dan dicintai jutaan keluarga Indonesia.",
  },
  {
    title: "Great People",
    body: "Tim lintas divisi yang menjunjung kualitas, inovasi, dan dampak positif bagi konsumen.",
  },
  {
    title: "Great Culture",
    body: "Budaya kerja yang mendorong kolaborasi, pembelajaran berkelanjutan, dan integritas.",
  },
  {
    title: "Great Systems",
    body: "Proses manufaktur, distribusi, dan pengendalian mutu yang terukur — dari pabrik ke rak toko.",
  },
];

const COMMISSIONERS = [
  { name: "Hanjaya Limanto", role: "President Commissioner" },
  { name: "Nana Puspa Dewi", role: "Commissioner" },
  { name: "Julianto", role: "Independent Commissioner" },
];

const DIRECTORS = [
  { name: "Wihardjo Hadiseputro", role: "President Director" },
  { name: "Fany Soegiarto", role: "Director" },
];

const FACILITIES = [
  { type: "Head Office", location: "Jakarta Selatan", detail: "Jl. TB. Simatupang Kav. 89" },
  { type: "Distribution Hub", location: "Jakarta Timur", detail: "Jl. Pulo Lentut Kav. E.5.a" },
  { type: "Production Site", location: "Cibinong, Bogor", detail: "Manufacturing facility" },
  { type: "Production Site", location: "Gunung Putri, Bogor", detail: "Manufacturing facility" },
  { type: "Production Site", location: "Pasuruan, Jawa Timur", detail: "Manufacturing facility" },
  { type: "Production Site", location: "Sukabumi, Jawa Barat", detail: "Manufacturing facility" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[760px] bg-white flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-beverage">
              Since 1985
            </span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/60">
              IDX: ADES
            </span>
          </div>
          <h1 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
            Great brands through great people.
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink/60 max-w-2xl">
            Membangun kualitas hidup konsumen Indonesia selama empat dekade melalui
            brand-brand yang menyentuh momen sehari-hari.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent-beverage mb-6">
            Our Vision
          </div>
          <p className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-tightish font-extrabold">
            To bring the world&apos;s best solutions
            <span className="block text-ink/40 font-light mt-3">
              to enhance our consumer&apos;s quality of life.
            </span>
          </p>
          <div className="mt-16 pt-12 border-t border-black/5 max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent-beverage mb-5">
              Our Mission
            </div>
            <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.35] font-medium text-ink/75">
              Building great brands which deliver best consumer solution through
              great people, great culture, and great system.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR GREATS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              The Four Greats
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Empat pilar yang membentuk kami.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white rounded-3xl p-8">
                <div className="text-5xl font-extrabold tracking-tightish text-accent-beverage/20 mb-4">
                  0{i + 1}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-3">
                  {v.title}
                </div>
                <p className="text-ink/60 text-[15px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { n: "40+", l: "Tahun berkarya" },
              { n: "10", l: "Brand konsumen" },
              { n: "5", l: "Divisi bisnis" },
              { n: "6", l: "Lokasi operasional" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tightish">
                  {s.n}
                </div>
                <div className="mt-3 text-sm text-ink/50 uppercase tracking-[0.2em] font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section data-theme="dark" className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Our Journey
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Empat dekade perjalanan.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              Dari perusahaan air minum lokal di 1985 hingga grup FMCG multi-divisi
              hari ini.
            </p>
          </div>

          <ol className="relative border-l border-white/15 ml-2">
            {TIMELINE.map((t) => (
              <li key={t.year} className="pl-8 pb-10 relative">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white" />
                <div className="text-xs tracking-[0.2em] uppercase text-accent-beverage font-bold mb-1">
                  {t.year}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tightish">
                  {t.title}
                </div>
                <p className="mt-2 text-white/60 max-w-2xl">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Leadership
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Yang memimpin perjalanan.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-6">
                Board of Commissioners · Dewan Komisaris
              </div>
              <div className="space-y-5">
                {COMMISSIONERS.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-5 bg-[#FAFAFA] rounded-2xl p-5 lg:p-6"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-accent-beverage/15 flex items-center justify-center text-lg font-extrabold text-accent-beverage shrink-0">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-lg lg:text-xl font-extrabold tracking-tightish">
                        {p.name}
                      </div>
                      <div className="text-sm text-ink/55">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/50 mb-6">
                Board of Directors · Direksi
              </div>
              <div className="space-y-5">
                {DIRECTORS.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-5 bg-[#FAFAFA] rounded-2xl p-5 lg:p-6"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-ink flex items-center justify-center text-lg font-extrabold text-white shrink-0">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-lg lg:text-xl font-extrabold tracking-tightish">
                        {p.name}
                      </div>
                      <div className="text-sm text-ink/55">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-ink/50 max-w-3xl">
            Struktur dua-tingkat sesuai UU Perseroan Terbatas Indonesia —
            Komisaris mengawasi jalannya perseroan, Direksi menjalankan pengelolaan
            perusahaan. Selengkapnya di halaman{" "}
            <Link href="/governance" className="underline hover:text-ink">
              Governance
            </Link>
            .
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Footprint
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Operasi kami di Indonesia.
            </h2>
            <p className="mt-4 text-ink/60 max-w-xl">
              Dua hub logistik di Jakarta dan empat pabrik tersebar di Jawa Barat
              serta Jawa Timur — mendekatkan produk ke konsumen di seluruh
              nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACILITIES.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-7">
                <div
                  className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-3 ${
                    f.type === "Head Office"
                      ? "text-accent-beverage"
                      : f.type === "Distribution Hub"
                      ? "text-accent-food"
                      : "text-accent-wellness"
                  }`}
                >
                  {f.type}
                </div>
                <div className="text-xl font-extrabold tracking-tightish mb-1">
                  {f.location}
                </div>
                <p className="text-sm text-ink/55">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-accent-beverage mb-3">
              Ownership
            </div>
            <h2 className="text-headline font-extrabold tracking-tightish leading-[1.05]">
              Struktur pemegang saham.
            </h2>
            <p className="mt-5 text-ink/65 max-w-lg">
              Total 589.896.800 lembar saham beredar, terdiri dari pengendali
              strategis dan saham publik.
            </p>
            <Link
              href="/investor"
              className="mt-8 inline-block text-sm font-semibold px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition-opacity duration-300"
            >
              Ke Investor Centre
            </Link>
          </div>

          <div className="space-y-5">
            <div className="bg-[#FAFAFA] rounded-3xl p-6 lg:p-8">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-sm font-semibold">Waters Partners Bottling S.A.</div>
                <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                  91,52%
                </div>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-accent-beverage" style={{ width: "91.52%" }} />
              </div>
              <div className="mt-2 text-xs text-ink/50 tabular-nums">
                539.896.713 lembar
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-3xl p-6 lg:p-8">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-sm font-semibold">Publik</div>
                <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish tabular-nums">
                  8,48%
                </div>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-ink" style={{ width: "8.48%" }} />
              </div>
              <div className="mt-2 text-xs text-ink/50 tabular-nums">
                50.000.087 lembar
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
