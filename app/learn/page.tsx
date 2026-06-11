import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Route, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LearningLinkCard } from "@/components/LearningLinkCard";
import { learningAudiences, learningStages } from "@/data/learning";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI实战学习地图｜普通人从0学习生成式AI",
  description: "从提示词、RAG、AI Agent、本地大模型到AI项目实战，适合普通人、AI工具博主和独立开发者的生成式AI学习路线图。",
  path: "/learn",
  keywords: ["生成式AI学习路线", "AI学习地图", "RAG入门", "AI Agent入门", "本地大模型"],
});

export default function LearnPage() {
  return (
    <Container className="page learning-page">
      <section className="learning-hero premium-card subtle-grid">
        <div className="learning-hero-copy">
          <p className="hero-status"><span /> AI 实战学习地图</p>
          <h1>普通人应该怎么学 Generative AI</h1>
          <p>
            不从论文目录开始，也不追着每个新工具跑。从提示词、RAG、Agent 到本地大模型，
            每学一个概念，都把它连接到真实项目和一个可以验证的下一步。
          </p>
          <div className="hero-actions">
            <Button href="#roadmap" size="lg">
              开始学习 AI <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/glossary" variant="secondary">查看 AI 术语库</Button>
            <Button href="/tutorials" variant="ghost">进入实战教程</Button>
          </div>
          <small>建议一次只推进一个阶段。能解释、能演示、能验证，再进入下一步。</small>
        </div>

        <aside className="learning-route-panel" aria-label="五阶段学习路线概览">
          <div className="learning-route-title">
            <Route size={18} aria-hidden="true" />
            <span>5 阶段路线</span>
          </div>
          <ol>
            {learningStages.map((item, index) => (
              <li key={item.id}>
                <span>{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.topics.slice(0, 2).join(" · ")}</small>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section id="roadmap" className="learning-roadmap">
        <div className="section-head">
          <p className="section-kicker">从概念到项目</p>
          <h2 className="section-title">五阶段 AI 实战路线</h2>
          <p>每个阶段只解决一个核心问题，并给出对应项目机会和下一步行动。</p>
        </div>

        <div className="learning-stage-list">
          {learningStages.map((item, index) => (
            <article key={item.id} id={item.id} className="learning-stage premium-card">
              <div className="learning-stage-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index < learningStages.length - 1 ? <i aria-hidden="true" /> : null}
              </div>
              <div className="learning-stage-body">
                <div className="learning-stage-heading">
                  <div>
                    <p>{item.stage}</p>
                    <h2>{item.title}</h2>
                  </div>
                  <Compass size={22} aria-hidden="true" />
                </div>

                <div className="learning-stage-columns">
                  <section>
                    <h3>你要学什么？</h3>
                    <p>{item.summary}</p>
                    <div className="skill-chip-row">
                      {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
                    </div>
                  </section>
                  <section>
                    <h3>为什么重要？</h3>
                    <p>{item.why}</p>
                  </section>
                  <section>
                    <h3>对应项目机会</h3>
                    <ul className="check-list">
                      {item.opportunities.map((opportunity) => <li key={opportunity}>{opportunity}</li>)}
                    </ul>
                  </section>
                </div>

                <LearningLinkCard link={item.next} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <p className="section-kicker">适合谁</p>
          <h2 className="section-title">不用先成为 AI 工程师</h2>
          <p>这条路线关注理解、应用和项目验证，不要求所有人从训练模型开始。</p>
        </div>
        <div className="audience-grid">
          {learningAudiences.map((item) => (
            <article key={item.title} className="audience-card premium-card">
              <CheckCircle2 size={18} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-bridge premium-card">
        <div>
          <Sparkles size={22} aria-hidden="true" />
          <p className="section-kicker">把学习连接到行动</p>
          <h2>选一个概念，再选一个真实项目</h2>
          <p>术语库帮你看懂原理，教程帮你跑通闭环，项目库帮你判断是否值得继续投入。</p>
        </div>
        <div className="learning-bridge-links">
          <Link href="/glossary">进入 AI 术语库 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/tutorials">进入实战教程 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/projects">进入 AI 项目库 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/glossary/rag">先理解 RAG <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/glossary/agent">先理解 Agent <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/glossary/ollama">先理解 Ollama <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <aside className="reference-note">
        <strong>参考说明</strong>
        <p>
          部分学习结构参考开源 Generative AI 学习资源，并结合中文用户、AI工具实战和普通人副业场景重新整理。
          本站不直接复制原仓库内容，所有解释与项目分析均为 AI创业雷达原创整理。
        </p>
      </aside>
    </Container>
  );
}
