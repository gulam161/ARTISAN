"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
   badge?: string
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  className?: string;
  overlayOpacity?: number;
  height?: string;
}

export default function Hero({
  badge,
  title,
  subtitle,
  backgroundImage,
  primaryAction,
  secondaryAction,
  className,
  overlayOpacity = 0.5,
  height = "min-h-[85vh]",
}: HeroProps) {
  return (
    <section className={cn("relative flex items-center justify-center overflow-hidden", height, className)}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <span className="inline-block py-1 px-3 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-1">
              {badge}
            </span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="flex items-center justify-center gap-2 min-w-[160px] h-14 px-8 bg-primary text-primary-foreground text-base font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                {primaryAction.icon}
                <span>{primaryAction.label}</span>
              </Link>
            )}
            
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="flex items-center justify-center gap-2 min-w-[160px] h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                {secondaryAction.icon}
                <span>{secondaryAction.label}</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
