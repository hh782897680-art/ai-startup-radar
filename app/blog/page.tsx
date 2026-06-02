import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SubscribeCta } from "@/components/SubscribeCta";
import { getAllArticles } from "@/lib/articles";
import { getProjectBySlug } from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI项目关键词文章 | AI创业雷达",
  description: "围绕具体 AI 项目关键词的长尾内容，拆解 Open WebUI、Dify、Shopify SEO、Etsy、ComfyUI、RAGFlow 等项目机会。",
  path: "/blog",
  keywords: ["AI项目关键词", "AI创业文章", "AI项目SEO", "AI副业项目"],
});

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">关键词文章</p>
        <h1>AI项目长尾内容库</h1>
        <p>
          围绕具体关键词写项目机会、验证方式、报价路径和落地边界，让搜索流量进入项目雷达和验证模板。
        </p>
      </section>

      <section className="article-grid">
        {articles.map((article) => {
          const relatedProject = article.relatedProjectSlug ? getProjectBySlug(article.relatedProjectSlug) : undefined;

          return (
            <article key={article.slug} className="article-card premium-card">
              <div className="article-card-meta">
                <span>{article.keyword}</span>
                <span>{article.audience}</span>
              </div>
              <h2>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.description}</p>
              {relatedProject ? (
                <Link href={`/projects/${relatedProject.slug}`} className="article-project-link">
                  关联项目：{relatedProject.name}
                </Link>
              ) : null}
              <Link href={`/blog/${article.slug}`} className="inline-link">
                阅读文章 <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </section>

      <SubscribeCta />
    </Container>
  );
}
