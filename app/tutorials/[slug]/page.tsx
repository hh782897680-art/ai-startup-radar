import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2, CircleHelp, ListChecks, PackageCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LearningLinkCard } from "@/components/LearningLinkCard";
import { getTutorialDetail, tutorialDetails } from "@/data/learning";
import { buildPageMetadata } from "@/lib/seo";

type TutorialDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tutorialDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: TutorialDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialDetail(slug);

  if (!tutorial) {
    return buildPageMetadata({
      title: "AI 教程不存在｜AI创业雷达",
      description: "你访问的 AI 实战教程不存在。",
      path: `/tutorials/${slug}`,
    });
  }

  return buildPageMetadata({
    title: tutorial.seoTitle,
    description: tutorial.seoDescription,
    path: `/tutorials/${tutorial.slug}`,
    keywords: [tutorial.title, "AI实战教程", "生成式AI入门"],
    type: "article",
  });
}

export default async function TutorialDetailPage({ params }: TutorialDetailPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialDetail(slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <Container className="page tutorial-detail-page">
      <article className="concept-hero tutorial-detail-hero premium-card subtle-grid">
        <p className="hero-status"><span /> AI 实战教程</p>
        <h1>{tutorial.title}</h1>
        <p className="concept-one-line">{tutorial.summary}</p>
        <div className="hero-actions">
          <Button href="/tutorials" variant="secondary">返回教程列表</Button>
          <Button href="/learn">查看学习地图 <ArrowRight size={16} aria-hidden="true" /></Button>
        </div>
      </article>

      <section className="tutorial-readiness-grid">
        <article className="concept-section premium-card">
          <div className="concept-section-title">
            <CheckCircle2 size={19} aria-hidden="true" />
            <div>
              <p className="section-kicker">适合谁</p>
              <h2>先确认这个教程适合你</h2>
            </div>
          </div>
          <ul className="check-list">
            {tutorial.audience.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="concept-section premium-card">
          <div className="concept-section-title">
            <PackageCheck size={19} aria-hidden="true" />
            <div>
              <p className="section-kicker">你需要准备什么</p>
              <h2>开始前的最小准备</h2>
            </div>
          </div>
          <ul className="check-list">
            {tutorial.preparation.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="tutorial-steps-section">
        <div className="section-head">
          <p className="section-kicker">步骤结构</p>
          <h2 className="section-title">按顺序跑通最小闭环</h2>
          <p>工具界面和命令可能更新。涉及安装与模型名称时，以当前官方文档为准。</p>
        </div>
        <ol className="tutorial-step-list">
          {tutorial.steps.map((step, index) => (
            <li key={step.title} className="premium-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.note ? <small>{step.note}</small> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="concept-section premium-card">
        <div className="concept-section-title">
          <CircleHelp size={19} aria-hidden="true" />
          <div>
            <p className="section-kicker">常见问题</p>
            <h2>第一次跑不通时先检查这些</h2>
          </div>
        </div>
        <div className="problem-grid">
          {tutorial.commonProblems.map((problem) => (
            <article key={problem.title}>
              <h3>{problem.title}</h3>
              <p>{problem.solution}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="tutorial-caution">
        <AlertTriangle size={18} aria-hidden="true" />
        <div>
          <strong>注意事项</strong>
          <p>{tutorial.caution}</p>
        </div>
      </aside>

      <section>
        <div className="section-head">
          <p className="section-kicker">下一步可以做什么</p>
          <h2 className="section-title">把教程连接到真实项目</h2>
          <p>完成教程不等于项目成立。接下来用真实资料、真实用户和明确指标继续验证。</p>
        </div>
        <div className="learning-link-grid">
          {tutorial.nextProjects.map((link, index) => <LearningLinkCard key={link.href} link={link} index={index} />)}
        </div>
      </section>

      <section className="tutorial-finish premium-card">
        <ListChecks size={24} aria-hidden="true" />
        <div>
          <h2>完成标准</h2>
          <p>你能复述流程、保存测试结果，并指出下一次要改进的一个问题，就已经完成第一版。</p>
        </div>
        <Button href="/projects" variant="secondary">选择验证项目</Button>
      </section>
    </Container>
  );
}
