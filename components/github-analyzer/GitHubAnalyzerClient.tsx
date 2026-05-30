"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Copy,
  Globe,
  Lightbulb,
  Loader2,
  Rocket,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const SAMPLE_REPOS = [
  "vercel/ai",
  "langchain-ai/langchain",
  "open-webui/open-webui",
  "langgenius/dify",
  "microsoft/autogen",
];

const SCORE_CARDS = [
  { label: "综合评分", value: "8.9/10" },
  { label: "商业化潜力", value: "9.2/10" },
  { label: "中文市场机会", value: "8.7/10" },
  { label: "小白友好度", value: "6.8/10" },
  { label: "部署难度", value: "中等" },
  { label: "SEO潜力", value: "8.5/10" },
];

const BUSINESS_ANALYSIS = [
  { label: "适合做中文版", value: "是" },
  { label: "适合做工具站", value: "是" },
  { label: "适合做教程内容", value: "是" },
  { label: "适合做代部署服务", value: "谨慎" },
  { label: "适合做订阅制", value: "可尝试" },
];

const MONETIZATION_METHODS = [
  "免费工具 + 广告",
  "联盟返佣",
  "付费提交项目",
  "SaaS高级功能",
  "企业定制",
];

const RISKS = [
  "开源许可证需要确认",
  "不要直接复制原项目 UI",
  "不要承诺收益",
  "不要使用侵权 Logo",
  "需要确认 API 成本",
];

type AnalyzerResult = {
  projectName: string;
  projectType: string;
  intro: string;
  audience: string;
};

