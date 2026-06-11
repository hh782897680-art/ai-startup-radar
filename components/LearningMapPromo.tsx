import Link from "next/link";
import { ArrowRight, BookOpenCheck, Library, Route } from "lucide-react";

const entries = [
  {
    href: "/learn",
    title: "AI 学习地图",
    description: "从 Prompt、RAG、Agent 到本地大模型，按阶段学习。",
    icon: Route,
  },
  {
    href: "/glossary",
    title: "AI 术语库",
    description: "用普通人能听懂的话解释 LLM、Embedding、Ollama、MCP 等概念。",
    icon: Library,
  },
  {
    href: "/tutorials",
    title: "AI 实战教程",
    description: "先跑通一个最小项目，再判断是否值得深入。",
    icon: BookOpenCheck,
  },
];

export function LearningMapPromo() {
  return (
    <section className="learning-promo premium-card subtle-grid">
      <div className="learning-promo-head">
        <div>
          <p className="section-kicker">AI 实战学习地图</p>
          <h2>不只是发现 AI 项目，也帮你学会背后的 AI 能力</h2>
        </div>
        <p>
          每个 AI 项目背后都有一组基础能力。AI创业雷达新增学习地图，帮你从术语、路线、教程到项目验证一步步补齐。
        </p>
      </div>

      <div className="learning-promo-grid">
        {entries.map((entry, index) => {
          const Icon = entry.icon;
          return (
            <Link key={entry.href} href={entry.href} className="learning-promo-card">
              <span className="learning-promo-index">0{index + 1}</span>
              <i>
                <Icon size={20} aria-hidden="true" />
              </i>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <strong>
                进入查看 <ArrowRight size={15} aria-hidden="true" />
              </strong>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
