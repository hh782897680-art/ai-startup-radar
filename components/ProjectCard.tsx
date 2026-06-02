import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EnrichedProjectOpportunity } from "@/lib/projects";

type ProjectCardProps = {
  project: EnrichedProjectOpportunity;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card premium-card">
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>

      <p className="project-line">
        <strong>适合人群：</strong>
        {project.targetUsers[0]}
      </p>
      <p className="project-line">
        <strong>流量渠道：</strong>
        {project.trafficChannels[0]}
      </p>
      <p className="project-line">
        <strong>入门报价：</strong>
        {project.pricing.starter}
      </p>

      <div className="project-metrics">
        <span>商业化 {project.commercialPotential.toFixed(1)}</span>
        <span>竞争 {project.competitionIndex.toFixed(1)}</span>
        <span>小白友好 {project.beginnerFriendly.toFixed(1)}</span>
      </div>

      <div className="keyword-row">
        {project.seoKeywords.slice(0, 3).map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="inline-link">
        查看拆解 <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
