import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const servicePoints = [
  {
    title: "Sofa & Armchair Reupholstery",
    description:
      "Restore the structural integrity and aesthetic beauty of your main lounging pieces with premium foams and fabrics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoBys8QVSJf4vgaEaw5SMnUgkwFt7B5SwDfyQL2z9bDS79nkY7DU2AHy40yzQ3bbMFoKqy8HGmDVovgIS63RTE4Q6x_HtX7x6r-ofcx19zv-JUcAhDKLt61f7ZwkIB8ACMDokH6qVC9RaH76Nc709BfWSIa-Lv0lpZQ_nwJrdbNEL9VZDNgHy3aqt1VPRWGQQi4b2lrX11sJoYPfMx-HyH5WMeZAbHuNuAafnkdrYDewZMMirmUeQeUgkldSBzZQhJX1CYlYBM6JI",
  },
  {
    title: "Dining Chair Restoration",
    description:
      "From minor repairs to complete seat rebuilding, we ensure your dining space remains both stylish and comfortable.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI5LgYkNsli8ZOOChoIrXuUXZ2nd17j-cM96Y_AjXCToF9cJHrqOzTZAN70aghf021J0LqNRreeSzg9DN8xO5SkyJoPfMAF7gzauSO5D9OB3wpIYNZzVamsHA_FzFCj4BfBFTxigb-vkGHG3o55yZiMDkIxQVdBkIkmokv84tcz0p_VxTVjj4lbP7nabOkr-r2wD21Z06TXd-xPVEzpMLhSqRXre6EqSBP-SGR_3JXNdAIJ-s2h5pKo9LSsRZPbuvuIbTmefOCar8",
  },
  {
    title: "Custom Curtains & Drapes",
    description:
      "Tailored window treatments designed to frame your world perfectly while providing privacy and light control.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADjnrbWcbsfqHf3SOAUHNJhT_JBEFhpl2Iketz__Zj-aFgNRonXOcIji4wUA9REKRoMFcZRqyK5xi3rif4XDhv5yr9j5XxGbUrUt-uvBQ3jNbR__SZXujPO2nCrJ7D_IzBU-IiqNBWGD0rvmY2SIHk469FXLz9zkG2-NX79inoxrIjGUSbrwNgUWJ-8kEV4fVDUX2h6anEgAsCSLU3Zm2MzUCQxgy4HvmDS-SBSW-GwIWZNS6sKwr7XvQYYtrpK2rmOM6IY5M2_iY",
  },
];

const collection = [
  {
    name: "Royal Velvet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEQxmHho00KdtLqPkm6V62afcKKxiM8e0zJkNgmswKhkQDIMaljmNImOiwKGOi_VwiOzJN5z6o9tsOhZFGpNeizc383w5LWgsknprXvbHFVV3c0EdDK8MA75xupNsiI1tvhuwHBWqUj6ft-Dn9cqcOVhRQNmMlji6qGG7RM6l2CIZlxFkaP1V_VGhQhRqQkrW2TJxRQD8BTbUEgdmA2Aqcte_LgMiT9QFzfToyb9dx3OBgORHMbQsuhYKkJQGY1GbnfqAN3__Mwtc",
  },
  {
    name: "Organic Linen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrbyzgeY4hGguM7SmxLbhWfNpgdkJc2_VNTyeBQ3P1DIoD-hFbARViFnKF4OCE32BJ7Us6jdKZrDtWC0XuQfmhJv2aTc3yE9jNKhUkKUHANeMe0xhe4_hBEFRSjQaHsDP5MY5PJUH5OmrB6_OZfS092OiLuSXHv0HMSQx4c_Vk1UOSHT3DIk9YBJfU8cPE1Pi42ZtrZgj2mzxmMbJFwEjAmVHkmCGc4CPjeBzLcNWlRqM5r1EOFydQBQJc4lU5yLkLqDDXz2SgPI",
  },
  {
    name: "Full-Grain Leather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA56tD6lF5vFx1BEmHNljtwagiSrF8T-6wmyXbnIDZhpAJhNcgtqKIrGdzwOGLMnBDpKjOgscLJTATwn-L2XfprW74npxqJlENNtwF5KtFvVW0yWOEoNzqPFFF2HU9SI7x2JVGsBFQ-ZiC9H-L6phbwljXzuvXGsIbx7q0i-KHrbL0vFBdRnCAZs-xdY8gM-ztQQtf2eGJMsp5t3m0QiTKaUByGKLE_ICjL46h5UxW1AQwnX_4RMBiecwW4o52It8baQsr-zK1PW0k",
  },
  {
    name: "Classic Jacquard",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDySn3F0x6azJ9CPYHn2wxYKwITdTLTskjZDLquKnJ7OfNfpwy95MF56qLvdVqkhuyxMi4G5TSrmTF91c-Zm-jZ7rf9TUsDSNDkdfKpo5b95PVM7BSzRSE7xiypKqq2IEA7XhElmzLpWX7_ywMaXiEF_Cja1ygvRiEiQdYZQ5gf0An2VWQZ1UrBXHjJwj2zKPhvy2INmkhs5e91HU2WOt6aVbksjBcyTQJXcWf7Wi_QCIxq7XM9Q8eJw-XbmheZJGAncj7i_FumHjw",
  },
];

