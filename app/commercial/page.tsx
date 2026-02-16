import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const verticals = [
  {
    title: "Cinema Seating",
    description:
      "Ergonomically designed high-density foam seating with superior acoustic properties and stain-resistant finishes.",
    icon: "material-symbols:theaters",
    features: [
      "Motorized Recliner Options",
      "Integrated Cup Holders",
      "Acoustic Fabric Engineering",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaFphj4Dw7EWlJZKMwTOY8VR3FlSyz0lE182BtIt9VY8qmcez8VGsJ0g8pEln-U680dH4hiQofsT4sDBp3vHThegK85QyMm7hFyF3UZaPeQdUOkHu8y6PwfNm5xHgK_gGLf3GTEtI_NniwsDQhBNK_nX4T27q4HCYUYnoY6PsDq54Ergx9rG7tkN3xJTubctBpSOf34oUwv7hVsv-Iw9BZprOSBP9vf79JmfD8lNwZm84iqZr2Qhu5C2Z_dMzgkFYdmxSp6U7ntsY",
  },
  {
    title: "Hotel Headboards",
    description:
      "Custom bespoke headboards and bed frames designed for luxury aesthetics and rapid turnaround for full hotel rollouts.",
    icon: "material-symbols:hotel",
    features: [
      "Crib 5 Fire Rated Fabrics",
      "Easy-Install Mounting Systems",
      "Infinite Design Customization",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqHVrJEcBYg9u_4i3j54TjKNUwg9Xknp6HhpcUjcYLnWAMwRQUFyYl0t8yNWB9BBAvv3N4BBsx9ReGarPlcn_YE9O177hkprrifsq9KVw4Ydq3O91raNhu7Ltd-6LDs7_2qyEv8rdKGT3arllLjwgnmNu4OJd3lmZr3GW14B-BaCGJ7t6OnePZFXk185kzKfT8WborwMd62Ph2tAdjSbGZaePhBTBWcNMsCr70l48BBcV7lCzIDjVx2HiefsC1kKhxMmbGBZZdV4U",
  },
  {
    title: "Restaurant Booths",
    description:
      "Heavy-duty banquette seating built to withstand high turnover while maintaining a premium dining atmosphere.",
    icon: "material-symbols:restaurant",
    features: [
      "Anti-Microbial Faux Leathers",
      "100k+ Martindale Rub Rating",
      "Modular Length Engineering",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-fFaY2i_bf5NsgHPq3yOygPpskfcBv-wdNPEillHPVClpNjIrlqsAooq8t8trUV_WAb_w_H70EU_DUkfMrm_QbiUl_Fg0wxLMNP7CXIlTa52R4s8ALCiHhVO9A0CmEMoGHrvnjs8Py4YZ_ITWDUjmr46Cxz-Jsa9GMfptGfxrUYIYsOqq7yJqP88vpTF0N4ay3-cGC1-SHN8gS4AMLnF9YabKaZ2HZr_xiYlO8dtlb-H0W60XtnX6Gc1xe3GxsrlH2kdAYLDDZ_A",
  },
];

const specs = [
  {
    icon: "material-symbols:local-fire-department",
    title: "Crib 5 Certified",
    desc: "Full compliance with BS 5852 fire safety regulations for contract furniture.",
  },
  {
    icon: "material-symbols:verified",
    title: "10-Year Warranty",
    desc: "Industrial-grade frames and fillings backed by our long-term durability guarantee.",
  },
  {
    icon: "material-symbols:science",
    title: "Martindale Rub Test",
    desc: "High-performance fabrics tested to exceed 100,000 rubs for high-traffic zones.",
  },
  {
    icon: "material-symbols:eco",
    title: "Eco-Conscious",
    desc: "Sustainably sourced timber and REACH-compliant upholstery chemicals.",
  },
];

export default function CommercialPage() {
  return (
    <div className="flex flex-col gap-0 theme-commercial">
      <Hero
        title={
          <>
            Professional Grade Upholstery for{" "}
            <span className="text-primary">High-Traffic</span> Environments.
          </>
        }
        subtitle="Custom commercial-grade furniture solutions for hotels, cinemas, and restaurants. Durability meets high-end design with certified fire-retardant materials."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAdu1SpZlE3nnGHwscHe3vV3GVx6HcdVZWKY6u5j-AB3BZZS5XIQLznp7_sNN86UTZ1EryyBAitXREvTr__cPyCSoYEn18hxxFlYAJGaJI-sBLyuiZaFjjdf8PxiqzYa5_ybawCOmXnJOVz1euPPl0J_FCXKGSJwBNjNL56JkcP9y3Z1Ty6a5bUTkCteWQ5PqX8oH76I4sTxZmPxt-rYLcTKxEYRcw9M7SArUrUIyF0cKnVjWCc5QpHlgfAQYpdXhGEmxbhvUfotv4"
        primaryAction={{
          label: "Request Bulk Quote",
          href: "/contact",
          icon: (
            <Icon icon="material-symbols:arrow-forward" className="text-xl" />
          ),
        }}
        secondaryAction={{ label: "View Portfolio", href: "/gallery" }}
      />

      {/* <!-- Client Logo Slider --> */}
      <div className="bg-muted border-y border-primary/10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
            Trusted by Global Hospitality Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols:hotel" size={24}/>
              <span className="font-bold text-xl">Radisson</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols:bed" size={24}/>
              <span className="font-bold text-xl">Ramada</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols:apartment" size={24}/>
              <span className="font-bold text-xl">Hilton</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="vaadin:coffee" size={24}/>
              <span className="font-bold text-xl">Starbucks</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols:theaters" size={24}/>
              <span className="font-bold text-xl">Odeon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Verticals */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">
            Industry Verticals
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We specialize in large-scale manufacturing for specific commercial
            sectors, ensuring every piece meets rigorous safety and quality
            benchmarks.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((item, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Icon icon={item.icon} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-3 mb-8 text-sm font-medium">
                  {item.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <Icon
                        icon="material-symbols:check-circle"
                        className="text-primary text-base"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="text-primary font-bold inline-flex items-center gap-2 group/link"
                >
                  Learn More{" "}
                  <Icon
                    icon="material-symbols:chevron-right"
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specs */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 font-serif">
              Uncompromising Standards
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Commercial environments demand more than just beauty. Our products
              are engineered for longevity and safety, adhering to international
              B2B regulations.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {specs.map((spec, i) => (
                <div key={i}>
                  <Icon
                    icon={spec.icon}
                    className="text-4xl mb-4 text-primary-foreground/70"
                  />
                  <h4 className="text-xl font-bold mb-2">{spec.title}</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog Download Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-lg text-primary">
                <Icon icon="material-symbols:download" className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Commercial Catalog 2024
                </h3>
                <p className="text-white/80 text-sm">
                  For Architects & Interior Designers
                </p>
              </div>
            </div>
            <p className="mb-8 text-white/70">
              Download our technical specifications, fabric swatches, and case
              studies in one comprehensive guide.
            </p>
            <button className="w-full bg-white text-primary py-4 rounded-xl font-bold hover:bg-white/90 transition-colors">
              Download PDF (42MB)
            </button>
          </div>
        </div>
      </Section>

      {/* Quote Form Section */}
      <Section id="quote">
        <div className="bg-card rounded-4xl border border-border overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-16">
            <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">
              Start Your Bulk Project
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Our dedicated B2B account managers are ready to provide technical
              support, material samples, and competitive bulk pricing.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Icon icon="material-symbols:phone-in-talk" size={21} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Dedicated Helpline
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Commercial Sales: +1 (800) 555-YASHAR
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Icon icon="material-symbols:location-on" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Global Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    FOB & CIF options available for international logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-muted/50 p-12 lg:p-16 border-l border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g. Radisson Blu"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">
                    Sector
                  </label>
                  <select className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Hotel & Hospitality</option>
                    <option>Cinema & Entertainment</option>
                    <option>Restaurant & Bar</option>
                    <option>Corporate Office</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Briefly describe your requirements..."
                ></textarea>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
