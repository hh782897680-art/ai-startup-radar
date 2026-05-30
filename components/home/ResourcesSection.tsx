import { ArrowRight, ChartArea, Rocket, Search, Wrench } from "lucide-react";
import { resources } from "@/data/home";

const iconMap = {
  ChartArea,
  Wrench,
  Search,
  Rocket,
} as const;

export function ResourcesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="dashboard-card p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="font-mono text-2xl text-slate-900">创业资源</h2>
            <p className="text-sm text-slate-500">从变现到发布的关键资源，一次性打包</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((resource) => {
            const Icon = iconMap[resource.icon as keyof typeof iconMap];

            return (
              <article
                key={resource.title}
                className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)] transition duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 text-indigo-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 transition hover:text-indigo-800"
                >
                  查看资源
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
