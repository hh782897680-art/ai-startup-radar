import { LearningLinkCard } from "@/components/LearningLinkCard";
import { getProjectLearningLinks } from "@/data/learning";
import type { EnrichedProjectOpportunity } from "@/lib/projects";

type RelatedLearningProps = {
  project: EnrichedProjectOpportunity;
};

export function RelatedLearning({ project }: RelatedLearningProps) {
  const related = getProjectLearningLinks(project);

  return (
    <section className="related-learning premium-card">
      <div className="related-learning-head">
        <div>
          <p className="section-kicker">相关学习路径</p>
          <h2>先补齐 {project.name} 背后的核心能力</h2>
        </div>
        <span>{related.level}</span>
      </div>
      <p>
        不需要先学完所有概念。围绕这个项目理解关键术语，再用一个最小教程验证能否跑通。
      </p>
      <div className="learning-link-grid">
        {related.links.map((link, index) => (
          <LearningLinkCard key={link.href} link={link} index={index} />
        ))}
      </div>
      <small>仅为项目方向分析，不构成收益承诺。</small>
    </section>
  );
}
