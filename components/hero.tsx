"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, Instagram, ShoppingBag } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-20">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_3.50.40_PM_zm19kz&autoplay=true&loop=true&muted=true&controls=false"
          title="Lumetrends hero video"
          className="h-full w-full border-0 scale-125"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute top-0 left-0 right-0 z-0 h-36 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p
              className={`text-sm uppercase tracking-[0.3em] text-white/80 mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Lumetrends
            </p>

            <h1
              className={`font-sans text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] text-white mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Discover the trends that define your next-level wardrobe.
            </h1>

            <p
              className={`text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Curated aesthetic products, trending fashion & must-have lifestyle
              items.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link
                href="#collection"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground"
              >
                <ShoppingBag className="w-4 h-4" />
                Explore Collection
              </Link>
              <Link
                href="#collection"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white/10"
              >
                Shop Now
              </Link>
              <Link
                href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-accent"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                DM Us on Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <Link
          href="#collection"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
