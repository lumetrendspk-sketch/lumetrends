"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type SheetProduct = {
  "brand name": string;
  imageurl: string;
  "dress price": string;
  "dress detail": string;
};

type Product = {
  id: number;
  brand: string;
  description: string;
  price: string;
  image: string;
};

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-4 border border-border/50 shadow-lg shadow-black/5">
        <Image
          src={product.image}
          alt={product.brand}
          fill
          loading="lazy"
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500" />
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </p>
        <p className="line-clamp-3 text-xs md:text-sm text-muted-foreground">
          {product.description}
        </p>
        <p className="text-lg font-bold text-foreground">{product.price}</p>
        <Link
          href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-300 hover:text-accent"
        >
          <Instagram className="w-4 h-4" />
          DM Us
        </Link>
      </div>
    </div>
  );
}

export function Collection() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data: SheetProduct[] = await response.json();
        const mapped = data
          .filter((item) => item.imageurl && item["brand name"])
          .map((item, index) => ({
            id: index + 1,
            brand: item["brand name"].trim(),
            description:
              item["dress detail"]?.trim() ||
              "Curated trending style from our premium collection.",
            price: `PKR ${item["dress price"]}`,
            image: item.imageurl.trim(),
          }));
        setProducts(mapped);
      } catch (error) {
        console.error("Failed to load product sheet", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const productsByBrand = useMemo(() => {
    const grouped = new Map<string, Product[]>();
    products.forEach((product) => {
      const existing = grouped.get(product.brand) ?? [];
      existing.push(product);
      grouped.set(product.brand, existing);
    });
    return Array.from(grouped.entries());
  }, [products]);

  return (
    <section id="collection" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            New Arrivals
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Collection by Brand
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Minimal, curated picks grouped by brand for a cleaner shopping
            experience.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">
            Loading collection...
          </p>
        ) : (
          <div className="space-y-14">
            {productsByBrand.map(([brand, brandProducts]) => (
              <section key={brand}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {brand}
                  </h3>
                  {brandProducts.length > 4 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedBrands((prev) => ({
                          ...prev,
                          [brand]: !prev[brand],
                        }))
                      }
                      className="text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {expandedBrands[brand]
                        ? "Show less"
                        : `View all (${brandProducts.length})`}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {(expandedBrands[brand]
                    ? brandProducts
                    : brandProducts.slice(0, 4)
                  ).map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b-2 border-primary text-primary pb-1 text-sm font-medium tracking-wide transition-all duration-300 hover:border-accent hover:text-accent hover:gap-4"
          >
            Explore all drops on Instagram →
          </Link>
        </div>
      </div>
    </section>
  );
}
