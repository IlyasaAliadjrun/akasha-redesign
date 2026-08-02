"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { brandHref } from "@/lib/brands";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { home } from "@/dictionaries/home";

// Hero carousel — one slide per asset in /public/home/hero-carousel.
// max-w on the h1 is sized to fit "Nestlé Pure Life" on one line; anything
// longer (e.g. "Makarizo Hair Energy") wraps naturally to a second line.
// `light: true` marks banners that are bright enough to need dark UI (black
// nav text + colored logo + black hero wording).
type Slide = {
  slug: string;
  name: string;
  tag: { en: string; id: string };
  bg: string;
  image: string;
  light?: boolean;
  // Mobile object-position. The wide banner is cropped to a centre slice on a
  // narrow phone, which can cut off a subject placed to the right — nudge the crop
  // toward them here (e.g. "72% 50%"). Desktop always stays centred.
  pos?: string;
};

const slides: Slide[] = [
  {
    slug: "nestle-pure-life",
    name: "Nestlé Pure Life",
    tag: { en: "Fresh, even without the chill", id: "Gak dingin tetep seger" },
    bg: "#D20B68",
    image: "/home/hero-carousel/nestle-pure-life.jpg",
    pos: "75% 50%",
  },
  {
    slug: "hair-energy",
    name: "Makarizo Hair Energy",
    tag: { en: "Fragrance that lasts all day", id: "Wangi sepanjang hari" },
    bg: "#DA5B14",
    image: "/home/hero-carousel/hair-energy.jpg",
    pos: "75% 50%",
  },
  {
    slug: "make-it",
    name: "Make It",
    tag: { en: "Your scent. Your story", id: "Aromamu. Ceritamu." },
    bg: "#640113",
    image: "/home/hero-carousel/make-it.jpg",
    pos: "80% 50%",
  },
  {
    slug: "barber-daily",
    name: "Barber Daily",
    tag: {
      en: "Barbershop-quality grooming, every day",
      id: "Perawatan ala barbershop, setiap hari",
    },
    bg: "#793E1C",
    image: "/home/hero-carousel/barber-daily.jpg",
    pos: "80% 50%",
  },
  {
    slug: "wonhae",
    name: "Wonhae",
    tag: { en: "Korean flavors, Indonesian hearts", id: "Cita rasa Korea, hati Indonesia" },
    bg: "#FDDC57",
    image: "/home/hero-carousel/wonhae.jpg",
    light: true,
    pos: "75% 50%",
  },
  {
    slug: "makarizo-professional",
    name: "Makarizo Professional",
    tag: {
      en: "43 years growing with Indonesian salons",
      id: "43 tahun besar bersama salon Indonesia",
    },
    bg: "#E0DCD3",
    image: "/home/hero-carousel/makarizo-professional.jpg",
    light: true,
    pos: "75% 50%",
  },
];

const AUTO_MS = 4000;

