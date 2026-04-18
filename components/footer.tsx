"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      id="contact"
      ref={ref}
      className={`py-16 md:py-20 bg-primary text-primary-foreground transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Have a question? We&apos;re just a DM away
          </h2>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed">
            Reach us instantly for product details, availability, and orders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground text-primary px-8 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
            >
              <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              Instagram DM
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Lumetrends. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">@lumetrends</p>
        </div>
      </div>
    </footer>
  );
}
