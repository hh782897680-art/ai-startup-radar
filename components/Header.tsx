"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "AI项目库" },
  { href: "/rankings", label: "项目排行榜" },
  { href: "/guides", label: "新手指南" },
  { href: "/avoid", label: "避坑清单" },
  { href: "/about", label: "关于本站" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="header-inner">
        <div className="brand-wrap">
          <Link href="/" className="site-brand" aria-label="AI创业雷达 首页">
            <span className="brand-dot" aria-hidden="true" />
            <span>AI创业雷达</span>
          </Link>

          <nav className="main-nav" aria-label="主导航">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("nav-link", isLinkActive(pathname, link.href) && "nav-link-active")}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header-right">
          <Button href="/projects" size="sm" className="desktop-cta">
            查看项目
          </Button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div id="mobile-nav" className={cn("mobile-nav-shell", mobileOpen && "mobile-nav-shell-open")}>
        <Container className="mobile-nav-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("mobile-nav-link", isLinkActive(pathname, link.href) && "mobile-nav-link-active")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/projects" onClick={() => setMobileOpen(false)} className="mobile-nav-cta">
            查看项目
          </Button>
        </Container>
      </div>
    </header>
  );
}
