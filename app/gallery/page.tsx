"use client";

import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All Projects", "Residential", "Cinema & Theaters", "Boutique Hotels", "Restaurants"];

const projects = [
  {
    category: "Residential",
    title: "Luxury Velvet Sofa Restoration",
    desc: "Italian Mohair Velvet",
    year: "2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCViD8OOwcJ0Ah7-BkNryLoMqmA8pHKd2rvqxTIwRi3TkoNA2D72nkpV9efZV8hnOSga6IQkFnyXTet2xSOhX0TvTmyl7tv8fxceAD5pk-xFqwhGPHdctzA815f4Ec-vyl3R04P3NUsCxEtXXAlxiYECLSKWkyZpjozc_20QWE4yncw01O6UWzHeKaWMwMZj4h-MeLq92Pip7sz9UHn4tkuy7tGUbSpC0PBlENf3_nLI-9CP9eVKz9vquqp8m8GQ_qjCMy15wMpxRw",
    before: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR5BwKFU_jPKOIRfSmAlRVbrv4adFDHudZIbNSZagemxWqa1gRMLAFpVjB_1KZIdUubhCshbx3uUVV-pN8XE_2A53dwqUJRZOQoPW5MbA0YGEM1R1jJoUWyTXMCsVwS1pTwYYesoTsiNIMUmrOVnPWwclCr3LSbsh2EXE9ycoLs-ZAxGt7pepXfbgBOVyRF-t6986tR-TiICuviLiL0np2R87vxFPK5iBhVo4fHnDuvpXl4DeHTPi4932wCJCgQHKU-35AraNoRTQ"
  },
  {
    category: "Cinema & Theaters",
    title: "Grand Cinema Seating Overhaul",
    desc: "Heavy-Duty Fire Retardant Fabric",
    year: "2022",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxDqnADtWB7bJ9bZBiyzup0sI2fjtBgR5M9gO3JXlUjH6PfbczIvcoHrW-Y1SzGnrDPZhEM-Q7gkgVTeuLH7SNbF2f175hqR4Dwj7Fu8iGaqn83QpPFM31A3gmYWSMvPvRoycYEcgCvNbnzlSaeyfetHw0IuSDvM30rdpfZG3DqstZkGH7WemdR0lP6YJt8Gof1NwZeP7OAJb1WXZ0iRGEGU_CTG7m_rHq5VL1-aG1YGW2M962RtjFbWXIX2QgbhxP1E5ctOz7orQ",
    before: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9kkQgBsclK_hQYkKajw2aBeDhpMwPyH0Z0N2WtmIwYPWZ_bYMSkrd4G1cjm_z0CS2LmXBjk1VNwOHYZBV7FkpJ_01owL2ri8bP2Z4fUzB9zVagzLjgZ8qq9LgrOjylDHjGyu3CgGQ_PTVpOcjovFlqKEyYzUk8wKPBSg9ZOqo_se0MQXd93Tw27xBuXV0_04BlrrYV76B4gWvjogNb11yk4IHbzFU4TiU4qswzpJxX7ghDFAzL3cxCqR4jfg3aUZXCVAsNPh-2h0"
  },
  {
    category: "Boutique Hotels",
    title: "Boutique Hotel Lobby Restoration",
    desc: "Premium Full-Grain Leather",
    year: "2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJxSeTES2u6D27XJUJ4-4OgL0ngXa9rB32sOq-9T8zHcqkDnimDC1X6yRhaXgKEfGtrsDj6QvrqkDqX79qg1k82xiE-Zr_hCR_2OaYM0be_ie_9FR6n01DOHFMZYWWynYNErUHBGCNh-evJJsFxrWoT5JZxuycWdflzfe7UFtRwXpqwm1M2WVeaXQXhF7TpZCQZEUZIjYO67my_ADFaxj8SxsBza-YFpzCIZJ8ZvlZsC3UyT_dlkq_cydRnz9O33A-kbDzuD-j9CY",
    before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNMMzHvsOp-SwsIAIIW5wYdQ2IgBwCFZ87SRBPRm9as-t0OW8Of-Sl1oiJ4L9UZDGkYOGORTP86JspSE-SHg-5oeD5RclITTXqmDEi273fzIVaOWAgcdd_g2LwboYKBnlusnKZKsrzB_sq3m3ZefIhgXc1Fb2t3nx6ghT5BxPy-yC20a6NMbkVjqcNWXEskgBwQ_KVSIneTV8rIlnFHfkf0zLVgMzthBgaPw9DmkkMV51PExne8M6nKC4MAzVbRXBgfj2LWuGV0YM"
  },
  {
    category: "Restaurants",
    title: "The Bistro Restaurant Booths",
    desc: "Stain-Resistant Performance Fabric",
    year: "2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJzXZj5qv62A71QODxA7v_y2V5NC3on2IPjCIAC-AuApZGCKdXEvWdKyq1Hq32QIbAXEBgcDy3_9un5uZEHZMe6tDjgc-Xm6bdddna52LA9fkwuAD1j62IPagxkVzjjBfoOAPMjwMlTd2qzVRuZei0HnJcR15dtv14PseOAP6LvRaKRNcTpnXbinPAwoopk6dtCLihyKZT-PLu0e4-2rHScvnOG0AYmeQv8KO9xJCfYhe4GyMD17m26ORw2cTSPdxyb5MHjiLc1m0",
    before: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKjqnunm9t4a9J0dYhDOWyWRdxN96nn9Nh78Y5oHweaL2EieacGUHCQH27uEgFSJgg6IZtZXYG1e_mGoGagTowP4kOj9IKEAgOaSii2locaAS8msX3StZkagmR3A5YSyOzZtkLiEBUqvUMD4qdMBrdiuZ07Y1E9y8feIMB5kmMluBHTfA2KlDisWuwd_Hbq3wJo-dAf8FpuPoWVjhmpiA2CpIdX4UfE8-WgVd-BQI2DVyStkZsC1zH4lh4dy4orOgb-pD3mOGJ3P4"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-0">
      <Hero
        title="Our Transformations"
        subtitle="Explore two decades of master upholstery. From vintage residential pieces to large-scale commercial cinema and hospitality seating, we breathe new life into every stitch."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCViD8OOwcJ0Ah7-BkNryLoMqmA8pHKd2rvqxTIwRi3TkoNA2D72nkpV9efZV8hnOSga6IQkFnyXTet2xSOhX0TvTmyl7tv8fxceAD5pk-xFqwhGPHdctzA815f4Ec-vyl3R04P3NUsCxEtXXAlxiYECLSKWkyZpjozc_20QWE4yncw01O6UWzHeKaWMwMZj4h-MeLq92Pip7sz9UHn4tkuy7tGUbSpC0PBlENf3_nLI-9CP9eVKz9vquqp8m8GQ_qjCMy15wMpxRw"
        primaryAction={{ label: "Start Your Project", href: "/contact" }}
      />
      
      {/* Category Tabs */}
      <div className="sticky top-[80px] bg-background z-40 border-b border-border">
          <div className="container mx-auto px-6 overflow-x-auto no-scrollbar flex gap-4 md:gap-8 py-4">
             {categories.map((cat) => (
                <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors",
                     activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                   )}
                >
                   {cat}
                </button>
             ))}
          </div>
      </div>

      <div className="container mx-auto px-6 py-12 min-h-[500px]">
         <AnimatePresence mode="popLayout">
           <motion.div 
             layout
             className="grid grid-cols-1 md:grid-cols-2 gap-10"
           >
              {filteredProjects.map((item) => (
                 <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.title}
                    className="group"
                 >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4 border border-border">
                       <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                       
                       {/* Before Thumbnail (Hover to reveal?) No, static per design */}
                       <div className="absolute bottom-4 left-4 w-32 md:w-40 aspect-video rounded-lg border-2 border-white shadow-xl overflow-hidden z-10">
                          <Image src={item.before} alt="Before" fill className="object-cover" />
                          <span className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Before</span>
                       </div>
                       
                       <div className="absolute top-4 right-4 z-20">
                          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">After</span>
                       </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                       <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.category} • {item.desc}</p>
                       </div>
                       <span className="text-xs font-mono opacity-50 text-foreground">{item.year}</span>
                    </div>
                 </motion.div>
              ))}
           </motion.div>
         </AnimatePresence>
      </div>

      <Section className="bg-muted text-center py-20">
          <h2 className="text-3xl font-black mb-6 font-serif text-foreground">Have a Project in Mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Our team is ready to analyze your furniture items and provide a comprehensive restoration plan.</p>
          <div className="flex justify-center gap-4">
             <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg">
                Get a Free Quote
             </Link>
          </div>
      </Section>
    </div>
  );
}
