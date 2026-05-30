import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  ChartArea,
  ChevronRight,
  Compass,
  Flame,
  Globe,
  Layers,
  Mail,
  Radar,
  Rocket,
  Search,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

const navItems = [
  "首页",
  "AI项目库",
  "GitHub分析器",
  "创业灵感",
  "建站方案",
  "推广文案",
  "AI工具",
];

const heroStats = [
  { value: "10,328+", label: "收录AI项目" },
  { value: "2,560+", label: "AI工具" },
  { value: "18,732+", label: "创业者正在使用" },
  { value: "99.2%", label: "用户好评" },
];

const featureCards: {
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    title: "GitHub项目分析器",
    description: "从仓库活跃度到商业化路径，快速判断项目是否值得切入。",
    cta: "进入分析器",
    icon: Radar,
    tone: "from-indigo-500 to-blue-500",
  },
  {
    title: "AI创业灵感生成器",
    description: "结合趋势和赛道信号，生成可执行的创业选题与验证步骤。",
    cta: "获取灵感",
    icon: Sparkles,
    tone: "from-fuchsia-500 to-indigo-500",
  },
  {
    title: "AI建站方案生成器",
    description: "输出面向中文市场的产品结构、功能模块与上线节奏。",
    cta: "生成方案",
    icon: Globe,
    tone: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI推广文案生成器",
    description: "提供落地页文案、社媒推广角度和投放素材框架。",
    cta: "生成文案",
    icon: Rocket,
    tone: "from-violet-500 to-indigo-500",
  },
];

const heroOpportunityList = [
  { name: "MemGPT", score: "8.8" },
  { name: "Dify", score: "9.1" },
  { name: "LangChain", score: "8.6" },
];

const heroRankingList = [
  { name: "Open WebUI", rank: 1 },
  { name: "Dify", rank: 2 },
  { name: "MemGPT", rank: 3 },
];

const opportunityDetails = [
  { rank: 1, name: "MemGPT", category: "Agent", heat: "9.4k", score: "8.8" },
  { rank: 2, name: "Dify", category: "Workflow", heat: "8.7k", score: "9.1" },
  {
    rank: 3,
    name: "PhotoMaker",
    category: "AIGC",
    heat: "7.3k",
    score: "8.2",
  },
  {
    rank: 4,
    name: "LangChain",
    category: "LLMOps",
    heat: "9.1k",
    score: "8.6",
  },
  {
    rank: 5,
    name: "RAGFlow",
    category: "RAG",
    heat: "8.2k",
    score: "8.9",
  },
];

const rankingList = ["Open WebUI", "Dify", "MemGPT", "RAGFlow", "AutoGen"];

const analyzerTags = ["vercel/ai", "langchain", "autogen", "mem0"];

const analyzerResults = [
  { label: "综合评分", value: "8.9" },
  { label: "商业化潜力", value: "9.2/10" },
  { label: "竞争指数", value: "4.1/10" },
  { label: "SEO潜力", value: "8.7/10" },
  { label: "中文市场机会", value: "高" },
];

const hotProjects = [
  {
    name: "Auto-GPT",
    category: "AI Agent",
    summary: "自动执行复杂任务的开源代理框架，适合流程自动化方向。",
    rating: "8.6",
    stars: "166k",
    beginner: "中等",
  },
  {
    name: "BabyAGI",
    category: "Task Agent",
    summary: "轻量任务代理项目，适合学习多步任务拆解与执行策略。",
    rating: "8.1",
    stars: "20k",
    beginner: "适合",
  },
  {
    name: "OpenWebUI",
    category: "AI 平台",
    summary: "本地可部署的 AI 聊天平台，二次开发空间大。",
    rating: "9.0",
    stars: "94k",
    beginner: "适合",
  },
  {
    name: "Flowise",
    category: "低代码",
    summary: "可视化编排 LLM 工作流，适合快速验证 SaaS MVP。",
    rating: "8.7",
    stars: "43k",
    beginner: "适合",
  },
  {
    name: "AnythingLLM",
    category: "RAG 工具",
    summary: "面向企业知识库问答场景，部署和上手门槛较低。",
    rating: "8.5",
    stars: "30k",
    beginner: "中等",
  },
  {
    name: "Stable Diffusion",
    category: "AIGC",
    summary: "成熟图像生成生态，可衍生素材平台和创作工具。",
    rating: "9.1",
    stars: "148k",
    beginner: "不太适合",
  },
];

