import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brain,
  ChartNoAxesCombined,
  Globe,
  Radar,
  Rocket,
  Search,
  Sparkles,
  Star,
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

const stats = [
  "10,328+ 收录AI项目",
  "2,560+ AI工具",
  "18,732+ 创业者正在使用",
  "99.2% 用户好评",
];

const featureCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "GitHub项目分析器",
    description: "一键读取仓库热度、商业路径和进入难度，快速判断可做方向。",
    icon: Radar,
  },
  {
    title: "AI创业灵感生成器",
    description: "结合市场信号和开源趋势，为你输出可执行的创业切入点。",
    icon: Sparkles,
  },
  {
    title: "AI建站方案生成器",
    description: "围绕目标用户给出页面结构、功能模块和上线路径建议。",
    icon: Globe,
  },
  {
    title: "AI推广文案生成器",
    description: "生成适配中文市场的落地页文案、社媒内容与投放素材框架。",
    icon: Rocket,
  },
];

const opportunities = ["MemGPT", "Dify", "PhotoMaker", "LangChain", "RAGFlow"];

const rankingList = ["Open WebUI", "Dify", "MemGPT", "RAGFlow", "AutoGen"];

const hotProjects = [
  "Auto-GPT",
  "BabyAGI",
  "OpenWebUI",
  "Flowise",
  "AnythingLLM",
  "Stable Diffusion",
];

const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Cursor",
  "Perplexity",
  "Notion AI",
];

