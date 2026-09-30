"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pillars, services, type Pillar } from "@/lib/content";
import { serviceIcons } from "./icons";

const tabs = ["All", ...pillars] as const;

// Optional photo for a card's visual band, keyed by service slug. Files live
// in /public/services. Cards without one keep the gradient + icon.
const serviceImages: Record<string, { src: string; alt: string; position?: string }> = {
  "social-media-marketing": {
    src: "/services/social-media-marketing.jpg",
    alt: "Phone showing a Social Media folder with Facebook, Messenger, Instagram, WhatsApp and X apps",
    position: "center 58%",
  },
  branding: {
    src: "/services/branding.png",
    alt: "Brand identity mockups: laptop with a logo, business cards, brand guidelines book, colour palette and logo sketches",
    position: "center 38%",
  },
  "digital-marketing": {
    src: "/services/digital-marketing.png",
    alt: "Marketing strategy desk: a target with an arrow, Google Ads, Instagram, Facebook, YouTube and LinkedIn icons, and a strategy notebook",
    position: "center 30%",
  },
  seo: {
    src: "/services/seo-analytics.jpg",
    alt: "Laptop showing an analytics dashboard with traffic charts and visitor statistics",
    position: "center 32%",
  },
  "lead-generation": {
    src: "/services/lead-generation.png",
    alt: "Phone showing a Get in Touch enquiry form, beside a lead funnel, a new lead to converted pipeline and a growth chart",
    position: "center 38%",
  },
  "google-ads": {
    src: "/services/google-ads-search.png",
    alt: "Google Ads logo beside a Google search results card with an ad, and More Visibility, Higher Clicks and Better Conversions labels",
    position: "center 45%",
  },
  "meta-ads": {
    src: "/services/meta-ads.png",
    alt: "Phone showing a sponsored Meta ad, with the Meta logo, Facebook and Instagram icons and a reach, engagement and leads card",
    position: "center 35%",
  },
  "website-development": {
    src: "/services/website-development.png",
    alt: "Laptop and phone showing a responsive business website, with HTML, CSS and JavaScript icons",
  },
};
type Tab = (typeof tabs)[number];

export default function ServicesShowcase() {
  const [active, setActive] = useState<Tab>("All");

  const filtered =
    active === "All"
      ? services
      : services.filter((s) => s.pillar === (active as Pillar));

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Filter services by pillar">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
              active === tab
                ? "bg-accent text-accent-ink"
                : "border border-line-strong text-ink-dim hover:border-accent hover:text-accent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((s) => {
          const Icon = serviceIcons[s.slug];
          const photo = serviceImages[s.slug];
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_44px_rgba(18,24,18,0.10)]"
            >
              {/* Visual band — a photograph can replace this gradient later without touching the layout below */}
              <div className="relative h-40 overflow-hidden sm:h-44">
                <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-2" />
                {photo ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={photo.position ? { objectPosition: photo.position } : undefined}
                  />
                ) : Icon && (
                  <Icon className="absolute -bottom-4 -right-4 h-28 w-28 text-on-dark/[0.08] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    photo ? "from-dark via-dark/50 to-dark/10" : "from-dark via-dark/10 to-transparent"
                  }`}
                />
                <span className="absolute left-4 top-4 rounded-full border border-dark-line bg-dark/60 px-3 py-1 font-mono-vo text-[10px] uppercase tracking-widest text-on-dark-dim backdrop-blur-sm">
                  {s.pillar}
                </span>
                <span
                  className={`font-mono-vo absolute right-4 top-4 text-xs ${
                    photo
                      ? "rounded-full border border-dark-line bg-dark/60 px-2.5 py-1 text-on-dark-dim backdrop-blur-sm"
                      : "text-on-dark-dim/70"
                  }`}
                >
                  {s.number}
                </span>
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-bold text-on-dark drop-shadow-sm">
                  {s.navLabel}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm text-ink-2">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono-vo text-xs uppercase tracking-widest text-accent transition-transform duration-300 group-hover:translate-x-1">
                  Explore →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
