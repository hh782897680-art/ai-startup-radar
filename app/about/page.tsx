import { SectionHeader } from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About AI Startup Radar",
  description:
    "Learn what AI Startup Radar is, who it is for, how ideas are organized, and how builders should use this resource.",
  path: "/about",
  keywords: ["about ai startup radar", "ai startup ideas resource", "micro saas research hub"],
});

export default function AboutPage() {
  return (
    <div className="container page-stack">
      <SectionHeader
        eyebrow="About"
        title="What AI Startup Radar Is"
        description="AI Startup Radar is a curated content site focused on practical AI startup ideas and clear execution frameworks."
      />

      <section className="content-panel prose-panel">
        <h2>Who this is for</h2>
        <p>
          This site is built for indie hackers, creators, solo founders, and small teams who want structured ways to evaluate AI startup
          opportunities.
        </p>

        <h2>How ideas are organized</h2>
        <p>
          Ideas are grouped by category and enriched with practical fields: target users, pain points, solution framing, MVP features,
          monetization models, traffic channels, SEO keywords, and launch checklists.
        </p>

        <h2>What this site does not promise</h2>
        <p>
          AI Startup Radar does not promise guaranteed revenue, guaranteed growth, or guaranteed business outcomes. Every idea still
          requires market validation and disciplined execution.
        </p>

        <h2>How builders should use the ideas</h2>
        <p>
          Pick one idea aligned with your skill set, keep scope small, ship a focused MVP, and test user demand early through real
          distribution channels.
        </p>
      </section>
    </div>
  );
}
