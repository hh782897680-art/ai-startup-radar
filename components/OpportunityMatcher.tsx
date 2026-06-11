"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Compass,
  Copy,
  RefreshCcw,
  Route,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  buildMatcherCopyText,
  getAnswerLabel,
  matcherQuestions,
  rankMatcherProfiles,
  type MatcherAnswers,
} from "@/data/opportunity-matcher";

function copyWithFallback(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

export function OpportunityMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<MatcherAnswers>>({});
  const [showResult, setShowResult] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const currentQuestion = matcherQuestions[step];
  const currentAnswer = answers[currentQuestion.key];
  const completed = Object.keys(answers).length === matcherQuestions.length;
  const rankedProfiles = useMemo(
    () => (completed ? rankMatcherProfiles(answers as MatcherAnswers) : []),
    [answers, completed],
  );
  const primaryResult = rankedProfiles[0];
  const secondaryResult = rankedProfiles[1];
  const progress = ((step + 1) / matcherQuestions.length) * 100;

  function chooseAnswer(value: MatcherAnswers[keyof MatcherAnswers]) {
    setAnswers((current) => ({ ...current, [currentQuestion.key]: value }));
  }

  function nextStep() {
    if (!currentAnswer) return;
    setStep((current) => Math.min(matcherQuestions.length - 1, current + 1));
  }

  function previousStep() {
    setStep((current) => Math.max(0, current - 1));
  }

  function finish() {
    if (!currentAnswer || !completed) return;
    setShowResult(true);
    setCopyState("idle");
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResult(false);
    setCopyState("idle");
  }

  async function copyPlan() {
    if (!primaryResult || !secondaryResult) return;

    try {
      await copyWithFallback(
        buildMatcherCopyText(
          primaryResult.profile,
          secondaryResult.profile,
          answers as MatcherAnswers,
        ),
      );
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  if (showResult && primaryResult && secondaryResult) {
    const profile = primaryResult.profile;
    const secondary = secondaryResult.profile;
    const completedAnswers = answers as MatcherAnswers;
    const copyText = buildMatcherCopyText(profile, secondary, completedAnswers);

    return (
      <section className="opportunity-result" aria-live="polite">
        <div className="matcher-result-hero premium-card subtle-grid">
          <div className="matcher-result-copy">
            <p className="hero-status"><span /> 匹配完成</p>
            <div className="matcher-result-title">
              <span>{profile.code}</span>
              <div>
                <small>你的主推荐画像</small>
                <h2>{profile.title}</h2>
              </div>
            </div>
            <p>{profile.summary}</p>
            <div className="matcher-answer-tags">
              <span>{getAnswerLabel("technical", completedAnswers.technical)}</span>
              <span>{getAnswerLabel("interest", completedAnswers.interest)}</span>
              <span>{getAnswerLabel("goal", completedAnswers.goal)}</span>
            </div>
            <p className="matcher-risk-note">测试结果仅用于项目方向参考，不构成收益承诺。</p>
          </div>

          <div className="matcher-score-radar" aria-label={`主推荐匹配度 ${primaryResult.matchScore} 分`}>
            <span className="matcher-score-ring matcher-score-ring-one" />
            <span className="matcher-score-ring matcher-score-ring-two" />
            <span className="matcher-score-axis matcher-score-axis-x" />
            <span className="matcher-score-axis matcher-score-axis-y" />
            <i className="matcher-score-sweep" />
            <div>
              <strong>{primaryResult.matchScore}</strong>
              <small>匹配分</small>
            </div>
          </div>
        </div>

        <section className="matcher-secondary premium-card">
          <div>
            <p className="section-kicker">次推荐</p>
            <h2>{secondary.title}</h2>
            <p>{secondary.summary}</p>
          </div>
          <div className="matcher-secondary-score">
            <span>{secondary.code}</span>
            <strong>{secondaryResult.matchScore}</strong>
            <small>匹配分</small>
          </div>
        </section>

        <div className="matcher-result-layout">
          <div className="matcher-result-main">
            <section className="matcher-result-section premium-card">
              <div className="matcher-section-heading">
                <Compass size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">为什么这样推荐</p>
                  <h2>你的资源与这个方向更匹配</h2>
                </div>
              </div>
              <ul className="check-list">
                <li>
                  你选择了“{getAnswerLabel("interest", completedAnswers.interest)}”，说明当前兴趣与该画像的工作方式接近。
                </li>
                <li>
                  你当前最想“{getAnswerLabel("goal", completedAnswers.goal)}”，推荐会优先考虑 30 天内可见的结果。
                </li>
                {profile.reasons.map((reason) => <li key={reason}>{reason}</li>)}
              </ul>
            </section>

            <section className="matcher-result-section premium-card">
              <div className="matcher-section-heading">
                <Sparkles size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">推荐的 3 个项目方向</p>
                  <h2>只选一个开始验证</h2>
                </div>
              </div>
              <div className="matcher-direction-grid">
                {profile.directions.map((direction, index) => (
                  <article key={direction.title}>
                    <span>0{index + 1}</span>
                    <h3>{direction.title}</h3>
                    <p>{direction.description}</p>
                    <Link href={direction.href}>
                      查看站内参考 <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section className="matcher-result-section premium-card">
              <div className="matcher-split-grid">
                <div>
                  <div className="matcher-section-heading">
                    <ShieldAlert size={19} aria-hidden="true" />
                    <div>
                      <p className="section-kicker">不建议现在做什么</p>
                      <h2>先控制项目范围</h2>
                    </div>
                  </div>
                  <ul className="check-list risk-list">
                    {profile.avoid.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="matcher-section-heading">
                    <CheckCircle2 size={19} aria-hidden="true" />
                    <div>
                      <p className="section-kicker">你该先学什么</p>
                      <h2>当前能力路径</h2>
                    </div>
                  </div>
                  <div className="matcher-skill-list">
                    {profile.learnFirst.map((item, index) => (
                      <span key={item}><b>{index + 1}</b>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="matcher-result-section premium-card">
              <div className="matcher-section-heading">
                <Route size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">7 天行动计划</p>
                  <h2>从判断方向到获得第一次反馈</h2>
                </div>
              </div>
              <ol className="matcher-plan-list">
                {profile.plan.map((item, index) => (
                  <li key={item}>
                    <span>DAY {index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="matcher-copy-panel premium-card">
              <div className="matcher-section-heading">
                <Clipboard size={19} aria-hidden="true" />
                <div>
                  <p className="section-kicker">可复制版本</p>
                  <h2>保存你的画像和 7 天计划</h2>
                </div>
              </div>
              <pre>{copyText}</pre>
              <button type="button" className="btn btn-primary btn-md" onClick={copyPlan}>
                {copyState === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                {copyState === "copied" ? "已复制 7 天计划" : "复制我的 7 天计划"}
              </button>
              {copyState === "error" ? <small>复制失败，请手动选择上方文字。</small> : null}
            </section>
          </div>

          <aside className="matcher-learning-path premium-card">
            <p className="section-kicker">站内学习路径</p>
            <h2>先补齐这 3 项能力</h2>
            <div className="matcher-learning-links">
              {profile.links.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{link.title}</strong>
                    <small>{link.description}</small>
                  </div>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="matcher-secondary-note">
              <span>次推荐</span>
              <strong>{secondary.title}</strong>
              <p>如果主方向做一周后明显缺少兴趣或资源，可以再测试这个方向。</p>
            </div>
          </aside>
        </div>

        <div className="matcher-result-actions">
          <button type="button" className="btn btn-secondary btn-md" onClick={restart}>
            <RefreshCcw size={16} aria-hidden="true" /> 重新测试
          </button>
          <Link href="/projects" className="btn btn-ghost btn-md">
            查看完整项目库 <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="opportunity-matcher-shell premium-card">
      <div className="matcher-progress">
        <div>
          <span>第 {step + 1} / {matcherQuestions.length} 题</span>
          <strong>{Math.round(progress)}%</strong>
        </div>
        <div
          className="matcher-progress-track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={matcherQuestions.length}
          aria-valuenow={step + 1}
          aria-label={`匹配测试进度，第 ${step + 1} 题，共 ${matcherQuestions.length} 题`}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="matcher-question-heading">
        <div className="matcher-question-index">{String(step + 1).padStart(2, "0")}</div>
        <div>
          <p className="section-kicker">机会信号采集</p>
          <h2>{currentQuestion.title}</h2>
          <p>{currentQuestion.description}</p>
        </div>
      </div>

      <div className="matcher-option-grid">
        {currentQuestion.options.map((option) => {
          const selected = currentAnswer === option.value;
          return (
            <button
              key={option.value}
              type="button"
              className={selected ? "matcher-option matcher-option-selected" : "matcher-option"}
              aria-pressed={selected}
              onClick={() => chooseAnswer(option.value)}
            >
              <span className="matcher-option-check">
                {selected ? <Check size={16} aria-hidden="true" /> : null}
              </span>
              <strong>{option.label}</strong>
              <small>{option.note}</small>
            </button>
          );
        })}
      </div>

      <div className="matcher-navigation">
        <button
          type="button"
          className="btn btn-secondary btn-md"
          disabled={step === 0}
          onClick={previousStep}
        >
          <ArrowLeft size={16} aria-hidden="true" /> 上一步
        </button>
        {step < matcherQuestions.length - 1 ? (
          <button type="button" className="btn btn-primary btn-md" disabled={!currentAnswer} onClick={nextStep}>
            下一步 <ArrowRight size={16} aria-hidden="true" />
          </button>
        ) : (
          <button type="button" className="btn btn-primary btn-md" disabled={!currentAnswer} onClick={finish}>
            生成匹配结果 <Sparkles size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="matcher-privacy-note">
        选择只在当前页面内用于计算，刷新后会重新开始，不会上传或保存个人数据。
      </p>
    </section>
  );
}
