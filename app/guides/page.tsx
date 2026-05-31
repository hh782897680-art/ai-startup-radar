import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "新手指南 | AI创业雷达",
  description: "AI创业雷达新手指南：发现项目、判断机会、7天验证、做MVP、推广测试。",
  path: "/guides",
  keywords: ["AI创业新手指南", "7天验证", "MVP", "项目判断"],
});

const guides = [
  {
    title: "1. 发现项目",
    description: "从项目库和排行榜中筛出 2-3 个你能理解、能接触到用户的方向。",
  },
  {
    title: "2. 判断机会",
    description: "看商业化潜力、竞争指数、小白友好度，不要只看热度。",
  },
  {
    title: "3. 7天验证",
    description: "先验证是否有人愿意用、愿意留联系方式、愿意咨询，再决定投入。",
  },
  {
    title: "4. 做MVP",
    description: "做最小可用版本，先解决一个真实痛点，不做大而全。",
  },
  {
    title: "5. 推广测试",
    description: "用 SEO 内容、社群、短视频做小流量测试，复盘数据后再扩展。",
  },
];

export default function GuidesPage() {
  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">新手指南</p>
        <h1>新手指南</h1>
        <p>这不是课程站，而是一套可执行的最小流程，帮助你避免“做了很久没人用”。</p>
      </section>

      <section className="guides-grid">
        {guides.map((guide) => (
          <article key={guide.title} className="guide-card premium-card">
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
