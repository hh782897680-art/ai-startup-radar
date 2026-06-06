"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GitCompareArrows, Search, X } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectOverallScore, type EnrichedProjectOpportunity } from "@/lib/projects";
import {
  codeRequirementLabels,
  getProjectDecisionProfile,
  monetizationTypeLabels,
  startupCostLabels,
  trafficTypeLabels,
  type CodeRequirement,
  type MonetizationType,
  type StartupCost,
  type TrafficType,
} from "@/lib/project-profile";

type SortKey = "radar" | "commercial" | "beginner" | "seo" | "lowCompetition";

type ProjectFiltersProps = {
  projects: EnrichedProjectOpportunity[];
};

const sortOptions: Array<{ key: SortKey; label: string }> = [
  { key: "radar", label: "雷达综合评分" },
  { key: "commercial", label: "商业化潜力" },
  { key: "beginner", label: "小白友好度" },
  { key: "seo", label: "SEO 潜力" },
  { key: "lowCompetition", label: "竞争从低到高" },
];

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [beginner, setBeginner] = useState("all");
  const [code, setCode] = useState<CodeRequirement | "all">("all");
  const [cost, setCost] = useState<StartupCost | "all">("all");
  const [traffic, setTraffic] = useState<TrafficType | "all">("all");
  const [monetization, setMonetization] = useState<MonetizationType | "all">("all");
  const [activeSort, setActiveSort] = useState<SortKey>("radar");
  const [query, setQuery] = useState("");
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);

  const categories = useMemo(() => ["all", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects
      .filter((project) => activeCategory === "all" || project.category === activeCategory)
      .filter((project) => {
        const profile = getProjectDecisionProfile(project);
        return beginner === "all" || (beginner === "yes" ? profile.beginnerSuitable : !profile.beginnerSuitable);
      })
      .filter((project) => code === "all" || getProjectDecisionProfile(project).codeRequirement === code)
      .filter((project) => cost === "all" || getProjectDecisionProfile(project).startupCost === cost)
      .filter((project) => traffic === "all" || getProjectDecisionProfile(project).trafficTypes.includes(traffic))
      .filter(
        (project) =>
          monetization === "all" || getProjectDecisionProfile(project).monetizationTypes.includes(monetization),
      )
      .filter((project) => {
        if (!normalizedQuery) {
          return true;
        }

        const searchable = [
          project.name,
          project.summary,
          project.category,
          project.painPoint,
          project.whyItWorks,
          ...project.targetUsers,
          ...project.trafficChannels,
          ...project.monetizationIdeas,
          ...project.seoKeywords,
          ...project.competitors,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (activeSort === "commercial") {
          return b.commercialPotential - a.commercialPotential;
        }

        if (activeSort === "beginner") {
          return b.beginnerFriendly - a.beginnerFriendly;
        }

        if (activeSort === "seo") {
          return b.seoPotential - a.seoPotential;
        }

        if (activeSort === "lowCompetition") {
          return a.competitionIndex - b.competitionIndex;
        }

        return getProjectOverallScore(b) - getProjectOverallScore(a);
      });
  }, [activeCategory, activeSort, beginner, code, cost, monetization, projects, query, traffic]);

  const radarStats = useMemo(
    () => [
      { label: "项目机会", value: projects.length },
      { label: "高商业化", value: projects.filter((project) => project.commercialPotential >= 8.5).length },
      { label: "SEO 高潜力", value: projects.filter((project) => project.seoPotential >= 8.5).length },
      { label: "适合新手", value: projects.filter((project) => getProjectDecisionProfile(project).beginnerSuitable).length },
    ],
    [projects],
  );

  return (
    <section className="project-library">
      <div className="radar-console premium-card">
        <div className="radar-console-head">
          <div>
            <p className="section-kicker">机会雷达</p>
            <h2>按你的资源筛选 AI 项目</h2>
          </div>
          <div className="radar-stat-grid" aria-label="项目库统计">
            {radarStats.map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="radar-control-grid">
          <label className="radar-search">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">搜索项目、关键词、竞品或人群</span>
            <input
              type="search"
              value={query}
              placeholder="搜索 Shopify、Dify、知识库、模板、SEO..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="radar-select">
            <span>项目类型</span>
            <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "全部类别" : category}
                </option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>是否适合新手</span>
            <select value={beginner} onChange={(event) => setBeginner(event.target.value)}>
              <option value="all">不限</option>
              <option value="yes">适合新手</option>
              <option value="no">更适合有经验者</option>
            </select>
          </label>

          <label className="radar-select">
            <span>是否需要代码</span>
            <select value={code} onChange={(event) => setCode(event.target.value as CodeRequirement | "all")}>
              <option value="all">不限</option>
              {(Object.entries(codeRequirementLabels) as Array<[CodeRequirement, string]>).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>启动成本</span>
            <select value={cost} onChange={(event) => setCost(event.target.value as StartupCost | "all")}>
              <option value="all">不限</option>
              {(Object.entries(startupCostLabels) as Array<[StartupCost, string]>).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>流量渠道</span>
            <select value={traffic} onChange={(event) => setTraffic(event.target.value as TrafficType | "all")}>
              <option value="all">不限</option>
              {(Object.entries(trafficTypeLabels) as Array<[TrafficType, string]>).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>变现方式</span>
            <select
              value={monetization}
              onChange={(event) => setMonetization(event.target.value as MonetizationType | "all")}
            >
              <option value="all">不限</option>
              {(Object.entries(monetizationTypeLabels) as Array<[MonetizationType, string]>).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>排序方式</span>
            <select value={activeSort} onChange={(event) => setActiveSort(event.target.value as SortKey)}>
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="project-result-head">
        <p>
          当前显示 <strong>{visibleProjects.length}</strong> 个项目
        </p>
        <button
          type="button"
          className="reset-filters"
          onClick={() => {
            setActiveCategory("all");
            setBeginner("all");
            setCode("all");
            setCost("all");
            setTraffic("all");
            setMonetization("all");
            setActiveSort("radar");
            setQuery("");
          }}
        >
          重置筛选
        </button>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              compareSelected={compareSlugs.includes(project.slug)}
              onToggleCompare={(selectedProject) => {
                setCompareSlugs((current) => {
                  if (current.includes(selectedProject.slug)) {
                    return current.filter((slug) => slug !== selectedProject.slug);
                  }
                  return current.length >= 3 ? [...current.slice(1), selectedProject.slug] : [...current, selectedProject.slug];
                });
              }}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state premium-card">
          <h3>没有匹配项目</h3>
          <p>可以放宽类别、变现方式或关键词，先从“全部”视图重新筛选。</p>
        </div>
      )}

      {compareSlugs.length > 0 ? (
        <aside className="compare-tray premium-card" aria-label="项目对比">
          <div className="compare-tray-head">
            <div>
              <span><GitCompareArrows size={16} aria-hidden="true" /> 项目对比</span>
              <p>最多保留 3 个项目，继续加入时会替换最早一项。</p>
            </div>
            <button type="button" aria-label="清空项目对比" onClick={() => setCompareSlugs([])}>
              <X size={17} aria-hidden="true" />
            </button>
          </div>
          <div className="compare-table">
            {compareSlugs.map((slug) => {
              const project = projects.find((item) => item.slug === slug);
              if (!project) return null;
              const profile = getProjectDecisionProfile(project);
              return (
                <article key={slug}>
                  <strong>{project.name}</strong>
                  <span>商业化 {project.commercialPotential.toFixed(1)}</span>
                  <span>竞争 {project.competitionIndex.toFixed(1)}</span>
                  <span>小白友好 {project.beginnerFriendly.toFixed(1)}</span>
                  <span>{codeRequirementLabels[profile.codeRequirement]} · {startupCostLabels[profile.startupCost]}</span>
                  <Link href={`/projects/${slug}`}>查看拆解</Link>
                </article>
              );
            })}
          </div>
        </aside>
      ) : null}
    </section>
  );
}
