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
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="dashboard-card p-5 sm:p-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="font-mono text-2xl text-slate-900">核心功能卡片</h2>
            <p className="text-sm text-slate-500">从发现机会到落地执行，一站式完成 AI 创业工作流</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(79,70,229,0.2)]"
              >
                <span
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_12px_30px_rgba(79,70,229,0.24)] ${card.iconBg}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-full border border-indigo-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50"
                  >
                    {card.button}
                  </button>
                  <button
                    type="button"
                    aria-label={`${card.title} 操作`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 transition group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
