"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { EnrichedProjectOpportunity } from "@/lib/projects";
import { getProjectOverallScore } from "@/lib/projects";
import {
  getProjectDecisionProfile,
  type CodeRequirement,
  type MonetizationType,
  type StartupCost,
  type TrafficType,
} from "@/lib/project-profile";

type ProjectMatchQuizProps = {
  projects: EnrichedProjectOpportunity[];
};

type Answers = {
  code: "none" | "basic" | "strong";
  time: "light" | "steady" | "full";
  budget: StartupCost;
  channel: TrafficType;
  monetization: MonetizationType;
  resources: "none" | "some";
  mode: "product" | "service" | "content";
};

type Question = {
  key: keyof Answers;
  title: string;
  description: string;
  options: Array<{ value: Answers[keyof Answers]; label: string; note: string }>;
};

const storageKey = "ai-project-radar-match-result";

const questions: Question[] = [
  {
    key: "code",
    title: "你的代码能力到什么程度？",
    description: "这会影响部署型项目和轻工具项目的优先级。",
    options: [
      { value: "none", label: "不会代码", note: "优先无代码或内容驱动项目" },
      { value: "basic", label: "能改代码", note: "可以处理模板、API 和轻量部署" },
      { value: "strong", label: "可独立开发", note: "能承担完整 MVP 和技术交付" },
    ],
  },
  {
    key: "time",
    title: "你每天能稳定投入多少时间？",
    description: "按可持续投入选择，不按最理想状态选择。",
    options: [
      { value: "light", label: "1 小时以内", note: "适合单点工具或模板验证" },
      { value: "steady", label: "1-3 小时", note: "可以推进标准 MVP" },
      { value: "full", label: "3 小时以上", note: "可尝试交付或深度产品" },
    ],
  },
  {
    key: "budget",
    title: "你的首轮验证预算？",
    description: "这里只计算验证预算，不代表需要一次性投入。",
    options: [
      { value: "low", label: "¥500 以内", note: "优先低成本、小范围测试" },
      { value: "medium", label: "¥500-¥3,000", note: "可覆盖域名、工具和样板交付" },
      { value: "high", label: "¥3,000 以上", note: "可承担部署、数据或行业 PoC" },
    ],
  },
  {
    key: "channel",
    title: "你最擅长哪类获客渠道？",
    description: "优先匹配你已经能触达用户的渠道。",
    options: [
      { value: "seo", label: "SEO 搜索", note: "擅长关键词、内容和工具页" },
      { value: "social", label: "X / 小红书", note: "擅长案例、观点和过程分享" },
      { value: "video", label: "视频内容", note: "擅长教程、演示和前后对比" },
      { value: "community", label: "社群运营", note: "擅长社区、论坛和私域沟通" },
      { value: "sales", label: "销售 / 地推", note: "能直接联系企业或本地商家" },
    ],
  },
  {
    key: "monetization",
    title: "你更想验证哪种变现方式？",
    description: "所有选项都只是可能路径，需要先验证付费意愿。",
    options: [
      { value: "subscription", label: "工具订阅", note: "偏产品和持续使用" },
      { value: "service", label: "服务交付", note: "偏咨询、部署或代运营" },
      { value: "template", label: "模板售卖", note: "偏轻交付和数字产品" },
      { value: "training", label: "培训课程", note: "偏知识与实操教学" },
      { value: "affiliate", label: "广告 / 联盟", note: "偏流量型内容或工具站" },
      { value: "leads", label: "线索获取", note: "偏咨询、报价和客户转介" },
    ],
  },
  {
    key: "resources",
    title: "你是否已有行业资源？",
    description: "行业资料、客户关系和真实场景会显著降低验证难度。",
    options: [
      { value: "none", label: "暂时没有", note: "优先公开渠道可触达的用户" },
      { value: "some", label: "有一些资源", note: "优先做行业模板或服务交付" },
    ],
  },
  {
    key: "mode",
    title: "你更喜欢哪种工作方式？",
    description: "选择你愿意连续做三个月的方式。",
    options: [
      { value: "product", label: "做产品", note: "持续迭代工具和用户体验" },
      { value: "service", label: "卖服务", note: "直接解决客户问题并沉淀 SOP" },
      { value: "content", label: "做内容", note: "通过搜索或社媒建立流量入口" },
    ],
  },
];

function codeScore(requirement: CodeRequirement, answer: Answers["code"]) {
  if (answer === "none") return requirement === "none" ? 7 : requirement === "low" ? 2 : -7;
  if (answer === "basic") return requirement === "low" ? 6 : requirement === "none" ? 4 : 1;
  return requirement === "high" ? 6 : 3;
}

function costScore(cost: StartupCost, answer: StartupCost) {
  const order = { low: 0, medium: 1, high: 2 };
  return order[cost] <= order[answer] ? 5 : -6;
}

