"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/brands";

// Explicit layout: col-span / row-span per brand slug
const layout: Record<string, string> = {
  "nestle-pure-life": "sm:col-span-6 md:col-span-8 md:row-span-2",
  vica: "sm:col-span-3 md:col-span-4 md:row-span-2",
  "hair-energy": "sm:col-span-3 md:col-span-4 md:row-span-2",
  "make-it": "sm:col-span-3 md:col-span-4 md:row-span-2",
  wonhae: "sm:col-span-3 md:col-span-4 md:row-span-2",
  "makarizo-professional": "sm:col-span-6 md:col-span-12 md:row-span-1",
  omoide: "sm:col-span-2 md:col-span-4 md:row-span-2",
  floaty: "sm:col-span-2 md:col-span-4 md:row-span-2",
  fitmeup: "sm:col-span-2 md:col-span-4 md:row-span-2",
};

export default function BentoGrid() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 md:mb-12">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
          Our brands
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish max-w-3xl">
          Ten brands. One family.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 auto-rows-[clamp(180px,55vw,260px)] sm:auto-rows-[clamp(180px,26vw,220px)] md:auto-rows-[clamp(180px,15vw,240px)] gap-3 sm:gap-4 md:gap-5">
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
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 40vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-end text-white">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tightish">
                    {b.name}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-1">{b.tagline}</div>
                  <div className="mt-2 sm:mt-3 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
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