export function GitHubAnalyzerClient() {
  const [repoUrl, setRepoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzerResult | null>(null);
  const [copied, setCopied] = useState(false);

  const canCopy = useMemo(() => Boolean(result), [result]);

  function setExampleRepo(repo: string) {
    setRepoUrl(`https://github.com/${repo}`);
    setError("");
  }

  function validateRepoUrl(url: string) {
    const trimmed = url.trim();
    if (!trimmed) {
      return "请输入 GitHub 项目链接";
    }

    const githubPattern = /^https?:\/\/(www\.)?github\.com\/[^\/\s]+\/[^\/\s#?]+\/?$/i;
    if (!githubPattern.test(trimmed)) {
      return "请输入有效的 GitHub 项目链接";
    }

    return "";
  }

  function parseRepoInfo(url: string): AnalyzerResult {
    const clean = url
      .trim()
      .replace("https://github.com/", "")
      .replace("http://github.com/", "")
      .replace(/\/$/, "");

    const [owner, repoRaw] = clean.split("/");
    const repo = repoRaw.replace(/\.git$/i, "");
    const projectName = `${owner}/${repo}`;
    const keyword = projectName.toLowerCase();

    if (keyword.includes("dify")) {
      return {
        projectName,
        projectType: "开源AI应用平台",
        intro: "面向开发者的 LLM 应用编排和发布平台，支持 workflow 与插件化扩展。",
        audience: "适合有产品规划能力的独立开发者与小团队。",
      };
    }

    if (keyword.includes("langchain")) {
      return {
        projectName,
        projectType: "LLM开发框架",
        intro: "用于搭建基于大模型的链式应用与 Agent 系统，生态成熟。",
        audience: "适合有工程基础、想做 AI 工具链产品的开发者。",
      };
    }

    if (keyword.includes("autogen")) {
      return {
        projectName,
        projectType: "多Agent框架",
        intro: "聚焦多智能体协作与任务拆解，适合复杂自动化流程探索。",
        audience: "适合希望构建企业级流程自动化能力的团队。",
      };
    }

    if (keyword.includes("open-webui")) {
      return {
        projectName,
        projectType: "AI应用界面",
        intro: "开源的 AI 聊天与管理面板，部署友好，易于做中文场景改造。",
        audience: "适合想快速上线 AI 工具站或私有部署服务的开发者。",
      };
    }

    return {
      projectName,
      projectType: "AI开发工具",
      intro: "具备一定社区关注度，可通过内容解读和工具化包装进行本地化验证。",
      audience: "适合先做内容+工具结合的小步快跑型创业者。",
    };
  }

  function handleAnalyze() {
    const message = validateRepoUrl(repoUrl);
    if (message) {
      setError(message);
      return;
    }

    setError("");
    setLoading(true);
    setCopied(false);

    const parsed = parseRepoInfo(repoUrl);

    setTimeout(() => {
      setResult(parsed);
      setLoading(false);
    }, 1000);
  }

  async function handleCopyReport() {
    if (!result) {
      return;
    }

    const report = [
      "AI项目商业化分析报告",
      `项目名称：${result.projectName}`,
      `项目类型：${result.projectType}`,
      `一句话介绍：${result.intro}`,
      `适合人群：${result.audience}`,
      "综合评分：8.9/10",
      "商业化潜力：9.2/10",
      "中文市场机会：8.7/10",
      "小白友好度：6.8/10",
      "部署难度：中等",
      "SEO潜力：8.5/10",
      "适合做中文版：是",
      "适合做工具站：是",
      "适合做教程内容：是",
      "适合做代部署服务：谨慎",
      "适合做订阅制：可尝试",
      "最终建议：这个项目适合做中文解读和轻量工具站，但不建议直接照搬源码。更适合先做内容页、工具页和SEO流量测试。",
    ].join("\n");

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(report);
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
      <div className="space-y-5">
        <article className="dashboard-card p-6 sm:p-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI 项目商业化模拟分析
          </div>

          <h1 className="mt-4 font-mono text-3xl tracking-tight text-slate-900 sm:text-4xl">
            GitHub项目分析器
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            输入任意 GitHub 项目链接，AI帮你分析它的商业化潜力、中文市场机会、部署难度和变现方式。
          </p>

          <div className="mt-6 rounded-3xl border border-indigo-100 bg-white p-4 shadow-[0_20px_60px_rgba(79,70,229,0.12)] sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <input
                  value={repoUrl}
                  onChange={(event) => setRepoUrl(event.target.value)}
                  placeholder="https://github.com/owner/repo"
                  className="h-11 w-full rounded-xl border border-indigo-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
                />
              </label>
              <button
                type="button"
                onClick={handleAnalyze}
                className="btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {loading ? "分析中..." : "开始分析"}
              </button>
            </div>
            {error ? <p className="mt-2 text-xs text-rose-600">{error}</p> : null}

            <div className="mt-3 flex flex-wrap gap-2">
              {SAMPLE_REPOS.map((repo) => (
                <button
                  key={repo}
                  type="button"
                  onClick={() => setExampleRepo(repo)}
                  className="rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs text-slate-700 transition hover:border-indigo-300"
                >
                  {repo}
                </button>
              ))}
            </div>
          </div>
        </article>

        {result ? (
          <article className="dashboard-card p-6 sm:p-7">
            <div className="grid gap-5 xl:grid-cols-12">
              <section className="space-y-4 xl:col-span-7">
                <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">项目基础信息</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <InfoItem label="项目名称" value={result.projectName} />
                    <InfoItem label="项目类型" value={result.projectType} />
                    <InfoItem label="一句话介绍" value={result.intro} />
                    <InfoItem label="适合人群" value={result.audience} />
                  </div>
                </div>

                <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">评分卡片</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {SCORE_CARDS.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2"
                      >
                        <p className="text-xs text-slate-500">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">商业化分析</h2>
                  <div className="mt-4 grid gap-2">
                    {BUSINESS_ANALYSIS.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2"
                      >
                        <span className="text-sm text-slate-600">{item.label}</span>
                        <span className="font-semibold text-indigo-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-4 xl:col-span-5">
                <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">推荐变现方式</h2>
                  <div className="mt-4 grid gap-2">
                    {MONETIZATION_METHODS.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-indigo-700">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">风险提醒</h2>
                  <ul className="mt-4 space-y-2">
                    {RISKS.map((item) => (
                      <li key={item} className="inline-flex items-start gap-2 text-sm text-slate-600">
                        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
                  <h2 className="font-mono text-xl text-slate-900">最终建议</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    这个项目适合做中文解读和轻量工具站，但不建议直接照搬源码。更适合先做内容页、工具页和SEO流量测试。
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyReport}
                disabled={!canCopy}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Copy className="h-4 w-4" />
                {copied ? "已复制" : "复制分析报告"}
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                <Globe className="h-4 w-4" />
                生成建站方案
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                <Rocket className="h-4 w-4" />
                生成推广文案
              </button>
              <Link
                href="/"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-sm font-semibold text-white"
              >
                返回首页
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ) : (
          <article className="dashboard-card p-6 sm:p-7">
            <div className="rounded-3xl border border-dashed border-indigo-200 bg-white p-8 text-center">
              <Lightbulb className="mx-auto h-8 w-8 text-indigo-500" />
              <p className="mt-3 text-sm text-slate-600">
                输入 GitHub 项目链接并点击“开始分析”，即可生成 AI 项目商业化分析报告（模拟版）。
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}
