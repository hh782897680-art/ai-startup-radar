import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "使用条款 | AI创业雷达",
  description: "AI创业雷达使用条款。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">法律信息</p>
        <h1>使用条款</h1>
        <p>最后更新：2026年5月31日</p>
      </section>

      <article className="copy-panel">
        <section>
          <h2>1. 信息用途</h2>
          <p>本站内容用于项目研究与学习参考，不构成投资、法律或财务建议。</p>
        </section>

        <section>
          <h2>2. 收益声明</h2>
          <p>本站不承诺任何收益或成功结果，用户需自行完成验证并承担决策责任。</p>
        </section>

        <section>
          <h2>3. 用户责任</h2>
          <p>你应根据自身情况判断项目可行性，在投入时间或资金前完成独立评估。</p>
        </section>

        <section>
          <h2>4. 条款更新</h2>
          <p>条款可能随产品迭代更新，继续使用即视为接受更新后的条款。</p>
        </section>
      </article>
    </Container>
  );
}
