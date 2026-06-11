import type { Metadata } from "next";

const SITE_URL = "https://www.aiprojectradar.com";

export const siteConfig = {
  name: "AI创业雷达",
  url: SITE_URL,
  description:
    "AI创业雷达：发现、评分、拆解适合普通人的 AI 项目机会，并提供生成式 AI 学习地图、术语库、实战教程与 7 天验证路径。",
  defaultTitle: "AI创业雷达 | 发现 AI 机会，学习 AI 技能，验证 AI 项目",
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
  imagePath?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  imagePath = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);

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
      locale: "zh_CN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function truncateDescription(value: string, maxLength = 160): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3).trim()}...`;
}
