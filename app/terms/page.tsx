import { SectionHeader } from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Use | AI Startup Radar",
  description:
    "Review the terms of use for AI Startup Radar, including educational scope and no guaranteed outcome disclaimer.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container page-stack">
      <SectionHeader eyebrow="Legal" title="Terms of Use" />

      <section className="content-panel prose-panel">
        <p>Last updated: May 31, 2026</p>

        <h2>1. Informational purpose</h2>
        <p>
          Content on AI Startup Radar is provided for educational and informational purposes. It is intended to help users explore AI
          startup ideas and implementation approaches.
        </p>

        <h2>2. No guaranteed results</h2>
        <p>
          AI Startup Radar does not guarantee revenue, business success, growth outcomes, or market fit from any idea presented on the
          site.
        </p>

        <h2>3. User responsibility</h2>
        <p>
          Users are responsible for independently validating any idea before investing time, money, or resources into a project.
        </p>

        <h2>4. No professional advice</h2>
        <p>
          Content on this site is not financial, legal, tax, accounting, or business advice. For professional guidance, consult licensed
          advisors.
        </p>

        <h2>5. External links disclaimer</h2>
        <p>
          The site may link to third-party resources. AI Startup Radar is not responsible for the availability, accuracy, or policies of
          external websites.
        </p>

        <h2>6. Changes to these terms</h2>
        <p>
          Terms may be updated as the product evolves. Continued use of the site after updates indicates acceptance of revised terms.
        </p>
      </section>
    </div>
  );
}
