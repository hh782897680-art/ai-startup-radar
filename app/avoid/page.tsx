import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";
import { getAvoidForBeginners } from "@/lib/projects";

export const metadata = buildPageMetadata({
  title: "不建议新手做的项目 | AI创业雷达",
  description: "AI创业雷达避坑清单：对新手不友好、竞争过高或验证成本高的项目方向。",
  path: "/avoid",
  keywords: ["AI创业避坑", "不建议新手项目", "高竞争AI项目"],
});

export default function AvoidPage() {
  const avoidProjects = getAvoidForBeginners(12);

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">避坑清单</p>
        <h1>不建议新手做的项目</h1>
        <p>以下方向不是不能做，而是对新手阶段来说，验证成本和失败概率更高。</p>
      </section>

      <section className="avoid-grid">
        {avoidProjects.map((project) => (
          <article key={project.slug} className="avoid-card premium-card">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <ul className="check-list">
              {project.risks.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </Container>
  );
}
