import Link from "next/link";
import { IdeaCard } from "@/components/IdeaCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { SectionHeader } from "@/components/SectionHeader";
import { filterIdeas, getAllCategories } from "@/lib/ideas";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Startup Ideas | AI Startup Radar",
  description:
    "Browse practical AI startup ideas, micro SaaS ideas, and AI tool opportunities by category, difficulty, and launch speed.",
  path: "/ideas",
  keywords: ["ai startup ideas", "micro saas ideas", "ai tool ideas", "startup idea database"],
});

type IdeasPageProps = {
  searchParams?: {
    q?: string;
    category?: string;
    difficulty?: string;
    launchSpeed?: string;
  };
};

export default function IdeasPage({ searchParams }: IdeasPageProps) {
  const keyword = searchParams?.q ?? "";
  const category = searchParams?.category ?? "";
  const difficulty = searchParams?.difficulty ?? "";
  const launchSpeed = searchParams?.launchSpeed ?? "";

  const categories = getAllCategories();
  const filteredIdeas = filterIdeas({
    keyword,
    category,
    difficulty,
    launchSpeed,
  });

  return (
    <div className="container page-stack">
      <section>
        <SectionHeader
          eyebrow="Idea Library"
          title="AI Startup Ideas"
          description="Browse practical AI startup ideas, micro SaaS ideas, and AI tool opportunities by category, difficulty, and launch speed."
        />
        <SearchAndFilter
          categories={categories.map((item) => ({ name: item.name, slug: item.slug }))}
          initialKeyword={keyword}
          initialCategory={category}
          initialDifficulty={difficulty}
          initialLaunchSpeed={launchSpeed}
        />
      </section>

      <section>
        <p className="results-count">{filteredIdeas.length} ideas found</p>
        {filteredIdeas.length > 0 ? (
          <div className="card-grid">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea.slug} idea={idea} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No ideas matched your filters yet.</p>
            <Link href="/ideas" className="button-secondary">
              Clear filters
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
