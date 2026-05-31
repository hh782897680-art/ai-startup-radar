import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { IdeaCard } from "@/components/IdeaCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllCategories, getFeaturedIdeas, getLatestIdeas } from "@/lib/ideas";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Startup Radar | Practical AI Startup Ideas and Micro SaaS Opportunities",
  description:
    "Discover practical AI startup ideas, micro SaaS ideas, AI tool opportunities, MVP features, monetization models, SEO keywords, and launch checklists.",
  path: "/",
  keywords: [
    "ai startup ideas",
    "micro saas ideas",
    "ai business opportunities",
    "ai tool ideas",
  ],
});

export default function HomePage() {
  const featuredIdeas = getFeaturedIdeas();
  const categories = getAllCategories();
  const latestIdeas = getLatestIdeas(8);
  const previewIdea = featuredIdeas[0];

  return (
    <div className="container page-stack">
      <section className="hero-panel">
        <div className="hero-content">
          <p className="section-eyebrow">AI startup ideas database</p>
          <h1>Discover practical AI startup ideas you can actually build</h1>
          <p>
            Explore micro SaaS opportunities and AI tool concepts by category, difficulty, and launch speed. Each idea includes pain
            points, MVP features, monetization options, traffic channels, SEO keywords, and launch checklists.
          </p>
          <div className="hero-actions">
            <Link href="/ideas" className="button-primary">
              Browse AI Ideas
            </Link>
            <Link href="/categories" className="button-secondary">
              Explore Categories
            </Link>
          </div>
        </div>

        {previewIdea ? (
          <aside className="preview-card" aria-label="Sample idea breakdown preview">
            <p className="preview-label">Sample breakdown preview</p>
            <h2>{previewIdea.title}</h2>
            <p>{previewIdea.shortDescription}</p>
            <ul>
              <li>
                <strong>Category:</strong> {previewIdea.category}
              </li>
              <li>
                <strong>Difficulty:</strong> {previewIdea.difficulty}
              </li>
              <li>
                <strong>Launch speed:</strong> {previewIdea.launchSpeed}
              </li>
              <li>
                <strong>Build time:</strong> {previewIdea.estimatedBuildTime}
              </li>
            </ul>
            <Link href={`/ideas/${previewIdea.slug}`} className="text-link">
              Read this idea
            </Link>
          </aside>
        ) : null}
      </section>

      <section>
        <SectionHeader
          eyebrow="Featured"
          title="Featured AI Startup Ideas"
          description="A curated set of practical ideas with clear problem framing and realistic MVP scope."
        />
        <div className="card-grid">
          {featuredIdeas.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Categories"
          title="Explore by Category"
          description="Browse idea families based on your product direction and skill profile."
        />
        <div className="card-grid category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Latest"
          title="Latest AI Business Ideas"
          description="Freshly added ideas you can review, adapt, and test with a focused MVP."
        />
        <ul className="latest-list">
          {latestIdeas.map((idea) => (
            <li key={idea.slug}>
              <Link href={`/ideas/${idea.slug}`}>{idea.title}</Link>
              <span>
                {idea.category} · {idea.difficulty} · {idea.launchSpeed}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-panel">
        <SectionHeader title="How to Use AI Startup Radar" />
        <ol className="step-list">
          <li>Choose a category that matches your background and interests.</li>
          <li>Read the full business breakdown for one idea.</li>
          <li>Build a small MVP focused on the core user problem.</li>
          <li>Test traffic channels and monetization assumptions with real users.</li>
        </ol>
      </section>

      <section className="content-panel">
        <SectionHeader title="Why This Site Exists" />
        <p>
          AI Startup Radar exists to help builders evaluate opportunities more systematically. It does not promise guaranteed outcomes.
          Instead, it gives structured idea breakdowns so founders can make better decisions before investing significant time or
          money.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeader title="FAQ" />
        <div className="faq-list">
          <article>
            <h3>What is AI Startup Radar?</h3>
            <p>
              AI Startup Radar is a curated database of practical AI startup ideas, micro SaaS opportunities, and AI tool concepts for
              builders.
            </p>
          </article>
          <article>
            <h3>Are these ideas guaranteed to make money?</h3>
            <p>No. Every idea requires validation, execution, and real market feedback. There is no guaranteed income outcome.</p>
          </article>
          <article>
            <h3>Do I need to be a developer?</h3>
            <p>
              Not always. Some ideas are beginner-friendly and can be launched with no-code or low-code tools, while others require
              engineering depth.
            </p>
          </article>
          <article>
            <h3>How should I choose an idea?</h3>
            <p>
              Start with a category you understand, pick a pain point you can validate quickly, and choose a scope you can ship within
              a few weeks.
            </p>
          </article>
          <article>
            <h3>Can I use these ideas for content or products?</h3>
            <p>
              Yes. You can adapt these ideas for educational content, product experiments, and business validation projects.
            </p>
          </article>
          <article>
            <h3>Will this site add AI generators later?</h3>
            <p>
              Potentially. Future versions may add tools and deeper resources, but this stage focuses on a high-quality static idea
              library.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
