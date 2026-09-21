import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getIndustry, getService, industries } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industry.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: `/industries/${industry.slug}` },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(industry.faqs)} />

      <PageHero
        eyebrow="Industry"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Industries" },
          { name: industry.slug === "real-estate" ? "Real Estate" : "Construction" },
        ]}
        title={industry.title}
        description={industry.intro}
      />

      {/* JOURNEY */}
      <section className="wrap border-t border-line py-16">
        <p className="eyebrow mb-8">The Customer Journey</p>
        <div className="flex flex-wrap items-center gap-3">
          {industry.journey.map((stage, i) => (
            <Reveal key={stage} delay={i * 60} className="flex items-center gap-3">
              <span className="rounded-full border border-line-strong px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink md:text-sm">
                {stage}
              </span>
              {i < industry.journey.length - 1 && (
                <span className="text-accent" aria-hidden>
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader eyebrow="What We Do" heading={`For ${industry.slug === "real-estate" ? "real estate" : "construction"} businesses`} className="mb-12" />
        <ul className="grid gap-4 md:grid-cols-2">
          {industry.whatWeDo.map((item, i) => (
            <Reveal key={item} delay={i * 50}>
              <li className="flex gap-3 border-t border-line pt-4 text-ink-2">
                <span className="text-accent">→</span>
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {industry.extra && (
        <section className="wrap border-t border-line py-24 md:py-32">
          <SectionHeader eyebrow="Search Intent" heading={industry.extra.heading} className="mb-10" />
          <div className="flex flex-wrap gap-3">
            {industry.extra.items.map((item) => (
              <Reveal key={item}>
                <span className="rounded-full border border-line px-4 py-2 text-sm text-ink-2">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="wrap border-t border-line py-24 md:py-32">
          <SectionHeader eyebrow="Related Services" heading="What this usually runs on" className="mb-12" />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Reveal key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block h-full rounded-2xl border border-line p-6 transition-colors hover:border-accent"
                >
                  <span className="font-mono-vo text-xs text-ink-dim">{r.number}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink transition-transform group-hover:translate-x-1">
                    {r.navLabel}
                  </h3>
                  <p className="mt-2 text-sm text-ink-2">{r.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="wrap border-t border-line py-24 md:py-32">
        <SectionHeader eyebrow="FAQ" heading="Frequently asked questions" className="mb-12" />
        <FAQAccordion items={industry.faqs} />
      </section>

      <CTASection />
    </>
  );
}
