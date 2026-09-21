import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceNav from "@/components/ServiceNav";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Mysuru | Vithoba Outreach",
  description:
    "Digital marketing services in Mysuru: strategy, social media, Google & Meta Ads, websites, branding and lead generation, run as one system by Vithoba Outreach.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="What We Do"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Services" }]}
        title="Digital Marketing Services in Mysuru"
        description="Everything Vithoba Outreach plans, designs and runs for your brand — eight disciplines, built to work together, not in silos."
      />

      <section className="wrap border-t border-line pb-28 pt-4 md:pb-36">
        <ServiceNav />
      </section>

      <CTASection />
    </>
  );
}
