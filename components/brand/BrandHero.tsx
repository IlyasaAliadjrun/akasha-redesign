"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

export default function BrandHero({ brand }: { brand: Brand }) {
  return (
    <section
      data-theme="dark"
      className="relative w-full overflow-hidden h-[33svh] min-h-[200px] md:h-[100svh] md:min-h-[560px]"
      style={{ backgroundColor: brand.bannerBg ?? brand.accentHex }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={brand.heroImage}
          alt={brand.name}
          fill
          priority
          sizes="100vw"
          className="object-contain md:object-cover"
        />
        {/* Dark overlay removed so the brand banner shows at full strength. */}
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {/* Brand name & tagline temporarily commented — branding now lives in the banner asset.
          <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02]">
            {brand.name}
          </h1>
          <p className="mt-4 text-subhead font-light text-white/85 max-w-2xl mx-auto">
            {brand.tagline}
          </p>
          */}
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.a
          href="#next"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 sm:gap-2 text-white/70 hover:text-white transition-colors duration-500"
        >
          {/* Mobile: double chevron */}
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
