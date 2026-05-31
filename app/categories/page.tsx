import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllCategories } from "@/lib/ideas";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Idea Categories | AI Startup Radar",
  description:
    "Browse AI startup idea categories, compare idea counts, and explore opportunities by workflow and business model.",
  path: "/categories",
  keywords: ["ai idea categories", "micro saas categories", "ai business opportunity types"],
});

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="container page-stack">
      <SectionHeader
        eyebrow="Category Directory"
        title="AI Startup Idea Categories"
        description="Explore the full category map and drill into the idea sets that best match your goals and skill level."
      />

      <div className="card-grid category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
