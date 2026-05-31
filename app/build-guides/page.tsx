import { SectionHeader } from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Build Guides | AI Startup Radar",
  description:
    "Practical guides on validating AI startup ideas, scoping MVPs, finding traffic channels, and avoiding early overbuilding.",
  path: "/build-guides",
  keywords: ["ai startup build guide", "micro saas validation", "mvp launch checklist"],
});

const guides = [
  {
    title: "How to validate an AI startup idea",
    body: "Start with one pain point, interview potential users, and confirm that the problem is frequent, expensive, and urgent enough to solve.",
  },
  {
    title: "How to choose a small MVP",
    body: "Build one workflow that delivers a clear outcome. Exclude edge cases and keep version one narrow enough to launch in weeks, not months.",
  },
  {
    title: "How to find traffic channels",
    body: "Match channels to user intent: search for problem-aware users, communities for discussion-led discovery, and social for demonstration-led interest.",
  },
  {
    title: "How to write SEO pages for a micro SaaS",
    body: "Create pages around real jobs-to-be-done, use natural language, include examples, and connect content directly to your product workflow.",
  },
  {
    title: "How to avoid building too much too early",
    body: "Define a hard scope boundary, measure usage on core features first, and postpone secondary modules until users repeatedly ask for them.",
  },
];

export default function BuildGuidesPage() {
  return (
    <div className="container page-stack">
      <SectionHeader
        eyebrow="Resources"
        title="Build Guides"
        description="Execution-focused guidance for turning an idea into a testable product with realistic scope."
      />

      <div className="guide-grid">
        {guides.map((guide) => (
          <article key={guide.title} className="guide-card">
            <h2>{guide.title}</h2>
            <p>{guide.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
