import Link from "next/link";
import { ArrowRight, BookOpenCheck, Boxes, FlaskConical, Route } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { tutorialCards } from "@/data/learning";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI实战教程｜从本地大模型到 RAG 知识库",
  description: "面向普通人和独立开发者的 AI 实战教程，覆盖 Ollama、本地LLM、RAG知识库、AI自动化和内容工具。",
  path: "/tutorials",
  keywords: ["AI实战教程", "Ollama教程", "RAG知识库教程", "本地大模型", "AI项目验证"],
});

const categories = ["本地 AI", "RAG 知识库", "Agent 工作流", "内容生成", "AI 工具站"];

export default function TutorialsPage() {
  return (
    <Container className="page tutorials-page">
      <section className="learning-hero tutorial-hero premium-card subtle-grid">
        <div className="learning-hero-copy">
          <p className="hero-status"><span /> AI 实战教程</p>
          <h1>别只看项目，先跑通一个最小闭环</h1>
          <p>
            第一版教程不追求覆盖所有工具。先选择一个明确产出：让本地模型说出第一句话，
            或让知识库围绕一组真实文档回答问题。
          </p>
          <div className="hero-actions">
            <Button href="#tutorial-list" size="lg">选择教程 <ArrowRight size={16} aria-hidden="true" /></Button>
            <Button href="/learn" variant="secondary">查看学习地图</Button>
            <Button href="/projects" variant="ghost">进入项目库</Button>
          </div>
        </div>
        <aside className="tutorial-principle-panel">
          <FlaskConical size={24} aria-hidden="true" />
          <span>教程原则</span>
          <strong>先跑通，再比较，再决定投入</strong>
          <p>每份教程都给出适合谁、预计产出、常见问题和可以连接的项目机会。</p>
        </aside>
      </section>

      <section className="tutorial-category-bar" aria-label="教程分类">
        {categories.map((category, index) => (
          <span key={category}><b>{String(index + 1).padStart(2, "0")}</b>{category}</span>
        ))}
      </section>

      <section id="tutorial-list">
        <div className="section-head">
          <p className="section-kicker">第一版教程</p>
          <h2 className="section-title">四个可以立即开始的最小任务</h2>
          <p>其中两份是完整教程，另外两项直接连接到现有项目拆解和验证模板。</p>
        </div>
        <div className="tutorial-grid">
          {tutorialCards.map((tutorial, index) => (
            <article key={tutorial.title} className="tutorial-card premium-card">
              <div className="tutorial-card-head">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index < 2 ? <BookOpenCheck size={19} aria-hidden="true" /> : <Boxes size={19} aria-hidden="true" />}
              </div>
              <p className="project-category">{tutorial.category}</p>
              <h3><Link href={tutorial.href}>{tutorial.title}</Link></h3>
              <p>{tutorial.description}</p>
              <dl>
                <div><dt>难度</dt><dd>{tutorial.difficulty}</dd></div>
                <div><dt>适合谁</dt><dd>{tutorial.audience}</dd></div>
                <div><dt>预计产出</dt><dd>{tutorial.outcome}</dd></div>
                <div><dt>关联项目</dt><dd>{tutorial.relatedProject}</dd></div>
              </dl>
              <Link href={tutorial.href} className="inline-link">
                {index < 2 ? "进入完整教程" : "查看对应实战"} <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-bridge premium-card">
        <div>
          <Route size={22} aria-hidden="true" />
          <p className="section-kicker">开始前</p>
          <h2>不知道选哪个教程？</h2>
          <p>先去学习地图判断自己处于哪个阶段，或先看 RAG 与 Ollama 的小白解释。</p>
        </div>
        <div className="learning-bridge-links">
          <Link href="/learn">查看 AI 学习地图 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/glossary/rag">RAG 是什么 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/glossary/ollama">Ollama 是什么 <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/projects">查看 AI 项目库 <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>
    </Container>
  );
}
