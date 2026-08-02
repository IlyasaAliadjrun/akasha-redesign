"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { BRAND } from "@/dictionaries/brand";

export type PageHeroProps = {
  // Art direction: the desktop crop is ~16:9 with the subject on the right, the
  // mobile crop is 9:16 with the subject low — so the copy sits left on desktop
  // and top on mobile, over each crop's empty area.
  desktop: string;
  mobile: string;
  title: string;
  subtitle?: string;
  // Brightness of the *artwork*, not of the text. "light" art (Contact's yellow,
  // About's white studio) takes ink copy; "dark" art (Investor green, Governance
  // red, Careers blue) takes white copy. Also fed to `data-theme`, which Navbar
  // samples to flip its logo and link colour over this section.
  tone: "light" | "dark";
  // Solid colour shown behind the art while it loads — sampled from the empty
  // region of the artwork so the fade-in doesn't flash.
  bg: string;
};

export default function PageHero({
  desktop,
  mobile,
  title,
  subtitle,
  tone,
  bg,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const { asset, t } = useLocale();
  const dark = tone === "dark";

  const titleColor = dark ? "text-white" : "text-ink";
  const subtitleColor = dark ? "text-white/80" : "text-ink/70";
  const chevronColor = dark
    ? "text-white/70 hover:text-white"
    : "text-ink/50 hover:text-ink";

  return (
    <section
      data-theme={tone}
      className="relative w-full overflow-hidden h-[100svh] min-h-[480px] md:min-h-[560px]"
      style={{ backgroundColor: bg }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={asset(mobile)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src={asset(desktop)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />
      </motion.div>

      {/* Copy — top on mobile (subject sits low in the 9:16 crop), left and
          vertically centred on desktop (subject sits right in the 16:9 crop).
          Like BrandHero, this is a full-bleed banner, so the desktop column is
          anchored by percentage rather than the centred max-w-[1400px] content
          container: the subject sits at a fixed ~36% of the frame at every width,
          but a centred container drifts right past 1400px and would run the copy
          into it. 30vw keeps the column inside the art's empty left region. */}
      <div className="absolute inset-0 z-20 flex items-start md:items-center pt-[13vh] md:pt-0 px-6 md:px-0">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-auto md:ml-[6vw] md:max-w-[30vw]"
        >
          <h1
            className={`text-page-hero font-extrabold tracking-tightish leading-[1.08] ${titleColor}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-3 md:mt-4 max-w-lg text-[15px] lg:text-base leading-relaxed ${subtitleColor}`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator — chevron on mobile, mouse on desktop (same as BrandHero) */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <motion.a
          href="#next"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label={t(BRAND.common.scrollDown)}
          className={`flex flex-col items-center gap-1 sm:gap-2 transition-colors duration-500 ${chevronColor}`}
        >
          <span className="sm:hidden flex flex-col items-center -space-y-1.5">
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M4 4l8 7 8-7" /></svg>
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l8 7 8-7" /></svg>
          </span>
          <span className="hidden sm:flex relative w-[20px] h-[32px] rounded-full border-[1.5px] border-current items-start justify-center pt-[6px]">
            <motion.span
              animate={reduce ? undefined : { y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block w-[2px] h-[5px] rounded-full bg-current"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
