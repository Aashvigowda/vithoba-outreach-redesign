import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("digital-marketing")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: `/services/${service.slug}` },
};

export default function DigitalMarketingPage() {
  return <ServiceDetail service={service} />;
}
