import Link from "next/link";
import type { EnrichedProjectOpportunity } from "@/lib/projects";

type RankingListProps = {
  title: string;
  description: string;
  audience?: string;
  items: EnrichedProjectOpportunity[];
  scoreLabel: string;
  scoreOf: (project: EnrichedProjectOpportunity) => number;
};

export function RankingList({ title, description, audience, items, scoreLabel, scoreOf }: RankingListProps) {
  return (
    <article className="ranking-card premium-card">
      <div className="ranking-card-head">
        <p className="section-kicker">机会榜单</p>
        <h3>{title}</h3>
        <p>{description}</p>
        {audience ? <small><strong>适合谁看：</strong>{audience}</small> : null}
      </div>
      <ol>
        {items.map((project, index) => (
          <li key={project.slug}>
            <span className="ranking-rank">{String(index + 1).padStart(2, "0")}</span>
            <div className="ranking-item-body">
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              <p>{project.summary}</p>
            </div>
            <div className="ranking-score">
              <strong>{scoreOf(project).toFixed(1)}</strong>
              <span>{scoreLabel}</span>
            </div>
            <Link href={`/projects/${project.slug}`} className="ranking-link">
              查看拆解
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
