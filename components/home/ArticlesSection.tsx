import { CalendarDays, Eye, FileText } from "lucide-react";
import { articles } from "@/data/home";

export function ArticlesSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="mb-3">
        <h2 className="font-mono text-2xl text-slate-900">最新项目解读</h2>
        <p className="text-sm text-slate-500">每周追踪值得深挖的 AI 项目与商业化路径</p>
      </div>

      <div className="grid gap-4">
        {articles.map((article, index) => (
          <article
            key={article.title}
            className="rounded-3xl border border-indigo-100 bg-white/92 p-4 shadow-[0_16px_42px_-34px_rgba(79,70,229,0.58)] transition hover:-translate-y-0.5 sm:p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-100 via-violet-100 to-cyan-100 sm:w-40">
                <span className="absolute left-3 top-2 rounded-full bg-white/80 px-2 py-0.5 text-xs text-indigo-700">
                  {article.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center text-indigo-600">
                  <FileText className="h-9 w-9" />
                </div>
                <span className="absolute bottom-2 right-2 text-3xl font-semibold text-white/75">
                  0{index + 1}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{article.summary}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-indigo-500" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5 text-indigo-500" />
                    阅读 {article.reads}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
