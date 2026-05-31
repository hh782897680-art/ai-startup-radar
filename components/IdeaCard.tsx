import Link from "next/link";
import type { Idea } from "@/data/ideas";

interface IdeaCardProps {
  idea: Idea;
}

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <article className="idea-card">
      <div className="idea-card-top">
        <span className="pill">{idea.category}</span>
      </div>

      <h3>
        <Link href={`/ideas/${idea.slug}`}>{idea.title}</Link>
      </h3>
      <p>{idea.shortDescription}</p>

      <ul className="idea-meta-list" aria-label="Idea metadata">
        <li>
          <strong>Difficulty:</strong> {idea.difficulty}
        </li>
        <li>
          <strong>Launch speed:</strong> {idea.launchSpeed}
        </li>
        <li>
          <strong>Build time:</strong> {idea.estimatedBuildTime}
        </li>
      </ul>

      <Link className="text-link" href={`/ideas/${idea.slug}`}>
        Read full breakdown
      </Link>
    </article>
  );
}
