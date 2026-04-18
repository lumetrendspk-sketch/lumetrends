"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const videoUrls = [
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.37.14_PM_akukhr",
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.54.48_PM_1_qdzeax",
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.54.48_PM_bq8fhj",
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.54.49_PM_hg2v97",
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.59.08_PM_tzbpcs",
  "https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-18_at_4.59.26_PM_klbwjv",
];

export function OpenVideos() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="open-videos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Watch & Shop
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Open Videos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tap any video to preview trending styles before placing your DM
            order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoUrls.map((url, index) => (
            <div
              key={url}
              className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg shadow-black/5"
            >
              <iframe
                src={`${url}&autoplay=false&loop=true&muted=true&controls=true`}
                title={`Open video ${index + 1}`}
                className="h-72 w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
