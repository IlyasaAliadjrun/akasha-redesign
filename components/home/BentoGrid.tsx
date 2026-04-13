"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/brands";

// Explicit layout: col-span / row-span per brand slug
const layout: Record<string, string> = {
  "nestle-pure-life": "md:col-span-8 md:row-span-2",
  vica: "md:col-span-4 md:row-span-2",
  "hair-energy": "md:col-span-4 md:row-span-2",
  "make-it": "md:col-span-4 md:row-span-2",
  wonhae: "md:col-span-4 md:row-span-2",
  "makarizo-professional": "md:col-span-12 md:row-span-1",
  omoide: "md:col-span-4 md:row-span-2",
  floaty: "md:col-span-4 md:row-span-2",
  fitmeup: "md:col-span-4 md:row-span-2",
};

export default function BentoGrid() {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
          Our brands
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish max-w-3xl">
          Ten brands. One family.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[200px] gap-4 md:gap-5">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              className={`relative overflow-hidden group ${layout[b.slug] ?? "md:col-span-4 md:row-span-2"}`}
            >
              <Link href={`/brands/${b.slug}`} className="block w-full h-full relative">
                <Image
                  src={b.heroImage}
                  alt={b.name}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white">
                  <div className="text-2xl lg:text-3xl font-extrabold tracking-tightish">
                    {b.name}
                  </div>
                  <div className="text-sm text-white/80 mt-1">{b.tagline}</div>
                  <div className="mt-3 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
