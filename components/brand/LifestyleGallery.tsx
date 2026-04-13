import Image from "next/image";

export default function LifestyleGallery({ images }: { images: string[] }) {
  const padded = images.slice(0, 4);
  while (padded.length < 4) padded.push(padded[0] ?? "");
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {padded.map((src, i) => (
          <div key={i} className="relative aspect-square md:aspect-[4/5]">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width:768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
