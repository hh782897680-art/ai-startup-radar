import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFoundPage() {
  return (
    <Container className="page">
      <article className="not-found premium-card">
        <h1>页面不存在</h1>
        <p>你访问的页面可能已移动或不存在。</p>
        <Button href="/projects" variant="secondary">
          返回 AI项目库
        </Button>
      </article>
    </Container>
  );
}
