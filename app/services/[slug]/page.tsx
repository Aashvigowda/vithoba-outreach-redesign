import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { getService, services } from "@/lib/content";

// "digital-marketing" has its own route file (app/services/digital-marketing/page.tsx),
// excluded here so the two routes don't collide. Both render the same ServiceDetail.
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

  return <ServiceDetail service={service} />;
}
