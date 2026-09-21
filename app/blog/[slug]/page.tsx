import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import {
  blogPosts,
  estimateReadingTime,
  getBlogPost,
  getIndustry,
  getService,
  waLink,
  waMessages,
} from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedLinks = post.related
    .map((s) => getService(s) ?? getIndustry(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={blogPostingSchema(post)} />

      <PageHero
        eyebrow={`Insights · ${post.category}`}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
        title={post.title}
      />

      <section className="wrap border-t border-line py-10">
        <p className="font-mono-vo text-xs uppercase tracking-widest text-ink-dim">
          {formatDate(post.date)} · {estimateReadingTime(post)} min read
        </p>
      </section>

      <article className="wrap max-w-3xl pb-24 md:pb-32">
        {post.sections.map((section, i) => (
          <Reveal key={i} className="mb-10">
            {section.heading && (
              <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
                {section.heading}
              </h2>
            )}
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="mb-4 leading-relaxed text-ink-2">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="flex flex-col gap-3">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-line pt-3 text-ink-2 first:border-0 first:pt-0">
                    <span className="text-accent">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
        {post.closing && (
          <Reveal>
            <p className="text-ink-2">{post.closing}</p>
          </Reveal>
        )}

        <Reveal className="mt-14">
          <Magnetic>
            <Button href={waLink(waMessages.bookCall)} external>
              Book a Free Call →
            </Button>
          </Magnetic>
        </Reveal>
      </article>

      {relatedLinks.length > 0 && (
        <section className="wrap border-t border-line py-24 md:py-32">
          <SectionHeader eyebrow="Related" heading="Read alongside this" className="mb-12" />
          <div className="grid gap-4 md:grid-cols-3">
            {relatedLinks.map((item) => {
              const isService = "number" in item;
              const href = isService
                ? `/services/${item.slug}`
                : `/industries/${item.slug}`;
              const label = isService
                ? item.navLabel
                : item.slug === "real-estate"
                ? "Real Estate"
                : "Construction";
              return (
                <Reveal key={item.slug}>
                  <Link
                    href={href}
                    className="group block h-full rounded-2xl border border-line p-6 transition-colors hover:border-accent"
                  >
                    <h3 className="font-display text-lg font-bold text-ink transition-transform group-hover:translate-x-1">
                      {label}
                    </h3>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
