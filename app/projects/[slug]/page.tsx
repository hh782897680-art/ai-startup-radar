import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/FaqSchema";
import { SubscribeCta } from "@/components/SubscribeCta";
import { Tag } from "@/components/Tag";
import { buildPageMetadata, truncateDescription } from "@/lib/seo";
import { getAllProjects, getProjectBySlug, getProjectOverallScore } from "@/lib/projects";
import { codeRequirementLabels, getProjectDecisionProfile, startupCostLabels } from "@/lib/project-profile";

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

function getSevenDayPlan(project: NonNullable<ReturnType<typeof getProjectBySlug>>) {
  return [
    `第 1 天：明确一个目标人群，优先从“${project.targetUsers[0]}”开始。`,
    `第 2 天：围绕“${project.painPoint}”完成 3-5 次真实访谈。`,
    `第 3 天：对比 ${project.competitors.slice(0, 2).join("、")}，记录用户当前替代方案。`,
    `第 4 天：制作最小方案：${project.mvpSuggestion}`,
    `第 5 天：通过“${project.trafficChannels[0]}”投放演示、案例或服务说明。`,
    "第 6 天：记录访问、回复、预约、试用或报价反馈，不用点赞数代替需求信号。",
    "第 7 天：复盘是否有人愿意继续沟通、提供资料或付费，再决定继续、调整或停止。",
  ];
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const score = getProjectOverallScore(project);
  const beginnerVerdict = getBeginnerVerdict(project);
  const profile = getProjectDecisionProfile(project);
  const sevenDayPlan = getSevenDayPlan(project);
  const projectFaqs: FaqItem[] = [
    {
      question: `${project.name} 适合新手吗？`,
      answer: beginnerVerdict.conclusion,
    },
    {
      question: `${project.name} 需要多少代码能力？`,
      answer: `本站将其归为“${codeRequirementLabels[profile.codeRequirement]}”。建议先按最小方案验证，不要在需求未确认前开发完整系统。`,
    },
    {
      question: `${project.name} 可以怎么变现？`,
      answer: `可能路径包括：${project.monetizationIdeas.join("、")}。这些只是可测试方向，不代表收益承诺。`,
    },
  ];

  return (
    <Container className="page">
      <FaqSchema items={projectFaqs} />
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
          <span className="meta-pill">{codeRequirementLabels[profile.codeRequirement]}</span>
          <span className="meta-pill">{startupCostLabels[profile.startupCost]}</span>
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
            <p className="detail-index">01 / 项目说明</p>
            <h2>项目一句话说明</h2>
            <p>{project.summary}</p>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">02 / 真实需求</p>
            <h2>解决的真实痛点</h2>
            <p>{project.painPoint}</p>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">03 / 人群判断</p>
            <h2>适合人群</h2>
            <ul className="check-list">
              {project.targetUsers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">04 / 排除条件</p>
            <h2>不适合人群</h2>
            <ul className="check-list risk-list">
              {profile.notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <h2>为什么这个项目有机会</h2>
            <p>{project.whyItWorks}</p>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">05 / 最小版本</p>
            <h2>MVP 怎么做</h2>
            <p>{project.mvpSuggestion}</p>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">06 / 验证</p>
            <h2>7 天验证计划</h2>
            <ol className="day-plan">
              {sevenDayPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <div className="original-validation">
              <strong>原项目验证重点</strong>
              <ul className="check-list">
                {project.validationSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="original-validation">
              <strong>验证记录模板</strong>
              <ol className="ordered-list">
                {project.validationTemplate.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <Link href="/templates/ai-project-validation-template" className="inline-link">
                打开完整 7 天验证模板
              </Link>
            </div>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">07 / 商业化</p>
            <h2>变现路径（可能路径）</h2>
            <ul className="check-list">
              {project.monetizationIdeas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
            <p className="detail-index">08 / 获客</p>
            <h2>获客渠道</h2>
            <ul className="check-list">
              {project.trafficChannels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">09 / 搜索需求</p>
            <h2>SEO关键词</h2>
            <p>这些关键词适合用于项目落地页、教程文章、案例页和对比页。</p>
            <div className="keyword-row keyword-row-large">
              {project.seoKeywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">10 / 市场参考</p>
            <h2>竞品参考</h2>
            <p>不要只看直接竞品，也要看用户现在用来绕开问题的人工方案。</p>
            <ul className="check-list">
              {project.competitors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">11 / 风险</p>
            <h2>风险和避坑</h2>
            <ul className="check-list">
              {project.risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="opportunity-section">
            <p className="detail-index">12 / 立即开始</p>
            <h2>第一行动建议</h2>
            <p className="first-action">{project.actionPlan[0]}。完成后再进入下一步，不要同时扩展多个方向。</p>
          </section>

          <section className="opportunity-section">
            <h2>后续行动计划</h2>
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

      <section className="faq-section">
        <div className="section-head">
          <p className="section-kicker">项目 FAQ</p>
          <h2 className="section-title">关于 {project.name} 的常见问题</h2>
        </div>
        <FaqAccordion items={projectFaqs} />
      </section>

      <SubscribeCta
        title={`领取 ${project.name} 验证模板`}
        description="用免费模板记录用户访谈、竞品、报价和 7 天验证结论，避免还没验证就投入开发。"
      />
    </Container>
  );
}
