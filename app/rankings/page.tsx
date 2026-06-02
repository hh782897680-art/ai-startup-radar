import { Container } from "@/components/Container";
import { RankingList } from "@/components/RankingList";
import {
  getBeginnerFriendlyRanking,
  getLowCompetitionRanking,
  getToolSiteFitRanking,
} from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "项目排行榜 | AI创业雷达",
  description: "AI创业雷达项目排行榜：小白友好榜、低竞争榜、适合工具站榜。",
  path: "/rankings",
  keywords: ["AI项目排行榜", "小白友好榜", "低竞争项目", "工具站项目"],
});

export default function RankingsPage() {
  const beginnerRanking = getBeginnerFriendlyRanking(5);
  const lowCompetitionRanking = getLowCompetitionRanking(5);
  const toolSiteRanking = getToolSiteFitRanking(5);

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">项目排行榜</p>
        <h1>项目排行榜</h1>
        <p>按不同目标给出可执行排序，不同榜单代表不同策略，不代表收益承诺。</p>
        <small className="score-note">评分说明：站内参考评分，仅供参考。</small>
      </section>

      <section className="rankings-grid">
        <RankingList
          title="小白友好榜"
          description="更适合先做出结果的新手项目。"
          items={beginnerRanking}
          scoreLabel="友好度"
          scoreOf={(project) => project.beginnerFriendly}
        />

        <RankingList
          title="低竞争榜"
          description="竞争指数更低，适合先切入的机会。"
          items={lowCompetitionRanking}
          scoreLabel="竞争"
          scoreOf={(project) => project.competitionIndex}
        />

        <RankingList
          title="适合工具站榜"
          description="SEO潜力与中文市场机会更高，更适合工具站模式。"
          items={toolSiteRanking}
          scoreLabel="适配度"
          scoreOf={(project) => (project.seoPotential + project.chineseMarketOpportunity) / 2}
        />
      </section>
    </Container>
  );
}
