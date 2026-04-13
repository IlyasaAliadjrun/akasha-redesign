"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

export default function BrandHero({ brand }: { brand: Brand }) {
  return (
    <section
      data-theme="dark"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
      style={{ backgroundColor: brand.accentHex }}
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
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/70 mb-6">
            Akasha · {brand.division}
          </div>
          <h1 className="text-hero font-extrabold tracking-tightish leading-[1.02]">
            {brand.name}
          </h1>
          <p className="mt-4 text-subhead font-light text-white/85 max-w-2xl mx-auto">
            {brand.tagline}
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-[10px] tracking-[0.3em]"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
