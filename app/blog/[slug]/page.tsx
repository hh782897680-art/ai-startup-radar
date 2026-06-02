import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SubscribeCta } from "@/components/SubscribeCta";
import { Tag } from "@/components/Tag";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { getProjectBySlug } from "@/lib/projects";
import { buildPageMetadata, truncateDescription } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildPageMetadata({
      title: "文章不存在 | AI创业雷达",
      description: "你访问的文章不存在或已下线。",
      path: `/blog/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${article.title} | AI创业雷达`,
    description: truncateDescription(article.description),
    path: `/blog/${article.slug}`,
    keywords: [article.keyword, article.audience, "AI项目机会", "AI创业"],
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedProject = article.relatedProjectSlug ? getProjectBySlug(article.relatedProjectSlug) : undefined;

  return (
    <Container className="page">
      <article className="article-detail">
        <header className="article-hero premium-card">
          <Tag variant="signal">{article.keyword}</Tag>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="meta-pill-row">
            <span className="meta-pill">目标人群：{article.audience}</span>
            <span className="meta-pill">更新：{article.publishedAt}</span>
          </div>
          <div className="hero-actions">
            <Button href="/blog" variant="secondary">
              返回文章库
            </Button>
            {relatedProject ? (
              <Button href={`/projects/${relatedProject.slug}`} variant="ghost">
                查看关联项目
              </Button>
            ) : null}
          </div>
        </header>

        <div className="article-layout">
          <div className="article-main">
            {article.sections.map((section) => (
              <section key={section.heading} className="opportunity-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul className="check-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="opportunity-section">
              <h2>下一步怎么做</h2>
              <p>
                先不要直接开发完整产品。把这个关键词对应的用户、痛点、竞品和报价写进验证模板，
                用 7 天时间确认是否有人愿意给资料、预约演示或谈价格。
              </p>
              <Link href="/templates/ai-project-validation-template" className="inline-link">
                使用 7 天验证模板
              </Link>
            </section>
          </div>

          <aside className="radar-snapshot premium-card">
            <p className="snapshot-kicker">关键词快照</p>
            <h2>{article.keyword}</h2>
            <dl>
              <div>
                <dt>适合人群</dt>
                <dd>{article.audience}</dd>
              </div>
              {relatedProject ? (
                <div>
                  <dt>关联项目</dt>
                  <dd>{relatedProject.name}</dd>
                </div>
              ) : null}
              <div>
                <dt>推荐动作</dt>
                <dd>先访谈 5 个目标用户，再做最小演示。</dd>
              </div>
            </dl>
            {relatedProject ? (
              <Link href={`/projects/${relatedProject.slug}`} className="inline-link">
                查看项目拆解
              </Link>
            ) : (
              <Link href="/projects" className="inline-link">
                浏览项目雷达
              </Link>
            )}
          </aside>
        </div>
      </article>

      <SubscribeCta compact />
    </Container>
  );
}
