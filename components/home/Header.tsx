import { Menu, Moon, Radar, Search, Sparkles } from "lucide-react";
import { navItems } from "@/data/home";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/85 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center gap-2">
          <a href="#" className="mr-2 flex min-w-[190px] items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-500 to-blue-500 text-white shadow-lg shadow-indigo-200">
              <Radar className="h-5 w-5" />
              <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-white p-0.5 text-indigo-500" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[17px] font-semibold tracking-tight text-slate-900">
                AI创业雷达
              </span>
              <span className="block truncate text-xs text-slate-500">
                发现 · 分析 · 启动你的AI项目
              </span>
            </span>
          </a>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 2xl:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  item === "首页"
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-200"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <label className="relative hidden w-[21rem] xl:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-400" />
              <input
                type="text"
                placeholder="搜索项目、工具、文章…"
                className="h-10 w-full rounded-full border border-indigo-200 bg-white px-9 pr-11 text-sm outline-none ring-4 ring-indigo-50/65 transition focus:border-indigo-400 focus:ring-indigo-100"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                UI
              </span>
            </label>

            <button
              type="button"
              aria-label="切换主题"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
            >
              <Moon className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="hidden h-10 items-center rounded-full border border-indigo-200 bg-white px-4 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 md:inline-flex"
            >
              登录
            </button>
            <button
              type="button"
              className="h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              注册
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 2xl:hidden"
              aria-label="打开菜单"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-3 2xl:hidden">
          {navItems.map((item) => (
            <button
              key={`mobile-${item}`}
              type="button"
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition ${
                item === "首页"
                  ? "border-transparent bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
