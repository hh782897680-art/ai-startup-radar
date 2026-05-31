import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { buildPageMetadata, truncateDescription } from "@/lib/seo";
import { getAllProjects, getProjectBySlug, getProjectOverallScore } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildPageMetadata({
      title: "项目不存在 | AI创业雷达",
      description: "你访问的项目不存在或已下线。",
      path: `/projects/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${project.name} 项目拆解 | AI创业雷达`,
    description: truncateDescription(project.summary),
    path: `/projects/${project.slug}`,
    keywords: [project.name, project.category, "AI项目拆解"],
    type: "article",
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const score = getProjectOverallScore(project);

  return (
    <Container className="page">
      <article className="brief-hero">
        <Tag variant="signal">项目拆解</Tag>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>

        <div className="meta-pill-row">
          <span className="meta-pill">综合评分 {score}</span>
          <span className="meta-pill">商业化 {project.commercialPotential}</span>
          <span className="meta-pill">竞争 {project.competitionIndex}</span>
          <span className="meta-pill">小白友好 {project.beginnerFriendly}</span>
          <span className="meta-pill">SEO潜力 {project.seoPotential}</span>
          <span className="meta-pill">中文市场 {project.chineseMarketOpportunity}</span>
        </div>
        <small className="score-note">评分说明：站内参考评分，仅供参考。</small>

        <div className="hero-actions">
          <Button href="/projects" variant="secondary">
            返回项目库
          </Button>
          <Button href="/rankings" variant="ghost">
            查看排行榜
          </Button>
        </div>
      </article>

      <div className="brief-layout">
        <div className="brief-main">
          <section className="opportunity-section">
            <h2>适合人群</h2>
            <ul className="check-list">
              {project.targetUsers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>核心痛点</h2>
            <p>{project.painPoint}</p>
          </section>

          <section className="opportunity-section">
            <h2>为什么这个项目有机会</h2>
            <p>{project.whyItWorks}</p>
          </section>

          <section className="opportunity-section">
            <h2>可行流量渠道</h2>
            <ul className="check-list">
              {project.trafficChannels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>可尝试变现路径</h2>
            <ul className="check-list">
              {project.monetizationIdeas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="snapshot-disclaimer">不承诺收益，本页面仅提供可验证的商业化思路。</p>
          </section>

          <section className="opportunity-section">
            <h2>MVP建议</h2>
            <p>{project.mvpSuggestion}</p>
          </section>

          <section className="opportunity-section">
            <h2>7天验证步骤</h2>
            <ul className="check-list">
              {project.validationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>主要风险</h2>
            <ul className="check-list">
              {project.risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>建议行动计划</h2>
            <ol className="ordered-list">
              {project.actionPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="radar-snapshot premium-card">
          <p className="snapshot-kicker">项目快照</p>
          <h2>{project.name}</h2>
          <dl>
            <div>
              <dt>项目类别</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>综合评分</dt>
              <dd>{score}</dd>
            </div>
            <div>
              <dt>首选流量入口</dt>
              <dd>{project.trafficChannels[0]}</dd>
            </div>
            <div>
              <dt>首个MVP建议</dt>
              <dd>{project.mvpSuggestion}</dd>
            </div>
          </dl>
          <p className="snapshot-disclaimer">评分说明：站内参考评分，仅供参考。</p>
          <Link href="/guides" className="inline-link">
            查看新手指南
          </Link>
        </aside>
      </div>
    </Container>
  );
}
