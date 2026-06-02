import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { RankingList } from "@/components/RankingList";
import { SubscribeCta } from "@/components/SubscribeCta";
import { TodayRadar } from "@/components/TodayRadar";
import { getFeaturedArticles } from "@/lib/articles";
import {
  getAvoidForBeginners,
  getBeginnerFriendlyRanking,
  getFeaturedProjects,
  getLowCompetitionRanking,
  getProjectOverallScore,
  getTodayRadarProjects,
  getToolSiteFitRanking,
} from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI创业雷达 | 发现、评分、拆解 AI 项目机会",
  description:
    "AI创业雷达：发现、评分、拆解适合普通人的 AI 项目机会。包含项目库、排行榜、7天验证流程与新手避坑建议。",
  path: "/",
  keywords: [
    "AI创业雷达",
    "AI项目机会",
    "AI项目拆解",
    "项目排行榜",
    "7天验证",
  ],
});

const steps = ["发现项目", "判断机会", "7天验证", "做MVP", "推广测试"];

export default function HomePage() {
  const todayRadar = getTodayRadarProjects(3);
  const todayPick = todayRadar[0];
  const beginnerRanking = getBeginnerFriendlyRanking(3);
  const lowCompetitionRanking = getLowCompetitionRanking(3);
  const toolSiteRanking = getToolSiteFitRanking(3);
  const featuredProjects = getFeaturedProjects(6);
  const avoidProjects = getAvoidForBeginners(4);
  const featuredArticles = getFeaturedArticles(6);

  return (
    <Container className="page">
      <section className="hero-mvp premium-card subtle-grid">
        <div className="hero-mvp-left">
          <p className="section-kicker">AI创业雷达</p>
          <h1>
            找到下一个
            <br />
            值得你动手的 AI 项目
          </h1>
          <p>
            AI创业雷达从 AI 工具、开源项目和海外小生意中，筛选适合普通人的项目机会，拆解流量、变现、难度和 7 天验证路径。
          </p>

          <div className="hero-actions">
            <Button href="#today-radar">查看今日项目</Button>
            <Button href="/rankings" variant="secondary">
              浏览项目榜单
            </Button>
          </div>
        </div>
        {todayPick ? (
          <aside className="today-insight-card" aria-label="今日雷达卡">
            <div className="today-insight-head">
              <span>本周精选项目</span>
              <strong>{todayPick.name}</strong>
              <small>站内参考评分，仅供参考</small>
            </div>
            <div className="today-score-panel">
              <span>综合评分</span>
              <strong>{getProjectOverallScore(todayPick)}</strong>
            </div>
            <dl className="today-metric-grid">
              <div>
                <dt>商业化潜力</dt>
                <dd>{todayPick.commercialPotential.toFixed(1)}</dd>
              </div>
              <div>
                <dt>竞争指数</dt>
                <dd>{todayPick.competitionIndex.toFixed(1)}</dd>
              </div>
              <div>
                <dt>小白友好</dt>
                <dd>{todayPick.beginnerFriendly.toFixed(1)}</dd>
              </div>
              <div>
                <dt>SEO潜力</dt>
                <dd>{todayPick.seoPotential.toFixed(1)}</dd>
              </div>
            </dl>
            <div className="today-why">
              <span>为什么值得看</span>
              <p>{todayPick.whyItWorks}</p>
            </div>
          </aside>
        ) : null}
      </section>

      <TodayRadar items={todayRadar} />

      <section>
        <div className="section-head">
          <p className="section-kicker">AI项目榜单</p>
          <h2 className="section-title">先看榜单，再决定投入方向</h2>
        </div>
        <div className="rankings-grid">
          <RankingList
            title="小白友好榜"
            description="上手门槛更低，适合先做验证型项目。"
            items={beginnerRanking}
            scoreLabel="友好度"
            scoreOf={(project) => project.beginnerFriendly}
          />
          <RankingList
            title="低竞争榜"
            description="竞争指数更低，更容易做差异化切入。"
            items={lowCompetitionRanking}
            scoreLabel="竞争"
            scoreOf={(project) => project.competitionIndex}
          />
          <RankingList
            title="适合工具站榜"
            description="SEO潜力与中文市场机会更高，适合做工具站。"
            items={toolSiteRanking}
            scoreLabel="工具站适配"
            scoreOf={(project) => (project.seoPotential + project.chineseMarketOpportunity) / 2}
          />
        </div>
      </section>

      <section>
        <div className="section-head">
          <p className="section-kicker">项目拆解卡片</p>
          <h2 className="section-title">先看 6 个高价值项目拆解</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <p className="section-kicker">关键词文章</p>
          <h2 className="section-title">用长尾关键词持续拿搜索流量</h2>
        </div>
        <div className="article-grid article-grid-compact">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="article-card premium-card">
              <div className="article-card-meta">
                <span>{article.keyword}</span>
              </div>
              <h3>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Button href="/blog" variant="secondary">
            查看全部关键词文章
          </Button>
        </div>
      </section>

      <SubscribeCta />

      <section>
        <div className="section-head">
          <p className="section-kicker">新手使用流程</p>
          <h2 className="section-title">五步走，避免“做了再后悔”</h2>
        </div>
        <div className="flow-grid">
          {steps.map((step, index) => (
            <article key={step} className="flow-step premium-card">
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <p className="section-kicker">不建议新手做的项目</p>
          <h2 className="section-title">这些方向先谨慎</h2>
        </div>
        <div className="avoid-list premium-card">
          {avoidProjects.map((project) => (
            <article key={project.slug} className="avoid-item">
              <h3>{project.name}</h3>
              <p>{project.risks[0]}</p>
            </article>
          ))}
          <Button href="/avoid" variant="secondary" size="sm">
            查看完整避坑清单
          </Button>
        </div>
      </section>

      <section className="about-brief premium-card">
        <p className="section-kicker">关于本站</p>
        <h2>AI创业雷达是什么？</h2>
        <p>
          这是一个中文优先的 AI 项目机会研究站，专注“普通人可执行”的小步验证路径。本站内容用于项目研究与学习参考，
          不承诺收益，建议你先做小范围验证，再决定是否投入更多时间。
        </p>
      </section>
    </Container>
  );
}
