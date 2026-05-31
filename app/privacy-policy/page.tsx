import { SectionHeader } from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | AI Startup Radar",
  description:
    "Read the privacy policy for AI Startup Radar, including current data handling scope for this static content website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container page-stack">
      <SectionHeader eyebrow="Legal" title="Privacy Policy" />

      <section className="content-panel prose-panel">
        <p>Last updated: May 31, 2026</p>

        <h2>1. Website scope</h2>
        <p>
          AI Startup Radar is currently a static content website. It provides educational content about AI startup ideas and build
          strategies.
        </p>

        <h2>2. No account requirement</h2>
        <p>This site does not require user registration, login, or account creation in its current version.</p>

        <h2>3. No payment information collection</h2>
        <p>This site does not collect payment card details or billing information in its current version.</p>

        <h2>4. Data collection in current version</h2>
        <p>
          This version is designed as a static content experience. If analytics tools are added in the future, this policy will be
          updated to describe what is collected and why.
        </p>

        <h2>5. External links</h2>
        <p>
          Some pages may include links to third-party websites. AI Startup Radar is not responsible for the privacy practices of those
          external websites.
        </p>

        <h2>6. Policy updates</h2>
        <p>
          This policy may be updated as the product evolves. Material updates will be reflected on this page with a new update date.
        </p>
      </section>
    </div>
  );
}