const aiTools = [
  {
    name: "ChatGPT",
    type: "对话模型",
    region: "需魔法",
    zh: "支持中文",
    pricing: "免费/付费",
    short: "C",
  },
  {
    name: "Claude",
    type: "推理助手",
    region: "需魔法",
    zh: "支持中文",
    pricing: "免费/付费",
    short: "C",
  },
  {
    name: "Gemini",
    type: "多模态模型",
    region: "需魔法",
    zh: "支持中文",
    pricing: "免费/付费",
    short: "G",
  },
  {
    name: "Cursor",
    type: "AI 编程",
    region: "国内可用",
    zh: "支持中文",
    pricing: "免费/付费",
    short: "C",
  },
  {
    name: "Perplexity",
    type: "AI 搜索",
    region: "需魔法",
    zh: "支持中文",
    pricing: "免费/付费",
    short: "P",
  },
  {
    name: "Notion AI",
    type: "效率工具",
    region: "国内可用",
    zh: "支持中文",
    pricing: "付费",
    short: "N",
  },
];

const latestArticles = [
  {
    title: "深度解析：为什么 Dify 适合中文创业者做 AI 应用平台？",
    tag: "平台分析",
    date: "2026-05-30",
    views: "4,812",
    summary:
      "从插件生态、工作流抽象和交付效率看，Dify 在中文团队的落地速度明显领先。",
  },
  {
    title: "RAGFlow 商业化潜力分析：能否成为下一个知识库工具？",
    tag: "RAG",
    date: "2026-05-29",
    views: "3,967",
    summary:
      "围绕企业知识管理场景，拆解 RAGFlow 的订阅模型、竞争壁垒与增长难点。",
  },
  {
    title: "如何用 AI 工具 16 小时搭建一个项目网站？",
    tag: "实战教程",
    date: "2026-05-27",
    views: "6,321",
    summary:
      "从需求拆分、页面搭建到文案上线，给出适合独立开发者的极简执行路径。",
  },
];

const resources: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI项目变现指南",
    description: "主流变现模型对比：订阅、API、模板、咨询与私有化交付。",
    icon: ChartArea,
  },
  {
    title: "独立开发者工具包",
    description: "从开发到部署的高频工具清单，覆盖构建、监控、增长全链路。",
    icon: Layers,
  },
  {
    title: "SEO关键词库",
    description: "围绕 AI 创业场景的关键词分层库，便于选题和落地页布局。",
    icon: Compass,
  },
  {
    title: "项目发布平台清单",
    description: "适合首发冷启动的平台索引，附带推荐发布时间与发布节奏。",
    icon: BookOpen,
  },
];

const footerColumns = [
  { title: "产品", links: ["AI项目库", "GitHub分析器", "创业灵感", "推广文案"] },
  { title: "资源", links: ["项目解读", "变现指南", "SEO关键词库", "发布平台"] },
  { title: "关于我们", links: ["团队介绍", "更新日志", "合作申请", "联系我们"] },
  { title: "关注我们", links: ["微信社群", "公众号", "X / Twitter", "GitHub"] },
];

