import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import GrowthLine from "@/components/GrowthLine";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getService, services } from "@/lib/content";

// "digital-marketing" has its own dedicated route (app/services/digital-marketing/page.tsx)
// with a bespoke editorial design — excluded here so the two routes don't collide.
// Every other service still renders through this shared template, unchanged.
export function generateStaticParams() {
  return services
    .filter((s) => s.slug !== "digital-marketing")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        eyebrow="Service"
        number={service.number}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.navLabel },
        ]}
        title={service.title}
        description={service.intro}
      />

      <section className="wrap border-t border-line py-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-xl font-bold text-accent md:text-2xl">
            {service.tagline}
          </p>
          <p className="font-mono-vo text-xs uppercase tracking-widest text-ink-dim">
            Growth stage: <span className="text-ink">{service.stage}</span>
          </p>
        </div>
        <GrowthLine variant="network" className="mt-8 h-8 w-full" />
      </section>

      <section className="wrap grid gap-14 border-t border-line py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">What&rsquo;s Included</p>
          <ul className="flex flex-col gap-3">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3 border-t border-line pt-3 text-ink-2 first:border-0 first:pt-0">
                <span className="text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="flex flex-col gap-12">
          <Reveal>
            <p className="eyebrow mb-5">Who This Is For</p>
            <p className="max-w-md text-ink-2">{service.whoFor}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mb-5">How We Work</p>
            <p className="max-w-md text-ink-2">{service.howWeWork}</p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="wrap border-t border-line py-24 md:py-32">
          <SectionHeader eyebrow="Related" heading="Works well alongside" className="mb-12" />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Reveal key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block h-full rounded-2xl border border-line p-6 transition-colors hover:border-accent"
                >
                  <span className="font-mono-vo text-xs text-ink-dim">
                    {r.number}
                  </span>
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
        <FAQAccordion items={service.faqs} />
      </section>

      <CTASection />
    </>
  );
}
