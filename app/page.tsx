import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import MarketingOrbit from "@/components/MarketingOrbit";
import FAQAccordion from "@/components/FAQAccordion";
import ServicesShowcase from "@/components/ServicesShowcase";
import HowWeWork from "@/components/HowWeWork";
import CallbackForm from "@/components/CallbackForm";
import WhyChooseVithoba from "@/components/WhyChooseVithoba";
import HeroSearch from "@/components/HeroSearch";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaqs, site, waLink, waMessages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Mysuru | Vithoba Outreach",
  description:
    "Vithoba Outreach is a digital marketing agency in Mysuru: social media, Google Ads, Meta Ads, SEO, websites and lead generation that grow your sales.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Digital Marketing Agency in Mysuru | Vithoba Outreach",
    description:
      "Strategy, social media, Google & Meta Ads, SEO, websites and lead generation for growing businesses.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* HERO: sits below the sticky navbar in normal flow (no overlap possible). */}
      {/* min-height targets nav + hero ≈ one viewport, without clipping content on short screens. */}
      <section className="relative isolate min-h-[calc(100vh-var(--header-height))] overflow-hidden">
        <Image
          src="/hero-visual.png"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(18,52,31,0.95)_0%,rgba(18,52,31,0.85)_38%,rgba(18,52,31,0.55)_65%,rgba(18,52,31,0.72)_100%)]"
        />
        <div className="wrap relative z-10 flex min-h-[calc(100vh-var(--header-height))] flex-col justify-center py-16">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-dark/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-on-dark backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Digital Marketing Studio
            </span>
            <h1 className="mt-7 font-display text-[clamp(2.5rem,6.5vw,4.6rem)] font-bold leading-[1.02] text-on-dark">
              Strategy that grows
              <br />
              <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-on-dark">
                your
              </span>{" "}
              <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent-bright">
                sales.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-on-dark-dim">
              {site.positioning}
            </p>
            <HeroSearch />
          </Reveal>
        </div>
      </section>

      {/* FULL-BLEED SERVICES SHOWCASE */}
      <section className="py-10 md:py-12">
        <div className="wrap">
          <SectionHeader
            center
            eyebrow="What We Do"
            heading={
              <>
                Eight disciplines. <span className="text-accent">One growth system.</span>
              </>
            }
            description="Everything Vithoba Outreach can plan, design and run for your brand — built to work together, not in silos."
            className="mb-8"
          />
          <ServicesShowcase />
          <Reveal className="mt-8">
            <Link
              href="/services"
              className="underline-link font-mono-vo text-xs font-semibold uppercase tracking-widest text-ink hover:text-accent"
            >
              View All Services →
            </Link>
          </Reveal>
        </div>
      </section>

      <HowWeWork />

      {/* PULL QUOTE */}
      <section className="relative overflow-hidden py-8 md:py-10">
        <div
          aria-hidden="true"
          className="blob left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-accent/10"
        />
        <div className="wrap relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-5xl leading-none text-accent">&ldquo;</p>
            <p className="mt-2 font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-[1.15] text-ink">
              Trust the strategy, grow with Vithoba.
            </p>
            <div className="mx-auto mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-line-strong" />
              <p className="font-mono-vo text-xs uppercase tracking-widest text-ink-dim">
                Vithoba Outreach, Mysuru
              </p>
              <span className="h-px w-8 bg-line-strong" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKETING ORBIT / SILOS */}
      <section className="wrap py-8 md:py-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_minmax(360px,1.15fr)] lg:items-center lg:gap-16">
          <SectionHeader
            eyebrow="How It Connects"
            heading={
              <>
                Marketing shouldn&apos;t work in{" "}
                <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent">
                  silos.
                </span>
              </>
            }
            description="Strategy, content, SEO, ads, your website and automation — one connected system built to move your business forward."
          />
          <MarketingOrbit />
        </div>
      </section>

      <WhyChooseVithoba />

      <CallbackForm />

      {/* FAQ */}
      <section className="wrap py-10 md:py-12">
        <SectionHeader
          center
          eyebrow="FAQ"
          heading={
            <>
              Frequently asked{" "}
              <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent">
                questions
              </span>
            </>
          }
          description="Can't find what you're looking for? Reach out and we'll get back to you."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
        <Reveal delay={120} className="mt-8 flex justify-center gap-4">
          <Button href="/services" variant="outline">
            View Services
          </Button>
          <Button href={waLink(waMessages.knowMore)} external variant="accent">
            Contact Us
          </Button>
        </Reveal>
      </section>
    </>
  );
}
