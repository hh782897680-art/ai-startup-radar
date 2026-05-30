import { ArrowRight, Dot, Radar, Sparkles, Star, Users } from "lucide-react";
import { heroPreviewProjects, heroStats, heroTags } from "@/data/home";

const statIcons = {
  Radar,
  Sparkles,
  Users,
  Star,
} as const;

const floatingMetrics = [
  { label: "商业化潜力", value: "高", className: "left-0 top-8", tone: "text-emerald-600" },
  { label: "SEO潜力", value: "8.7", className: "right-0 top-12", tone: "text-indigo-700" },
  { label: "竞争指数", value: "4.1", className: "left-3 bottom-14", tone: "text-slate-700" },
  { label: "适合小白", value: "是", className: "right-2 bottom-10", tone: "text-cyan-700" },
];

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-12">
        <article className="dashboard-card p-6 sm:p-7 xl:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            现代 AI 创业工作台
          </span>

          <h1 className="mt-4 max-w-4xl font-mono text-3xl leading-[1.12] tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
            发现、分析并启动你的下一个
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              AI 项目
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">
            从全球开源项目、AI工具和趋势中挖掘机会，用AI帮你分析商业潜力、生成建站方案和推广文案。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-primary inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
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

          <div className="mt-4 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {heroStats.map((item) => {
              const Icon = statIcons[item.icon as keyof typeof statIcons];

              return (
                <div key={item.label} className="soft-card px-4 py-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-xs">{item.label}</p>
                  </div>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{item.value}</p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="dashboard-card relative overflow-hidden p-5 sm:p-6 xl:col-span-5">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute -left-14 bottom-4 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative flex items-center justify-between gap-2">
            <div>
              <h2 className="font-mono text-lg text-slate-900">今日AI机会</h2>
              <p className="text-xs text-slate-500">更新于 10:30</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <Dot className="h-4 w-4" />
              实时更新
            </span>
          </div>

          <div className="mt-4 rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/80 to-blue-50/70 p-4">
            <div className="relative mx-auto h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-indigo-200" />
              <div className="absolute inset-5 rounded-full border border-indigo-200/80" />
              <div className="absolute inset-10 rounded-full border border-indigo-200/70" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-200/80" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-indigo-200/80" />
              <div className="absolute left-[27%] top-[24%] h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <div className="absolute left-[71%] top-[35%] h-2.5 w-2.5 rounded-full bg-violet-500" />
              <div className="absolute left-[56%] top-[71%] h-2.5 w-2.5 rounded-full bg-cyan-500" />
              <div className="absolute left-[22%] top-[57%] h-2.5 w-2.5 rounded-full bg-blue-500" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-indigo-200 bg-white text-center shadow-inner shadow-indigo-100">
                <p className="text-4xl font-semibold leading-none text-slate-900">8.9</p>
                <p className="mt-1 text-[11px] text-slate-500">综合评分</p>
              </div>

              {floatingMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`pointer-events-none absolute rounded-xl border border-indigo-100 bg-white/95 px-2.5 py-1.5 text-xs shadow-sm ${metric.className}`}
                >
                  <p className="text-slate-500">{metric.label}</p>
                  <p className={`font-semibold ${metric.tone}`}>{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {heroPreviewProjects.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50/45 px-3 py-2.5 text-sm"
              >
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="text-sm font-semibold text-indigo-700">{item.score}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
