import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { GitHubAnalyzerClient } from "@/components/github-analyzer/GitHubAnalyzerClient";

export const metadata: Metadata = {
  title: "GitHub项目分析器 - AI创业雷达",
  description:
    "输入 GitHub 项目链接，分析开源项目的商业化潜力、中文市场机会、SEO价值和变现方式。",
};

export default function GitHubAnalyzerPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Header />
      <main className="py-6 sm:py-8">
        <GitHubAnalyzerClient />
      </main>
    </div>
  );
}
