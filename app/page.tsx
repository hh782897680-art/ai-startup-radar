import Link from "next/link";
import { ArrowRight, BarChart3, Compass, FlaskConical, Layers3, Radar, Rocket, Search, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/FaqSchema";
import { LearningMapPromo } from "@/components/LearningMapPromo";
import { MatcherPromo } from "@/components/MatcherPromo";
import { ProjectCard } from "@/components/ProjectCard";
import { RankingList } from "@/components/RankingList";
import { SubscribeCta } from "@/components/SubscribeCta";
import { TodayRadar } from "@/components/TodayRadar";
import { getFeaturedArticles } from "@/lib/articles";
import {
  getAvoidForBeginners,
  getBeginnerFriendlyRanking,
  getFeaturedProjects,
  getAllProjects,
  getLowCompetitionRanking,
  getProjectOverallScore,
  getTodayRadarProjects,
  getToolSiteFitRanking,
} from "@/lib/projects";
import {
  getProjectDecisionProfile,
  monetizationTypeLabels,
  startupCostLabels,
} from "@/lib/project-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI创业雷达 | 发现 AI 机会，学习 AI 技能，验证 AI 项目",
  description:
    "AI创业雷达：发现、评分、拆解适合普通人的 AI 项目机会，并提供生成式 AI 学习地图、术语库、实战教程与 7 天验证路径。",
  path: "/",
  keywords: [
    "AI创业雷达",
    "AI项目机会",
    "AI项目拆解",
    "项目排行榜",
    "7天验证",
  ],
});

const steps = [
  { title: "发现项目", description: "从项目库、排行榜和每周推荐中建立候选清单。", icon: Search },
  { title: "对比项目", description: "按商业化、竞争、代码门槛和渠道做横向判断。", icon: Layers3 },
  { title: "7天验证", description: "先访谈、做演示、测意愿，再决定是否继续。", icon: FlaskConical },
  { title: "做 MVP", description: "只解决一个明确问题，不先做复杂后台。", icon: Rocket },
  { title: "推广测试", description: "用搜索、社媒或直接销售验证真实反馈。", icon: BarChart3 },
];

const homeFaqs: FaqItem[] = [
  {
    question: "AI创业雷达会保证项目赚钱吗？",
    answer: "不会。本站只提供项目研究、站内评分和验证框架，不承诺收益。任何方向都需要结合你的资源做小范围验证。",
  },
  {
    question: "不会代码也能使用项目库吗？",
    answer: "可以。项目库可按是否需要代码、启动成本和新手友好度筛选，部分方向更适合从内容、模板或服务开始。",
  },
  {
    question: "项目评分依据是什么？",
    answer: "评分来自现有项目数据中的商业化潜力、竞争指数、小白友好度、SEO 潜力和中文市场机会，用于站内相对比较。",
  },
  {
    question: "找到项目后第一步做什么？",
    answer: "先选择一个具体人群，完成 3-5 次访谈，再用最小演示或服务方案验证是否有人愿意继续沟通或付费。",
  },
];

