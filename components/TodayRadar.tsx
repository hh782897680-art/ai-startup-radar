import Link from "next/link";
import { Flame } from "lucide-react";
import type { ProjectOpportunity } from "@/data/projects";
import { getProjectOverallScore } from "@/lib/projects";

type TodayRadarProps = {
  items: ProjectOpportunity[];
};

export function TodayRadar({ items }: TodayRadarProps) {
  return (
    <section className="today-radar premium-card">
      <div className="today-radar-head">
        <h2>今日项目雷达</h2>
        <p>基于商业化、竞争度、中文市场机会做轻量评分</p>
        <small>评分说明：站内参考评分，仅供参考。</small>
      </div>

      <ol className="today-radar-list">
        {items.map((project, index) => (
          <li key={project.slug}>
            <span className="radar-index">{index + 1}</span>
            <div>
              <p>{project.name}</p>
              <small>{project.summary}</small>
            </div>
            <strong>
              <Flame size={13} aria-hidden="true" /> {getProjectOverallScore(project)}
            </strong>
          </li>
        ))}
      </ol>

      <Link href="/projects" className="inline-link">
        查看全部项目
      </Link>
    </section>
  );
}
