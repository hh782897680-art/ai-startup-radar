import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "隐私政策 | AI创业雷达",
  description: "AI创业雷达隐私政策。",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">法律信息</p>
        <h1>隐私政策</h1>
        <p>最后更新：2026年5月31日</p>
      </section>

      <article className="copy-panel">
        <section>
          <h2>1. 网站性质</h2>
          <p>AI创业雷达当前为静态内容站点，主要提供项目研究信息。</p>
        </section>

        <section>
          <h2>2. 账号与支付</h2>
          <p>当前版本不提供登录、注册和支付功能，不收集支付信息。</p>
        </section>

        <section>
          <h2>3. 数据收集</h2>
          <p>当前 MVP 不接数据库。若未来新增统计能力，将在本页明确说明范围与用途。</p>
        </section>

        <section>
          <h2>4. 外部链接</h2>
          <p>页面可能包含第三方链接，第三方网站的隐私政策不受本站控制。</p>
        </section>
      </article>
    </Container>
  );
}
