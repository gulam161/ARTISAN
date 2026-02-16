import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Consultation & Quote",
    description: "Every project begins with a personal conversation. We assess your furniture's structural integrity and your aesthetic vision. Within 24 hours, you'll receive a transparent, itemized quote with no hidden surprises.",
    icon: "material-symbols:chat-bubble-outline",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpDe-9dQN9BRCRgFITD6-zqwmGB8jgRzjOXAF6wPWKOrj-_HVvbRHindqNk5dOA6T40knwrFCA6CCE2Wl0oOG8YRXe20CfdrPElastE3ZhBkEZUnKbICK8XwvckGlumSKnyZN1zcUaEd6gqC1gErOHRRLCegTfaHQA9v_f3xxcIUG_dp8EGbyTDV_94YsZGgvmG9abLTr9GABWOF0y8kj9WvkZkNWwOOYyImvztmhblheD0jh8wJFNE3dF2DaFwvZsOln1a6TjEHA",
  },
  {
    step: "02",
    title: "Fabric Selection",
    description: "Browse through our curated collection of premium textiles, leathers, and velvets. Our experts guide you through durability ratings and texture profiles to find the perfect match for your lifestyle.",
    icon: "material-symbols:palette",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5WJCfkVmDPvVksxzZAQAEqg86CunYFWq3bU3A8rGxUEL4nprZJXu3PG-FFww4Jln2zbnSYAKtp_6vauDlsgKJi6MAGqkvz5nkmmLWiymRu8DB0kfczR2MgBPqBFajF6xWrpN2RX4HjnAOEPdJRuw_NQ1X2OI5JOf5lfoaG7VDnhQxqssgO-VkETJpwip_UJwl77Sjrtavfpc-o99OdbAnsVOlHZfEnM7lM1z5JsCvcdvfjoN8acbhmud2ecVBg-Hs-dsylCFV5fY",
  },
  {
    step: "03",
    title: "Pickup & Care",
    description: "We handle the heavy lifting. Our specialized team arrives for a scheduled pickup, ensuring each piece is carefully wrapped and protected for its journey to our local workshop.",
    icon: "material-symbols:local-shipping",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvydcESUK2Z9cwpqSuJSOiu0eL96BRhYFJSVj5KTAX5ORD9QqIrVRx6Mapb5MvVyu8Vkdp5DHJxzdZvBb_-trVtE47z2lFLgWG8uZiYty8PJneJTMV1-oq1zkZFKI6VPyS1xIeUJY5ONs0AG3CWhJWJJ7h4uMShz05BcUey-4GicpZCk3jXCSDxD9Pux9yGdQWasHFmExh38RPFTw23YdsVMck3C1tJV56bW2tSmhin-VSYYOwF5jotQg3KOovz4e1hXCipoNKEPY",
  },
  {
    step: "04",
    title: "Expert Craftsmanship",
    description: "This is where the magic happens. Our master craftsmen with over 20 years of experience strip the piece to its frame, repair joints, replace paddings, and meticulously apply your chosen fabric.",
    icon: "material-symbols:handyman",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznOWwX2ct3fz0HIiPX5QeuMxSr3y8RVv3Xj56Q5A4UM4x5IiohB6D66RBJ0FD_OGxCDkLCKqrmUvX5uet5WDLE45SpS581-G3Rxb1Fc4wsxz0UNYt7Fh5mq5RChiO8W1LUmcJJmtLVWex00I1IuR5MRU9e3wqa9NNvaj5hu5-5T9zgVbtHHZrYXxRP2Q3Y2S0aP--bPbF7JQXR0cBTyxKSoZkPJ-tqaJkm_i7Dq1gw_lgjebDUZxquzWqYmF1SHXa6-O3vS91mHI",
  },
  {
    step: "05",
    title: "Quality Check & Delivery",
    description: "After a rigorous 20-point quality inspection, your transformed piece is delivered back home. We ensure it's positioned perfectly, leaving you with nothing to do but admire and enjoy.",
    icon: "material-symbols:verified-user",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNr4eN9_Mv8Qq4cAkG4vvQdBN5ELDgDSJ8IHvsxR-DObB4UkU7kE-6G5RLoHUwCMtACvl-sZsdmW8YGPizYTqF4POkf-VOxsfBxIP0tOIK02ubR3u_fN-Lez76gC_3mCKaBeRj2rTtg9VEQWxGUiycKbEZ3p-aHUCFLecPgQ_R7ikCvuoQ3GY4ZEwrbzbOSVl7IqRS2iPQptZ_4NO3pz058fvdnm-z2K9gq_RIerNiq5NhYHdqF-YkDtMLKypX6lpNQZf40gPh8n8",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col gap-0">
      <div className="relative py-24 bg-card overflow-hidden text-center">
         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
         <div className="container mx-auto px-6 relative z-10">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Crafting Excellence Since 2003</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-foreground">Our Refurnishing Process</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
               Experience a seamless transformation where traditional skill meets modern precision. From the first sketch to the final polish, we handle your furniture with artisan care.
            </p>
         </div>
      </div>

      <Section>
         <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <div key={i} className={cn("flex flex-col items-center gap-12 group", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                 <div className="w-full md:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-2xl relative">
                       <Image src={step.image} alt={step.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className={cn("absolute -bottom-6 w-32 h-32 bg-primary/10 -z-10 rounded-xl", i % 2 === 0 ? "-right-6" : "-left-6")}></div>
                 </div>
                 <div className="w-full md:w-1/2">
                    <span className="text-6xl font-bold text-primary/20 block mb-4">{step.step}</span>
                    <div className="flex items-center gap-3 mb-4">
                       <Icon icon={step.icon} className="text-primary text-3xl" />
                       <h3 className="text-3xl font-bold font-serif text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                       {step.description}
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </Section>

      {/* Video Showcase */}
      <Section className="bg-foreground text-background py-24">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-background">Watch Our Craftsmen</h2>
            <p className="text-background/60 max-w-xl mx-auto">Take a peek inside our workshop and see the dedication that goes into every stitch and joint.</p>
         </div>
         <div className="relative group cursor-pointer max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <Image 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHM-KljHX11NSDS9U4bsVq-Fg_vhUCQvwioOJyvWa5ZUAD41XGMlAjUNSRVKBPA_LF0pDrBr6rAjEkThK-vJlOPgNgumFeLYZNJG9nz3rIEFQLCrgvAU7NOsFw4Uj7F1P6JJXoaRGGoAzQ1D8FFvmGias07kLnPYXTbXggZcrLnwZf2b32Pa1BO24JGGUmLQcClHKiQFYxzVf-vLLw95MN2o9Gs2ejPBmfVn8G5CWkLovpggDAJSkFA9EvY_sHL8JJ9XoLun7LDkw"
               alt="Workshop Video"
               fill
               className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="material-symbols:play-arrow" className="text-5xl translate-x-1" />
               </div>
            </div>
         </div>
      </Section>

      {/* Location */}
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">Visit Our Workshop</h2>
               <p className="text-muted-foreground mb-8 leading-relaxed">
                  We welcome clients to visit us and explore our library of fabrics and finishes. Located in the heart of the design district, our workshop is where heritage meets your home.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon icon="material-symbols:location-on" className="text-primary text-xl" />
                     </div>
                     <div>
                        <h5 className="font-bold text-foreground">Main Studio</h5>
                        <p className="text-muted-foreground">123 Artisan Row, Design District, NY 10013</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon icon="material-symbols:schedule" className="text-primary text-xl" />
                     </div>
                     <div>
                        <h5 className="font-bold text-foreground">Workshop Hours</h5>
                        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border relative">
               <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeybWpXET6Xu9066kGwpfTyEIQ899m1k4T71s8t91uA7i9v-eSmDXXK-J_NT4gqRhYc6XDkHzeGEpwF7MWS35jBGUEWSJM-05-LJSlZwCIntmdHmYF_56acpm9sywCseRqxtNMsIoe1daWfsLu8t-HyumIiabmo6Ck40oZgAV88uCa7i-pMwG8z80P9iA4UshgsaOxZByOqAxeLL5IGeMBqBa-jZ9ygXf6QWOyDBguGjPPySgdhEVE7hkUfhGeC4-jefTsLc0q7uk" 
                  alt="Map" 
                  fill
                  className="object-cover"
               />
            </div>
         </div>
      </Section>
    </div>
  );
}
