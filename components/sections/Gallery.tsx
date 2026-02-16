import Image from "next/image";

const items = [
  { src: "/images/gallery/1.jpg", title: "Bespoke Sofa" },
  { src: "/images/gallery/2.jpg", title: "Antique Restoration" },
  { src: "/images/gallery/3.jpg", title: "Custom Bedding" },
  { src: "/images/gallery/4.jpg", title: "Dining Collections" },
];

export default function Gallery() {
  return (
    <section className="py-24 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-primary text-sm uppercase tracking-widest">
              Our Portfolio
            </h4>
            <h2 className="text-4xl font-serif font-bold">
              Restoration Gallery
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl aspect-4/5"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-white font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
