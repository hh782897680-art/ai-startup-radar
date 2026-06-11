import type { MetadataRoute } from "next";
import { glossaryDetails, tutorialDetails } from "@/data/learning";
import { getAllArticles } from "@/lib/articles";
import { getAllProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "/",
    "/projects",
    "/rankings",
    "/match",
    "/learn",
    "/glossary",
    "/tutorials",
    "/blog",
    "/guides",
    "/avoid",
    "/about",
    "/templates/ai-project-validation-template",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const articleRoutes = getAllArticles().map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const glossaryRoutes = glossaryDetails.map((item) => ({
    url: absoluteUrl(`/glossary/${item.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const tutorialRoutes = tutorialDetails.map((item) => ({
    url: absoluteUrl(`/tutorials/${item.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes, ...glossaryRoutes, ...tutorialRoutes];
}
