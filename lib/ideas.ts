import {
  IDEA_CATEGORIES,
  ideas,
  type Idea,
  type IdeaDifficulty,
  type IdeaLaunchSpeed,
} from "@/data/ideas";

export type IdeaFilterInput = {
  category?: string;
  difficulty?: IdeaDifficulty | string;
  launchSpeed?: IdeaLaunchSpeed | string;
  keyword?: string;
};

export type CategorySummary = {
  name: string;
  slug: string;
  description: string;
  ideaCount: number;
};

const FEATURED_SLUGS = [
  "shopify-seo-copy-assistant",
  "saas-faq-builder",
  "meeting-summary-workspace",
  "long-page-summarizer-extension",
  "course-outline-builder",
  "code-review-explainer",
] as const;

const normalizedIdeas = [...ideas].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function resolveCategoryName(category: string): string | null {
  const normalizedCategory = normalize(category);

  const categoryByName = IDEA_CATEGORIES.find(
    (item) => normalize(item.name) === normalizedCategory,
  );
  if (categoryByName) {
    return categoryByName.name;
  }

  const categoryBySlug = IDEA_CATEGORIES.find(
    (item) => normalize(item.slug) === normalizedCategory,
  );

  return categoryBySlug?.name ?? null;
}

function matchesKeyword(idea: Idea, keyword: string): boolean {
  if (!keyword) {
    return true;
  }

  const normalizedKeyword = normalize(keyword);
  const searchableFields = [
    idea.title,
    idea.category,
    idea.shortDescription,
    idea.painPoint,
    idea.solution,
    idea.whyNow,
    ...idea.targetUsers,
    ...idea.monetization,
    ...idea.trafficChannels,
    ...idea.seoKeywords,
  ]
    .join(" ")
    .toLowerCase();

  return searchableFields.includes(normalizedKeyword);
}

export function getAllIdeas(): Idea[] {
  return normalizedIdeas;
}

export function getFeaturedIdeas(): Idea[] {
  return FEATURED_SLUGS.map((slug) => getIdeaBySlug(slug)).filter(
    (idea): idea is Idea => Boolean(idea),
  );
}

export function getLatestIdeas(limit = 8): Idea[] {
  return normalizedIdeas.slice(0, limit);
}

export function getIdeaBySlug(slug: string): Idea | undefined {
  return normalizedIdeas.find((idea) => idea.slug === slug);
}

export function getIdeasByCategory(category: string): Idea[] {
  const resolvedCategory = resolveCategoryName(category);
  if (!resolvedCategory) {
    return [];
  }

  return normalizedIdeas.filter((idea) => idea.category === resolvedCategory);
}

export function getAllCategories(): CategorySummary[] {
  return IDEA_CATEGORIES.map((category) => ({
    ...category,
    ideaCount: normalizedIdeas.filter((idea) => idea.category === category.name).length,
  }));
}

export function getRelatedIdeas(currentIdea: Idea, limit = 4): Idea[] {
  const relatedFromSlugs = currentIdea.relatedSlugs
    .map((slug) => getIdeaBySlug(slug))
    .filter((idea): idea is Idea => Boolean(idea));

  if (relatedFromSlugs.length >= limit) {
    return relatedFromSlugs.slice(0, limit);
  }

  const fallbackSameCategory = normalizedIdeas.filter(
    (idea) => idea.category === currentIdea.category && idea.slug !== currentIdea.slug,
  );

  const merged = [...relatedFromSlugs, ...fallbackSameCategory].filter(
    (idea, index, array) => array.findIndex((item) => item.slug === idea.slug) === index,
  );

  return merged.slice(0, limit);
}

export function searchIdeas(query: string): Idea[] {
  return normalizedIdeas.filter((idea) => matchesKeyword(idea, query));
}

export function filterIdeas(filters: IdeaFilterInput): Idea[] {
  const { category, difficulty, launchSpeed, keyword } = filters;

  const resolvedCategory = category ? resolveCategoryName(category) : null;

  return normalizedIdeas.filter((idea) => {
    const matchesCategory = resolvedCategory ? idea.category === resolvedCategory : true;
    const matchesDifficulty = difficulty
      ? normalize(idea.difficulty) === normalize(difficulty)
      : true;
    const matchesLaunchSpeed = launchSpeed
      ? normalize(idea.launchSpeed) === normalize(launchSpeed)
      : true;

    return matchesCategory && matchesDifficulty && matchesLaunchSpeed && matchesKeyword(idea, keyword ?? "");
  });
}

export function getCategoryBySlug(slug: string): CategorySummary | undefined {
  return getAllCategories().find((category) => category.slug === slug);
}