export default function Home() {
  return (
    <div className="relative pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-440px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.35)_0%,rgba(79,70,229,0)_70%)]" />
        <div className="absolute -left-32 top-[28rem] h-80 w-80 rounded-full bg-indigo-200/35 blur-3xl" />
        <div className="absolute -right-24 top-[24rem] h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-indigo-100/90 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div className="min-w-[210px]">
            <div className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-sm shadow-indigo-300">
                <Radar className="h-4 w-4" />
              </span>
              <span>AI创业雷达</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">发现 · 分析 · 启动你的AI项目</p>
          </div>

          <nav className="hidden items-center gap-1 rounded-full border border-indigo-100 bg-white/80 p-1 xl:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex w-full items-center gap-2 sm:w-auto">
            <label className="relative flex-1 sm:w-56 sm:flex-none">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜索项目/工具"
                className="h-10 w-full rounded-full border border-indigo-100 bg-white px-9 text-sm outline-none transition focus:border-indigo-400"
              />
            </label>
            <button
              type="button"
              className="h-10 rounded-full border border-indigo-200 px-4 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"
            >
              登录
            </button>
            <button
              type="button"
              className="h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 text-sm font-medium text-white shadow-md shadow-indigo-200 transition hover:opacity-95"
            >
              注册
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-14 pt-14 lg:px-10 lg:pt-18">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-3 py-1.5 text-xs text-indigo-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                现代 AI SaaS Dashboard
              </div>

              <h1 className="max-w-3xl font-mono text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                AI创业雷达：发现、分析并启动你的下一个AI项目
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                从全球开源项目、AI工具中挖掘机会，用AI帮你分析潜力、生成建站方案和推广文案。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:opacity-95"
                >
                  开始分析项目
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-indigo-200 bg-white px-6 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  浏览AI项目库
                </button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-indigo-100/80 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-7 shadow-[0_20px_60px_-24px_rgba(79,70,229,0.45)]">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-300/30 blur-2xl" />
                <div className="absolute -left-14 bottom-0 h-36 w-36 rounded-full bg-sky-300/25 blur-2xl" />

                <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-indigo-200 bg-white/75 shadow-inner shadow-indigo-100">
                  <Radar className="h-14 w-14 text-indigo-600" />

                  <span className="absolute -left-3 top-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-lg shadow-indigo-100">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="absolute -right-4 top-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg shadow-blue-100">
                    <Rocket className="h-6 w-6" />
                  </span>
                  <span className="absolute -left-2 bottom-11 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg shadow-sky-100">
                    <Globe className="h-5 w-5" />
                  </span>
                  <span className="absolute -right-4 bottom-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-500 shadow-lg shadow-indigo-100">
                    <Brain className="h-6 w-6" />
                  </span>
                </div>

                <div className="relative mt-6 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-indigo-100/80 bg-white/90 px-3 py-2 text-sm text-slate-700">
                    趋势雷达
                  </div>
                  <div className="rounded-xl border border-indigo-100/80 bg-white/90 px-3 py-2 text-sm text-slate-700">
                    项目洞察
                  </div>
                  <div className="rounded-xl border border-indigo-100/80 bg-white/90 px-3 py-2 text-sm text-slate-700">
                    商业评分
                  </div>
                  <div className="rounded-xl border border-indigo-100/80 bg-white/90 px-3 py-2 text-sm text-slate-700">
                    增长建议
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-mono text-2xl text-slate-900">核心功能区</h2>
              <p className="mt-2 text-sm text-slate-500">围绕发现机会、验证方向、快速上线构建核心能力。</p>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs text-slate-500 sm:inline-flex">
              <ChartNoAxesCombined className="h-3.5 w-3.5 text-indigo-500" />
              实时趋势视图（UI）
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-[0_20px_50px_-35px_rgba(79,70,229,0.5)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-100 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <div className="grid gap-4 xl:grid-cols-12">
            <aside className="rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-[0_20px_50px_-36px_rgba(79,70,229,0.45)] xl:col-span-3">
              <h3 className="font-mono text-lg text-slate-900">今日AI机会</h3>
              <ul className="mt-4 space-y-2">
                {opportunities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-indigo-100/70 bg-indigo-50/45 px-3 py-2 text-sm text-slate-700"
                  >
                    <span>{item}</span>
                    <Sparkles className="h-4 w-4 text-indigo-500" />
                  </li>
                ))}
              </ul>
            </aside>

            <section className="rounded-3xl border border-indigo-100 bg-white/95 p-6 shadow-[0_25px_55px_-38px_rgba(79,70,229,0.55)] xl:col-span-6">
              <h3 className="font-mono text-xl text-slate-900">GitHub项目分析器预览卡片</h3>
              <label className="mt-4 block">
                <span className="mb-2 block text-sm text-slate-500">仓库地址（UI）</span>
                <div className="flex h-11 items-center rounded-xl border border-indigo-100 bg-slate-50 px-3 text-sm text-slate-500">
                  <Search className="mr-2 h-4 w-4 text-slate-400" />
                  https://github.com/owner/repo
                </div>
              </label>

              <div className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-4">
                <div className="mb-3 flex items-center justify-between border-b border-indigo-100/80 pb-3">
                  <span className="text-sm text-slate-500">项目</span>
                  <span className="font-semibold text-slate-900">vercel/ai</span>
                </div>

                <div className="space-y-2.5 text-sm">
                  <ResultRow label="商业化潜力" value="9.2/10" />
                  <ResultRow label="竞争指数" value="4.1/10" />
                  <ResultRow label="SEO潜力" value="8.7/10" />
                  <ResultRow label="中文市场机会" value="高" />
                </div>
              </div>
            </section>

            <aside className="rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-[0_20px_50px_-36px_rgba(79,70,229,0.45)] xl:col-span-3">
              <h3 className="font-mono text-lg text-slate-900">项目排行榜</h3>
              <ol className="mt-4 space-y-2">
                {rankingList.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-indigo-100/80 bg-indigo-50/45 px-3 py-2"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-indigo-600">
                      {index + 1}
                    </span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-[0_20px_50px_-36px_rgba(79,70,229,0.45)]">
              <h3 className="font-mono text-xl text-slate-900">热门AI项目</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {hotProjects.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-[0_20px_50px_-36px_rgba(79,70,229,0.45)]">
              <h3 className="font-mono text-xl text-slate-900">AI工具导航</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {aiTools.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 px-6 py-10 text-white shadow-[0_24px_60px_-28px_rgba(79,70,229,0.8)] sm:px-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-mono text-3xl">加入AI创业雷达社区</h2>
                <p className="mt-3 max-w-2xl text-sm text-indigo-100">
                  与全球创业者一起追踪 AI 趋势、验证商业方向并加速你的项目启动。
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                立即加入
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 max-w-7xl px-6 pb-4 text-sm text-slate-500 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-indigo-100 pt-6">
          <p>© 2026 AI创业雷达</p>
          <p className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-indigo-500" />
            让每个AI创业想法都更接近落地
          </p>
        </div>
      </footer>
    </div>
  );
}

type ResultRowProps = {
  label: string;
  value: string;
};

function ResultRow({ label, value }: ResultRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-indigo-100/80 bg-white/85 px-3 py-2">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}
