import { projects, type ProjectOpportunity } from "@/data/projects";
import { projectIntelligence, type ProjectIntelligence } from "@/data/project-intelligence";

export type EnrichedProjectOpportunity = ProjectOpportunity & ProjectIntelligence;

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

function matchesKeyword(project: EnrichedProjectOpportunity, keyword: string) {
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
    ...project.seoKeywords,
    ...project.competitors,
    project.pricing.starter,
    project.pricing.service,
    project.pricing.premium,
  ].join(" ");

  return includesNormalized(searchable, keyword);
}

const intelligenceBySlug = new Map(projectIntelligence.map((item) => [item.slug, item]));

function getProjectIntelligence(project: ProjectOpportunity): ProjectIntelligence {
  const intelligence = intelligenceBySlug.get(project.slug);

  if (intelligence) {
    return intelligence;
  }

  return {
    slug: project.slug,
    seoKeywords: [project.name, project.category, "AI项目机会"],
    competitors: ["人工服务", "传统软件", "开源替代方案"],
    pricing: {
      starter: "入门模板或诊断：¥29-¥199",
      service: "标准交付服务：¥1,000-¥8,000/次",
      premium: "月度维护或高级订阅：¥299-¥3,000/月",
    },
    validationTemplate: [
      "目标客户：先找 5 个能直接接触到的潜在用户。",
      "验证问题：他们是否已经为这个痛点花过时间或钱。",
      "最小承诺：愿意给出真实资料、预约演示或留下邮箱。",
      "成交信号：愿意为节省时间、提升转化或减少人工成本付费。",
    ],
  };
}

function enrichProject(project: ProjectOpportunity): EnrichedProjectOpportunity {
  return {
    ...project,
    ...getProjectIntelligence(project),
  };
}

export function getAllProjects(): EnrichedProjectOpportunity[] {
  return projects.map(enrichProject);
}

export function getProjectBySlug(slug: string): EnrichedProjectOpportunity | undefined {
  const project = projects.find((item) => item.slug === slug);
  return project ? enrichProject(project) : undefined;
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((project) => project.category))];
}

export function filterProjects(filters: ProjectFilterInput): EnrichedProjectOpportunity[] {
  const keyword = filters.keyword?.trim() ?? "";
  const category = filters.category?.trim() ?? "";

  return getAllProjects().filter((project) => {
    const matchKeyword = matchesKeyword(project, keyword);
    const matchCategory = category ? normalize(project.category) === normalize(category) : true;

    return matchKeyword && matchCategory;
  });
}

export function getTodayRadarProjects(limit = 3): EnrichedProjectOpportunity[] {
  return getAllProjects()
    .sort((a, b) => {
      const scoreA = a.commercialPotential * 0.35 + a.chineseMarketOpportunity * 0.35 + a.seoPotential * 0.3;
      const scoreB = b.commercialPotential * 0.35 + b.chineseMarketOpportunity * 0.35 + b.seoPotential * 0.3;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getFeaturedProjects(limit = 6): EnrichedProjectOpportunity[] {
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
    .filter((project): project is EnrichedProjectOpportunity => Boolean(project));

  if (picked.length >= limit) {
    return picked.slice(0, limit);
  }

  const fallback = getAllProjects().filter((project) => !picked.some((item) => item.slug === project.slug));
  return [...picked, ...fallback].slice(0, limit);
}

export function getBeginnerFriendlyRanking(limit = 5): EnrichedProjectOpportunity[] {
  return getAllProjects().sort((a, b) => b.beginnerFriendly - a.beginnerFriendly).slice(0, limit);
}

export function getLowCompetitionRanking(limit = 5): EnrichedProjectOpportunity[] {
  return getAllProjects().sort((a, b) => a.competitionIndex - b.competitionIndex).slice(0, limit);
}

export function getToolSiteFitRanking(limit = 5): EnrichedProjectOpportunity[] {
  return getAllProjects()
    .sort((a, b) => {
      const scoreA = a.seoPotential * 0.55 + a.chineseMarketOpportunity * 0.25 + a.beginnerFriendly * 0.2;
      const scoreB = b.seoPotential * 0.55 + b.chineseMarketOpportunity * 0.25 + b.beginnerFriendly * 0.2;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getAvoidForBeginners(limit = 5): EnrichedProjectOpportunity[] {
  return getAllProjects()
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
