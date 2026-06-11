import Link from "next/link";
import { ArrowRight, BookOpen, Library, ScanSearch } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { glossaryCategories } from "@/data/learning";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI术语库｜普通人也能看懂的生成式AI核心概念",
  description: "用小白能看懂的方式解释 LLM、RAG、Agent、Embedding、Ollama、Prompt Engineering 等生成式AI核心术语。",
  path: "/glossary",
  keywords: ["AI术语库", "生成式AI概念", "RAG是什么", "AI Agent是什么", "Ollama是什么"],
});

export default function GlossaryPage() {
  return (
    <Container className="page glossary-page">
      <section className="learning-hero glossary-hero premium-card subtle-grid">
        <div className="learning-hero-copy">
          <p className="hero-status"><span /> AI 术语库</p>
          <h1>别只收藏 AI 工具，先看懂背后的概念</h1>
          <p>
            每个术语都用一句话解释它是什么、普通人怎么理解，以及它适合连接到什么项目。
            第一版只深入最常用的五个概念，避免堆砌低价值词条。
          </p>
          <div className="hero-actions">
            <Button href="#terms" size="lg">开始查术语 <ArrowRight size={16} aria-hidden="true" /></Button>
            <Button href="/learn" variant="secondary">查看学习地图</Button>
            <Button href="/tutorials" variant="ghost">进入实战教程</Button>
          </div>
        </div>
        <aside className="glossary-signal-panel">
          <Library size={24} aria-hidden="true" />
          <strong>5 个重点详解</strong>
          <span>20 个核心概念入口</span>
          <p>先理解 Prompt、RAG、Agent、Embedding 和 Ollama，再按项目需要补其他概念。</p>
        </aside>
      </section>

      <section id="terms" className="glossary-categories">
        {glossaryCategories.map((category, categoryIndex) => (
          <section key={category.title} className="glossary-category">
            <div className="glossary-category-head">
              <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
              <div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="glossary-grid">
              {category.terms.map((term) => (
                <article key={term.name} className="glossary-card premium-card">
                  <div className="glossary-card-top">
                    {term.hasDetail ? <BookOpen size={17} aria-hidden="true" /> : <ScanSearch size={17} aria-hidden="true" />}
                    <span>{term.hasDetail ? "重点详解" : "路线概念"}</span>
                  </div>
                  <h3><Link href={term.href}>{term.name}</Link></h3>
                  <p>{term.explanation}</p>
                  <dl>
                    <dt>适合做什么项目？</dt>
                    <dd>{term.projectUse}</dd>
                  </dl>
                  <Link href={term.href} className="inline-link">
                    {term.hasDetail ? "查看详细解释" : "在学习地图中查看"} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="learning-bridge premium-card">
        <div>
          <p className="section-kicker">下一步</p>
          <h2>术语不是终点，要回到真实任务</h2>
          <p>选择一个你正在做的项目，只学习它当前需要的概念，再用教程验证。</p>
        </div>
        <div className="hero-actions">
          <Button href="/learn">查看学习地图</Button>
          <Button href="/tutorials" variant="secondary">选择实战教程</Button>
          <Button href="/projects" variant="ghost">浏览项目库</Button>
        </div>
      </section>
    </Container>
  );
}
