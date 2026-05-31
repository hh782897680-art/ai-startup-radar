import type { Metadata } from "next";

const SITE_URL = "https://www.aiprojectradar.com";

export const siteConfig = {
  name: "AI Startup Radar",
  url: SITE_URL,
  description:
    "Discover practical AI startup ideas, micro SaaS ideas, AI tool opportunities, MVP features, monetization models, SEO keywords, and launch checklists.",
  defaultTitle:
    "AI Startup Radar | Practical AI Startup Ideas and Micro SaaS Opportunities",
};

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function truncateDescription(value: string, maxLength = 160): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3).trim()}...`;
}
