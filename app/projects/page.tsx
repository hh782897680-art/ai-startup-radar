import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { buildPageMetadata } from "@/lib/seo";
import { getAllProjects } from "@/lib/projects";

export const metadata = buildPageMetadata({
  title: "AI项目库 | AI创业雷达",
  description: "浏览 AI创业雷达内置的 12 个高质量项目机会，查看商业化、竞争度、小白友好度与验证路径。",
  path: "/projects",
  keywords: ["AI项目库", "AI机会", "项目拆解", "开源AI项目"],
});

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">AI项目库</p>
        <h1>AI项目库</h1>
        <p>共 {allProjects.length} 个项目机会，按“适合普通人执行”的视角进行结构化拆解。</p>
      </section>

      <section className="project-grid">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </Container>
  );
}
