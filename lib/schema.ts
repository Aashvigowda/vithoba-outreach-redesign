import { contact, site } from "./content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: `${site.domain}/`,
    logo: `${site.domain}/logo.png`,
    image: `${site.domain}/logo.png`,
    description:
      "Digital marketing agency in Mysuru offering strategy, social media, Google Ads, Meta Ads, websites, lead generation and automation.",
    telephone: "+91-63607-16904",
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLine1,
      addressLocality: contact.city,
      addressRegion: contact.region,
      postalCode: contact.postalCode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mysuru" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      contact.socials.linkedin,
      contact.socials.instagram,
      contact.socials.facebook,
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.domain}/logo.png` },
    },
    mainEntityOfPage: `${site.domain}/blog/${post.slug}`,
  };
}
