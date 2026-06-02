import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SubscribeCta } from "@/components/SubscribeCta";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI项目7天验证模板 | AI创业雷达",
  description: "免费下载 AI 项目 7 天验证模板，包含用户访谈、竞品分析、MVP范围、报价测试与复盘标准。",
  path: "/templates/ai-project-validation-template",
  keywords: ["AI项目验证模板", "7天验证", "MVP验证", "AI创业模板"],
});

const templateSections = [
  {
    title: "项目假设",
    items: ["项目名称", "目标用户", "核心痛点", "现有替代方案", "最小解决方案", "预期收费方式"],
  },
  {
    title: "用户访谈",
    items: ["最近一次遇到问题的场景", "目前解决方式", "每周耗时或损失", "是否为类似方案付费", "试用条件", "付费条件"],
  },
  {
    title: "竞品和替代方案",
    items: ["直接竞品", "人工替代方案", "表格/模板替代方案", "我的差异化角度"],
  },
  {
    title: "MVP范围",
    items: ["只保留一个核心输入", "只输出一个可验证结果", "明确暂时不做的功能", "准备可复用模板或演示脚本"],
  },
  {
    title: "定价测试",
    items: ["入门模板/诊断价格", "标准交付价格", "订阅或维护价格", "记录用户对价格的真实反应"],
  },
  {
    title: "通过/不通过标准",
    items: ["是否有真实资料", "是否愿意预约演示", "是否愿意谈价格", "是否能找到稳定流量入口"],
  },
];

export default function ValidationTemplatePage() {
  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">免费模板</p>
        <h1>AI 项目 7 天验证模板</h1>
        <p>
          用一份固定模板，把“我觉得这个项目不错”变成可验证的用户访谈、MVP 范围、报价测试和复盘结论。
        </p>
        <div className="hero-actions">
          <Button href="/downloads/ai-project-validation-template.md">
            下载 Markdown 模板
          </Button>
          <Button href="/projects" variant="secondary">
            返回项目雷达
          </Button>
        </div>
      </section>

      <section className="template-grid">
        {templateSections.map((section) => (
          <article key={section.title} className="template-card premium-card">
            <h2>{section.title}</h2>
            <ul className="check-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <SubscribeCta />
    </Container>
  );
}
