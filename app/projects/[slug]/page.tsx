import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SubscribeCta } from "@/components/SubscribeCta";
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
    description: truncateDescription(`${project.summary} 包含 SEO 关键词、竞品、报价区间和 7 天验证模板。`),
    path: `/projects/${project.slug}`,
    keywords: [project.name, project.category, "AI项目拆解", ...project.seoKeywords],
    type: "article",
  });
}

function getBeginnerVerdict(project: NonNullable<ReturnType<typeof getProjectBySlug>>) {
  if (project.beginnerFriendly >= 7.8 && project.competitionIndex <= 6.2) {
    return {
      conclusion: "适合新手从轻量版本开始，但不要一上来做复杂后台。",
      entry: project.mvpSuggestion,
      risk: project.risks[0],
    };
  }

  if (project.beginnerFriendly >= 7) {
    return {
      conclusion: "可以做，但建议先缩小到一个垂直场景，优先验证需求和付费意愿。",
      entry: project.mvpSuggestion,
      risk: project.risks[0],
    };
  }

  return {
    conclusion: "不建议纯小白直接做完整产品，更适合从服务、教程内容或行业模板包切入。",
    entry: project.mvpSuggestion,
    risk: project.risks[0],
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const score = getProjectOverallScore(project);
  const beginnerVerdict = getBeginnerVerdict(project);

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

      <section className="beginner-verdict premium-card">
        <div>
          <p className="section-kicker">小白结论</p>
          <h2>小白能不能做？</h2>
        </div>
        <p className="verdict-lead">{beginnerVerdict.conclusion}</p>
        <div className="verdict-grid">
          <article>
            <span>最小切入方式</span>
            <p>{beginnerVerdict.entry}</p>
          </article>
          <article>
            <span>最大风险</span>
            <p>{beginnerVerdict.risk}</p>
          </article>
        </div>
        <p className="snapshot-disclaimer">
          先验证是否有人愿意为解决方案付费，再考虑开发完整工具。本站不承诺收益。
        </p>
      </section>

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
            <h2>SEO关键词</h2>
            <p>这些关键词适合用于项目落地页、教程文章、案例页和对比页。</p>
            <div className="keyword-row keyword-row-large">
              {project.seoKeywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </section>

          <section className="opportunity-section">
            <h2>竞品与替代方案</h2>
            <p>不要只看直接竞品，也要看用户现在用来绕开问题的人工方案。</p>
            <ul className="check-list">
              {project.competitors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>建议报价区间</h2>
            <div className="pricing-grid">
              <article>
                <span>入门产品</span>
                <p>{project.pricing.starter}</p>
              </article>
              <article>
                <span>服务交付</span>
                <p>{project.pricing.service}</p>
              </article>
              <article>
                <span>高级订阅</span>
                <p>{project.pricing.premium}</p>
              </article>
            </div>
            <p className="snapshot-disclaimer">报价仅用于验证付费意愿，不代表收益承诺。</p>
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
            <h2>验证模板</h2>
            <ol className="ordered-list">
              {project.validationTemplate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <Link href="/templates/ai-project-validation-template" className="inline-link">
              打开完整 7 天验证模板
            </Link>
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
            <div>
              <dt>入门报价</dt>
              <dd>{project.pricing.starter}</dd>
            </div>
            <div>
              <dt>首个SEO关键词</dt>
              <dd>{project.seoKeywords[0]}</dd>
            </div>
          </dl>
          <p className="snapshot-disclaimer">评分说明：站内参考评分，仅供参考。</p>
          <Link href="/templates/ai-project-validation-template" className="inline-link">
            下载验证模板
          </Link>
        </aside>
      </div>

      <SubscribeCta
        title={`领取 ${project.name} 验证模板`}
        description="用免费模板记录用户访谈、竞品、报价和 7 天验证结论，避免还没验证就投入开发。"
      />
    </Container>
  );
}
