import {
  ArrowRight,
  Dot,
  Flame,
  Radar,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { heroPreviewMetrics, heroPreviewProjects, heroStats, heroTags } from "@/data/home";

const statIcons = {
  Radar,
  Sparkles,
  Users,
  Star,
} as const;

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="grid gap-5 xl:grid-cols-12">
        <article className="glass-card p-6 sm:p-8 xl:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            现代 AI 创业工作台
          </span>

          <h1 className="mt-4 max-w-3xl font-mono text-3xl leading-[1.15] tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
            AI创业雷达：发现、分析并启动你的下一个
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              AI项目
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
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
                className="rounded-full border border-indigo-100 bg-white/90 px-3 py-1 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((item) => {
              const Icon = statIcons[item.icon as keyof typeof statIcons];

              return (
                <div key={item.label} className="soft-card px-4 py-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[11px]">{item.label}</p>
                  </div>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{item.value}</p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="glass-card relative overflow-hidden p-5 sm:p-6 xl:col-span-6">
          <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute -left-12 bottom-8 h-40 w-40 rounded-full bg-cyan-300/22 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-mono text-lg text-slate-900">今日AI机会</h2>
              <p className="text-xs text-slate-500">更新于 10:30</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <Dot className="h-4 w-4" />
              实时更新
            </span>
          </div>

          <div className="mt-4 rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/65 to-blue-50/60 p-4">
            <div className="relative mx-auto h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-indigo-200/90" />
              <div className="absolute inset-4 rounded-full border border-indigo-200/80" />
              <div className="absolute inset-8 rounded-full border border-indigo-200/70" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-200/80" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-indigo-200/80" />
              <div className="absolute left-[28%] top-[24%] h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <div className="absolute left-[70%] top-[36%] h-2.5 w-2.5 rounded-full bg-violet-500" />
              <div className="absolute left-[54%] top-[70%] h-2.5 w-2.5 rounded-full bg-cyan-500" />
              <div className="absolute left-[22%] top-[58%] h-2.5 w-2.5 rounded-full bg-blue-500" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-indigo-200 bg-white text-center shadow-inner shadow-indigo-100">
                <p className="text-3xl font-semibold leading-none text-slate-900">8.9</p>
                <p className="mt-1 text-[11px] text-slate-500">综合评分</p>
              </div>

              <MetricFloat className="left-[-6px] top-6" label="商业化潜力" value="高" accent="text-emerald-600" />
              <MetricFloat className="right-[-8px] top-10" label="SEO潜力" value="8.7" accent="text-indigo-700" />
              <MetricFloat className="left-0 bottom-12" label="竞争指数" value="4.1" accent="text-slate-700" />
              <MetricFloat className="right-0 bottom-9" label="适合小白" value="是" accent="text-cyan-700" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-indigo-100 bg-white/90 p-3">
            <ul className="space-y-2">
              {heroPreviewProjects.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-indigo-100/80 bg-indigo-50/45 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-800">{item.name}</span>
                  <span className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-indigo-700">{item.score}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Flame className="h-3.5 w-3.5 text-orange-500" />
                      {item.heat}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-4">
            {heroPreviewMetrics.map((metric) => (
              <div key={metric.label} className="soft-card px-2.5 py-2">
                <p className="text-[11px] text-slate-500">{metric.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{metric.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

type MetricFloatProps = {
  className: string;
  label: string;
  value: string;
  accent: string;
};

function MetricFloat({ className, label, value, accent }: MetricFloatProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-xl border border-indigo-100 bg-white/92 px-2.5 py-1.5 text-xs shadow-sm ${className}`}
    >
      <p className="text-slate-500">{label}</p>
      <p className={`font-semibold ${accent}`}>{value}</p>
    </div>
  );
}
