import Link from "next/link";
import { Container } from "@/components/Container";

const links = {
  product: [
    { href: "/projects", label: "AI项目库" },
    { href: "/rankings", label: "项目排行榜" },
    { href: "/guides", label: "新手指南" },
    { href: "/avoid", label: "不建议新手做的项目" },
  ],
  company: [{ href: "/about", label: "关于本站" }],
  legal: [
    { href: "/privacy-policy", label: "隐私政策" },
    { href: "/terms", label: "使用条款" },
  ],
};

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <section className="footer-intro">
            <p className="footer-brand">AI创业雷达</p>
            <p>发现、评分、拆解适合普通人的 AI 项目机会，帮助你先判断机会再动手做产品。</p>
            <p className="footer-note">不承诺收益，只提供可验证的项目研究与行动框架。</p>
          </section>

          <section>
            <p className="footer-heading">核心页面</p>
            <ul className="footer-links">
              {links.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="footer-heading">网站信息</p>
            <ul className="footer-links">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="footer-heading">法律</p>
            <ul className="footer-links">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AI创业雷达</p>
          <p>Static MVP · 无API · 无数据库 · 无虚假功能</p>
        </div>
      </Container>
    </footer>
  );
}
