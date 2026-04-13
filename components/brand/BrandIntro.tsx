"use client";
import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

export default function BrandIntro({ brand }: { brand: Brand }) {
  return (
    <section className="bg-white py-28 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <div
          className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6"
          style={{ color: brand.accentHex }}
        >
          About {brand.name}
        </div>
        <p className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-tightish font-extrabold">
          {brand.description.split(". ").slice(0, 1).join(". ")}.
          {brand.description.split(". ").length > 1 && (
            <span className="block text-ink/40 font-light mt-3">
              {brand.description.split(". ").slice(1).join(". ")}
            </span>
          )}
        </p>
      </motion.div>
    </section>
  );
}
