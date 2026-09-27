import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!siteUrl) return [];

  const routes = ["", "/services", "/workforce", "/quality", "/solutions", "/about", "/careers", "/contributors", "/contact", "/privacy", "/terms", ...serviceDetails.map((service) => `/services/${service.slug}`)];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