export default function HeroCarousel() {
  const { asset, href, t } = useLocale();
  const [i, setI] = useState(0);
  // Image fade duration. Auto-advance crossfades 0.5s; user-driven changes
  // (arrows, dots) snap instantly with 0s.
  const [fadeMs, setFadeMs] = useState(0.5);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFadeMs(0.5);
      setI((v) => (v + 1) % slides.length);
    }, AUTO_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const s = slides[i];
  const light = s.light ?? false;
  const goTo = (idx: number) => {
    setFadeMs(0);
    setI(idx);
    startTimer();
  };
  const prev = () => goTo((i - 1 + slides.length) % slides.length);
  const next = () => goTo((i + 1) % slides.length);

  return (
    <section
      data-theme={light ? "light" : "dark"}
      className="relative h-[33svh] sm:h-[100svh] min-h-[330px] sm:min-h-[clamp(480px,70vh,720px)] max-h-[1100px] w-full overflow-hidden transition-colors duration-[1500ms]"
      style={{ backgroundColor: s.bg }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: fadeMs, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={asset(s.image)}
            alt={s.name}
            fill
            priority
            className="object-cover object-[var(--mpos)] sm:object-center"
            style={{ ["--mpos"]: s.pos ?? "50% 50%" } as React.CSSProperties}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className={`relative z-10 h-full flex flex-col items-start justify-end sm:justify-center text-left pl-6 sm:pl-20 md:pl-28 lg:pl-36 pr-6 sm:pr-10 md:pr-16 lg:pr-24 pb-28 sm:pb-0 ${
          light ? "text-ink" : "text-white"
        }`}
      >
        <div className="max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-[clamp(16px,3.6vw,52px)] font-extrabold tracking-tightish leading-[1.05] max-w-[14ch]">
            {s.name}
          </h1>
          <p
            className={`mt-2 sm:mt-4 max-w-[22ch] sm:max-w-none text-[clamp(10px,1.2vw,17px)] font-light ${
              light ? "text-ink/80" : "text-white/85"
            }`}
          >
            {t(s.tag)}
          </p>
          <Link
            href={href(brandHref(s.slug))}
            className={`mt-4 sm:mt-8 md:mt-10 inline-block text-[11px] sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-500 hover:scale-[1.03] ${
              light
                ? "border-ink/70 hover:bg-ink hover:text-white"
                : "border-white/80 hover:bg-white hover:text-ink"
            }`}
          >
            {t(home.hero.discover)}
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows — responsive, vertically centered, animated */}
      <div className="hidden sm:block absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          onClick={prev}
          aria-label={t(home.carousel.previousSlide)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className={`block p-2 sm:p-3 md:p-4 focus:outline-none transition-colors duration-300 ${
            light
              ? "text-ink hover:text-ink/50 focus:text-ink/50"
              : "text-white hover:text-white/50 focus:text-white/50"
          }`}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ x: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-10 sm:w-10 sm:h-16 md:w-12 md:h-20 lg:w-14 lg:h-24"
          >
            <polyline points="15 5 8 12 15 19" />
          </motion.svg>
        </motion.button>
      </div>
      <div className="hidden sm:block absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          onClick={next}
          aria-label={t(home.carousel.nextSlide)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className={`block p-2 sm:p-3 md:p-4 focus:outline-none transition-colors duration-300 ${
            light
              ? "text-ink hover:text-ink/50 focus:text-ink/50"
              : "text-white hover:text-white/50 focus:text-white/50"
          }`}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ x: [0, 4, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-10 sm:w-10 sm:h-16 md:w-12 md:h-20 lg:w-14 lg:h-24"
          >
            <polyline points="9 5 16 12 9 19" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Slide indicators — single row, smaller on mobile. Centered via a full-width
          row + justify-center (robust — doesn't rely on translate). */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 inset-x-0 flex flex-nowrap items-center gap-1 sm:gap-3 md:gap-4 z-10 px-3 justify-center">
        {slides.map((sl, idx) => (
          <button
            key={sl.slug}
            onClick={() => goTo(idx)}
            aria-label={`${t(home.carousel.goToSlide)} ${sl.name}`}
            className="group relative h-5 sm:h-8 shrink-0 flex items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                idx === i
                  ? `w-4 h-[3px] sm:w-10 sm:h-[6px] ${light ? "bg-ink" : "bg-white"}`
                  : `w-[4px] h-[3px] sm:w-[10px] sm:h-[6px] ${
                      light
                        ? "bg-ink/30 group-hover:bg-ink/60"
                        : "bg-white/35 group-hover:bg-white/70"
                    }`
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator — chevron on mobile, mouse on desktop. Full-width +
          justify-center so it's reliably centered (no translate dependency). */}
      <div className="absolute bottom-5 md:bottom-6 inset-x-0 z-10 flex justify-center">
        <motion.a
          href="#next"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label={t(home.carousel.scrollDown)}
          className={`flex flex-col items-center gap-1 sm:gap-2 transition-colors duration-500 ${
            light ? "text-ink/60 hover:text-ink" : "text-white/70 hover:text-white"
          }`}
        >
          {/* Mobile: double chevron "scroll" */}
          <span className="sm:hidden flex flex-col items-center -space-y-1.5">
            <svg
              width="18"
              height="10"
              viewBox="0 0 24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-50"
            >
              <path d="M4 4l8 7 8-7" />
            </svg>
            <svg
              width="18"
              height="10"
              viewBox="0 0 24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l8 7 8-7" />
            </svg>
          </span>

          {/* Desktop: mouse icon */}
          <span className="hidden sm:flex relative w-[20px] h-[32px] rounded-full border-[1.5px] border-current items-start justify-center pt-[6px]">
            <motion.span
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block w-[2px] h-[5px] rounded-full bg-current"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
