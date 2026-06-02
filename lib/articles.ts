import { articles, type LongTailArticle } from "@/data/articles";

export function getAllArticles(): LongTailArticle[] {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}

export function getArticleBySlug(slug: string): LongTailArticle | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(limit = 6): LongTailArticle[] {
  return getAllArticles().slice(0, limit);
}
