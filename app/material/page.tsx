"use client";

import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Materials",
  "Premium Leathers",
  "Sheer & Linen",
  "Advanced Cushioning",
];

const materials = [
  {
    category: "Premium Leathers",
    name: "Full-Grain Italian Amber",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDV83JRzt1wbnvc3TZduZkmes2loupqTq0CT4wqNAyW_6sfI8sah_JWOK_S81s5s9k6FkPIDoq-bJiyDYBKAtPa7mCnda6vVPHNWpbCogA_ZLgMEcpCiD2DrWbJRBqn-o4hLwe3EX9S8PBbuuS1kcGPT6N6WXiBVECm_R9y_uViTa3VytDv6I-zctpRGIz-fNzmFMgxoHcYNSq8vhifzD9GUIDYPYsK3rMwcn8gt9gUSg1mxgSkFcfK0WTU-Wc-PN0NiBNcGqM693g",
    features: ["100k Rubs", "Spill Res."],
    tag: "Premium",
  },
  // {
  //   category: "Premium Leathers",
  //   name: "Aniline Distressed Onyx",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3iiaH8zBGDJJUNZPDQ376oqgJAFneRBgdPhM306m5wT8keK3sQkRzZ7U0kT3f1siP6ooIT26VBisf1MmxmTJ5mJXLaNtcKfymKqx4BEJuRj6bWMLyhRW_aSePaSq4KvSEvoC9D23rJnmdhrUvw6WmR_C4i61Va88jlb2N2zYAjfgiULPa8pCE85D-BD9oQdImsJAB4PoCwNyVEYyaQK7cjFzZEqQ03vdT_3QFyCISdvuhjJJI71TNuGi1ua-ObsVfZpOrAIWXXg",
  //   features: ["12 Colors", "Vintage Age"],
  // },
  {
    category: "Premium Leathers",
    name: "Nappa Pebble Grain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPZkNNKaT-xTtnUHj1xYq5oKqNu85V_BOaDhXswZtZOmZFSzvl8rr85dyvkKU2kDATRSqoyWm8xGJd_0zV82IwGi1SsyK6xgZjkJ0cW2eYx14v86sNeyDsLQ-dOvmg3mZ-tIJfvW7d9JJ8f3pxZpFgk6Z2uv7bYbCaOSkAgw7ttm1Ra-AcOgWXthKZSDgMFX60iGWq2fpagrIUUrAr0FBfFzN5bqgX2Mz5uSF_DFhKBEgKwI4qC3Clw6uQQM2ru6uVHHwE2_a3ZSs",
    features: ["High Texture", "Easy Clean"],
  },
  {
    category: "Sheer & Linen",
    name: "Linen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8G7z_Wd4LQBFuyQVnebWEGj2IL8NYHEsSsIATF-1lpx9Q-n2ZaCEgHbFv42kJoz1BxpkjssMd6tg0VTSMbqnZq-YoRDvMDtQyuFlEMomQuAncmQw4Os1z0CAYMOuksZhEyaI33kFRHbdV-17You84HJyKwcR8QC47PkqXAIhZKJgW8b7Uts7cRVOq5dmjAZN71w97_LAC6-UUJNbMa4cshyZzzTguebORNgGOczEIEJ_KYFRrD_UAKiMi-YY4TSDQoRw75LUvmc",
    features: ["OEKO-TEX"],
  },
  {
    category: "Sheer & Linen",
    name: "Velvet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTgYT21in8optrvCCJj0Oxl0lmIu5RXh8STFPEsq1DTdr17EaXS_OeYPEHL_P4ssOHOE9STJxfps1xKxkpHfGKn_TzvhHWodbbntHsxDaPXInQxe5C4iaviEiS6HH80I9aatvr3Kobhh1YmEpWDRi5sipk2U1YICZD2LVsvhMOfMNaZ7X92IoYwb6BISE8PgqMW1KRZ0iaI4K0ihgzMAHMZTnaRnyr5kezZKr57JW_YLBc5XakCXlBV6SmcjsWTg3czc8IF_B2Tw",
    features: ["Soft Touch"],
  },
];

const foam = [
  {
    icon: "material-symbols:layers",
    title: "High Resilience",
    desc: "Instant shape recovery for heavy-use living room furniture.",
    tag: "Durability: 10/10",
  },
  {
    icon: "material-symbols:cloud",
    title: "Memory Soft",
    desc: "Conforming comfort ideal for luxury bedroom headboards.",
    tag: "Comfort: 10/10",
  },
  {
    icon: "material-symbols:waves",
    title: "Aquaphobic",
    desc: "Specialized reticulated foam for outdoor and poolside areas.",
    tag: "Weatherproof",
  },
  {
    icon: "material-symbols:shield",
    title: "Crib 5 Rated",
    desc: "Commercial grade flame-retardant foam for hotels and offices.",
    tag: "Certified Safe",
  },
];

