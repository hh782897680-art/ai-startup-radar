import { Bookmark, ChevronRight, CircleCheckBig, Star, TrendingUp } from "lucide-react";
import { hotProjects } from "@/data/home";

export function ProjectCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
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
        {hotProjects.map((project) => (
          <article
            key={project.name}
            className="group flex h-full flex-col rounded-3xl border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_52px_-34px_rgba(79,70,229,0.66)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-36px_rgba(79,70,229,0.84)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-sm font-semibold text-white shadow-md shadow-indigo-200">
                  {project.short}
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

            <p className="mt-4 text-sm leading-6 text-slate-600">{project.summary}</p>

            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <p className="text-slate-500">评分</p>
                <p className="mt-1 font-semibold text-slate-900">{project.rating}</p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <p className="text-slate-500">Stars</p>
                <p className="mt-1 font-semibold text-slate-900">{project.stars}</p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <p className="text-slate-500">小白友好</p>
                <p className="mt-1 font-semibold text-slate-900">{project.beginner}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5 text-indigo-500" />
                创业热度持续上升
              </span>
              <span className="inline-flex items-center gap-1">
                <CircleCheckBig className="h-3.5 w-3.5 text-cyan-500" />
                可持续关注
              </span>
            </div>

            <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
              <Star className="h-3.5 w-3.5 text-indigo-500" />
              AI 创业方向参考
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
