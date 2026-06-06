"use client";

import Link from "next/link";
import { ArrowRight, Check, GitCompareArrows } from "lucide-react";
import { getProjectOverallScore, type EnrichedProjectOpportunity } from "@/lib/projects";
import {
  codeRequirementLabels,
  getProjectDecisionProfile,
  startupCostLabels,
} from "@/lib/project-profile";

type ProjectCardProps = {
  project: EnrichedProjectOpportunity;
  compareSelected?: boolean;
  onToggleCompare?: (project: EnrichedProjectOpportunity) => void;
};

export function ProjectCard({ project, compareSelected = false, onToggleCompare }: ProjectCardProps) {
  const profile = getProjectDecisionProfile(project);
  const score = getProjectOverallScore(project);

  return (
    <article className="project-card premium-card">
      <div className="project-card-head">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
        </div>
        <div className="project-score">
          <strong>{score}</strong>
          <span>综合</span>
        </div>
      </div>
      <p className="project-summary">{project.summary}</p>

      <div className="project-badges" aria-label="项目属性">
        {profile.beginnerSuitable ? <span className="badge badge-green">适合新手</span> : null}
        <span className="badge">{codeRequirementLabels[profile.codeRequirement]}</span>
        <span className="badge">{startupCostLabels[profile.startupCost]}</span>
        {profile.toolSiteFit >= 7.5 ? <span className="badge badge-purple">工具站适配</span> : null}
      </div>

      <div className="project-score-bars">
        <div>
          <span>商业化</span>
          <i><b style={{ width: `${project.commercialPotential * 10}%` }} /></i>
          <strong>{project.commercialPotential.toFixed(1)}</strong>
        </div>
        <div>
          <span>竞争</span>
          <i><b className="bar-competition" style={{ width: `${project.competitionIndex * 10}%` }} /></i>
          <strong>{project.competitionIndex.toFixed(1)}</strong>
        </div>
        <div>
          <span>小白友好</span>
          <i><b className="bar-friendly" style={{ width: `${project.beginnerFriendly * 10}%` }} /></i>
          <strong>{project.beginnerFriendly.toFixed(1)}</strong>
        </div>
        <div>
          <span>工具站适配</span>
          <i><b className="bar-tool" style={{ width: `${profile.toolSiteFit * 10}%` }} /></i>
          <strong>{profile.toolSiteFit.toFixed(1)}</strong>
        </div>
      </div>

      <div className="project-facts">
        <p><strong>适合：</strong>{project.targetUsers[0]}</p>
        <p><strong>可能变现：</strong>{project.monetizationIdeas[0]}</p>
      </div>

      <div className="project-card-actions">
        <Link href={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
          查看拆解 <ArrowRight size={15} aria-hidden="true" />
        </Link>
        {onToggleCompare ? (
          <button
            type="button"
            className={compareSelected ? "btn btn-secondary btn-sm compare-selected" : "btn btn-secondary btn-sm"}
            aria-pressed={compareSelected}
            onClick={() => onToggleCompare(project)}
          >
            {compareSelected ? <Check size={15} aria-hidden="true" /> : <GitCompareArrows size={15} aria-hidden="true" />}
            {compareSelected ? "已加入对比" : "加入对比"}
          </button>
        ) : null}
      </div>
    </article>
  );
}
