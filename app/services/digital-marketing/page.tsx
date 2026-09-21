import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import GrowthLine from "@/components/GrowthLine";
import StudioHeroVisual from "@/components/StudioHeroVisual";
import StudioSelector from "@/components/StudioSelector";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhyVithoba from "@/components/WhyVithoba";
import ProcessBoard from "@/components/ProcessBoard";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import MeasureStrip from "@/components/MeasureStrip";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getService, services, waLink, waMessages } from "@/lib/content";

const service = getService("digital-marketing")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: `/services/${service.slug}` },
};

// Curated from real content already in lib/content.ts — no invented Q&A.
const faqs = [
  ...service.faqs,
  {
    q: "Is ad spend included in your fees?",
    a: "No. Our packages cover our service fee only: strategy, management and execution. Ad spend is billed separately and goes directly toward your campaigns.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "We require a minimum 3-month commitment, because marketing needs a few months to show real results.",
  },
  {
    q: "How much does digital marketing cost in Mysuru?",
    a: "Our monthly packages start at ₹15,000 to ₹20,000 (Starter), ₹25,000 to ₹40,000 (Growth) and ₹50,000+ (Premium). Ad spend is billed separately, and final pricing depends on scope, industry and business size.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* 01 — HERO (cream) */}
      <section className="wrap grid gap-14 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:pb-20 md:pt-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="font-mono-vo flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-ink-2">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li>/</li>
              <li className="text-ink-2">Digital Marketing</li>
            </ol>
          </nav>

          <p className="eyebrow mb-6">Digital Marketing / Vithoba Outreach</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold uppercase leading-[1.02] text-ink">
            Digital marketing
            <br />
            built for businesses
            <br />
            ready to{" "}
            <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent-deep">
              grow.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-2">
            Strategy, creativity, performance and digital experiences built
            around what your business needs next.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Magnetic>
              <Button href={waLink(waMessages.bookCall)} external>
                Start a Conversation →
              </Button>
            </Magnetic>
            <a href="#studio" className="underline-link text-sm font-semibold text-ink hover:text-accent">
              See Our Services ↓
            </a>
          </div>
        </Reveal>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <StudioHeroVisual />
        </div>
      </section>

      {/* 02 — PROVOCATIVE STATEMENT (dark green) — no cards, no diagrams, no paragraphs */}
      <section className="bg-dark py-20 text-on-dark md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow-dark font-mono-vo mb-8">02 / The Difference</p>
            <h2 className="max-w-3xl font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold uppercase leading-[1.12] text-on-dark">
              Your customers don&rsquo;t think in channels.
            </h2>
            <p className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold uppercase leading-[1.12] text-on-dark">
              They think: <span className="text-accent-bright">&ldquo;should I choose you?&rdquo;</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — THE STUDIO: immersive service selector (cream) */}
      <section id="studio" className="wrap py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-6">03 / The Studio</p>
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold uppercase leading-tight text-ink">
            One partner. Everything your campaign needs.
          </h2>
        </Reveal>
        <div className="mt-14">
          <StudioSelector services={services} />
        </div>
      </section>

      {/* 04 — WHAT WE BUILD (dark editorial) — honest fallback, no case studies exist */}
      <WhatWeBuild />

      {/* 05 — WHY VITHOBA (cream) — oversized type, no icons, no cards */}
      <section className="wrap py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-6">05 / Why Vithoba</p>
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold uppercase leading-tight text-ink">
            Marketing that has a job to do.
          </h2>
        </Reveal>
        <WhyVithoba />
      </section>

      {/* 06 — HOW WE WORK (dark green, interactive studio board) */}
      <section className="bg-dark py-20 text-on-dark md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow-dark font-mono-vo mb-6">06 / How We Work</p>
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold uppercase leading-tight text-on-dark">
              Five stages. One accountable team.
            </h2>
          </Reveal>
          <div className="mt-14">
            <ProcessBoard />
          </div>
        </div>
      </section>

      {/* 07 — WHO THIS IS FOR (cream) — large type, no cards */}
      <section className="wrap py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-6">07 / Who This Is For</p>
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold uppercase leading-tight text-ink">
            Wherever your business is going next.
          </h2>
        </Reveal>
        <WhoThisIsFor />
      </section>

      {/* 08 — WHAT WE MEASURE (dark charcoal, bold strip) — no fabricated numbers */}
      <section className="bg-[#0c0d09] py-20 text-on-dark md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow-dark font-mono-vo mb-6">08 / What We Measure</p>
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold uppercase leading-tight text-on-dark">
              Marketing should leave evidence.
            </h2>
          </Reveal>
          <MeasureStrip />
        </div>
      </section>

      {/* 09 — FAQ (cream, compact) */}
      <section className="wrap py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_2fr] md:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">FAQ</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight text-ink md:text-4xl">
              Before we start.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* 10 — FINAL CTA (dark green, gold line) */}
      <section className="relative flex items-center overflow-hidden bg-dark py-24 text-on-dark md:py-32">
        <GrowthLine variant="straight" className="pointer-events-none absolute inset-x-0 bottom-16 h-1 w-full max-w-2xl opacity-40" />
        <div className="wrap relative">
          <Reveal className="max-w-3xl">
            <p className="eyebrow-dark font-mono-vo mb-8">Ready When You Are</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.08] text-on-dark">
              Your next growth move
              <br />
              starts here.
            </h2>
            <p className="mt-6 max-w-md text-lg text-on-dark-dim">
              Tell us what you&rsquo;re trying to achieve. We&rsquo;ll help
              shape the right digital route.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Magnetic>
                <Button href={waLink(waMessages.bookCall)} external variant="accent">
                  Start a Conversation →
                </Button>
              </Magnetic>
              <a
                href={waLink(waMessages.knowMore)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link text-sm font-semibold text-on-dark hover:text-accent-bright"
              >
                WhatsApp Us →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