export default function HomePage() {
  const allProjects = getAllProjects();
  const todayRadar = getTodayRadarProjects(3);
  const todayPick = todayRadar[0];
  const beginnerRanking = getBeginnerFriendlyRanking(3);
  const lowCompetitionRanking = getLowCompetitionRanking(3);
  const toolSiteRanking = getToolSiteFitRanking(3);
  const featuredProjects = getFeaturedProjects(6);
  const avoidProjects = getAvoidForBeginners(4);
  const featuredArticles = getFeaturedArticles(6);
  const lowCompetitionCount = allProjects.filter((project) => project.competitionIndex <= 6).length;
  const beginnerCount = allProjects.filter((project) => getProjectDecisionProfile(project).beginnerSuitable).length;

  return (
    <Container className="page">
      <FaqSchema items={homeFaqs} />

      <section className="hero-mvp premium-card subtle-grid">
        <div className="hero-mvp-left">
          <p className="hero-status"><span /> AI 创业机会决策系统</p>
          <h1>
            发现 AI 机会
            <br />
            学会 AI 技能
            <br />
            验证 <span>AI 项目</span>
          </h1>
          <p>
            从 AI 工具、开源项目和海外小生意中筛选机会，用可对比的评分判断方向；
            再通过学习地图补齐核心能力，用 7 天验证路径决定“这个项目是否值得先试”。
          </p>
          <ul className="hero-proof">
            <li><Compass size={15} aria-hidden="true" /> {allProjects.length} 个已拆解项目</li>
            <li><Radar size={15} aria-hidden="true" /> 6 类决策筛选维度</li>
            <li><FlaskConical size={15} aria-hidden="true" /> 每个项目包含验证路径</li>
          </ul>

          <div className="hero-actions">
            <Button href="/projects" size="lg">进入项目库 <ArrowRight size={16} aria-hidden="true" /></Button>
            <Button href="/rankings" variant="secondary">
              查看排行榜
            </Button>
            <Button href="/matcher" variant="ghost">
              <Sparkles size={16} aria-hidden="true" /> 测测我适合哪个 AI 项目
            </Button>
          </div>
          <small className="hero-disclaimer">站内评分用于相对比较，不是收益预测；所有商业化建议仅为可能路径。</small>
        </div>

        <aside className="hero-dashboard" aria-label="AI 创业机会雷达概览">
          <div className="dashboard-top">
            <div>
              <p><span className="live-dot" /> RADAR ONLINE</p>
              <h2>机会雷达概览</h2>
            </div>
            <span>当前项目库</span>
          </div>

          <div className="dashboard-main">
            <div className="radar-visual" aria-hidden="true">
              <span className="radar-ring radar-ring-1" />
              <span className="radar-ring radar-ring-2" />
              <span className="radar-ring radar-ring-3" />
              <span className="radar-axis radar-axis-x" />
              <span className="radar-axis radar-axis-y" />
              <span className="radar-sweep" />
              <i className="radar-node radar-node-1" />
              <i className="radar-node radar-node-2" />
              <i className="radar-node radar-node-3" />
              <strong>{allProjects.length}</strong>
              <small>今日机会数</small>
            </div>

            <dl className="dashboard-stats">
              <div>
                <dt>本周新增</dt>
                <dd>持续更新</dd>
                <small>以项目库发布为准</small>
              </div>
              <div>
                <dt>低竞争机会</dt>
                <dd>{lowCompetitionCount}</dd>
                <small>竞争指数 ≤ 6</small>
              </div>
              <div>
                <dt>适合新手项目</dt>
                <dd>{beginnerCount}</dd>
                <small>友好度 ≥ 7.5</small>
              </div>
            </dl>
          </div>

          {todayPick ? (
            <div className="dashboard-pick">
              <div>
                <span>最高推荐项目</span>
                <strong>{todayPick.name}</strong>
                <small>{todayPick.summary}</small>
              </div>
              <b>{getProjectOverallScore(todayPick)}</b>
            </div>
          ) : null}
        </aside>
      </section>

      <section>
        <div className="section-head section-head-row">
          <div>
            <p className="section-kicker">本周推荐机会</p>
            <h2 className="section-title">三个值得优先研究的方向</h2>
            <p>推荐来自当前项目库评分与可执行性比较，不代表收益预测。</p>
          </div>
          <Button href="/projects" variant="secondary">查看完整项目库</Button>
        </div>
        <div className="weekly-opportunity-grid">
          {todayRadar.map((project, index) => {
            const profile = getProjectDecisionProfile(project);
            const monetization = profile.monetizationTypes[0];
            return (
              <article key={project.slug} className="weekly-opportunity premium-card">
                <div className="weekly-card-top">
                  <span>0{index + 1}</span>
                  <b>{getProjectOverallScore(project)} 分</b>
                </div>
                <p className="project-category">{project.category}</p>
                <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <dl>
                  <div><dt>推荐原因</dt><dd>{project.whyItWorks}</dd></div>
                  <div><dt>适合人群</dt><dd>{project.targetUsers[0]}</dd></div>
                  <div><dt>启动成本</dt><dd>{startupCostLabels[profile.startupCost]}</dd></div>
                  <div><dt>可能变现</dt><dd>{monetizationTypeLabels[monetization]}</dd></div>
                </dl>
                <Link href={`/projects/${project.slug}`} className="inline-link">
                  查看项目拆解 <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <TodayRadar items={todayRadar} />

      <MatcherPromo />

      <LearningMapPromo />

      <section>
        <div className="section-head">
          <p className="section-kicker">AI项目榜单</p>
          <h2 className="section-title">先看榜单，再决定投入方向</h2>
        </div>
        <div className="rankings-grid">
          <RankingList
            title="小白友好榜"
            description="上手门槛更低，适合先做验证型项目。"
            audience="没有成熟团队，想先做出第一个可验证版本的人。"
            items={beginnerRanking}
            scoreLabel="友好度"
            scoreOf={(project) => project.beginnerFriendly}
          />
          <RankingList
            title="低竞争榜"
            description="竞争指数更低，更容易做差异化切入。"
            audience="希望避开拥挤赛道，从垂直场景切入的人。"
            items={lowCompetitionRanking}
            scoreLabel="竞争"
            scoreOf={(project) => project.competitionIndex}
          />
          <RankingList
            title="适合工具站榜"
            description="SEO潜力与中文市场机会更高，适合做工具站。"
            audience="擅长搜索流量、内容和小工具开发的人。"
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
          <p className="section-kicker">你可以怎么用本站</p>
          <h2 className="section-title">从发现机会到完成第一次推广测试</h2>
          <p>不要同时推进多个项目。每一步只回答一个关键问题，再决定是否继续投入。</p>
        </div>
        <div className="flow-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
            <article key={step.title} className="flow-step premium-card">
              <span>0{index + 1}</span>
              <i><Icon size={18} aria-hidden="true" /></i>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="follow-panel premium-card">
        <div className="follow-copy">
          <p className="section-kicker">持续追踪机会</p>
          <h2>关注每周项目更新，而不是追逐短期承诺</h2>
          <p>通过邮件、微信或 X 获取项目观察、验证记录和新机会提示。本站不承诺赚钱，只持续整理可验证的 AI 项目方向。</p>
        </div>
        <div className="follow-options">
          <article>
            <span>01</span>
            <strong>Newsletter</strong>
            <p>通过邮件提交订阅申请，接收项目机会更新。</p>
            <a href="mailto:subscribe@aiprojectradar.com?subject=订阅AI创业雷达项目机会更新">邮件订阅</a>
          </article>
          <article>
            <span>02</span>
            <strong>微信</strong>
            <p>官方关注方式确认后会在站内公开，不提供未经确认的账号或二维码。</p>
            <em>关注入口待公布</em>
          </article>
          <article>
            <span>03</span>
            <strong>X</strong>
            <p>官方账号确认后再开放跳转，避免使用非官方或占位链接。</p>
            <em>关注入口待公布</em>
          </article>
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

      <section className="faq-section">
        <div className="section-head">
          <p className="section-kicker">常见问题</p>
          <h2 className="section-title">使用 AI创业雷达前需要知道的事</h2>
        </div>
        <FaqAccordion items={homeFaqs} />
      </section>
    </Container>
  );
}