function getMatchScore(project: EnrichedProjectOpportunity, answers: Answers) {
  const profile = getProjectDecisionProfile(project);
  let score = getProjectOverallScore(project) * 2;

  score += codeScore(profile.codeRequirement, answers.code);
  score += costScore(profile.startupCost, answers.budget);
  score += profile.trafficTypes.includes(answers.channel) ? 7 : 0;
  score += profile.monetizationTypes.includes(answers.monetization) ? 8 : 0;
  score += answers.time === "light" ? (profile.beginnerSuitable ? 4 : -3) : answers.time === "full" ? 2 : 1;
  score += answers.resources === "some" && profile.serviceFit >= 7.5 ? 4 : 0;
  score += answers.resources === "none" && profile.beginnerSuitable ? 2 : 0;
  score += answers.mode === "service" ? profile.serviceFit * 0.7 : 0;
  score += answers.mode === "content" ? Math.max(profile.socialFit, profile.toolSiteFit) * 0.7 : 0;
  score += answers.mode === "product" ? project.commercialPotential * 0.6 : 0;

  return score;
}

export function ProjectMatchQuiz({ projects }: ProjectMatchQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [showResults, setShowResults] = useState(false);
  const [restoredSlugs, setRestoredSlugs] = useState<string[]>([]);

  const completedAnswers = answers as Answers;
  const recommendations = useMemo(() => {
    if (Object.keys(answers).length !== questions.length) return [];

    return [...projects]
      .sort((a, b) => getMatchScore(b, completedAnswers) - getMatchScore(a, completedAnswers))
      .slice(0, 3);
  }, [answers, completedAnswers, projects]);

  const restoredProjects = restoredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is EnrichedProjectOpportunity => Boolean(project));
  const currentQuestion = questions[step];
  const currentAnswer = answers[currentQuestion.key];
  const progress = ((step + 1) / questions.length) * 100;

  function chooseAnswer(value: Answers[keyof Answers]) {
    setAnswers((current) => ({ ...current, [currentQuestion.key]: value }));
  }

  function finishQuiz() {
    if (!currentAnswer) return;
    const slugs = recommendations.map((project) => project.slug);
    window.localStorage.setItem(storageKey, JSON.stringify({ slugs, savedAt: new Date().toISOString() }));
    setRestoredSlugs([]);
    setShowResults(true);
  }

  function restoreResult() {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as { slugs?: string[] };
      setRestoredSlugs(parsed.slugs ?? []);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
    setRestoredSlugs([]);
  }

  if (showResults || restoredProjects.length > 0) {
    const visibleResults = showResults ? recommendations : restoredProjects;

    return (
      <section className="match-results">
        <div className="match-result-head premium-card">
          <span className="match-result-icon"><Sparkles size={20} aria-hidden="true" /></span>
          <div>
            <p className="section-kicker">匹配结果</p>
            <h2>更值得你优先验证的 3 个方向</h2>
            <p>结果基于你的资源和偏好排序，不代表收益预测。建议只选一个方向做 7 天验证。</p>
          </div>
          <button type="button" className="quiz-reset" onClick={restart}>
            <RotateCcw size={15} aria-hidden="true" /> 重新测试
          </button>
        </div>
        <div className="project-grid">
          {visibleResults.map((project, index) => (
            <div key={project.slug} className="matched-project">
              <span className="match-rank">推荐 {index + 1}</span>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <p className="quiz-disclaimer">匹配结果已暂存在当前浏览器 localStorage，不会上传个人信息。</p>
      </section>
    );
  }

  return (
    <section className="quiz-shell premium-card">
      <div className="quiz-progress-head">
        <div>
          <span>问题 {step + 1} / {questions.length}</span>
          <strong>{Math.round(progress)}%</strong>
        </div>
        <div className="quiz-progress-track"><span style={{ width: `${progress}%` }} /></div>
      </div>

      <div className="quiz-question">
        <p className="section-kicker">AI 项目匹配测试</p>
        <h2>{currentQuestion.title}</h2>
        <p>{currentQuestion.description}</p>
      </div>

      <div className="quiz-options">
        {currentQuestion.options.map((option) => {
          const selected = currentAnswer === option.value;
          return (
            <button
              key={option.value}
              type="button"
              className={selected ? "quiz-option quiz-option-selected" : "quiz-option"}
              aria-pressed={selected}
              onClick={() => chooseAnswer(option.value)}
            >
              <span className="quiz-option-check">{selected ? <Check size={15} aria-hidden="true" /> : null}</span>
              <strong>{option.label}</strong>
              <small>{option.note}</small>
            </button>
          );
        })}
      </div>

      <div className="quiz-navigation">
        <button
          type="button"
          className="btn btn-secondary btn-md"
          disabled={step === 0}
          onClick={() => setStep((current) => Math.max(0, current - 1))}
        >
          <ArrowLeft size={16} aria-hidden="true" /> 上一步
        </button>
        {step < questions.length - 1 ? (
          <button
            type="button"
            className="btn btn-primary btn-md"
            disabled={!currentAnswer}
            onClick={() => setStep((current) => current + 1)}
          >
            下一步 <ArrowRight size={16} aria-hidden="true" />
          </button>
        ) : (
          <button type="button" className="btn btn-primary btn-md" disabled={!currentAnswer} onClick={finishQuiz}>
            查看推荐结果 <Sparkles size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="quiz-restore">
        <button type="button" onClick={restoreResult}>恢复上次保存在本机的结果</button>
        <Link href="/projects">暂时跳过，直接进入项目库</Link>
      </div>
    </section>
  );
}