export default function ResidentialPage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero
      badge = "Master Craftsmanship"
        title={
          <>
            Elevate Your <br />
            <span className="text-primary">Home Comfort</span>
          </>
        }
        subtitle="Breathe new life into your cherished furniture with our artisanal upholstery services. From vintage heirlooms to modern masterpieces, we bring world-class luxury to your living space."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDp0-CB-cwnO3o6GYF-TtSDLXnbObrTrNZbfOIit0j0On_iEadl4Bef6DUMG5qIK3qv4E3lSeiakv4IHhTXD0o0-NTlZjMAv5VrD4HeaiujC1hsczwjD8minVZDjrWyAio9b6xi30KjRUIY6Uh0URzC57utyqA1KvspL3uW9fkReZEbD4-cDZC7DndZtJ-06MkfDgBMZSd8ak1FBYDfde51XzKmvY4d7sEMbPTo8l-rHV6WLfTgR_ceF-mRC13cuUAQnTJTBNwn3Yg"
        primaryAction={{
          label: "Book Consultation",
          href: "/contact",
          icon: (
            <Icon icon="material-symbols:calendar-today" className="text-xl" />
          ),
        }}
        secondaryAction={{ label: "View Portfolio", href: "/gallery" }}
      />

      {/* <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Living Room"
            className="w-full h-full object-cover"
            data-alt="Modern luxury living room with gold accents"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp0-CB-cwnO3o6GYF-TtSDLXnbObrTrNZbfOIit0j0On_iEadl4Bef6DUMG5qIK3qv4E3lSeiakv4IHhTXD0o0-NTlZjMAv5VrD4HeaiujC1hsczwjD8minVZDjrWyAio9b6xi30KjRUIY6Uh0URzC57utyqA1KvspL3uW9fkReZEbD4-cDZC7DndZtJ-06MkfDgBMZSd8ak1FBYDfde51XzKmvY4d7sEMbPTo8l-rHV6WLfTgR_ceF-mRC13cuUAQnTJTBNwn3Yg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Master Craftsmanship
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Elevate Your <br />
              <span className="text-primary">Home Comfort</span>
            </h1>
            <p className="text-lg text-stone-300 mb-10 leading-relaxed">
              Breathe new life into your cherished furniture with our artisanal
              upholstery services. From vintage heirlooms to modern
              masterpieces, we bring world-class luxury to your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center">
                Book Your Free Home Consultation
                <Icon icon="material-symbols:calendar-today" className="text-xl ml-2"/>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg border border-white/20 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Icon icon="material-symbols:expand-more" className="text-primary text-3xl"/>
        </div>
      </header> */}

      {/* Service Categories */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Our Residential Specialities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of interior services tailored to the
            most discerning homeowners, ensuring quality that lasts for
            generations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePoints.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold font-serif mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-primary font-semibold flex items-center group-hover:underline gap-1"
                >
                  Learn More{" "}
                  <Icon
                    icon="material-symbols:arrow-forward"
                    className="text-sm"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Fabric Collection */}
      <Section className="bg-muted">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              The Residential Collection
            </h2>
            <p className="text-muted-foreground">
              Curated fabrics from world-renowned mills, selected for their
              tactile richness, durability, and timeless elegance.
            </p>
          </div>
          <Link
            href="/material"
            className="mt-6 md:mt-0 border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          >
            Explore Fabric Catalog
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collection.map((item, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden relative group bg-background"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* <!-- Process Timeline --> */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Seamless Process
            </h2>
            <p className="text-stone-400">
              Craftsmanship you can trust, from the first stitch to the final
              delivery.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2"></div>
            <div className="space-y-16">
              {/* <!-- Step 1 --> */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    01. Consultation
                  </h4>
                  <p className="text-stone-400">
                    We visit your home with fabric samples to discuss your
                    vision and take precise measurements.
                  </p>
                </div>
                <div className="z-10 p-2.5 rounded-full bg-primary flex items-center justify-center my-4 md:my-0">
                  <Icon
                    icon="mdi:home"
                    className="text-background-dark text-xl"
                    size={24}
                  />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              {/* <!-- Step 2 --> */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="z-10 p-2.5 rounded-full bg-primary flex items-center justify-center my-4 md:my-0">
                  <Icon
                    icon="material-symbols:architecture"
                    className="text-background-dark text-xl"
                    size={24}
                  />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    02. Craftsmanship
                  </h4>
                  <p className="text-stone-400">
                    Our artisans strip pieces to the frame, repairing structure
                    before applying your chosen fabrics.
                  </p>
                </div>
              </div>
              {/* <!-- Step 3 --> */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    03. Final Delivery
                  </h4>
                  <p className="text-stone-400">
                    Your renewed furniture is hand-delivered and placed in your
                    home, ready for years of enjoyment.
                  </p>
                </div>
                <div className="z-10 p-2.5 rounded-full bg-primary flex items-center justify-center my-4 md:my-0">
                  <Icon
                    icon="material-symbols:local-shipping"
                    className="text-background-dark text-xl"
                    size={24}
                  />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Icon
            icon="mdi:format-quote-close"
            className="text-primary text-5xl mb-8 mx-auto"
          />
          <p className="text-2xl md:text-3xl font-light italic font-serif mb-8 leading-relaxed">
            "The transformation of our family heirloom wingback chairs was
            breathtaking. Yashar Enterprises didn't just reupholster them; they
            restored our family history with impeccable taste and skill."
          </p>
          <div>
            <p className="font-bold text-primary tracking-widest uppercase text-sm">
              Eleanor Vanderbilt
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Private Residential Client, Mayfair
            </p>
          </div>
          <div className="flex justify-center space-x-2 mt-10">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
          </div>
        </div>
      </Section>
      {/* Consultation CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-primary p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10">
              <img
                alt="Pattern Background"
                className="w-full h-full object-cover"
                data-alt="Subtle abstract texture pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH80U2fXW2gjb4Ys_73GgZMPsQioV00rf8KC4h_5Lx7XZgu7WN0ECV4cXd4TD17OyvlpwE8kY7i-pVj-tqEcEECt9bN34_cu5hgQtU61DX4ln6139Wfajui0Y-qjuGEyFHXHJw_6z1GWW2g_qxEsPRaxIOziRXJwZUvNA607c5g--r7b8nXU2ekElVw6PudyYcHsjmR9HiBcrlOGkh0dd-9WJcM_3JvNRcmsLcsuzf3yN0snKZjyzNUDWmnBAIK-VRnizZuPDSI2A"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-background-dark mb-6">
                Expert Craftsmanship, <br />
                Delivered to Your Door.
              </h2>
              <p className="text-background-dark/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Schedule your complimentary home consultation today and explore
                our extensive fabric library in your own lighting.
              </p>
              <button className="bg-[#1b170e] text-white px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Schedule Consultation Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
