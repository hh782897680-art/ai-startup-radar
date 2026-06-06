import { Container } from "@/components/Container";
import { RankingList } from "@/components/RankingList";
import {
  getAllProjects,
  getBeginnerFriendlyRanking,
  getLowCompetitionRanking,
  getToolSiteFitRanking,
} from "@/lib/projects";
import { getProjectDecisionProfile } from "@/lib/project-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "项目排行榜 | AI创业雷达",
  description: "AI创业雷达项目排行榜：小白友好、低竞争、工具站、SEO、社媒引流、服务交付和英文站机会榜。",
  path: "/rankings",
  keywords: ["AI项目排行榜", "小白友好榜", "低竞争项目", "工具站项目", "SEO项目", "AI服务项目"],
});

export default function RankingsPage() {
  const allProjects = getAllProjects();
  const beginnerRanking = getBeginnerFriendlyRanking(5);
  const lowCompetitionRanking = getLowCompetitionRanking(5);
  const toolSiteRanking = getToolSiteFitRanking(5);
  const seoRanking = [...allProjects].sort((a, b) => b.seoPotential - a.seoPotential).slice(0, 5);
  const socialRanking = [...allProjects]
    .sort((a, b) => getProjectDecisionProfile(b).socialFit - getProjectDecisionProfile(a).socialFit)
    .slice(0, 5);
  const serviceRanking = [...allProjects]
    .sort((a, b) => getProjectDecisionProfile(b).serviceFit - getProjectDecisionProfile(a).serviceFit)
    .slice(0, 5);
  const englishRanking = [...allProjects]
    .sort((a, b) => getProjectDecisionProfile(b).englishSiteFit - getProjectDecisionProfile(a).englishSiteFit)
    .slice(0, 5);

  return (
    <Container className="page">
      <section className="page-intro">
        <p className="section-kicker">项目排行榜</p>
        <h1>项目排行榜</h1>
        <p>按不同目标给出可执行排序，不同榜单代表不同策略，不代表收益承诺。</p>
        <small className="score-note">评分说明：站内参考评分，仅供参考。</small>
      </section>

      <section className="rankings-grid rankings-page-grid">
        <RankingList
          title="小白友好榜"
          description="更适合先做出结果的新手项目。"
          audience="没有成熟产品经验，想先做轻量验证的人。"
          items={beginnerRanking}
          scoreLabel="友好度"
          scoreOf={(project) => project.beginnerFriendly}
        />

        <RankingList
          title="低竞争榜"
          description="竞争指数更低，适合先切入的机会。"
          audience="想避开通用红海，从垂直需求开始的人。"
          items={lowCompetitionRanking}
          scoreLabel="竞争"
          scoreOf={(project) => project.competitionIndex}
        />

        <RankingList
          title="适合工具站榜"
          description="SEO潜力与中文市场机会更高，更适合工具站模式。"
          audience="会做网页、SEO 或内容，希望积累搜索流量的人。"
          items={toolSiteRanking}
          scoreLabel="适配度"
          scoreOf={(project) => (project.seoPotential + project.chineseMarketOpportunity) / 2}
        />

        <RankingList
          title="最适合 SEO 榜"
          description="关键词空间和内容延展性相对更强。"
          audience="擅长关键词研究、内容建设和长期搜索流量的人。"
          items={seoRanking}
          scoreLabel="SEO潜力"
          scoreOf={(project) => project.seoPotential}
        />

        <RankingList
          title="最适合 X / 小红书引流榜"
          description="更容易用案例、教程和过程分享解释价值。"
          audience="愿意持续公开构建、做案例内容或运营个人账号的人。"
          items={socialRanking}
          scoreLabel="社媒适配"
          scoreOf={(project) => getProjectDecisionProfile(project).socialFit}
        />

        <RankingList
          title="最适合卖服务榜"
          description="更适合从部署、顾问、代运营或交付切入。"
          audience="能直接接触企业或商家，希望先用服务验证需求的人。"
          items={serviceRanking}
          scoreLabel="服务适配"
          scoreOf={(project) => getProjectDecisionProfile(project).serviceFit}
        />

        <RankingList
          title="最适合英文站榜"
          description="海外用户场景和英文搜索需求相对更清晰。"
          audience="熟悉跨境、电商或英文内容，准备面向海外用户的人。"
          items={englishRanking}
          scoreLabel="英文站适配"
          scoreOf={(project) => getProjectDecisionProfile(project).englishSiteFit}
        />
      </section>
    </Container>
  );
}
