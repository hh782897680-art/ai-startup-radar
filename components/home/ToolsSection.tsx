import { Globe, Languages, ShieldCheck, Wallet } from "lucide-react";
import { tools } from "@/data/home";

export function ToolsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="dashboard-card p-5 sm:p-6">
        <div className="mb-4">
          <h2 className="font-mono text-2xl text-slate-900">AI工具导航</h2>
          <p className="text-sm text-slate-500">精选全球AI工具，标注中文支持和可用状态</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(79,70,229,0.2)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-semibold text-white">
                  {tool.short}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{tool.name}</p>
                  <p className="text-xs text-slate-500">{tool.type}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2 text-xs">
                <InfoRow icon={Globe} label="可用状态" value={tool.availability} />
                <InfoRow icon={Languages} label="中文支持" value={tool.chinese} />
                <InfoRow icon={Wallet} label="收费模式" value={tool.pricing} />
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
      </div>
    </section>
  );
}

type InfoRowProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 px-2.5 py-2">
      <span className="inline-flex items-center gap-1 text-slate-500">
        <Icon className="h-3.5 w-3.5 text-indigo-500" />
        {label}
      </span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}