export default function MaterialPage() {
  const [activeCategory, setActiveCategory] = useState("All Materials");

  const filteredMaterials =
    activeCategory === "All Materials"
      ? materials
      : materials.filter((m) => m.category === activeCategory);

  const showFoam =
    activeCategory === "All Materials" ||
    activeCategory === "Advanced Cushioning";

  return (
    <div className="flex flex-col gap-0">
      <Hero
        title="The Digital Swatch Book"
        subtitle="Explore our curated collection of world-class upholstery materials. From hand-picked Italian leathers to high-resilience foam, we bring two decades of craftsmanship to your fingertips."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDfZAWkmz9ZvEaQ6HAbM1JNcSKQqRzom0pnMP-aW_Ah1NczfVVsM7HqgYLn1OA2hfK7q9UVctmoCwTGgvfXxF0W14nqbUCXuHMimEgvLOo34l8IhT4YGLsiELW4y74ExQjdNohsL2u-sYuPjcsibmi_wnc6aqzwXFvCMA8itPOGTEemKBhPDkaktJSleVZk6qC8Q3cndmnYzd0oOCQOtuYhu45j1vqAbalADmOkxQbdh835YwIhJDnBuzctiBtl3WxuoinH3L2F7Vg"
        primaryAction={{ label: "Explore All", href: "#collection" }}
        secondaryAction={{ label: "Request Swatch Kit", href: "/contact" }}
      />

      {/* Category Tabs */}
      <div className="sticky top-[80px] bg-background z-40 border-b border-border">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar flex gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "pb-4 pt-6 text-sm font-bold whitespace-nowrap border-b-[3px] transition-colors",
                activeCategory === cat
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        id="collection"
        className="container mx-auto px-6 py-12 min-h-[500px]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMaterials.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.name}
                className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:shadow-2xl transition-all"
              >
                <div className="aspect-4/5 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.tag && (
                      <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-1 rounded uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent pt-20">
                    <p className="text-white text-xl font-bold leading-tight">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-4 text-white/70 text-xs mt-2">
                      {item.features.map((f) => (
                        <span key={f} className="flex items-center gap-1">
                          <Icon
                            icon="material-symbols:check-circle"
                            className="text-sm"
                          />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <section className="py-12 bg-primary/5 dark:bg-primary/10">
        <div className="px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div
              className="rounded-xl overflow-hidden aspect-square"
              data-alt="Light linen fabric macro"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw8G7z_Wd4LQBFuyQVnebWEGj2IL8NYHEsSsIATF-1lpx9Q-n2ZaCEgHbFv42kJoz1BxpkjssMd6tg0VTSMbqnZq-YoRDvMDtQyuFlEMomQuAncmQw4Os1z0CAYMOuksZhEyaI33kFRHbdV-17You84HJyKwcR8QC47PkqXAIhZKJgW8b7Uts7cRVOq5dmjAZN71w97_LAC6-UUJNbMa4cshyZzzTguebORNgGOczEIEJ_KYFRrD_UAKiMi-YY4TSDQoRw75LUvmc"
                alt="Linen"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div
              className="rounded-xl overflow-hidden aspect-square mt-8"
              data-alt="Soft velvet drapery fabric"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoTgYT21in8optrvCCJj0Oxl0lmIu5RXh8STFPEsq1DTdr17EaXS_OeYPEHL_P4ssOHOE9STJxfps1xKxkpHfGKn_TzvhHWodbbntHsxDaPXInQxe5C4iaviEiS6HH80I9aatvr3Kobhh1YmEpWDRi5sipk2U1YICZD2LVsvhMOfMNaZ7X92IoYwb6BISE8PgqMW1KRZ0iaI4K0ihgzMAHMZTnaRnyr5kezZKr57JW_YLBc5XakCXlBV6SmcjsWTg3czc8IF_B2Tw"
                alt="Velvet"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#1b170e] dark:text-white uppercase leading-tight">
              The Sheer <br />
              &amp; Drapery Gallery
            </h2>
            <p className="text-lg text-[#1b170e]/80 dark:text-white/80 leading-relaxed">
              Our sheer collections offer the perfect balance of light diffusion
              and privacy. Designed for longevity and ease of care, these
              textiles are tested for UV resistance and drape quality.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  icon="material-symbols:verified"
                  className="text-primary"
                  size={24}
                />
                <div>
                  <p className="font-bold text-sm uppercase">UV Protection</p>
                  <p className="text-xs text-[#977f4e]">
                    Reduces fabric fade for up to 10 years of sun exposure.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="material-symbols:eco"
                  className="text-primary"
                  size={24}
                />
                <div>
                  <p className="font-bold text-sm uppercase">
                    Sustainable Fibers
                  </p>
                  <p className="text-xs text-[#977f4e]">
                    OEKO-TEX® certified organic linens and recycled polyesters.
                  </p>
                </div>
              </li>
            </ul>
            <button className="bg-foreground dark:bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Browse Fabrics
            </button>
          </div>
        </div>
      </section>

      {/* Foam Section */}
      {showFoam && (
        <Section className="bg-muted">
          <div className="pb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4 font-serif text-foreground">
              The Foam Lab
            </h2>
            <p className="text-muted-foreground">
              What's inside matters just as much as what's on top. We use only
              high-resilience, high-density materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foam.map((item, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <Icon
                  icon={item.icon}
                  className="text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform"
                />
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.desc}
                </p>
                <span className="text-[10px] font-black text-primary uppercase bg-primary/10 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* <!-- Experience Badge / Bottom CTA --> */}
      <div className="pb-10">
      <Section className="pb-10 text-center mx-auto">
        <div className="bg-[#1b170e] dark:bg-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="flex items-center gap-6">
            <div className="size-24 rounded-full border-4 border-primary flex items-center justify-center shrink-0">
              <div className="text-center">
                <p className="text-primary text-2xl font-black leading-none">
                  20+
                </p>
                <p className="text-white text-[8px] font-bold uppercase tracking-tighter">
                  Years Exp.
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-2xl font-bold uppercase">
                Craftsmanship Guaranteed
              </h3>
              <p className="text-white/60 text-sm max-w-sm">
                Not sure which material is right for your project? Talk to our
                master upholsterers for a personalized recommendation.
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-primary text-[#1b170e] text-base font-black uppercase tracking-widest hover:bg-white transition-all">
            Request Consultation
          </button>
        </div>
    </Section>
      </div>
    </div>
  );
}
