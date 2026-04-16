import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
];

export default function SensoryStrip() {
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
