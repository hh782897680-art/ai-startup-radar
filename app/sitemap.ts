import type { MetadataRoute } from "next";
import { getAllCategories, getAllIdeas } from "@/lib/ideas";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "/",
    "/ideas",
    "/categories",
    "/about",
    "/build-guides",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const ideaRoutes = getAllIdeas().map((idea) => ({
    url: absoluteUrl(`/ideas/${idea.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = getAllCategories().map((category) => ({
    url: absoluteUrl(`/categories/${category.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...ideaRoutes, ...categoryRoutes];
}
