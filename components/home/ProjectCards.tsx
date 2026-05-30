import {
  Bookmark,
  Bot,
  BrainCircuit,
  ChevronRight,
  Database,
  Image as ImageIcon,
  MessageSquare,
  Star,
  Workflow,
} from "lucide-react";
import { hotProjects } from "@/data/home";

const projectIconMap = {
  "Auto-GPT": Bot,
  BabyAGI: BrainCircuit,
  OpenWebUI: MessageSquare,
  Flowise: Workflow,
  AnythingLLM: Database,
  "Stable Diffusion": ImageIcon,
} as const;

export function ProjectCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="dashboard-card p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-mono text-2xl text-slate-900">热门AI项目</h2>
            <p className="text-sm text-slate-500">从开源社区中筛选适合中文用户关注的项目</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 transition hover:text-indigo-800"
          >
            查看全部项目
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hotProjects.map((project) => {
            const Icon = projectIconMap[project.name as keyof typeof projectIconMap] ?? Bot;

            return (
              <article
                key={project.name}
                className="group rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(79,70,229,0.2)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                    </span>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{project.name}</p>
                      <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`收藏 ${project.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <MetricCell label="评分" value={project.rating} />
                  <MetricCell label="Stars" value={project.stars} />
                  <MetricCell label="小白友好" value={project.beginner} />
                </div>

                <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
                  <Star className="h-3.5 w-3.5 text-indigo-500" />
                  持续跟踪中
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type MetricCellProps = {
  label: string;
  value: string;
};

function MetricCell({ label, value }: MetricCellProps) {
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 px-2.5 py-2">
      <p className="text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}
