"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

// Poster section: a square hero graphic with variant banners overlapping its
// bottom edge. Renders nothing unless the brand provides `showcase`; the
// variant banners are skipped when no variant assets exist for the brand.
export default function BrandShowcase({ brand }: { brand: Brand }) {
  const showcase = brand.showcase;
  if (!showcase) return null;

  const variants = showcase.variants ?? [];

  return (
    <section className="bg-white pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6">
      {/* Part 1 — square hero (title + person) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-square max-w-2xl mx-auto"
      >
        <Image
          src={showcase.hero}
          alt={`${brand.name} highlight`}
          fill
          sizes="(min-width:672px) 672px, 100vw"
          className="object-contain"
        />
      </motion.div>

      {/* Part 2 — wider variant banners overlapping the bottom of part 1 */}
      {variants.length > 0 && (
        <div className="max-w-4xl mx-auto relative z-10 -mt-10 sm:-mt-14 lg:-mt-16 space-y-4 sm:space-y-6">
          {variants.map((src, i) => (
              <motion.div
                key={src}
                // Even order (2nd, 4th…) fades in from the right; odd (1st, 3rd…) from the left.
                initial={{ opacity: 0, x: (i + 1) % 2 === 0 ? 48 : -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.06, 0.18),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-[5010/2354] rounded-2xl lg:rounded-3xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${brand.name} variant ${i + 1}`}
                  fill
                  sizes="(min-width:896px) 896px, 100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
    </section>
  );
}
