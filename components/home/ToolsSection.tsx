import Image from "next/image";
import {
  siAnthropic,
  siCursor,
  siGooglegemini,
  siNotion,
  siPerplexity,
  type SimpleIcon,
} from "simple-icons";
import { ShieldCheck } from "lucide-react";
import { tools } from "@/data/home";

const logoMap: Record<string, SimpleIcon> = {
  Claude: siAnthropic,
  Gemini: siGooglegemini,
  Cursor: siCursor,
  Perplexity: siPerplexity,
  "Notion AI": siNotion,
};

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
                <BrandLogo toolName={tool.name} fallback={tool.short} />
                <div>
                  <p className="font-semibold text-slate-900">{tool.name}</p>
                  <p className="text-xs text-slate-500">{tool.type}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2 text-xs">
                <InfoRow label="可用状态" value={tool.availability} />
                <InfoRow label="中文支持" value={tool.chinese} />
                <InfoRow label="收费模式" value={tool.pricing} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>{tool.availability}</Tag>
                <Tag>{tool.chinese}</Tag>
                <Tag>{tool.pricing}</Tag>
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

type BrandLogoProps = {
  toolName: string;
  fallback: string;
};

function BrandLogo({ toolName, fallback }: BrandLogoProps) {
  if (toolName === "ChatGPT") {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
        <Image
          src="/brand/openai-symbol.svg"
          alt="OpenAI logo"
          width={34}
          height={34}
          className="h-8 w-8"
        />
      </span>
    );
  }

  const icon = logoMap[toolName];
  if (icon) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" role="img">
          <path d={icon.path} fill={`#${icon.hex}`} />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-semibold text-white">
        {fallback}
      </span>
    </span>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 px-2.5 py-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}

type TagProps = {
  children: React.ReactNode;
};

function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs text-slate-600">
      {children}
    </span>
  );
}
