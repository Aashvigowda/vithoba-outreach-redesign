import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Vithoba Outreach | Digital Marketing Agency in Mysuru",
  description:
    "About Vithoba Outreach, a Mysuru digital marketing studio offering strategy, social media, ads, websites and automation for growing Indian businesses.",
  alternates: { canonical: "/about" },
};

const standFor = [
  {
    title: "Trust the strategy",
    text: "We audit before we recommend, and match plans to your budget rather than a generic package.",
  },
  {
    title: "Report every month",
    text: "So the plan stays honest, and evolves with what the data actually shows.",
  },
  {
    title: "One accountable partner",
    text: "Instead of juggling several freelancers across strategy, content, ads and follow-up.",
  },
];

const whyUs = [
  "One accountable partner instead of several freelancers",
  "Clear packages, with ad spend billed separately and transparently",
  "Monthly reporting and strategy calls",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Vithoba Outreach"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About" }]}
        title={
          <>
            WE BELIEVE
            <br />
            MARKETING SHOULD
            <br />
            <span className="text-accent">MOVE BUSINESS.</span>
          </>
        }
        description="Vithoba Outreach is a digital marketing studio based in Mysuru, Karnataka. We plan, build and run the marketing engine for ambitious Indian businesses: strategy, content, ads and automation working as one system."
      />

      {/* WHAT WE STAND FOR */}
      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader eyebrow="What We Stand For" heading="Trust the strategy, grow with Vithoba." className="mb-14" />
        <div className="grid gap-10 md:grid-cols-3">
          {standFor.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <p className="font-mono-vo mb-3 text-xs uppercase tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-ink-2">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader
          eyebrow="Our Approach"
          heading="Discover. Plan. Launch. Grow."
          description="The same four stages every time, so nothing gets lost between strategy and execution."
          className="mb-16"
        />
        <div className="relative grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 100} className="relative pl-8">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent"
              />
              <span
                aria-hidden
                className="absolute left-[3.5px] top-4 hidden h-[calc(100%+3.5rem)] w-px bg-line-strong lg:block"
              />
              <p className="font-mono-vo text-xs uppercase tracking-widest text-ink-dim">
                Step {step.step}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader eyebrow="Who We Work With" heading="Industries we serve" className="mb-10" />
        <Reveal>
          <p className="max-w-xl text-ink-2">
            <Link href="/industries/real-estate" className="underline-link text-ink hover:text-accent">
              Real estate
            </Link>
            ,{" "}
            <Link href="/industries/construction" className="underline-link text-ink hover:text-accent">
              construction
            </Link>{" "}
            and local businesses across Mysuru and India.
          </p>
        </Reveal>
      </section>

      {/* WHY BUSINESSES WORK WITH US */}
      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader eyebrow="Why Vithoba" heading="Why businesses work with us" className="mb-12" />
        <ul className="grid gap-6 md:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <li className="border-t border-line pt-5 text-ink-2">{item}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
