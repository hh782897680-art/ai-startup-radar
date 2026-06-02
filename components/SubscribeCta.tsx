"use client";

import { useMemo, useState } from "react";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/cn";

type SubscribeCtaProps = {
  title?: string;
  description?: string;
  className?: string;
  compact?: boolean;
};

const recipient = "subscribe@aiprojectradar.com";

export function SubscribeCta({
  title = "领取 AI 项目 7 天验证模板",
  description = "留下你的邮箱订阅项目机会更新，同时下载用于访谈、定价、验证和复盘的免费模板。",
  className,
  compact = false,
}: SubscribeCtaProps) {
  const [email, setEmail] = useState("");

  const subscribeHref = useMemo(() => {
    const subject = "订阅 AI创业雷达项目机会周报";
    const body = [
      "你好，我想订阅 AI创业雷达项目机会周报。",
      "",
      `我的邮箱：${email.trim() || "请填写你的邮箱"}`,
      "我想领取：AI 项目 7 天验证模板",
    ].join("\n");

    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email]);

  return (
    <section className={cn("subscribe-cta premium-card", compact && "subscribe-cta-compact", className)}>
      <div className="subscribe-copy">
        <p className="section-kicker">免费模板</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="subscribe-actions">
        <label className="subscribe-input">
          <Mail size={17} aria-hidden="true" />
          <span className="sr-only">邮箱地址</span>
          <input
            type="email"
            inputMode="email"
            value={email}
            placeholder="你的邮箱"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <a className="btn btn-primary btn-md" href={subscribeHref}>
          订阅并领取
        </a>
        <a className="btn btn-secondary btn-md" href="/downloads/ai-project-validation-template.md" download>
          <Download size={16} aria-hidden="true" />
          直接下载
        </a>
      </div>

      <p className="subscribe-note">
        当前入口使用邮件订阅申请，后续可直接替换为 Beehiiv、Substack、Formspree 或自建邮件服务。
      </p>
    </section>
  );
}
