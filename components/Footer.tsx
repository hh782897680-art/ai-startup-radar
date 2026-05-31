import Link from "next/link";

const productLinks = [
  { href: "/ideas", label: "AI Ideas" },
  { href: "/categories", label: "Categories" },
];

const resourceLinks = [
  { href: "/build-guides", label: "Build Guides" },
  { href: "/about", label: "About" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">AI Startup Radar</p>
          <p className="footer-copy">
            A curated resource for practical AI startup ideas, micro SaaS opportunities, and execution-focused build guidance.
          </p>
        </div>

        <div>
          <p className="footer-title">Product</p>
          <ul className="footer-links">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Resources</p>
          <ul className="footer-links">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Legal</p>
          <ul className="footer-links">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} AI Startup Radar. All rights reserved.</p>
      </div>
    </footer>
  );
}
