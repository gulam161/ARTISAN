import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

// Data from HomePage.html
const features = [
  {
    icon: "material-symbols:precision-manufacturing",
    title: "Master Craftsmanship",
    description: "Expert attention to detail in every stitch and fold. Our artisans treat every piece as a work of art.",
  },
  {
    icon: "material-symbols:workspace-premium",
    title: "20+ Years Experience",
    description: "Two decades of experience restoring antique and contemporary furniture to its former glory.",
  },
  {
    icon: "material-symbols:eco",
    title: "Quality Materials",
    description: "We source only the finest sustainable fabrics and high-density, durable fillings for long-lasting comfort.",
  },
];

const gallery = [
  {
    id: 1,
    title: "Bespoke Sofa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1BStqnLk1J84OVYjwwhfLmFJIpCYNXPbxND9yIi4ZT0HrqDzdNyCkKyqQuBA9RblbnA3vSeugQmOpmCCyTAL9khIjiszT9zFqCrze4V4G6oOmWqO9kkz5dSwP4QaWnzYy70OgjuOfk_ipz-EMwRAzhmX54cIqe6WpZ4zgM0TD_-6MrHSTUUJ1ufWDuu12GbiUoKByPBVY9ZDywrphgCjLDYBGqvLYvkhmann6iZojMxthhCF0n47ihs9a3o-8850G8QLLcHdxwLQ",
  },
  {
    id: 2,
    title: "Antique Restoration",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtvpwTGk2wGNXZUOJPbS-NwX2AJ_Q-WJCfCDfNmzX4v8bQFdBgY8EWdy7RpvGdemqocYvwS9UZNP_FYCgXiHAzXVqwST4oSl0FJ6o7YEPyXa5oLPuvPHzHd4CM-q5LquFHmxdgxqecIHApctpqTLurAdGrcbgD0E5noqC_xdYZ15WJYA7saCxuWTCDXTWMAL9MstfMEgApY7CZ7zk790RNX6ESzistg1GxxLab47e-w8AFDEe8VCfW1QgYvRYgIbW_6d7OmQlwTsc",
  },
  {
    id: 3,
    title: "Custom Bedding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqVlVqSPiPzcBYdTWtKJmZMfDtsvl3Q9JTtDS94YaxI_vndpB1vtHzGO4Ls1zbX2gjg0ca_b2RCopfvD7B2BA8woK6jdzVSK0iSphXw0Rhdmm8KA19Yjm9BbbvjSPLZjzGVxZB6WOAzkJ-AEZYiEx_S8aKlc4nrbAMdlWrcuLOXVHaknxdgDuI7MVF0irPuRZCAT5wzmGY9y7dkh9sGYZkf23kPBiX0CdBqbaRdjn6Izq6WT1e4s3xvz-bxRY1WJQEOpIch5z-QA",
  },
  {
    id: 4,
    title: "Dining Collections",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE0IWNDVoPT5FqZ1bvCMCB0BibwsdOfVw6s68kJQx7puTHOA5DMVlkCr6AJyQ3Xw-R_GmZQQytnmECHJYxU470jBeDA3o2XiD-qDjxyyPWB8koo1x61wk45K5RQUMnAZZxmjP7wxCsiKY-gfZGfvQTWmw6uL-30uJT9c6AEfK5CjFdMOybpSO2wQ1gB2tg4jWq2RsUMZXn1CRkqKRc043McxVu3jbcA0sk45sgg6LMMnIIyjhUfzeK2v0YSgyjSkpq74fq0l1tL48",
  },
];

