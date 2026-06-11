import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, CircleX, Lightbulb, Radar, Wrench } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LearningLinkCard } from "@/components/LearningLinkCard";
import { glossaryDetails, getGlossaryDetail } from "@/data/learning";
import { getProjectBySlug } from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

type GlossaryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return glossaryDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: GlossaryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getGlossaryDetail(slug);

  if (!detail) {
    return buildPageMetadata({
      title: "AI 术语不存在｜AI创业雷达",
      description: "你访问的 AI 术语页面不存在。",
      path: `/glossary/${slug}`,
    });
  }

  return buildPageMetadata({
    title: detail.seoTitle,
    description: detail.seoDescription,
    path: `/glossary/${detail.slug}`,
    keywords: [detail.title, "AI术语", "生成式AI", ...detail.projectIdeas.slice(0, 3)],
    type: "article",
  });
}

export default async function GlossaryDetailPage({ params }: GlossaryDetailPageProps) {
  const { slug } = await params;
  const detail = getGlossaryDetail(slug);

  if (!detail) {
    notFound();
  }

  const projects = detail.projectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <Container className="page concept-page">
      <article className="concept-hero premium-card subtle-grid">
        <p className="hero-status"><span /> AI 术语详解</p>
        <h1>{detail.title}</h1>
        <p className="concept-one-line">{detail.oneLine}</p>
        <div className="hero-actions">
          <Button href="/glossary" variant="secondary">返回术语库</Button>
          <Button href="/learn">查看学习地图 <ArrowRight size={16} aria-hidden="true" /></Button>
        </div>
      </article>

      <div className="concept-layout">
        <div className="concept-main">
          <section className="concept-section premium-card">
            <div className="concept-section-title">
              <Lightbulb size={19} aria-hidden="true" />
              <div>
                <p className="section-kicker">普通人怎么理解？</p>
                <h2>先用日常语言理解它</h2>
              </div>
            </div>
            {detail.plainLanguage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="concept-section premium-card">
            <div className="concept-section-title">
              <Wrench size={19} aria-hidden="true" />
              <div>
                <p className="section-kicker">它能解决什么问题？</p>
                <h2>适合解决的真实问题</h2>
              </div>
            </div>
            <ul className="check-list">
              {detail.solves.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          {detail.coreParts ? (
            <section className="concept-section premium-card">
              <div className="concept-section-title">
                <Radar size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">核心结构</p>
                  <h2>它由哪些部分组成？</h2>
                </div>
              </div>
              <div className="concept-parts-grid">
                {detail.coreParts.map((part, index) => (
                  <article key={part.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{part.title}</h3>
                    <p>{part.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {detail.strengths || detail.limitations ? (
            <section className="concept-section premium-card">
              <div className="concept-compare-grid">
                {detail.strengths ? (
                  <div>
                    <h2><CheckCircle2 size={18} aria-hidden="true" /> 主要优点</h2>
                    <ul className="check-list">
                      {detail.strengths.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ) : null}
                {detail.limitations ? (
                  <div>
                    <h2><CircleX size={18} aria-hidden="true" /> 现实局限</h2>
                    <ul className="check-list risk-list">
                      {detail.limitations.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {detail.examples ? (
            <section className="concept-section premium-card">
              <div className="concept-section-title">
                <CheckCircle2 size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">三个短示例</p>
                  <h2>可以直接改写的提示词结构</h2>
                </div>
              </div>
              <div className="prompt-example-list">
                {detail.examples.map((example, index) => (
                  <article key={example.title}>
                    <span>示例 {index + 1}</span>
                    <h3>{example.title}</h3>
                    <p>{example.content}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="concept-section premium-card">
            <div className="concept-section-title">
              <CheckCircle2 size={19} aria-hidden="true" />
              <div>
                <p className="section-kicker">适合做什么项目？</p>
                <h2>把概念连接到具体场景</h2>
              </div>
            </div>
            <div className="project-idea-grid">
              {detail.projectIdeas.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <section className="concept-section premium-card">
            <div className="concept-section-title">
              <CircleX size={19} aria-hidden="true" />
              <div>
                <p className="section-kicker">不适合什么人？</p>
                <h2>先确认边界</h2>
              </div>
            </div>
            <ul className="check-list risk-list">
              {detail.notFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <aside className="concept-sidebar premium-card">
          <p className="section-kicker">关联项目</p>
          <h2>在真实项目里看它</h2>
          <div className="concept-project-list">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <span>{project.category}</span>
                <strong>{project.name}</strong>
                <small>{project.summary}</small>
              </Link>
            ))}
          </div>
          <small>项目评分与方向分析仅供参考，不构成收益承诺。</small>
        </aside>
      </div>

      <section>
        <div className="section-head">
          <p className="section-kicker">下一步怎么学？</p>
          <h2 className="section-title">继续一个概念或跑通一个教程</h2>
        </div>
        <div className="learning-link-grid">
          {detail.nextSteps.map((link, index) => <LearningLinkCard key={link.href} link={link} index={index} />)}
        </div>
      </section>
    </Container>
  );
}
