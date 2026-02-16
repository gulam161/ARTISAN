import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sofa Refurnishing",
    description: "Restore your beloved heirlooms or modernize your living space with our premium selection of Italian fabrics and high-density foam.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtlYia57D_2kwxuW9d_vdldFCxmlgtGOed_-tz7srqZIyuCQ1Fd8VwdYpeWF5waJPGlNnx8FHKM62qwMytQfAYCaQsfe-jmycSH9JofwUtoYg9N3TDXLw9rs6Lr2mQAA5Z1Bu0HAWfTb5gFdqmxN_JJzgqFuv9owJRPDPw0x2ABA2O3hQfGBrEu7z0O_qsEvzmbTsvsbDXw5AYKb4xAr8vNf2_eLM1kH93DUEDuhwMWUxUzClAC1Z2Ngbq2CdQJSRQNUJydmzjz4g"
  },
  {
    title: "Cinema Seat Upholstery",
    description: "Specialized ergonomic and acoustic-friendly solutions for commercial multiplexes and high-end private home theaters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CHHiootcpxxiIHr7zTnvVbpN3GiPz70ENqZ0X__0RhsXL8EAIscG-s2eqqa7wFjdW67rGmRyAJtgJJnKSjBK16Z9yvXo_hIKjiixYn0ENGNtCadvsxyyAKXwvylGG7mr314Wziv9d5R0R4YyjiybOzTg-3KV9V4KzrVuhowuStfsRFyK4jLHVQe2O1tOe-nPiM3IMaymqF5WRjUHxL5ZjENpAM4qLR8mYr4EYTuI_mm9PM4nRii8nZ0ztO13y7xrYqFmh7Z3Gco"
  },
  {
    title: "Hotel Beds & Headboards",
    description: "Bespoke headboards and integrated bedding solutions designed for durability and luxury in the hospitality sector.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFbs2FBBeDA8kXaz-Ymlw71T41ZeuCveE_n8uML-xOCjHUMg6Ahb9jV0M-HM219BFJFVPz70NeEbUorsQUZuHAJs0nNVxnWHMA0jgrb1b9SXpPEueTba1iJZLx64OU7SHIl9Pc9eLrwyOmGx5L3ZY_vTQb9cLqRD_oJG0gMs2FblgvL09sZTPd5aoGmYV6GIDxboCJKOyRcusxluxU0aOpy-eIWganBbyK1zF1HrLzWMtuq_S6-A448mXmD5u-8k8q8KumN-jX_Tk"
  },
  {
    title: "Restaurant Seating",
    description: "Commercial-grade booth seating and chair upholstery that withstands high-traffic while maintaining a designer aesthetic.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd1zfrA_H0rjaH6e1q7HnVsJTaFUfHLpzWT5CcywLMwTaNTvzx5pzRWFyzVtQVchyWchjifSpffTBF50J-rExFNpeZXam1WFgVdlzW97WOM-DlrTivspFRMQ0-EFe1PFQCAmnTsXwZe7iMH2ksjy94X4hy8qmakpkU-69gRdmYuGl_-b4whFJDkQSQQqJ-tQZYFNEffOuh6iBalkncKYL8_mC2sjPj6c_qChp6Cq5JfnOTQ_kDp8Yi5iKept0uu_p-Yt3TadqPYDE"
  },
  {
    title: "Custom Curtains",
    description: "Tailor-made drapery and window treatments crafted from the world's finest textiles to complete your interior design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkUqwc7SG_ckWP-VWovpofveVdP2T0VwnBxZoBw6aEtGyvgYPdKR6HhW4y-qhTEZYVo9X2LlvUFL5pruoggqaGPZ2tOA4mKi3q6nQ-X53sq0EJ3I2RPuiNFu7d1L4ljFZ3tN82iwlWhVEg4zPzIhl722tckwXTq_NEdb1uGdNl3hxIkg65HD-XkSJSK5LuXGZv6-ObK1eGiEbYv3DWVPdz-aMESTLBhHRB7OEAVGQQQaxe9Nue15SROiPHAMlPLEvxxignN4XgLU8"
  },
  {
    title: "Office Refurbishing",
    description: "Refresh your corporate environment with reupholstered office chairs, acoustic wall panels, and breakout area seating.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt9ECc992AJzQSzxstoAA25Ip8c6oU7GoNHLeWGyGx9lzZ7Jz8mHl-jI9q5ZsCYgKKFx_dxiqpsbJMR6UNkPbXWPcV9HVLIOqxYfK-QKciGHKTsSHL605QhTIdtLUUBK8-OTwRvSVk3lm09_sAZ3c1cghoQoFSM6VJnfjyRQQxZf5xPhmcPqNN7YXpJ8XNXj_dgO0gX_WO5cEt0lZ2uSbNAzDjWKkz8KahX61IcVVJPvVaHl1k6VpzlcQohc3R8k6gSjQAeSKYhHQ"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0">
       <Section>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8">
             <Link href="/" className="text-muted-foreground text-sm font-medium hover:underline">Home</Link>
             <Icon icon="material-symbols:chevron-right" className="text-muted-foreground/50 text-xs" />
             <span className="text-foreground text-sm font-semibold">Services</span>
          </nav>
          
          <div className="flex flex-col gap-4 max-w-3xl mb-16">
             <span className="text-primary font-bold tracking-widest text-xs uppercase">Premium Craftsmanship Since 2004</span>
             <h1 className="text-foreground text-5xl font-black leading-tight tracking-tight font-serif">Our Expert Services</h1>
             <p className="text-muted-foreground text-lg font-normal leading-relaxed">
                With over two decades of dedicated expertise, we breathe new life into furniture. From intimate residential pieces to large-scale commercial installations, our craftsmen combine traditional techniques with modern textiles.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {services.map((service, i) => (
                <div key={i} className="group flex flex-col gap-5">
                   <div className="overflow-hidden rounded-xl aspect-[4/3] relative bg-muted">
                      <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <h3 className="text-foreground text-xl font-bold font-serif">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      <Link href="#" className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-2">
                         Learn More <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                      </Link>
                   </div>
                </div>
             ))}
          </div>
       </Section>
       
       <Section className="border-t border-border mt-24">
          <div className="flex flex-col items-center justify-center gap-8 py-20 text-center">
             <div className="flex flex-col gap-4 max-w-[720px]">
                <h2 className="text-foreground text-4xl font-black leading-tight tracking-tight font-serif">Ready to transform your space?</h2>
                <p className="text-muted-foreground text-lg font-normal leading-relaxed">
                   Whether it's a single heirloom sofa or a complete hotel renovation, our team is ready to deliver excellence. Contact us today for a free estimate.
                </p>
             </div>
             <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all">
                   Request a Consultation
                </Link>
                <Link href="/gallery" className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-background border border-border text-foreground text-base font-bold hover:bg-muted transition-all">
                   View Portfolio
                </Link>
             </div>
          </div>
       </Section>
    </div>
  );
}
