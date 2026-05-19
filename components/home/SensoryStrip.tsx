import Image from "next/image";
import { DIVISIONS } from "@/lib/brands";

// Mirrors One company. Many moments. — same image set and count as DivisionCards.
export default function SensoryStrip() {
  const images = DIVISIONS.map((d) => d.image);
  const doubled = [...images, ...images];
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="flex w-max animate-marquee gap-3 sm:gap-4">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative h-[clamp(180px,30vh,340px)] md:h-[clamp(260px,38vh,460px)] w-[clamp(220px,48vw,420px)] md:w-[clamp(300px,32vw,520px)] shrink-0 overflow-hidden rounded-lg sm:rounded-xl"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width:1280px) 420px, (min-width:768px) 32vw, 48vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
