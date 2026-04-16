"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRANDS } from "@/lib/brands";

// Map brand slug → short tagline for the hero (kept concise, Apple-style)
const heroCopy: Record<string, { name: string; tag: string; bg: string }> = {
  "nestle-pure-life": { name: "Nestlé Pure Life", tag: "Segar di setiap tetes.", bg: "#04243d" },
  "hair-energy": { name: "Hair Energy", tag: "Salon-quality care, at home.", bg: "#3a1324" },
  wonhae: { name: "Mujigae", tag: "Korean flavors, Indonesian hearts.", bg: "#2b0708" },
  "make-it": { name: "Make It", tag: "Your scent. Your story.", bg: "#0d0d0d" },
  omoide: { name: "Omoide", tag: "A bowl of Japanese memories.", bg: "#2a1805" },
  vica: { name: "VICA", tag: "Mineral alami dari sumbernya.", bg: "#0d2a1a" },
  "makarizo-professional": { name: "Makarizo Professional", tag: "43 tahun besar bersama salon Indonesia.", bg: "#131313" },
  floaty: { name: "Floaty", tag: "Literally light. Seriously fun.", bg: "#052a36" },
  fitmeup: { name: "Fitmeup", tag: "Botanical inspiration.", bg: "#162818" },
};

const slides = BRANDS.map((b) => ({
  slug: b.slug,
  name: heroCopy[b.slug]?.name ?? b.name,
  tag: heroCopy[b.slug]?.tag ?? b.tagline,
  href: `/brands/${b.slug}`,
  bg: heroCopy[b.slug]?.bg ?? "#0a0a0a",
  image: b.heroImage,
}));

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section
      data-theme="dark"
      className="relative h-[100svh] min-h-[clamp(480px,70vh,720px)] max-h-[1100px] w-full overflow-hidden transition-colors duration-[1500ms]"
      style={{ backgroundColor: s.bg }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={s.image}
            alt={s.name}
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02] max-w-[22ch] mx-auto">
              {s.name}
            </h1>
            <p className="mt-3 sm:mt-4 text-subhead font-light text-white/85 max-w-[32ch] mx-auto">{s.tag}</p>
            <Link
              href={s.href}
              className="mt-6 sm:mt-8 md:mt-10 inline-block text-[13px] sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/80 hover:bg-white hover:text-ink transition-all duration-500 hover:scale-[1.03]"
            >
              Discover
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators — larger, spaced out */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 z-10 px-4 max-w-[92vw] flex-wrap justify-center">
        {slides.map((sl, idx) => (
          <button
            key={sl.slug}
            onClick={() => setI(idx)}
            aria-label={`Go to ${sl.name}`}
            className="group relative h-8 flex items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                idx === i
                  ? "w-10 h-[6px] bg-white"
                  : "w-[10px] h-[6px] bg-white/35 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator — mouse icon, centered */}
      <motion.a
        href="#next"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
        className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-500"
      >
        <span className="relative w-[20px] h-[32px] rounded-full border-[1.5px] border-current flex items-start justify-center pt-[6px]">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-[2px] h-[5px] rounded-full bg-current"
          />
        </span>
      </motion.a>
    </section>
  );
}
