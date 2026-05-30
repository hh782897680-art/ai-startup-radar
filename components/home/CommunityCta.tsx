import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CommunityCta() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="rounded-[24px] border border-indigo-100 bg-gradient-to-r from-indigo-600 via-violet-500 to-blue-500 px-6 py-8 text-white shadow-[0_25px_66px_-36px_rgba(79,70,229,0.88)] sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-mono text-3xl">加入AI创业雷达社区</h2>
            <p className="mt-2 text-sm text-indigo-100">
              每天发现AI机会，获取项目分析、建站方案和推广灵感。
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-indigo-100 sm:grid-cols-3">
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                每日AI机会推送
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                项目讨论交流
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                独家资源和教程
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            加入社区
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
