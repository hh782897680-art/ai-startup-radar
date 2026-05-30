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
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="font-mono text-2xl text-slate-900">创业资源</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => {
          const Icon = iconMap[resource.icon as keyof typeof iconMap];

          return (
            <article
              key={resource.title}
              className="rounded-3xl border border-indigo-100 bg-white/92 p-5 shadow-[0_16px_42px_-34px_rgba(79,70,229,0.58)] transition hover:-translate-y-1"
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
    </section>
  );
}
