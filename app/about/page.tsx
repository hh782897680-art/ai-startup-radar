import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "关于本站 | AI创业雷达",
  description: "AI创业雷达的定位、方法和边界说明。",
  path: "/about",
  keywords: ["关于AI创业雷达", "AI项目研究站", "项目验证方法"],
});

export default function AboutPage() {
  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">关于本站</p>
        <h1>为什么做 AI创业雷达</h1>
        <p>
          大多数人不是缺执行力，而是缺“先判断机会”的方法。AI创业雷达把项目机会结构化，帮助你少走弯路。
        </p>
      </section>

      <article className="copy-panel">
        <section>
          <h2>本站定位</h2>
          <p>
            这是一个中文优先的 AI 项目机会研究站，专注发现、评分、拆解适合普通人的 AI 项目方向。
          </p>
        </section>

        <section>
          <h2>本站不做什么</h2>
          <ul>
            <li>不承诺赚钱结果。</li>
            <li>不把参考评分包装成官方数据。</li>
            <li>不建议在没有验证需求前投入大量开发成本。</li>
          </ul>
        </section>

        <section>
          <h2>建议使用方式</h2>
          <ul>
            <li>先看排行榜，缩小方向。</li>
            <li>通过学习地图和术语库补齐当前项目需要的能力。</li>
            <li>再看项目拆解，明确验证路径。</li>
            <li>按 7 天验证流程做最小实验。</li>
          </ul>
        </section>

        <section>
          <h2>开源资源参考</h2>
          <p>
            开源资源参考遵循其原始许可证，本站仅做中文化学习路径整理与实战化改写，
            不直接复制原仓库 README 或将资源列表包装成本站原创。
          </p>
        </section>
      </article>
    </Container>
  );
}
