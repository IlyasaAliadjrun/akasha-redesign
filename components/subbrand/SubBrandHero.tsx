"use client";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SubBrand } from "@/lib/subBrands";
import type { HeroLayer } from "@/lib/brands";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

// Counter-zoom scale. Browser zoom (Ctrl +/−) scales every CSS unit, so to keep an
// asset at a constant physical size we scale it by the INVERSE of the current zoom.
// Zoom is inferred from devicePixelRatio relative to the value at first paint (page
// zoom changes devicePixelRatio on every major desktop browser). Returns 1 when the
// zoom equals the initial state, >1 when zoomed out, <1 when zoomed in — apply it as
// a CSS `scale()` on the asset and its rendered size stays put.
function useZoomScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const base = window.devicePixelRatio || 1;
    const update = () => setScale(base / (window.devicePixelRatio || 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

// Fade-in entrance for a product. Direction from `enterFrom` (product 1 → left,
// product 2 → right). Desktop adds a scroll parallax drift on top.
function enterX(layer: HeroLayer) {
  return layer.enterFrom === "left" ? -70 : layer.enterFrom === "right" ? 70 : 0;
}

// Desktop product — absolutely positioned, entrance + continuous scroll parallax.
function DesktopProduct({
  layer,
  index,
  progress,
  zoom,
}: {
  layer: HeroLayer;
  index: number;
  progress: MotionValue<number>;
  zoom: number;
}) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [0, -(layer.depth ?? 40)]);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: enterX(layer) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: layer.enterDelay ?? index * 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute z-10"
      style={{ left: layer.left, top: layer.top, width: layer.width, aspectRatio: layer.aspectRatio }}
    >
      {/* Counter-zoom wrapper: anchored at the layer's top-left so the product keeps
          its size (and its anchor point) as the page is zoomed. */}
      <div className="absolute inset-0" style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
        <motion.div style={{ y: reduce ? undefined : y }} className="absolute inset-0">
          <Image src={layer.src} alt="" fill priority sizes="50vw" className="object-contain" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Mobile product — placed inside the vertical stack's product cluster. Same fade-in
// direction, no scroll parallax (it sits in normal flow).
function MobileProduct({ layer, index, style, zoom }: { layer: HeroLayer; index: number; style: React.CSSProperties; zoom: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: enterX(layer) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: layer.enterDelay ?? index * 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={style}
    >
      <div className="relative w-full" style={{ aspectRatio: layer.aspectRatio, transform: `scale(${zoom})`, transformOrigin: "center" }}>
        <Image src={layer.src} alt="" fill sizes="60vw" className="object-contain" />
      </div>
    </motion.div>
  );
}

// Bottle/product cluster positions on mobile (percentages of the cluster box).
const MOBILE_POS: React.CSSProperties[] = [
  { right: "3%", top: "15%", width: "62%" }, // layer 0 (jar, back)
  { left: "3%", bottom: "15%", width: "54%" }, // layer 1 (tube, front)
];

export default function SubBrandHero({ sub }: { sub: SubBrand }) {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const zoom = useZoomScale();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const products = sub.heroLayers ?? [];
  const hasProducts = products.length > 0;

  const scrollDown = (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const wordmark = sub.heroWordmark ? (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[100px] md:w-[120px]"
      style={{
        aspectRatio: sub.heroWordmarkAspect ?? "767 / 529",
        transform: `scale(${zoom})`,
        transformOrigin: isMobile ? "center" : "left top",
      }}
    >
      <Image src={sub.heroWordmark} alt={`${sub.name} logo`} fill sizes="220px" className="object-contain" />
    </motion.div>
  ) : (
    // skeleton wordmark
    <div className="w-[150px] h-[70px] rounded-xl border-2 border-dashed border-white/40 flex items-center justify-center text-white/70 text-[10px] uppercase tracking-[0.2em] font-semibold">Wordmark</div>
  );

  const wording = (centered: boolean) => (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "flex flex-col items-center text-center" : "max-w-xl"}
    >
      <h1 className="font-display uppercase text-white font-semibold tracking-tightish leading-[1.05] text-[25px] sm:text-[35px] lg:text-[50px]">
        {sub.name}
      </h1>
      {sub.tagline && (
        <p className="font-display mt-4 text-white/90 font-semibold text-[12px] lg:text-[16px] leading-snug max-w-lg whitespace-pre-line">
          {sub.tagline}
        </p>
      )}
      {sub.ctaText && (
        <a
          href="#next"
          onClick={scrollDown}
          className="font-display mt-6 inline-block rounded-full border border-white/70 px-7 py-2.5 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-white hover:text-ink active:scale-[0.97]"
        >
          {sub.ctaText}
        </a>
      )}
    </motion.div>
  );

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative w-full overflow-hidden h-[100svh] min-h-[520px] md:min-h-[560px]"
      style={{ backgroundColor: sub.bannerBg ?? sub.accentHex }}
    >
      {isMobile ? (
        /* MOBILE — tiap aset diposisikan ABSOLUT (posisi + ukuran bebas).
           Posisi   → ubah `top-[..]` / `left-[..]` di tiap wrapper.
           Ukuran   → wordmark: `w-[..]` di const wordmark; produk: `w-[..]`/`max-w-[..]`
                      di kotak cluster (+ MOBILE_POS per produk); wording: font di fungsi wording. */
        <>
          {/* Wordmark */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[10%] z-20">
            {wordmark}
          </div>

          {/* Produk (kotak cluster) — ukuran di w-[..]/max-w-[..], posisi di top-[..] */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[26%] z-10 w-[80vw] max-w-[340px] aspect-square">
            {hasProducts ? (
              products.map((l, i) => <MobileProduct key={l.src} layer={l} index={i} style={MOBILE_POS[i] ?? MOBILE_POS[0]} zoom={zoom} />)
            ) : (
              <motion.div style={{ y: reduce ? undefined : phY }} className="absolute inset-x-8 inset-y-0 rounded-3xl border-2 border-dashed border-white/40 bg-white/10 flex flex-col items-center justify-center gap-2 text-white/75">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Produk</span>
              </motion.div>
            )}
          </div>

          {/* Wording — posisi di top-[..], lebar blok di w-[..] */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] z-20 w-[86%]">
            {wording(true)}
          </div>
        </>
      ) : (
        /* DESKTOP — wordmark + wording as one centred left column, products right */
        <>
          {hasProducts ? (
            products.map((l, i) => <DesktopProduct key={l.src} layer={l} index={i} progress={scrollYProgress} zoom={zoom} />)
          ) : (
            <motion.div style={{ y: reduce ? undefined : phY }} className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center p-8">
              <div className="w-[58%] max-w-[360px] aspect-[3/4] rounded-3xl border-2 border-dashed border-white/40 bg-white/10 flex flex-col items-center justify-center gap-3 text-white/75">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Produk</span>
              </div>
            </motion.div>
          )}

          {/* Wordmark and wording are two INDEPENDENT positioned blocks. Set the gap
              between them freely by changing each block's own `top` (they no longer
              share a column, so nothing forces a fixed spacing). */}
          <div className="absolute left-[9%] lg:left-[18%] top-[17%] z-20">
            {wordmark}
          </div>
          <div className="absolute left-[9%] lg:left-[18%] top-[45%] z-20 max-w-[50%]">
            {wording(false)}
          </div>
        </>
      )}

      {/* Scroll-down indicator — always present, every viewport */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <motion.a
          href="#next"
          onClick={scrollDown}
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 sm:gap-2 text-white/70 hover:text-white transition-colors duration-500"
        >
          <span className="sm:hidden flex flex-col items-center -space-y-1.5">
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M4 4l8 7 8-7" /></svg>
            <svg width="18" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l8 7 8-7" /></svg>
          </span>
          <span className="hidden sm:flex relative w-[20px] h-[32px] rounded-full border-[1.5px] border-current items-start justify-center pt-[6px]">
            <motion.span animate={reduce ? undefined : { y: [0, 8, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block w-[2px] h-[5px] rounded-full bg-current" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
