import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IdeaCard } from "@/components/IdeaCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllCategories, getCategoryBySlug, getIdeasByCategory } from "@/lib/ideas";
import { buildPageMetadata, truncateDescription } from "@/lib/seo";

type CategoryDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryDetailPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return buildPageMetadata({
      title: "Category Not Found | AI Startup Radar",
      description: "The requested category page could not be found.",
      path: `/categories/${params.slug}`,
    });
  }

  const description = truncateDescription(
    `${category.description} Explore ${category.ideaCount} practical AI startup ideas in this category.`,
  );

  return buildPageMetadata({
    title: `${category.name} Ideas | AI Startup Radar`,
    description,
    path: `/categories/${category.slug}`,
    keywords: [category.name, "ai startup ideas", "micro saas opportunities"],
  });
}

export default function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const ideas = getIdeasByCategory(category.name);

  return (
    <div className="container page-stack">
      <SectionHeader
        eyebrow="Category"
        title={category.name}
        description={`${category.description} ${category.ideaCount} ideas available.`}
      />

      <div className="card-grid">
        {ideas.map((idea) => (
          <IdeaCard key={idea.slug} idea={idea} />
        ))}
      </div>
    </div>
  );
}
