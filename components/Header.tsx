import Link from "next/link";

const navLinks = [
  { href: "/ideas", label: "AI Ideas" },
  { href: "/categories", label: "Categories" },
  { href: "/build-guides", label: "Build Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="AI Startup Radar Home">
          <span className="brand-mark" aria-hidden="true">
            AR
          </span>
          <span>AI Startup Radar</span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
