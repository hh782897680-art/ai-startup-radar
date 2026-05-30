import { Globe, Languages, ShieldCheck, Wallet } from "lucide-react";
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
            className="rounded-3xl border border-indigo-100 bg-white/92 p-5 shadow-[0_18px_50px_-35px_rgba(79,70,229,0.66)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_64px_-36px_rgba(79,70,229,0.82)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-sm font-semibold text-white">
                {tool.short}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{tool.name}</p>
                <p className="text-xs text-slate-500">{tool.type}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-xs">
              <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Globe className="h-3.5 w-3.5 text-indigo-500" />
                  可用状态
                </span>
                <span className="font-semibold text-slate-800">{tool.availability}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Languages className="h-3.5 w-3.5 text-indigo-500" />
                  中文支持
                </span>
                <span className="font-semibold text-slate-800">{tool.chinese}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/45 px-2.5 py-2">
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Wallet className="h-3.5 w-3.5 text-indigo-500" />
                  费用模式
                </span>
                <span className="font-semibold text-slate-800">{tool.pricing}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs text-slate-600">
                {tool.availability}
              </span>
              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs text-slate-600">
                {tool.chinese}
              </span>
              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs text-slate-600">
                {tool.pricing}
              </span>
            </div>

            <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
              适合场景：{tool.scenario}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
