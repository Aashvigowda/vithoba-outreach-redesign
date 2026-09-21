import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import MarketingOrbit from "@/components/MarketingOrbit";
import FAQAccordion from "@/components/FAQAccordion";
import ServicesShowcase from "@/components/ServicesShowcase";
import Carousel from "@/components/Carousel";
import HowWeWork from "@/components/HowWeWork";
import CallbackForm from "@/components/CallbackForm";
import HeroSearch from "@/components/HeroSearch";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import {
  blogPosts,
  homeFaqs,
  industries,
  site,
  waLink,
  waMessages,
} from "@/lib/content";

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
      <section className="py-16 md:py-20">
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
            className="mb-12"
          />
          <ServicesShowcase />
          <Reveal className="mt-10">
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
      <section className="relative overflow-hidden py-14 md:py-16">
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
      <section className="wrap py-14 md:py-16">
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

      {/* INDUSTRIES */}
      <section className="bg-dark py-16 text-on-dark md:py-20">
        <div className="wrap">
        <SectionHeader
          center
          dark
          eyebrow="Industry Expertise"
          heading="Every industry plays a different game."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 100}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block h-full rounded-3xl border border-dark-line bg-dark-2/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-bright hover:shadow-[0_20px_44px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                  {industry.slug === "real-estate" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M4 21V10.5L12 4l8 6.5V21" />
                      <path d="M9 21v-6h6v6" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M4 16a8 8 0 0 1 16 0" />
                      <path d="M2.5 16h19" />
                      <path d="M12 16V8" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {industry.journey.map((stage, idx) => (
                    <span key={stage} className="flex items-center gap-2">
                      <span className="font-mono-vo text-[11px] uppercase tracking-widest text-on-dark-dim">
                        {stage}
                      </span>
                      {idx < industry.journey.length - 1 && (
                        <span className="text-accent-bright" aria-hidden>
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-on-dark md:text-3xl">
                  {industry.slug === "real-estate" ? "Real Estate" : "Construction"}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {industry.whatWeDo.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-dark-line px-3 py-1.5 text-xs text-on-dark-dim"
                    >
                      {item.split(" ").slice(0, 3).join(" ")}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 font-mono-vo text-xs uppercase tracking-widest text-accent-bright transition-transform duration-300 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* INSIGHTS — moved above FAQ; card style referenced from a SolutionBuggy
          ads-page carousel (photo band + badge + title + CTA), rebuilt here
          with real Vithoba content only: no invented photos or claims. */}
      <section className="wrap py-16 md:py-20">
        <div className="mb-12">
          <SectionHeader
            center
            eyebrow="Insights"
            heading="Insights that grow traffic & revenue."
            className="mb-6"
          />
          <div className="text-center">
            <Link
              href="/blog"
              className="underline-link font-mono-vo text-xs font-semibold uppercase tracking-widest text-ink hover:text-accent"
            >
              See All Insights →
            </Link>
          </div>
        </div>
        <Carousel
          ariaLabel="Insights"
          items={blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_44px_rgba(18,24,18,0.10)]"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-dark to-dark-2 sm:h-44">
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-mono-vo text-[10px] font-bold uppercase tracking-widest text-accent-ink">
                  {post.category}
                </span>
                <span className="font-mono-vo absolute right-4 top-4 text-xs text-on-dark-dim/70">
                  Insights / {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="font-display absolute -bottom-6 -right-2 text-8xl text-on-dark/10"
                >
                  &ldquo;
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-2">{post.excerpt}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-xs font-semibold text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        />
      </section>

      <CallbackForm />

      {/* FAQ */}
      <section className="wrap py-16 md:py-20">
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
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
        <Reveal delay={120} className="mt-10 flex justify-center gap-4">
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
