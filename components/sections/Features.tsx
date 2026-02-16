import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:precision-manufacturing",
    title: "Master Craftsmanship",
    desc: "Expert attention to detail in every stitch and fold.",
  },
  {
    icon: "mdi:medal",
    title: "20+ Years Experience",
    desc: "Two decades restoring antique and modern furniture.",
  },
  {
    icon: "mdi:leaf",
    title: "Quality Materials",
    desc: "Premium sustainable fabrics and durable fillings.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold">
          Excellence in Every Stitch
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto my-6" />
        <p className="text-accent-brown max-w-2xl mx-auto">
          We combine traditional techniques with modern aesthetics.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white border rounded-xl p-8 shadow hover:shadow-xl transition"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Icon icon={f.icon} className="text-3xl" />
            </div>
            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
            <p className="text-sm text-accent-brown">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
