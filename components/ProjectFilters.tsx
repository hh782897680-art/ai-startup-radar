"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectOverallScore, type EnrichedProjectOpportunity } from "@/lib/projects";

type SignalKey = "all" | "beginner" | "lowCompetition" | "toolSite" | "china" | "serviceReady";
type MonetizationKey = "all" | "subscription" | "service" | "template" | "training" | "affiliate";
type SortKey = "radar" | "commercial" | "beginner" | "seo" | "lowCompetition";

type ProjectFiltersProps = {
  projects: EnrichedProjectOpportunity[];
};

const signalFilters: Array<{
  key: SignalKey;
  label: string;
  matches: (project: EnrichedProjectOpportunity) => boolean;
}> = [
  { key: "all", label: "全部", matches: () => true },
  { key: "beginner", label: "小白友好", matches: (project) => project.beginnerFriendly >= 7.5 },
  { key: "lowCompetition", label: "低竞争", matches: (project) => project.competitionIndex <= 6 },
  {
    key: "toolSite",
    label: "适合工具站",
    matches: (project) => project.seoPotential >= 8.5 || project.category.includes("工具"),
  },
  { key: "china", label: "中文市场机会", matches: (project) => project.chineseMarketOpportunity >= 8.5 },
  {
    key: "serviceReady",
    label: "适合先卖服务",
    matches: (project) => project.monetizationIdeas.some((item) => /服务|部署|顾问|交付|代运营/.test(item)),
  },
];

const monetizationFilters: Array<{
  key: MonetizationKey;
  label: string;
  matches: (project: EnrichedProjectOpportunity) => boolean;
}> = [
  { key: "all", label: "不限变现", matches: () => true },
  { key: "subscription", label: "订阅", matches: (project) => /订阅|月度|年费|席位/.test(project.monetizationIdeas.join(" ")) },
  { key: "service", label: "服务交付", matches: (project) => /服务|部署|顾问|代运营|交付/.test(project.monetizationIdeas.join(" ")) },
  { key: "template", label: "模板包", matches: (project) => /模板/.test(project.monetizationIdeas.join(" ")) },
  { key: "training", label: "培训课程", matches: (project) => /培训|课程|训练营|内训/.test(project.monetizationIdeas.join(" ")) },
  { key: "affiliate", label: "广告联盟", matches: (project) => /广告|联盟|分成|线索/.test(project.monetizationIdeas.join(" ")) },
];

const sortOptions: Array<{ key: SortKey; label: string }> = [
  { key: "radar", label: "雷达综合评分" },
  { key: "commercial", label: "商业化潜力" },
  { key: "beginner", label: "小白友好度" },
  { key: "seo", label: "SEO 潜力" },
  { key: "lowCompetition", label: "竞争从低到高" },
];

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [activeSignal, setActiveSignal] = useState<SignalKey>("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMonetization, setActiveMonetization] = useState<MonetizationKey>("all");
  const [activeSort, setActiveSort] = useState<SortKey>("radar");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["all", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);

  const activeSignalDefinition = signalFilters.find((filter) => filter.key === activeSignal) ?? signalFilters[0];
  const activeMonetizationDefinition =
    monetizationFilters.find((filter) => filter.key === activeMonetization) ?? monetizationFilters[0];

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects
      .filter((project) => activeSignalDefinition.matches(project))
      .filter((project) => activeCategory === "all" || project.category === activeCategory)
      .filter((project) => activeMonetizationDefinition.matches(project))
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
  }, [activeCategory, activeMonetizationDefinition, activeSignalDefinition, activeSort, projects, query]);

  const radarStats = useMemo(
    () => [
      { label: "项目机会", value: projects.length },
      { label: "高商业化", value: projects.filter((project) => project.commercialPotential >= 8.5).length },
      { label: "SEO 高潜力", value: projects.filter((project) => project.seoPotential >= 8.5).length },
      { label: "低竞争切入", value: projects.filter((project) => project.competitionIndex <= 6).length },
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
            <span>项目类别</span>
            <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "全部类别" : category}
                </option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>变现方式</span>
            <select
              value={activeMonetization}
              onChange={(event) => setActiveMonetization(event.target.value as MonetizationKey)}
            >
              {monetizationFilters.map((filter) => (
                <option key={filter.key} value={filter.key}>
                  {filter.label}
                </option>
              ))}
            </select>
          </label>

          <label className="radar-select">
            <span>排序</span>
            <select value={activeSort} onChange={(event) => setActiveSort(event.target.value as SortKey)}>
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="project-filter-bar" aria-label="项目机会标签筛选">
        {signalFilters.map((filter) => {
          const count = projects.filter((project) => filter.matches(project)).length;
          const isActive = activeSignal === filter.key;

          return (
            <button
              key={filter.key}
              type="button"
              className={isActive ? "project-filter project-filter-active" : "project-filter"}
              aria-pressed={isActive}
              onClick={() => setActiveSignal(filter.key)}
            >
              <span>{filter.label}</span>
              <strong>{count}</strong>
            </button>
          );
        })}
      </div>

      <div className="project-result-head">
        <p>
          当前显示 <strong>{visibleProjects.length}</strong> 个项目
        </p>
        <button
          type="button"
          className="reset-filters"
          onClick={() => {
            setActiveSignal("all");
            setActiveCategory("all");
            setActiveMonetization("all");
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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="empty-state premium-card">
          <h3>没有匹配项目</h3>
          <p>可以放宽类别、变现方式或关键词，先从“全部”视图重新筛选。</p>
        </div>
      )}
    </section>
  );
}
