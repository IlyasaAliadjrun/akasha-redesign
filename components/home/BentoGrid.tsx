"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRANDS, getBrand } from "@/lib/brands";

// Render order — mirrors the reference: 6+6 / 3+6+3 / 6+3+3. Vica and Omoide
// aren't shown in this layout (they remain in lib/brands.ts for brand pages).
const ORDER = [
  "nestle-pure-life",
  "hair-energy",
  "barber-daily",
  "wonhae",
  "make-it",
  "makarizo-professional",
  "floaty",
  "fitmeup",
];

const layout: Record<string, string> = {
  "nestle-pure-life":      "col-span-2 md:col-span-6",
  "hair-energy":           "col-span-2 md:col-span-6",
  "barber-daily":          "col-span-2 md:col-span-3",
  wonhae:                  "col-span-2 md:col-span-6",
  "make-it":               "col-span-2 md:col-span-3",
  "makarizo-professional": "col-span-2 md:col-span-6",
  floaty:                  "col-span-1 md:col-span-3",
  fitmeup:                 "col-span-1 md:col-span-3",
};

// Banner images for the bento. All assets must come from
// /public/ten_brands_one_company so this section stays consistent with its
// dedicated folder. Brands without an asset there fall back to solid color.
const bentoImage: Record<string, string> = {
  "nestle-pure-life": "/ten_brands_one_company/Mini NPL.jpg",
  "hair-energy": "/ten_brands_one_company/Mini HE.jpg",
  "make-it": "/ten_brands_one_company/Mini banner Make it.jpg",
  "barber-daily": "/ten_brands_one_company/Mini banner BD.jpg",
  wonhae: "/ten_brands_one_company/Mini banner WONHAE.jpg",
  "makarizo-professional": "/ten_brands_one_company/mini banner MAKPROF.jpg",
};

// Object-position per banner. NPL's source places its subjects centered, but
// HE/Make It/BD banners put the subject on the right side of the artwork — so
// those need `object-right` (regardless of tile width) to keep the subject in
// frame. Anything else falls back to a column-width rule: narrow (1/3) tiles
// also pull right so banners with off-center subjects don't get cropped.
const bentoObjectPosition: Record<string, string> = {
  "nestle-pure-life": "object-center",
  "hair-energy": "object-right",
  "make-it": "object-right",
  "barber-daily": "object-right",
};

const objectPositionFor = (slug: string, layoutClass: string) =>
  bentoObjectPosition[slug] ??
  (layoutClass.includes("md:col-span-3") || layoutClass.includes("md:col-span-4")
    ? "object-right"
    : "object-center");

// Solid color tiles for brands without an image — matched to artboard.
const solidColor: Record<string, string> = {
  "makarizo-professional": "#0F0F0F",
  vica: "#C9D24A",
  wonhae: "#C53030",
  omoide: "#C17817",
  floaty: "#3FB8E0",
  fitmeup: "#9B4D9F",
};

// Tiles whose banner is bright enough to need dark (black) overlay text.
const darkTextTile = new Set(["wonhae", "makarizo-professional"]);

export default function BentoGrid() {
  const items = ORDER.map((slug) => getBrand(slug)).filter(
    (b): b is (typeof BRANDS)[number] => Boolean(b)
  );

  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 md:mb-12">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
          Our brands
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish whitespace-nowrap">
          Ten brands. One family.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[clamp(160px,38vw,220px)] md:auto-rows-[clamp(220px,22vw,320px)] gap-3 sm:gap-4 md:gap-5">
          {items.map((b, i) => {
            const img = bentoImage[b.slug];
            const bg = solidColor[b.slug] ?? b.accentHex;
            const layoutClass = layout[b.slug] ?? "col-span-1 md:col-span-3";
            const darkText = darkTextTile.has(b.slug);
            return (
              <motion.div
                key={b.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl group ${layoutClass}`}
                style={img ? undefined : { backgroundColor: bg }}
              >
                <Link
                  href={`/brands/${b.slug}`}
                  className="block w-full h-full relative"
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={b.name}
                      fill
                      sizes="(min-width:1280px) 50vw, (min-width:768px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04] ${objectPositionFor(b.slug, layoutClass)}`}
                    />
                  ) : null}
                  <div
                    className={`absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-end ${
                      darkText ? "text-ink" : "text-white"
                    }`}
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tightish">
                      {b.name}
                    </div>
                    <div
                      className={`text-xs sm:text-sm mt-1 ${
                        darkText ? "text-ink/70" : "text-white/85"
                      }`}
                    >
                      {b.tagline}
                    </div>
                    <div className="mt-2 sm:mt-3 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      Explore →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
