"use client";

import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Process", href: "/process" },
  { name: "Materials", href: "/material" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Icon icon="material-symbols:light-mode" className="text-xl" />
            ) : (
              <Icon icon="material-symbols:dark-mode" className="text-xl" />
            )}
          </button>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <Icon icon={isMobileMenuOpen ? "material-symbols:close" : "material-symbols:menu"} className="text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-border/50",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full bg-accent text-foreground"
                  >
                     {theme === "dark" ? (
                      <Icon icon="material-symbols:light-mode" className="text-xl" />
                    ) : (
                      <Icon icon="material-symbols:dark-mode" className="text-xl" />
                    )}
                </button>
              </div>
               <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-primary text-primary-foreground w-full py-3 rounded-lg text-center font-bold"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
