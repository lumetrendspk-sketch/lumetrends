"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/#home" className="group relative">
          <span
            className={cn(
              "text-base md:text-lg font-semibold tracking-wide",
              isScrolled ? "text-foreground" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
            )}
          >
            Lumetrends
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/#home"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            Home
          </Link>
          <Link
            href="/#collection"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            Collection
          </Link>
          <Link
            href="/open-videos"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            Open Videos
          </Link>
          <Link
            href="/#how-to-order"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            How to Order
          </Link>
          <Link
            href="/#about"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className={cn(
              "text-sm font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <Link
            href="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            Home
          </Link>
          <Link
            href="/#collection"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            Collection
          </Link>
          <Link
            href="/open-videos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            Open Videos
          </Link>
          <Link
            href="/#how-to-order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            How to Order
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium mt-2 transition-all duration-300 hover:bg-accent"
          >
            <Instagram className="w-4 h-4" />
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
