import type { EnrichedProjectOpportunity } from "@/lib/projects";

export type CodeRequirement = "none" | "low" | "high";
export type StartupCost = "low" | "medium" | "high";
export type TrafficType = "seo" | "social" | "video" | "community" | "sales";
export type MonetizationType = "subscription" | "service" | "template" | "training" | "affiliate" | "leads";

export type ProjectDecisionProfile = {
  projectType: string;
  beginnerSuitable: boolean;
  codeRequirement: CodeRequirement;
  startupCost: StartupCost;
  trafficTypes: TrafficType[];
  monetizationTypes: MonetizationType[];
  toolSiteFit: number;
  serviceFit: number;
  socialFit: number;
  englishSiteFit: number;
  notFor: string[];
};

const highCodeProjects = new Set(["ragflow", "open-webui"]);
const lowCodeProjects = new Set(["dify", "flowise", "anythingllm", "comfyui"]);
const mediumCostProjects = new Set(["open-webui", "dify", "flowise", "anythingllm", "comfyui"]);
const highCostProjects = new Set(["ragflow"]);
const englishFirstProjects = new Set([
  "ai-shopify-seo-assistant",
  "ai-etsy-listing-optimizer",
  "ai-local-business-review-responder",
  "ai-youtube-shorts-script-generator",
  "ai-seo-brief-generator",
  "ai-niche-calculator-builder",
]);

export const codeRequirementLabels: Record<CodeRequirement, string> = {
  none: "无需代码",
  low: "少量代码",
  high: "需要代码",
};

export const startupCostLabels: Record<StartupCost, string> = {
  low: "低预算",
  medium: "中预算",
  high: "较高预算",
};

export const trafficTypeLabels: Record<TrafficType, string> = {
  seo: "SEO",
  social: "X / 小红书",
  video: "视频内容",
  community: "社群",
  sales: "销售 / 地推",
};

export const monetizationTypeLabels: Record<MonetizationType, string> = {
  subscription: "订阅",
  service: "服务",
  template: "模板",
  training: "培训",
  affiliate: "广告 / 联盟",
  leads: "线索",
};

function includesAny(value: string, patterns: RegExp[]) {
  return patterns.some((pattern) => pattern.test(value));
}

function getTrafficTypes(project: EnrichedProjectOpportunity): TrafficType[] {
  const text = project.trafficChannels.join(" ");
  const types: TrafficType[] = [];

  if (includesAny(text, [/SEO/i, /关键词/, /搜索/])) types.push("seo");
  if (includesAny(text, [/小红书/, /X\//, /社媒/, /抖音/])) types.push("social");
  if (includesAny(text, [/B站/, /YouTube/i, /短视频/, /视频/])) types.push("video");
  if (includesAny(text, [/社群/, /论坛/, /微信/, /知乎/, /GitHub/i])) types.push("community");
  if (includesAny(text, [/地推/, /合作/, /峰会/, /客户/, /商家/])) types.push("sales");

  return types.length > 0 ? types : ["community"];
}

function getMonetizationTypes(project: EnrichedProjectOpportunity): MonetizationType[] {
  const text = project.monetizationIdeas.join(" ");
  const types: MonetizationType[] = [];

  if (includesAny(text, [/订阅/, /月度/, /年费/, /席位/])) types.push("subscription");
  if (includesAny(text, [/服务/, /部署/, /顾问/, /代运营/, /交付/, /托管/, /运维/])) types.push("service");
  if (includesAny(text, [/模板/, /工具包/])) types.push("template");
  if (includesAny(text, [/培训/, /课程/, /训练营/, /内训/])) types.push("training");
  if (includesAny(text, [/广告/, /联盟/, /分成/])) types.push("affiliate");
  if (includesAny(text, [/线索/, /咨询/])) types.push("leads");

  return types.length > 0 ? types : ["service"];
}

export function getProjectDecisionProfile(project: EnrichedProjectOpportunity): ProjectDecisionProfile {
  const codeRequirement: CodeRequirement = highCodeProjects.has(project.slug)
    ? "high"
    : lowCodeProjects.has(project.slug)
      ? "low"
      : "none";
  const startupCost: StartupCost = highCostProjects.has(project.slug)
    ? "high"
    : mediumCostProjects.has(project.slug)
      ? "medium"
      : "low";
  const trafficTypes = getTrafficTypes(project);
  const monetizationTypes = getMonetizationTypes(project);
  const toolSiteFit = Number(
    (project.seoPotential * 0.55 + project.beginnerFriendly * 0.25 + (10 - project.competitionIndex) * 0.2).toFixed(1),
  );
  const serviceFit = Number(
    (
      project.commercialPotential * 0.45 +
      (monetizationTypes.includes("service") ? 3.5 : 1.5) +
      (codeRequirement === "high" ? 1 : 0)
    ).toFixed(1),
  );
  const socialFit = Number(
    (
      project.beginnerFriendly * 0.35 +
      project.chineseMarketOpportunity * 0.35 +
      (trafficTypes.includes("social") ? 3 : 1.2)
    ).toFixed(1),
  );
  const englishSiteFit = Number(
    (
      project.seoPotential * 0.4 +
      project.commercialPotential * 0.3 +
      (englishFirstProjects.has(project.slug) ? 3 : 1.2)
    ).toFixed(1),
  );
  const notFor = [
    codeRequirement === "high" ? "暂时不愿处理部署、接口或技术排错的人" : "希望一次做完复杂平台、忽略用户验证的人",
    project.competitionIndex >= 7 ? "没有明确垂直场景、只想复制通用功能的人" : "无法接触目标用户、也不愿主动访谈的人",
    startupCost === "high" ? "当前没有测试预算或真实行业资料的人" : "期待短期确定收益、不接受小步试错的人",
  ];

  return {
    projectType: project.category,
    beginnerSuitable: project.beginnerFriendly >= 7.5,
    codeRequirement,
    startupCost,
    trafficTypes,
    monetizationTypes,
    toolSiteFit,
    serviceFit,
    socialFit,
    englishSiteFit,
    notFor,
  };
}
