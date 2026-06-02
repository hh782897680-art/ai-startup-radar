import Link from "next/link";
import type { ProjectOpportunity } from "@/data/projects";

type RankingListProps = {
  title: string;
  description: string;
  items: ProjectOpportunity[];
  scoreLabel: string;
  scoreOf: (project: ProjectOpportunity) => number;
};

export function RankingList({ title, description, items, scoreLabel, scoreOf }: RankingListProps) {
  return (
    <article className="ranking-card premium-card">
      <h3>{title}</h3>
      <p>{description}</p>
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
