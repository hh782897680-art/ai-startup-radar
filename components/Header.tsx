"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const primaryNavLinks = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "AI项目库" },
  { href: "/rankings", label: "项目排行榜" },
  { href: "/match", label: "匹配测试" },
  { href: "/learn", label: "学习地图" },
  { href: "/glossary", label: "术语库" },
  { href: "/tutorials", label: "实战教程" },
];

const secondaryNavLinks = [
  { href: "/blog", label: "关键词文章" },
  { href: "/guides", label: "新手指南" },
  { href: "/avoid", label: "避坑清单" },
  { href: "/about", label: "关于本站" },
];

const mobileNavLinks = [...primaryNavLinks, ...secondaryNavLinks];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreActive = secondaryNavLinks.some((link) => isLinkActive(pathname, link.href));

  return (
    <header className="site-header">
      <Container className="header-inner">
        <div className="brand-wrap">
          <Link href="/" className="site-brand" aria-label="AI创业雷达 首页">
            <span className="brand-dot" aria-hidden="true" />
            <span>AI创业雷达</span>
          </Link>

          <nav className="main-nav" aria-label="主导航">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("nav-link", isLinkActive(pathname, link.href) && "nav-link-active")}
              >
                {link.label}
              </Link>
            ))}
            <div className="nav-more">
              <button
                type="button"
                className={cn("nav-link nav-more-button", moreActive && "nav-link-active")}
                aria-expanded={moreOpen}
                aria-controls="nav-more-menu"
                onClick={() => setMoreOpen((current) => !current)}
              >
                更多 <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div id="nav-more-menu" className={cn("nav-more-menu", moreOpen && "nav-more-menu-open")}>
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn("nav-more-link", isLinkActive(pathname, link.href) && "nav-more-link-active")}
                    onClick={() => setMoreOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="header-right">
          <Button href="/match" size="sm" className="desktop-cta">
            测一测
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
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("mobile-nav-link", isLinkActive(pathname, link.href) && "mobile-nav-link-active")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/match" onClick={() => setMobileOpen(false)} className="mobile-nav-cta">
            测一测适合我的项目
          </Button>
        </Container>
      </div>
    </header>
  );
}