export default function Home() {
  return (
    <div className="relative min-h-screen pb-10 text-slate-900">
      <BackgroundGlow />

      <header className="sticky top-0 z-30 border-b border-indigo-100/90 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 py-4">
            <div className="min-w-[190px]">
              <a href="#" className="inline-flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-200">
                  <Radar className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[18px] font-semibold tracking-tight">AI创业雷达</span>
                  <span className="block text-xs text-slate-500">发现 · 分析 · 启动你的AI项目</span>
                </span>
              </a>
            </div>

            <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex w-full items-center gap-2 sm:w-auto">
              <label className="relative min-w-0 flex-1 sm:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="搜索 AI 项目、工具、赛道"
                  className="h-10 w-full rounded-full border border-indigo-200 bg-white px-10 text-sm outline-none transition focus:border-indigo-400 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]"
                />
              </label>
              <button
                type="button"
                className="h-10 rounded-full border border-indigo-200 bg-white px-4 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"
              >
                登录
              </button>
              <button
                type="button"
                className="h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                注册
              </button>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-3 xl:hidden">
            {navItems.map((item) => (
              <button
                key={`mobile-${item}`}
                type="button"
                className="shrink-0 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs text-slate-600"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="space-y-6 pb-6 pt-6">
        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
            <article className="rounded-[24px] border border-indigo-100/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(79,70,229,0.6)] sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" />
                AI SaaS Dashboard
              </span>

              <h1 className="mt-4 max-w-3xl font-mono text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
                AI创业雷达：发现、分析并启动你的下一个AI项目
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
                从全球开源项目、AI工具中挖掘机会，用AI帮你分析潜力、生成建站方案和推广文案。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  开始分析项目
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center rounded-full border border-indigo-200 bg-white px-6 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  浏览AI项目库
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-indigo-100 bg-indigo-50/50 px-4 py-3"
                  >
                    <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-indigo-100 bg-white/92 p-5 shadow-[0_24px_62px_-42px_rgba(79,70,229,0.65)] sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-lg text-slate-900">Dashboard Preview</h2>
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700">
                  Live UI
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-indigo-100 bg-white p-3">
                  <p className="mb-2 text-xs font-semibold text-slate-500">今日AI机会</p>
                  <ul className="space-y-2">
                    {heroOpportunityList.map((item) => (
                      <li key={item.name} className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">{item.name}</span>
                        <span className="font-semibold text-indigo-600">{item.score}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-white p-3">
                  <p className="mb-2 text-xs font-semibold text-slate-500">项目排行榜</p>
                  <ul className="space-y-2">
                    {heroRankingList.map((item) => (
                      <li key={item.name} className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">#{item.rank}</span>
                        <span className="font-medium text-slate-900">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.95fr]">
                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-4">
                  <p className="mb-3 text-xs font-semibold text-slate-500">赛道雷达（示意）</p>
                  <div className="relative h-24">
                    <div className="absolute inset-x-4 inset-y-0 rounded-full border border-indigo-200" />
                    <div className="absolute inset-x-8 inset-y-2 rounded-full border border-indigo-200/80" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-200" />
                    <div className="absolute inset-x-5 top-1/2 h-px -translate-y-1/2 bg-indigo-200" />
                    <span className="absolute left-[18%] top-[34%] h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    <span className="absolute left-[50%] top-[20%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500" />
                    <span className="absolute left-[71%] top-[56%] h-2.5 w-2.5 rounded-full bg-cyan-500" />
                    <Radar className="absolute bottom-1 left-1 h-4 w-4 text-indigo-500" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-indigo-100 bg-white p-3">
                    <p className="text-xs text-slate-500">综合评分</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">8.9</p>
                  </div>
                  <div className="rounded-2xl border border-indigo-100 bg-white p-3">
                    <p className="text-xs text-slate-500">商业化潜力</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-600">高</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-2xl text-slate-900">核心功能区</h2>
              <p className="text-sm text-slate-500">帮助你从机会发现到落地执行的关键工具模块</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[20px] border border-indigo-100 bg-white/90 p-5 shadow-[0_18px_45px_-35px_rgba(79,70,229,0.65)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-36px_rgba(79,70,229,0.75)]"
                >
                  <span
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tone} text-white shadow-lg shadow-indigo-200`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 transition group-hover:border-indigo-300 group-hover:bg-indigo-50"
                  >
                    {item.cta}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)_310px]">
            <aside className="rounded-[20px] border border-indigo-100 bg-white/92 p-4 shadow-[0_18px_50px_-36px_rgba(79,70,229,0.62)]">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-lg text-slate-900">今日AI机会</h3>
                <Flame className="h-4 w-4 text-orange-500" />
              </div>
              <ul className="mt-3 space-y-2.5">
                {opportunityDetails.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>#{item.rank}</span>
                      <span>{item.category}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-indigo-600">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">热度 {item.heat}</p>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="rounded-[24px] border border-indigo-200 bg-gradient-to-br from-white via-indigo-50/45 to-blue-50/45 p-5 shadow-[0_24px_60px_-34px_rgba(79,70,229,0.75)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-mono text-2xl text-slate-900">GitHub项目分析器</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    输入GitHub链接，AI帮你判断商业化潜力
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
                  <Zap className="h-3.5 w-3.5" />
                  Dashboard 主模块
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <label className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    defaultValue="https://github.com/owner/repo"
                    className="h-11 w-full rounded-xl border border-indigo-200 bg-white px-10 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
                  />
                </label>
                <button
                  type="button"
                  className="h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5"
                >
                  开始分析
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {analyzerTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-slate-600 transition hover:border-indigo-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-indigo-100 bg-white/95 p-4">
                <div className="mb-3 flex items-center justify-between border-b border-indigo-100 pb-3">
                  <div>
                    <p className="text-xs text-slate-500">项目</p>
                    <p className="text-lg font-semibold text-slate-900">vercel/ai</p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    分析完成
                  </span>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {analyzerResults.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-indigo-100 bg-indigo-50/40 px-3 py-2"
                    >
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="grid gap-4">
              <aside className="rounded-[20px] border border-indigo-100 bg-white/92 p-4 shadow-[0_18px_50px_-36px_rgba(79,70,229,0.62)]">
                <h3 className="font-mono text-lg text-slate-900">项目排行榜</h3>
                <ol className="mt-3 space-y-2">
                  {rankingList.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2"
                    >
                      <span className="text-sm text-slate-600">#{index + 1}</span>
                      <span className="text-sm font-semibold text-slate-900">{item}</span>
                    </li>
                  ))}
                </ol>
              </aside>

              <aside className="rounded-[20px] border border-indigo-100 bg-white/92 p-4 shadow-[0_18px_50px_-36px_rgba(79,70,229,0.62)]">
                <h3 className="font-mono text-lg text-slate-900">每周AI机会简报</h3>
                <p className="mt-1 text-sm text-slate-600">
                  每周汇总全球高潜力 AI 项目与中文市场机会。
                </p>
                <div className="mt-3 flex gap-2">
                  <label className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="输入邮箱"
                      className="h-10 w-full rounded-xl border border-indigo-200 bg-white px-9 text-sm outline-none focus:border-indigo-400"
                    />
                  </label>
                  <button
                    type="button"
                    className="h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 text-sm font-semibold text-white"
                  >
                    订阅
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-mono text-2xl text-slate-900">热门AI项目</h2>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              查看更多
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hotProjects.map((item) => (
              <article
                key={item.name}
                className="group rounded-[20px] border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_45px_-35px_rgba(79,70,229,0.58)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-36px_rgba(79,70,229,0.75)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                    <p className="mt-1 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700">
                      {item.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-indigo-200 bg-white p-2 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <MetricPill label="评分" value={item.rating} />
                  <MetricPill label="Stars" value={item.stars} />
                  <MetricPill label="小白" value={item.beginner} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-mono text-2xl text-slate-900">AI工具导航</h2>
            <span className="text-sm text-slate-500">仅展示工具信息，不接真实功能</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aiTools.map((tool) => (
              <article
                key={tool.name}
                className="rounded-[20px] border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_45px_-35px_rgba(79,70,229,0.58)] transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-sm font-semibold text-white">
                    {tool.short}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{tool.name}</p>
                    <p className="text-xs text-slate-500">{tool.type}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <TagChip>{tool.region}</TagChip>
                  <TagChip>{tool.zh}</TagChip>
                  <TagChip>{tool.pricing}</TagChip>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-mono text-2xl text-slate-900">最新项目解读</h2>
            <BookOpen className="h-5 w-5 text-indigo-500" />
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {latestArticles.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_45px_-35px_rgba(79,70,229,0.58)] transition hover:-translate-y-1"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-indigo-700">{item.tag}</span>
                  <span className="text-slate-500">{item.date}</span>
                  <span className="text-slate-500">阅读 {item.views}</span>
                </div>
                <h3 className="text-base font-semibold leading-7 text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-mono text-2xl text-slate-900">创业资源</h2>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              查看资源库
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="rounded-[20px] border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_45px_-35px_rgba(79,70,229,0.58)] transition hover:-translate-y-1"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold text-slate-900">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[24px] border border-indigo-100 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 px-6 py-8 text-white shadow-[0_25px_65px_-35px_rgba(79,70,229,0.9)] sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <h2 className="font-mono text-3xl">加入AI创业雷达社区</h2>
                <p className="mt-2 max-w-2xl text-sm text-indigo-100">
                  每天发现AI机会，获取项目分析、建站方案和推广灵感。
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                加入社区
                <Users className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-6 max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-indigo-100 bg-white/88 p-6 shadow-[0_20px_55px_-40px_rgba(79,70,229,0.6)] sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-slate-900">{column.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {column.links.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-indigo-700">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-indigo-100 pt-4 text-sm text-slate-500">
            <p className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-indigo-500" />
              © 2026 AI创业雷达 · 为中文创业者提供高密度 AI 创业决策视图
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-420px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.34)_0%,rgba(79,70,229,0)_72%)]" />
      <div className="absolute -left-32 top-[20rem] h-80 w-80 rounded-full bg-indigo-200/35 blur-3xl" />
      <div className="absolute right-0 top-[28rem] h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />
    </div>
  );
}

type MetricPillProps = {
  label: string;
  value: string;
};

function MetricPill({ label, value }: MetricPillProps) {
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}

type TagChipProps = {
  children: React.ReactNode;
};

function TagChip({ children }: TagChipProps) {
  return (
    <span className="rounded-full border border-indigo-100 bg-indigo-50/70 px-2.5 py-1 text-slate-600">
      {children}
    </span>
  );
}
