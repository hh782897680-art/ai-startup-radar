import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IdeaCard } from "@/components/IdeaCard";
import { getAllIdeas, getIdeaBySlug, getRelatedIdeas } from "@/lib/ideas";
import { buildPageMetadata, truncateDescription } from "@/lib/seo";

type IdeaDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllIdeas().map((idea) => ({ slug: idea.slug }));
}

export function generateMetadata({ params }: IdeaDetailPageProps): Metadata {
  const idea = getIdeaBySlug(params.slug);

  if (!idea) {
    return buildPageMetadata({
      title: "Idea Not Found | AI Startup Radar",
      description: "The requested idea page could not be found.",
      path: `/ideas/${params.slug}`,
    });
  }

  const description = truncateDescription(
    `${idea.shortDescription} Category: ${idea.category}. Best for ${idea.targetUsers.join(", ")}.`,
    165,
  );

  return buildPageMetadata({
    title: `${idea.title} | AI Startup Radar`,
    description,
    path: `/ideas/${idea.slug}`,
    keywords: idea.seoKeywords,
    type: "article",
  });
}

export default function IdeaDetailPage({ params }: IdeaDetailPageProps) {
  const idea = getIdeaBySlug(params.slug);

  if (!idea) {
    notFound();
  }

  const relatedIdeas = getRelatedIdeas(idea, 4);

  return (
    <div className="container page-stack">
      <article className="idea-detail">
        <header className="idea-detail-header">
          <p className="section-eyebrow">AI idea breakdown</p>
          <h1>{idea.title}</h1>
          <p>{idea.shortDescription}</p>
          <div className="idea-detail-meta">
            <span className="pill">{idea.category}</span>
            <span>
              <strong>Difficulty:</strong> {idea.difficulty}
            </span>
            <span>
              <strong>Launch speed:</strong> {idea.launchSpeed}
            </span>
            <span>
              <strong>Estimated build time:</strong> {idea.estimatedBuildTime}
            </span>
          </div>
        </header>

        <section>
          <h2>Idea overview</h2>
          <p>{idea.shortDescription}</p>
        </section>

        <section>
          <h2>Who it is for</h2>
          <ul>
            {idea.targetUsers.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Pain point</h2>
          <p>{idea.painPoint}</p>
        </section>

        <section>
          <h2>Solution</h2>
          <p>{idea.solution}</p>
        </section>

        <section>
          <h2>MVP features</h2>
          <ul>
            {idea.mvpFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Monetization model</h2>
          <ul>
            {idea.monetization.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Traffic channels</h2>
          <ul>
            {idea.trafficChannels.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>SEO keywords</h2>
          <ul className="keyword-list">
            {idea.seoKeywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Build difficulty</h2>
          <p>
            This idea is currently rated <strong>{idea.difficulty}</strong> difficulty with a <strong>{idea.launchSpeed}</strong>{" "}
            launch profile. A realistic first build can be shipped in about <strong>{idea.estimatedBuildTime}</strong>.
          </p>
        </section>

        <section>
          <h2>Why now</h2>
          <p>{idea.whyNow}</p>
        </section>

        <section>
          <h2>Launch checklist</h2>
          <ul>
            {idea.launchChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <section>
        <h2>Related ideas</h2>
        <div className="card-grid">
          {relatedIdeas.map((relatedIdea) => (
            <IdeaCard key={relatedIdea.slug} idea={relatedIdea} />
          ))}
        </div>
      </section>

      <section className="idea-back-link">
        <Link href="/ideas" className="button-secondary">
          Back to all ideas
        </Link>
        <Link href={`/categories/${idea.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-link">
          Explore more in {idea.category}
        </Link>
      </section>
    </div>
  );
}
