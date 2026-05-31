import { projects, type ProjectOpportunity } from "@/data/projects";

export type ProjectFilterInput = {
  keyword?: string;
  category?: string;
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function includesNormalized(text: string, query: string) {
  return normalize(text).includes(normalize(query));
}

function matchesKeyword(project: ProjectOpportunity, keyword: string) {
  if (!keyword) {
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
    ...project.validationSteps,
    ...project.actionPlan,
  ].join(" ");

  return includesNormalized(searchable, keyword);
}

export function getAllProjects(): ProjectOpportunity[] {
  return [...projects];
}

export function getProjectBySlug(slug: string): ProjectOpportunity | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((project) => project.category))];
}

export function filterProjects(filters: ProjectFilterInput): ProjectOpportunity[] {
  const keyword = filters.keyword?.trim() ?? "";
  const category = filters.category?.trim() ?? "";

  return projects.filter((project) => {
    const matchKeyword = matchesKeyword(project, keyword);
    const matchCategory = category ? normalize(project.category) === normalize(category) : true;

    return matchKeyword && matchCategory;
  });
}

export function getTodayRadarProjects(limit = 3): ProjectOpportunity[] {
  return [...projects]
    .sort((a, b) => {
      const scoreA = a.commercialPotential * 0.35 + a.chineseMarketOpportunity * 0.35 + a.seoPotential * 0.3;
      const scoreB = b.commercialPotential * 0.35 + b.chineseMarketOpportunity * 0.35 + b.seoPotential * 0.3;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getFeaturedProjects(limit = 6): ProjectOpportunity[] {
  const preferredOrder = [
    "open-webui",
    "dify",
    "ragflow",
    "ai-shopify-seo-assistant",
    "ai-seo-brief-generator",
    "ai-niche-calculator-builder",
  ];

  const picked = preferredOrder
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectOpportunity => Boolean(project));

  if (picked.length >= limit) {
    return picked.slice(0, limit);
  }

  const fallback = projects.filter((project) => !picked.some((item) => item.slug === project.slug));
  return [...picked, ...fallback].slice(0, limit);
}

export function getBeginnerFriendlyRanking(limit = 5): ProjectOpportunity[] {
  return [...projects].sort((a, b) => b.beginnerFriendly - a.beginnerFriendly).slice(0, limit);
}

export function getLowCompetitionRanking(limit = 5): ProjectOpportunity[] {
  return [...projects].sort((a, b) => a.competitionIndex - b.competitionIndex).slice(0, limit);
}

export function getToolSiteFitRanking(limit = 5): ProjectOpportunity[] {
  return [...projects]
    .sort((a, b) => {
      const scoreA = a.seoPotential * 0.55 + a.chineseMarketOpportunity * 0.25 + a.beginnerFriendly * 0.2;
      const scoreB = b.seoPotential * 0.55 + b.chineseMarketOpportunity * 0.25 + b.beginnerFriendly * 0.2;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getAvoidForBeginners(limit = 5): ProjectOpportunity[] {
  return [...projects]
    .filter((project) => project.beginnerFriendly <= 6 || project.competitionIndex >= 7)
    .sort((a, b) => a.beginnerFriendly - b.beginnerFriendly || b.competitionIndex - a.competitionIndex)
    .slice(0, limit);
}

export function getProjectOverallScore(project: ProjectOpportunity): number {
  const score =
    project.commercialPotential * 0.28 +
    (10 - project.competitionIndex) * 0.2 +
    project.beginnerFriendly * 0.2 +
    project.seoPotential * 0.17 +
    project.chineseMarketOpportunity * 0.15;

  return Number(score.toFixed(1));
}
