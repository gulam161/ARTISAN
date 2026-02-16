import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero
        title="Get In Touch"
        subtitle="Our team of specialists is ready to discuss your reupholstery project. Visit our workshop or send us a message to get started."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDfZAWkmz9ZvEaQ6HAbM1JNcSKQqRzom0pnMP-aW_Ah1NczfVVsM7HqgYLn1OA2hfK7q9UVctmoCwTGgvfXxF0W14nqbUCXuHMimEgvLOo34l8IhT4YGLsiELW4y74ExQjdNohsL2u-sYuPjcsibmi_wnc6aqzwXFvCMA8itPOGTEemKBhPDkaktJSleVZk6qC8Q3cndmnYzd0oOCQOtuYhu45j1vqAbalADmOkxQbdh835YwIhJDnBuzctiBtl3WxuoinH3L2F7Vg"
        className="min-h-[60vh]"
      />
      
      <Section>
         <div className="grid lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-4xl font-bold font-serif mb-8 text-foreground">Contact Information</h2>
               <p className="text-muted-foreground text-lg mb-12">
                  Whether for a residential inquiry or a commercial partnership, we're here to help.
               </p>
               
               <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon icon="material-symbols:location-on" className="text-primary text-2xl" />
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground text-lg">Visit Our Showroom</h4>
                        <p className="text-muted-foreground">123 Artisan Way<br />Furniture District, City Center 54321</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon icon="material-symbols:phone-in-talk" className="text-primary text-2xl" />
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground text-lg">Call Us</h4>
                        <p className="text-muted-foreground">+1 (555) 000-1234</p>
                        <p className="text-muted-foreground text-sm">Mon-Sat: 9am - 6pm</p>
                     </div>
                  </div>

                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon icon="material-symbols:mail" className="text-primary text-2xl" />
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground text-lg">Email Us</h4>
                        <p className="text-muted-foreground">concierge@yasharenterprises.com</p>
                        <p className="text-muted-foreground">commercial@yasharenterprises.com</p>
                     </div>
                  </div>
                  
               </div>
            </div>
            
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-2xl">
               <h3 className="text-2xl font-bold font-serif mb-6 text-foreground">Send a Message</h3>
               <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">First Name</label>
                        <input type="text" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">Last Name</label>
                        <input type="text" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-foreground">Email Address</label>
                     <input type="email" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-foreground">Phone (Optional)</label>
                     <input type="tel" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-foreground">How can we help?</label>
                     <textarea rows={4} className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Tell us about your furniture..."></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                     Send Message
                  </button>
                <button className="w-full bg-[#01c549] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                     Message on WhatsApp
                  </button>
               </form>
            </div>
         </div>
      </Section>

      <div className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <Image 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeybWpXET6Xu9066kGwpfTyEIQ899m1k4T71s8t91uA7i9v-eSmDXXK-J_NT4gqRhYc6XDkHzeGEpwF7MWS35jBGUEWSJM-05-LJSlZwCIntmdHmYF_56acpm9sywCseRqxtNMsIoe1daWfsLu8t-HyumIiabmo6Ck40oZgAV88uCa7i-pMwG8z80P9iA4UshgsaOxZByOqAxeLL5IGeMBqBa-jZ9ygXf6QWOyDBguGjPPySgdhEVE7hkUfhGeC4-jefTsLc0q7uk" 
             alt="Map Location" 
             fill
             className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="p-4 bg-background/80 backdrop-blur rounded-xl shadow-xl flex items-center gap-4">
                <Icon icon="material-symbols:location-on" className="text-primary text-3xl" />
                <div>
                   <p className="font-bold text-foreground">Yashar Enterprises</p>
                   <p className="text-xs text-muted-foreground">Furniture District, City Center</p>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
}
