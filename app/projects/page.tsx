import { Container } from "@/components/Container";
import { ProjectFilters } from "@/components/ProjectFilters";
import { SubscribeCta } from "@/components/SubscribeCta";
import { buildPageMetadata } from "@/lib/seo";
import { getAllProjects } from "@/lib/projects";

export const metadata = buildPageMetadata({
  title: "AI项目雷达 | 可筛选 AI 项目机会库",
  description: "用 AI创业雷达筛选 12 个 AI 项目机会，按商业化、竞争度、小白友好、SEO潜力、变现方式和验证路径判断是否值得做。",
  path: "/projects",
  keywords: ["AI项目雷达", "AI项目库", "AI机会", "项目拆解", "开源AI项目", "AI创业项目"],
});

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">AI项目库</p>
        <h1>AI项目雷达</h1>
        <p>
          共 {allProjects.length} 个项目机会，按商业化、竞争度、SEO 潜力、变现方式和验证路径筛选，先判断再动手。
        </p>
      </section>

      <ProjectFilters projects={allProjects} />

      <SubscribeCta />
    </Container>
  );
}
