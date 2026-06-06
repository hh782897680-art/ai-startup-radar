import { Container } from "@/components/Container";
import { ProjectMatchQuiz } from "@/components/ProjectMatchQuiz";
import { getAllProjects } from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI项目匹配测试 | AI创业雷达",
  description: "用 7 个问题，根据代码能力、时间、预算、获客渠道和变现偏好，匹配更适合优先验证的 AI 项目方向。",
  path: "/match",
  keywords: ["AI项目匹配", "AI创业测试", "适合我的AI项目", "AI项目推荐"],
});

export default function MatchPage() {
  return (
    <Container className="page match-page">
      <section className="page-intro match-intro">
        <p className="section-kicker">项目决策助手</p>
        <h1>测一测适合我的 AI 项目</h1>
        <p>回答 7 个问题，系统会从现有项目库中匹配 3 个更符合你当前资源的方向。结果只用于缩小选择范围，不承诺收益。</p>
      </section>
      <ProjectMatchQuiz projects={getAllProjects()} />
    </Container>
  );
}
