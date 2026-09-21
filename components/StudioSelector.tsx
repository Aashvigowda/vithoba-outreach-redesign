"use client";

import { useState } from "react";
import Link from "next/link";
import type { Service } from "@/lib/content";
import {
  SearchResultMockup,
  AdMockup,
  SocialPostMockup,
  BrowserMockup,
  ChatMockup,
  StrategyMockup,
  BrandMockup,
} from "./CampaignMockups";

// The "resulting experience" framing for each service — not a channel name,
// but the customer-facing outcome that channel actually produces. Chains are
// short (3 steps) and the outcome line is the service's own real tagline from
// lib/content.ts, so nothing here is invented.
const compositions: Record<
  string,
  { result: string; chain: string[]; render: () => React.ReactNode }
> = {
  "digital-marketing": {
    result: "Strategy",
    chain: ["Business Brief", "Audience", "Direction"],
    render: () => (
      <div className="relative flex items-center justify-center">
        <StrategyMockup className="w-64" />
      </div>
    ),
  },
  seo: {
    result: "Discoverability",
    chain: ["Search", "Content", "Local Visibility"],
    render: () => <SearchResultMockup className="w-64" />,
  },
  "google-ads": {
    result: "Intent",
    chain: ["Search", "Offer", "Landing Page"],
    render: () => (
      <div className="relative">
        <SearchResultMockup className="w-56" />
        <AdMockup className="absolute -bottom-10 -right-6 w-48" />
      </div>
    ),
  },
  "meta-ads": {
    result: "Attention → Interest",
    chain: ["Creative", "Audience", "Placement"],
    render: () => (
      <div className="relative">
        <AdMockup className="w-56" />
        <SocialPostMockup className="absolute -bottom-10 -right-8 w-48" />
      </div>
    ),
  },
  "social-media-marketing": {
    result: "Attention",
    chain: ["Creative", "Content", "Community"],
    render: () => <SocialPostMockup className="w-64" />,
  },
  "website-development": {
    result: "Conversion",
    chain: ["Landing Page", "CTA", "Enquiry"],
    render: () => <BrowserMockup className="w-64" />,
  },
  "lead-generation": {
    result: "Action",
    chain: ["Visitor", "Form", "WhatsApp"],
    render: () => (
      <div className="relative">
        <BrowserMockup className="w-56" />
        <ChatMockup className="absolute -bottom-10 -right-8 w-44" />
      </div>
    ),
  },
  branding: {
    result: "Identity",
    chain: ["Brief", "Identity", "Channels"],
    render: () => <BrandMockup className="w-64" />,
  },
};

export default function StudioSelector({ services }: { services: Service[] }) {
  const [active, setActive] = useState(services[0].slug);
  const activeService = services.find((s) => s.slug === active)!;
  const comp = compositions[active];

  return (
    <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
      <div role="list" className="flex flex-col">
        {services.map((s) => {
          const isActive = s.slug === active;
          return (
            <button
              key={s.slug}
              type="button"
              role="listitem"
              onMouseEnter={() => setActive(s.slug)}
              onFocus={() => setActive(s.slug)}
              onClick={() => setActive(s.slug)}
              className="group flex w-full items-baseline gap-5 border-b border-line py-4 text-left transition-colors duration-300 first:border-t"
            >
              <span
                className={`font-mono-vo text-sm transition-colors duration-300 ${
                  isActive ? "text-accent-deep" : "text-ink-2"
                }`}
              >
                {s.number}
              </span>
              <span
                className={`font-display text-xl font-bold uppercase transition-all duration-300 sm:text-2xl md:text-3xl ${
                  isActive ? "translate-x-2 text-ink" : "text-ink-2 group-hover:text-ink"
                }`}
              >
                {s.navLabel}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative flex h-[440px] flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:h-[500px] md:h-[560px] md:p-9">
        <div key={active} style={{ animation: "studio-fade-in 0.5s var(--ease)" }}>
          <div className="flex flex-wrap items-center gap-2">
            {comp.chain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="font-mono-vo text-[11px] font-semibold uppercase tracking-widest text-ink-2">
                  {step}
                </span>
                {i < comp.chain.length - 1 && <span className="text-ink-dim">→</span>}
              </span>
            ))}
          </div>
          <p className="mt-3 font-display text-2xl font-bold uppercase text-accent-deep md:text-3xl">
            {comp.result}
          </p>
        </div>

        <div key={`${active}-visual`} className="flex flex-1 items-center justify-center py-6" style={{ animation: "studio-fade-in 0.6s var(--ease)" }}>
          {comp.render()}
        </div>

        <div key={`${active}-footer`} style={{ animation: "studio-fade-in 0.5s var(--ease)" }}>
          <p className="max-w-sm text-sm leading-relaxed text-ink-2">{activeService.tagline}</p>
          <Link
            href={`/services/${activeService.slug}`}
            className="underline-link mt-3 inline-block text-sm font-semibold text-ink hover:text-accent"
          >
            More on {activeService.navLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}
