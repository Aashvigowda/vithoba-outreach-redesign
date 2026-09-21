import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts, estimateReadingTime } from "@/lib/content";

export const metadata: Metadata = {
  title: "Digital Marketing Insights | Vithoba Outreach Blog",
  description:
    "Practical digital marketing guides for Mysuru businesses: pricing, ads, lead generation and SEO, from Vithoba Outreach.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Insights"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Blog" }]}
        title="Insights: Digital Marketing for Mysuru Businesses"
        description="Field notes on pricing, ads and lead generation — written for businesses in Mysuru, not for search engines."
      />

      <section className="wrap border-t border-line py-20 md:py-28">
        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <p className="font-mono-vo mb-6 text-xs uppercase tracking-widest text-ink-dim">
              Insights / 01 · {featured.category} · {formatDate(featured.date)} ·{" "}
              {estimateReadingTime(featured)} min read
            </p>
            <h2 className="font-display text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.02] text-ink transition-colors group-hover:text-accent">
              {featured.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-2">{featured.excerpt}</p>
            <span className="mt-7 inline-block font-mono-vo text-xs uppercase tracking-widest text-ink transition-colors group-hover:text-accent">
              Read the full article →
            </span>
          </Link>
        </Reveal>
      </section>

      {rest.length > 0 && (
        <section className="wrap border-t border-line py-20 md:py-28">
          <p className="eyebrow mb-10">More Insights</p>
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl border border-line p-8 transition-colors hover:border-accent"
                >
                  <p className="font-mono-vo mb-4 text-xs uppercase tracking-widest text-ink-dim">
                    {String(i + 2).padStart(2, "0")} · {post.category} ·{" "}
                    {estimateReadingTime(post)} min read
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm text-ink-2">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
