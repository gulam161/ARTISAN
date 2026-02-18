"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";

const footerLinks = {
  quicklinks: [
    { name: "Residential Upholstery", href: "/residential" },
    { name: "Commercial Solutions", href: "/commercial" },
    { name: "Fabric Collection", href: "/material" },
    { name: "Before & After", href: "/gallery" },
    { name: "Request a Quote", href: "/contact" },
  ],
services: [
    { name: "Custom Design", href: "/custom-design" },
    { name: "Furniture Restoration", href: "/material" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Portfolio", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  contact: [
    { icon: "material-symbols:location-on", text: "Navi mumbai, Maharastra, India" },
    { icon: "material-symbols:phone-in-talk", text: "+91 9689950472" },
    { icon: "material-symbols:schedule", text: "Mon-Sat: 9am - 6pm" },
    { icon: "material-symbols:mail", text: "Yasharenterprises07@gmail.com" },
  ],
  social: [
    { icon: "streamline-plump:web", href: "#" },
    { icon: "material-symbols:mail", href: "#" },
    { icon: "material-symbols:share", href: "#" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                <Icon icon="material-symbols:chair-alt" className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none uppercase tracking-wide">
                  Yashar
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Enterprises
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Since 2004, we have been the premier choice for furniture reupholstery and bespoke soft furnishings. We pride ourselves on preserving the stories of your furniture.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  aria-label="Social Link"
                >
                  <Icon icon={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quicklinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon icon={item.icon} className="text-primary text-lg mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Yashar Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
