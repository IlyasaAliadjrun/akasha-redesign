"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

// Three image cards shown directly beneath BrandIntro. Renders nothing unless
// the brand provides `about` entries (assets live in /public/foto_about/{brand}).
export default function BrandAbout({ brand }: { brand: Brand }) {
  const cards = brand.about ?? [];
  if (!cards.length) return null;

  return (
    <section className="bg-white pb-16 sm:pb-20 md:pb-24 -mt-10 sm:-mt-14 lg:-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(i * 0.08, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden group"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width:640px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              {/* Soft gradient so the label stays readable over any artwork. */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                aria-hidden
              />
              <h3 className="absolute left-4 sm:left-5 right-4 bottom-4 sm:bottom-5 text-white text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tightish leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                {c.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
