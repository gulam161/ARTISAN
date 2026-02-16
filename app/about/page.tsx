import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    icon: "material-symbols:history-edu",
    value: "20+",
    label: "Years Experience",
    sub: "Mastering the craft since 2004",
  },
  {
    icon: "material-symbols:task-alt",
    value: "5000+",
    label: "Projects Completed",
    sub: "From residential to commercial",
  },
  {
    icon: "material-symbols:verified",
    value: "100%",
    label: "Quality Guarantee",
    sub: "Lifetime craftsmanship warrantee",
  },
];

const commercial = [
  {
    title: "Cinema Seating",
    desc: "Expertise in large-scale auditorium seating, acoustic fabric selection, and ergonomic design for major theater chains.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS5Wfd3LANRY1PgJPyUbTWYEGErPWgh_0KjfINgOHBqOpMVVNUJ7K4y-9xaCoLphMN_hPGXM3GSV97M-QYFZD3lBWF9ZKADnJGoTIeB-7TrWhkDwKfV33o5J-7JtIcC-21454x5cyLAfF7bZ9_WQfENDZuVxUBL4BaNzvMnBS3zkpgfDGz7jCbjh5T4OtvOGbB7toN7CaCz_auApww7Y6xS9bitHy28qVgKtsmLUbTX9yuf5ju8EXW29q2pdI1fZW1Q22i1WRzRhQ",
  },
  {
    title: "Hospitality Furnishing",
    desc: "Premium furniture refurnishing for luxury hotel lobbies, suites, and dining areas. Partners of Radisson and Ramada.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjNDcslL8KUtfleSMMz8fgBVTbrOIsFsCmUJb7QnytoDVTRONIVWV4KdFk5d_BnXw5lT_LXtD0Vi6rCi1hq9uXZHCzTOSx94iVYyB1O_32A8ac-PiOOGGKnThBE4fSNyTP9y8gF9Ftz1U-sibuhCbjRBDUT47iWurpBkqkjQPorPlILCqwzaMVlO7Tl2fJ7GPDsNdo85uMdkl2MvVLi3sgAFDMSEnpnabJECXEEouZ1NtVE8quhi7eLLM7cwsZxkPIRWjMo_uWSho",
  },
  {
    title: "Corporate Spaces",
    desc: "Refining office environments with bespoke upholstery for executive suites, boardrooms, and common areas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA09QPA8lSTpYbb3E4VUiuLMisgQBUhv7zY4uKo5Po_E1DpgE6fP4yBtzeJ7a_87TesEojMfoUXqicaSb-WCkWtaljuZoA1vT7tZM11JxWbInOb0BwrlSsKc-M5urkMpBdGiFoDGoMsleP0DXDwQ6bfcj4PqsqrcImZK9gZagFfq2sav5VYF-rMSetOflhdGpoS5kwwVR0ec1V3ZDZWwzo1lY56RufGnQImBzdXo9VJfafwBFsalbknHaH-pjkWi12uFudwsQSBb80",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero
        title="A Legacy of Precision & Master Craftsmanship"
        subtitle="For over two decades, Yashar Enterprises has defined excellence in furniture restoration, bringing timeless quality to residential and commercial spaces."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCDDlfGHCuifHbaGFYQGH-QUILp0uC-qd31DWCwJjjcphzyohWkXd1qGxbBn7i2hE0zFtVeCenrTZOPJJpkmNQClrvODja_qIBDApAzwDvFueTkcxcP6v8171bE4CD-JW8pqCiqLDgfUqNmCO_nMq1zF-ouT8RnsxKmX3QOQU-J4Q25lAJXppKLRcR7Ik83PSTlqjTOSP7_kRW1lOXIwf_RwMaVQxVL3ii90qWbflhXTUrxKVSczk_9sYtQSv6nKq2ugj6_844I5Qs"
        primaryAction={{ label: "View Portfolio", href: "/gallery" }}
        secondaryAction={{ label: "Our Services", href: "/services" }}
      />

      {/* Stats */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 text-center sm:text-left">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-8 border border-border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon icon={stat.icon} className="text-primary text-4xl mb-2" />
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
              <p className="text-foreground text-5xl font-black tracking-tight">
                {stat.value}
              </p>
              <p className="text-primary text-sm font-semibold">{stat.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-primary/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPXoytIC-q91WIdiK_YuqIdT3Y-1nLSzVg-xttP5BniMP8HoDlTEu6Fe4ipe4WDb37tydF6zNJRyJLd-DlYcZoXERWyk4S99r7YNjOS0vYSm6v7O2BnXVXCxYgXT_WGx0D3eYXFK97P8TbqQa52vE1stsUxStgUopvb-FfQF2Icl9TYBKdwPwKtK4yMPm3ID5f4rwBI9sTmuDgcXiwnpykP19DHpOnhiFSbZPww3k_f18RvpGfrxA8vm_A6II2A4JQD8ZLSUyMs"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl flex flex-col items-center justify-center p-6 text-primary-foreground shadow-xl">
              <p className="text-5xl font-black">20</p>
              <p className="text-sm font-bold uppercase text-center leading-tight">
                Years of Excellence
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm italic">
              Our Heritage
            </span>
            <h2 className="text-4xl font-black leading-tight font-serif text-foreground">
              The Yashar Story: From Workshop to Industry Leader
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a singular vision to preserve the art of
                traditional upholstery, Yashar Enterprises began in a small
                artisan workshop. What started as a passion for restoration has
                evolved into a premier destination for high-end furniture
                refurnishing.
              </p>
              <p>
                Our journey is defined by a deep respect for materials and a
                relentless pursuit of perfection. Every stitch, every joint, and
                every choice of fabric reflects our commitment to honoring the
                history of each piece while ensuring it lasts for generations to
                come.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Icon
                    icon="material-symbols:auto-awesome"
                    className="text-primary text-xl"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Bespoke Techniques
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional methods meeting modern durability standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Icon
                    icon="material-symbols:eco"
                    className="text-primary text-xl"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Sustainable Sourcing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Premium materials ethically sourced from top-tier suppliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Commercial Expertise Section */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Commercial Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-foreground leading-tight">
            Trusted by World-Class Brands
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {commercial.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 bg-card p-4 rounded-2xl border border-border hover:shadow-xl transition-all"
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="px-2 pb-2">
                <h4 className="text-xl font-bold mb-2 font-serif text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">
            Our Distinguished Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-foreground/80 font-black italic text-2xl">
            <div>RADISSON</div>
            <div>RAMADA</div>
            <div>HILTON</div>
            <div>MARRIOTT</div>
            <div>AMC THEATRES</div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <div className="px-4 md:px-20 lg:px-40 flex justify-center py-20 bg-primary/5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 text-center">
          <Icon
            icon="mdi:format-quote-close"
            className="text-primary text-5xl mb-8 mx-auto"
          />
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
            "Yashar Enterprises transformed our theater seating with
            unparalleled professionalism. Their attention to detail and
            commitment to deadlines made them an invaluable partner for our
            nationwide renovations."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 w-12 bg-primary mb-4"></div>
            <cite className="not-italic">
              <span className="block font-bold text-lg">David Henderson</span>
              <span className="block text-primary text-sm font-medium uppercase tracking-widest">
                Regional Director, Cinema Operations
              </span>
            </cite>
          </div>
        </div>
      </div>

      <Section className="bg-background">
        <div className="bg-primary text-primary-foreground p-12 rounded-3xl items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Restore Your Masterpiece?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-[600px] mb-10 mx-auto">
            Whether it's a family heirloom or a 500-seat auditorium, we bring
            the same level of 20-year expertise to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-foreground text-background font-bold rounded-xl hover:scale-105 transition-all"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-foreground text-foreground font-bold rounded-xl hover:bg-foreground hover:text-background transition-all"
            >
              Request a Site Visit
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
