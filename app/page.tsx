import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { HowToOrder } from "@/components/how-to-order";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collection />
      <HowToOrder />
      <About />
      <Footer />
      <Link
        href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent md:text-sm"
      >
        <Instagram className="h-4 w-4" />
        DM Us
      </Link>
    </main>
  );
}