const clients = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVFycBLGHQGeloYIOLEaukYBLqXJczinIPhWfR0kHh85QyY_HjKNQrRvnYnJGGDbGuuEmDXZEnh7j_hQIHfs8z62nbHriS1MOd7UmBW04xDve6hmOVxcO8As2sVgA1nBJP1vJIfj1Z6i4_AEJknqXC4jJuL_wAfdOackHshBOXGzv-jFl9loFmaRYJdzv93szHSnsyf0uXGiNIUziOnzZng6JsOWMi2vGdWfyEjhAD6Ymr4_nhLrQBsBROLf1qOnhoxiHRIwCl9qk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqhTFXqt6IV8oxB9PCWXgmsNOQxLcu5ir82yDtz1jP4ANfGKP5PPFtzbVWupMNaPnsqzoQz6Jexh6hmSp4iv_hn1xbN-pp-VerOFf5eVLZZartQNMoYvZ3rJnF8mc6Tr5f_6WiN483mG5ZbiwjrJLAji3c7Fji7j7NKDo5y9Cz1oyrcmc1CGfpXjpcjl5GTZ1D8QW_zFdecHucYu3f69yB8Cf1z0c-h9rACZMB5RcwlMLanhTzdOzeFwIfhW7RYm085QlYv3TqVaw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAbPCt2z7jocmxKD3VW682_zQrLi80k5ACIZSQ6z5OS0X2BJlxaEH8AdltnarEzi-u1BGImpDQ0KU5poWArMfeYwg_8HIDzJaMcIJqi1jU2JHGVOhj_dhutuAQEVgaTK3gER0WCBzX9yIQBnlrxR-T2Q5zdrL24fWFFWZPSw3L6K896KqBoE7jwb6DlleWXD0Uf7_Qb1-4J2EeRf0JB2VRJDmfs-xnFL74wl667KXWSwOzOtm-BG-ys_vkHbcDha2bVGvABwrE_lLc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfKrDDYrwq92flJdSb2tENZuQ6s0nQmqnTvURhI40jjNNtewDuSuL9j8H0KAduJURtTLGXFATVb9RZeSZ_XNI8C96jku94ND6iiZwxiJ-1KMwEuEz_KgpDcuIqexysqpthf7YhI1EPeglC9S7WONUoP1Km02deXUg82dC-Ruvwt8M313YLl5P3zAKxttjSArmFKiexRg1X87FwukAAATXD0gjTTBx6R18agcMhiPsRTc4I6Ufp6fOCWsmGtgUd8C1QColfyvf2NiI",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero
        title={
          <>
            Give New Life to Your <br /> <span className="text-primary italic font-serif">Old Furniture</span>
          </>
        }
        subtitle="Over 20 years of master craftsmanship in furniture reupholstery and custom soft furnishings. Bringing elegance back to your home."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCWcXgRl6yWMnwwCVN-F6N3FOmdnaYfm4c1U6FWYB-ZCZK6HsiHheFwQ2BBOzYvRxnkC8AOIw3hc5JK7VRBfbuzWzCi0d-k0I70db2SFgOyLTN6yUVIlgFXN6vd9lY_7GVOs_i3tv8XtShln8rNiRIyQV8HUpK_RvcWHfT__HeSIiov-KoQHOVLeOp79JezXQFPMQGQ2AmDO2Q0HoM2QV4t0lO-h59hXrPi9g6DMzLAca22GvMQBbQhv_6gsexgn99HcLI-rkMF7ns"
        primaryAction={{
          label: "Call Now",
          href: "/contact",
          icon: <Icon icon="material-symbols:call" className="text-xl" />,
        }}
        secondaryAction={{
          label: "Get a Quote",
          href: "/contact",
        }}
      />

      {/* Clients Section */}
      <Section padding="py-10" className="bg-muted border-y border-border">
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center">
          Trusted by leading hotels worldwide
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
             <div key={i} className="relative h-12 w-32">
                <Image src={client} alt="Client Logo" fill className="object-contain" />
             </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-foreground text-4xl md:text-5xl font-bold font-serif">
               Excellence in Every Stitch
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-[720px] mt-2">
               We combine traditional upholstery techniques passed down through generations with modern aesthetics to deliver unparalleled excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon icon={feature.icon} className="text-3xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-serif">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Showcase */}
      <Section className="bg-background border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Portfolio</h4>
              <h2 className="text-4xl font-bold font-serif">Restoration Gallery</h2>
            </div>
            <Link href="/gallery" className="text-primary font-bold hover:underline flex items-center gap-2">
               View All Work <Icon icon="material-symbols:arrow-forward" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-xl bg-muted aspect-[4/5] relative">
                 <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold">{item.title}</span>
                 </div>
              </div>
            ))}
          </div>
      </Section>
    </div>
  );
}
