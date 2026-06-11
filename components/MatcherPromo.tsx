import { ArrowRight, Clock3, Radar, Route, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/Button";

export function MatcherPromo() {
  return (
    <section className="matcher-promo premium-card subtle-grid">
      <div className="matcher-promo-copy">
        <p className="section-kicker">AI 机会匹配器</p>
        <h2>不知道从哪个 AI 项目开始？</h2>
        <p>
          回答 6 个问题，AI创业雷达会根据你的技术基础、时间、预算和目标，
          推荐更适合你的项目方向、学习路径和 7 天验证计划。
        </p>
        <Button href="/matcher" size="lg">
          开始测试 <ArrowRight size={16} aria-hidden="true" />
        </Button>
        <small>测试结果仅用于项目方向参考，不构成收益承诺。</small>
      </div>

      <div className="matcher-promo-signals" aria-label="匹配器输出内容">
        <article>
          <i><SlidersHorizontal size={18} aria-hidden="true" /></i>
          <span>01</span>
          <strong>6 个资源问题</strong>
          <p>技能、时间、兴趣、预算、优势和目标。</p>
        </article>
        <article>
          <i><Radar size={18} aria-hidden="true" /></i>
          <span>02</span>
          <strong>主推荐 + 次推荐</strong>
          <p>从 6 类机会画像中找到更适合的起点。</p>
        </article>
        <article>
          <i><Route size={18} aria-hidden="true" /></i>
          <span>03</span>
          <strong>学习与验证路径</strong>
          <p>给出站内链接和可以复制的 7 天计划。</p>
        </article>
        <article>
          <i><Clock3 size={18} aria-hidden="true" /></i>
          <span>约 2 分钟</span>
          <strong>无需登录</strong>
          <p>答案只在当前页面计算，刷新即可重来。</p>
        </article>
      </div>
    </section>
  );
}
