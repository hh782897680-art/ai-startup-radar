import { ShieldCheck } from "lucide-react";
import { tools } from "@/data/home";

export function ToolsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="mb-3">
        <h2 className="font-mono text-2xl text-slate-900">AI工具导航</h2>
        <p className="text-sm text-slate-500">精选全球AI工具，标注中文支持和可用状态</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <article
            key={tool.name}
            className="rounded-3xl border border-indigo-100 bg-white/92 p-5 shadow-[0_16px_42px_-34px_rgba(79,70,229,0.58)] transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-sm font-semibold text-white">
                {tool.short}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{tool.name}</p>
                <p className="text-xs text-slate-500">{tool.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={`${tool.name}-${tag}`}
                  className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
              工具信息展示（UI）
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
