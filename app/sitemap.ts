import type { MetadataRoute } from "next";
import { blogPosts, industries, services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-18");

  const staticRoutes = ["", "/about", "/services", "/blog"].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.domain}/services/${s.slug}`,
    lastModified,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${site.domain}/industries/${i.slug}`,
    lastModified,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];
}
