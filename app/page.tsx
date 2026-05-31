import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { RankingList } from "@/components/RankingList";
import { TodayRadar } from "@/components/TodayRadar";
import {
  getAvoidForBeginners,
  getBeginnerFriendlyRanking,
  getFeaturedProjects,
  getLowCompetitionRanking,
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
  const beginnerRanking = getBeginnerFriendlyRanking(5);
  const lowCompetitionRanking = getLowCompetitionRanking(5);
  const toolSiteRanking = getToolSiteFitRanking(5);
  const featuredProjects = getFeaturedProjects(6);
  const avoidProjects = getAvoidForBeginners(4);

  return (
    <Container className="page">
      <section className="hero-mvp premium-card subtle-grid">
        <div className="hero-mvp-left">
          <p className="section-kicker">AI创业雷达</p>
          <h1>
            不要再盲目做项目，
            <br />
            先用雷达找到适合普通人的 AI 机会。
          </h1>
          <p>
            我们把项目机会拆成可比较的维度：商业化潜力、竞争指数、小白友好度、SEO潜力和中文市场空间，
            让你先判断，再动手。
          </p>

          <ul className="hero-checks">
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              发现可落地的开源与工具型项目
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              提供 7 天验证路径，不拍脑袋开工
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              不承诺赚钱，只给可执行拆解
            </li>
          </ul>

          <div className="hero-actions">
            <Button href="/projects">进入 AI项目库</Button>
            <Button href="/rankings" variant="secondary">
              查看项目排行榜
            </Button>
          </div>
        </div>
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
          这是一个中文优先的 AI 项目机会研究站，专注“普通人可执行”的小步验证路径。本站为静态MVP，
          不接 API、不接数据库、不做假登录和假提交。
        </p>
      </section>
    </Container>
  );
}
