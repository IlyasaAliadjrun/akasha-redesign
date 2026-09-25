"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { home } from "@/dictionaries/home";

type Labelled = { label: string; text: string };

// Closing band of the home page: the About hero photo (the Akasha team) under a
// dark scrim, the vision and mission, and the headline figures. All three come
// from the server page (ABOUT_PAGE), so this band and About can never disagree.
export default function CompanyStatement({
  vision,
  mission,
  stats,
}: {
  vision: Labelled;
  mission: Labelled;
  stats: { n: string; l: string }[];
}) {
  const { href, t } = useLocale();
  const reduce = useReducedMotion();
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section data-theme="dark" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/media/pages/about/hero/desktop.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 hidden object-cover md:block"
      />
      <Image
        src="/media/pages/about/hero/mobile.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover md:hidden"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/80 to-ink/[0.92]" aria-hidden />

      <div className="max-w-content mx-auto px-6 lg:px-10 py-24 sm:py-28 lg:py-40 text-center">
        <motion.p
          {...reveal()}
          className="text-[11px] lg:text-xs uppercase tracking-[0.3em] font-semibold text-white/60"
        >
          {t(home.statement.tagline)}
        </motion.p>

        <motion.div {...reveal(0.05)} className="mt-10">
          <div className="text-[11px] lg:text-xs uppercase tracking-[0.3em] font-bold text-[#7FB8F0]">
            {vision.label}
          </div>
          <h2 className="mx-auto mt-4 max-w-4xl text-[30px] sm:text-[40px] lg:text-[54px] font-extrabold tracking-tightish leading-[1.08]">
            {vision.text}
          </h2>
        </motion.div>
        <motion.div {...reveal(0.12)} className="mt-10 lg:mt-12">
          <div className="text-[11px] lg:text-xs uppercase tracking-[0.3em] font-bold text-[#7FB8F0]">
            {mission.label}
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-[20px] sm:text-2xl lg:text-[30px] font-light leading-[1.35] text-white/70">
            {mission.text}
          </p>
        </motion.div>

        <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-white/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              {...reveal(0.2 + i * 0.08)}
              className={`px-3 py-8 lg:py-10 border-white/15 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <div className="text-5xl lg:text-6xl font-extrabold tracking-tightish leading-none tabular-nums">
                {s.n}
              </div>
              <div className="mt-3 text-sm text-white/60">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal(0.4)} className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href={href("/about")}
            className="text-sm font-semibold px-7 py-3.5 rounded-full bg-white text-ink transition hover:bg-white/85 text-center"
          >
            {t(home.statement.aboutUs)}
          </Link>
          <Link
            href={href("/investor")}
            className="text-sm font-semibold px-7 py-3.5 rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10 text-center"
          >
            {t(home.statement.investorRelations)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
