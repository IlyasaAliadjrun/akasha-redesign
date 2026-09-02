"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRANDS, brandHref, getBrand } from "@/lib/brands";
import { useLocale } from "@/lib/locale/LocaleProvider";
import { home } from "@/dictionaries/home";

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
// /public/home/brand-grid so this section stays consistent with its
// dedicated folder. Brands without an asset there fall back to solid color.
const bentoImage: Record<string, string> = {
  "nestle-pure-life": "/home/brand-grid/nestle-pure-life.jpg",
  "hair-energy": "/home/brand-grid/hair-energy.jpg",
  "make-it": "/home/brand-grid/make-it.jpg",
  "barber-daily": "/home/brand-grid/barber-daily.jpg",
  wonhae: "/home/brand-grid/wonhae.jpg",
  "makarizo-professional": "/home/brand-grid/makarizo-professional.jpg",
  fitmeup: "/home/brand-grid/fitmeup.png",
  floaty: "/home/brand-grid/floaty.png",
};

// Object-position per banner. Every source photo is shot with the person
// looking down at camera, head near the top edge and body running to the
// bottom edge — so any vertical crop must come off the bottom (feet), never
// the top (face). All entries pin `top`; horizontal follows where the
// subject sits in each source photo (HE/Make It/BD put them on the right;
// NPL/Wonhae/Makarizo keep them roughly centered-to-right already).
const bentoObjectPosition: Record<string, string> = {
  "nestle-pure-life": "object-top",
  "hair-energy": "object-right-top",
  "make-it": "object-right-top",
  "barber-daily": "object-right-top",
  wonhae: "object-top",
  "makarizo-professional": "object-top",
  fitmeup: "object-center",
  floaty: "object-center",
};

const objectPositionFor = (slug: string, layoutClass: string) =>
  bentoObjectPosition[slug] ??
  (layoutClass.includes("md:col-span-3") || layoutClass.includes("md:col-span-4")
    ? "object-right-top"
    : "object-top");

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
  const { asset, href, t } = useLocale();
  const items = ORDER.map((slug) => getBrand(slug)).filter(
    (b): b is (typeof BRANDS)[number] => Boolean(b)
  );

  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-10 md:mb-12">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
          {t(home.brands.eyebrow)}
        </div>
        <h2 className="text-headline font-extrabold tracking-tightish whitespace-nowrap">
          {t(home.brands.heading)}
        </h2>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
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
                  href={href(brandHref(b.slug))}
                  className="block w-full h-full relative"
                >
                  {img ? (
                    <Image
                      src={asset(img)}
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
                      {t(b.tagline)}
                    </div>
                    <div className="mt-2 sm:mt-3 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      {t(home.common.explore)} →
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
