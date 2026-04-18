"use client";

import Link from "next/link";
import { Search, Camera, Send, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore Collection",
    description:
      "Browse our newest viral finds and pick the product you want.",
  },
  {
    icon: Camera,
    number: "02",
    title: "Take Screenshot of Product",
    description: "Save a screenshot of the product card you want to order.",
  },
  {
    icon: Send,
    number: "03",
    title: "DM us on Instagram to place order",
    description:
      "Send your screenshot in DM and we will confirm details quickly.",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-border z-0" />
      )}

      <div className="relative z-10 text-center">
        {/* Number Badge */}
        <div className="inline-block mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-105">
              <step.icon className="w-10 h-10 text-accent transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
              {step.number}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-accent">
          {step.title}
        </h3>
        <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function HowToOrder() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="how-to-order" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A clean 3-step ordering flow made for Instagram-first shopping.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-4 bg-secondary/50 px-12 py-8 rounded-sm">
            <p className="text-sm text-muted-foreground">
              Fast Response • Limited Stock
            </p>
            <Link
              href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg"
            >
              <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              DM Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
