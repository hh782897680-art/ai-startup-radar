import { ArrowDown, Radar, Route, ScanSearch } from "lucide-react";
import { Container } from "@/components/Container";
import { OpportunityMatcher } from "@/components/OpportunityMatcher";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI机会匹配器｜测测你适合做哪个 AI 项目",
  description: "通过技能、时间、预算、兴趣和目标，测出你更适合的 AI 项目方向，并生成对应学习路径和 7 天验证计划。",
  path: "/matcher",
  keywords: ["AI机会匹配器", "适合我的AI项目", "AI项目推荐", "AI创业测试", "7天验证计划"],
});

export default function MatcherPage() {
  return (
    <Container className="page matcher-page">
      <section className="matcher-hero premium-card subtle-grid">
        <div className="matcher-hero-copy">
          <p className="hero-status"><span /> AI OPPORTUNITY MATCHER</p>
          <h1>AI机会匹配器</h1>
          <p>
            不是每个 AI 项目都适合所有人。先测清楚你的时间、技能、预算和目标，
            再决定从哪个方向开始。
          </p>
          <a href="#start-matcher" className="btn btn-primary btn-lg">
            开始扫描机会 <ArrowDown size={16} aria-hidden="true" />
          </a>
          <small>6 个问题，约 2 分钟。测试结果仅用于项目方向参考，不构成收益承诺。</small>
        </div>

        <aside className="matcher-hero-radar" aria-label="机会匹配器能力概览">
          <div className="matcher-hero-radar-visual" aria-hidden="true">
            <span className="matcher-hero-ring matcher-hero-ring-one" />
            <span className="matcher-hero-ring matcher-hero-ring-two" />
            <span className="matcher-hero-ring matcher-hero-ring-three" />
            <span className="matcher-hero-axis matcher-hero-axis-x" />
            <span className="matcher-hero-axis matcher-hero-axis-y" />
            <i className="matcher-hero-sweep" />
            <b>6</b>
            <small>画像方向</small>
          </div>
          <div className="matcher-hero-signals">
            <span><Radar size={15} aria-hidden="true" /> 技能与资源匹配</span>
            <span><ScanSearch size={15} aria-hidden="true" /> 主推荐 + 次推荐</span>
            <span><Route size={15} aria-hidden="true" /> 学习路径 + 7 天计划</span>
          </div>
        </aside>
      </section>

      <section id="start-matcher" className="matcher-start-section">
        <div className="section-head">
          <p className="section-kicker">回答 6 个问题</p>
          <h2 className="section-title">让雷达先了解你的真实条件</h2>
          <p>没有标准答案。按你当前能稳定投入的资源选择，结果才更有参考价值。</p>
        </div>
        <OpportunityMatcher />
      </section>
    </Container>
  );
}
