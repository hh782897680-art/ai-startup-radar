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
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            <span>{index + 1}</span>
            <strong>
              {scoreLabel} {scoreOf(project).toFixed(1)}
            </strong>
          </li>
        ))}
      </ol>
    </article>
  );
}
