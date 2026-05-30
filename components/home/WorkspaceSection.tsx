"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bot,
  Copy,
  FileText,
  Flame,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  analyzerMetrics,
  analyzerTags,
  opportunities,
  rankingItems,
  rankingTabs,
} from "@/data/home";

type RankMode = "赚钱指数" | "搜索热度" | "小白友好";

const rankingByMode: Record<RankMode, typeof rankingItems> = {
  赚钱指数: rankingItems,
  搜索热度: [
    { name: "Dify", score: "9.5" },
    { name: "Open WebUI", score: "9.2" },
    { name: "MemGPT", score: "8.8" },
    { name: "RAGFlow", score: "8.6" },
    { name: "AutoGen", score: "8.4" },
  ],
  小白友好: [
    { name: "Open WebUI", score: "9.4" },
    { name: "Dify", score: "9.1" },
    { name: "RAGFlow", score: "8.8" },
    { name: "MemGPT", score: "8.4" },
    { name: "AutoGen", score: "8.2" },
  ],
};

export function WorkspaceSection() {
  const [selectedTab, setSelectedTab] = useState<RankMode>("赚钱指数");
  const [repoUrl, setRepoUrl] = useState("https://github.com/owner/repo");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [projectName, setProjectName] = useState("vercel/ai");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const rankingData = useMemo(() => rankingByMode[selectedTab], [selectedTab]);

  function handleAnalyze() {
    if (!repoUrl.trim()) {
      setError("请输入 GitHub 链接");
      return;
    }

    setError("");
    setLoading(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const trimmed = repoUrl
        .replace("https://github.com/", "")
        .replace("http://github.com/", "")
        .replace(/\/$/, "");
      setProjectName(trimmed || "vercel/ai");
      setLoading(false);
    }, 1000);
  }

  async function handleCopy() {
    const text = `项目: ${projectName}\n综合评分: 8.9\n商业化潜力: 9.2/10\n竞争指数: 4.1/10\nSEO潜力: 8.7/10\n中文市场机会: 高`;

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 xl:grid-cols-[25%_50%_25%]">
        <aside className="glass-card p-4">
          <h2 className="font-mono text-lg text-slate-900">今日AI机会</h2>
          <p className="text-xs text-slate-500">每日更新值得关注的AI项目</p>

          <ul className="mt-4 divide-y divide-indigo-100/90">
            {opportunities.map((item) => (
              <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
                    {item.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-slate-900">{item.name}</p>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-indigo-700">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Flame className="h-3.5 w-3.5 text-orange-500" />
                        热度 {item.heat}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Bot className="h-3.5 w-3.5 text-indigo-500" />
                        趋势上升
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-4 w-full rounded-xl border border-indigo-200 bg-white py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            查看更多机会
          </button>
        </aside>

        <section className="rounded-[24px] bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 p-[1.2px] shadow-[0_30px_76px_-35px_rgba(79,70,229,0.88)]">
          <div className="relative rounded-[23px] bg-gradient-to-br from-white via-indigo-50/45 to-blue-50/45 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-mono text-2xl text-slate-900">GitHub项目分析器</h2>
                <p className="text-sm text-slate-600">
                  输入GitHub链接，AI帮你判断项目商业化潜力
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" />
                首页核心工具
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={repoUrl}
                  onChange={(event) => setRepoUrl(event.target.value)}
                  placeholder="https://github.com/owner/repo"
                  className="h-11 w-full rounded-xl border border-indigo-200 bg-white px-10 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
                />
              </label>
              <button
                type="button"
                onClick={handleAnalyze}
                className="btn-primary h-11 rounded-xl px-5 text-sm font-semibold text-white"
              >
                {loading ? "分析中..." : "开始分析"}
              </button>
            </div>
            {error ? <p className="mt-2 text-xs text-rose-600">{error}</p> : null}

            <div className="mt-3 flex flex-wrap gap-2">
              {analyzerTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setRepoUrl(`https://github.com/${tag}`)}
                  className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative mt-5 rounded-2xl border border-indigo-100 bg-white/95 p-4 shadow-[inset_0_0_0_1px_rgba(224,231,255,0.6)]">
              {loading ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/78 backdrop-blur-sm">
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-indigo-700">
                    <Zap className="h-4 w-4" />
                    AI 正在分析项目...
                  </span>
                </div>
              ) : null}

              <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 pb-3">
                <div>
                  <p className="text-xs text-slate-500">项目</p>
                  <p className="text-lg font-semibold text-slate-900">{projectName}</p>
                </div>
                <div className="text-right">
                  <p className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-4xl font-semibold leading-none text-transparent">
                    8.9
                  </p>
                  <p className="text-xs text-slate-500">综合评分</p>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {analyzerMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-indigo-100 bg-indigo-50/45 px-3 py-2"
                  >
                    <p className="text-xs text-slate-500">{metric.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{metric.value}</p>
                    <p className="mt-0.5 text-xs text-indigo-700">{metric.level}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-xl border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  <FileText className="h-3.5 w-3.5" />
                  查看完整分析报告
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 rounded-xl border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "已复制" : "复制分析结果"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-4">
          <aside className="glass-card p-4">
            <h3 className="font-mono text-lg text-slate-900">项目排行榜</h3>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {rankingTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedTab(tab as RankMode)}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs transition ${
                    tab === selectedTab
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                      : "border border-indigo-200 bg-white text-slate-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <ol className="mt-3 space-y-2">
              {rankingData.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/45 px-3 py-2"
                >
                  <span className="text-sm text-slate-600">
                    {index + 1}. {item.name}
                  </span>
                  <span className="text-sm font-semibold text-indigo-700">{item.score}</span>
                </li>
              ))}
            </ol>
          </aside>

          <aside className="glass-card p-4">
            <h3 className="font-mono text-lg text-slate-900">每周AI机会简报</h3>
            <p className="mt-1 text-sm text-slate-600">每周精选10个AI项目和工具</p>

            <label className="mt-3 block">
              <input
                type="email"
                defaultValue="hh782897680@gmail.com"
                className="h-10 w-full rounded-xl border border-indigo-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
              />
            </label>

            <button
              type="button"
              className="btn-primary mt-3 inline-flex h-10 w-full items-center justify-center rounded-xl text-sm font-semibold text-white"
            >
              订阅
            </button>
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
              <TrendingUp className="h-3.5 w-3.5 text-indigo-500" />
              仅UI演示，不会真实提交
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
