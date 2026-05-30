import { ArrowUpRight, LayoutGrid, Radar, Rocket, Sparkles } from "lucide-react";
import { featureCards } from "@/data/home";

const iconMap = {
  Radar,
  Sparkles,
  LayoutGrid,
  Rocket,
} as const;

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-mono text-2xl text-slate-900">核心功能卡片区</h2>
          <p className="text-sm text-slate-500">围绕项目发现、分析、建站、推广形成完整工作流</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((card) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap];

          return (
            <article
              key={card.title}
              className="group relative flex h-full flex-col rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-[0_18px_46px_-34px_rgba(79,70,229,0.6)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_62px_-35px_rgba(79,70,229,0.75)]"
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-md shadow-indigo-200 ${card.iconBg}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  className="rounded-full border border-indigo-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  {card.button}
                </button>
                <button
                  type="button"
                  aria-label={`${card.title} 操作`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 transition group-hover:-translate-y-0.5 group-hover:border-indigo-300"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
