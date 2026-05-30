import { ArticlesSection } from "@/components/home/ArticlesSection";
import { CommunityCta } from "@/components/home/CommunityCta";
import { FeatureCards } from "@/components/home/FeatureCards";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectCards } from "@/components/home/ProjectCards";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { WorkspaceSection } from "@/components/home/WorkspaceSection";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <BackgroundGlow />
      <Header />

      <main className="space-y-5 pb-6 pt-5 sm:space-y-6">
        <HeroSection />
        <FeatureCards />
        <WorkspaceSection />
        <ProjectCards />
        <ToolsSection />
        <ArticlesSection />
        <ResourcesSection />
        <TestimonialsSection />
        <CommunityCta />
      </main>

      <Footer />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-420px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(99,102,241,0)_72%)]" />
      <div className="absolute left-[-8rem] top-[14rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24)_0%,rgba(59,130,246,0)_70%)] blur-2xl" />
      <div className="absolute right-[-7rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.23)_0%,rgba(34,211,238,0)_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(168,85,247,0)_70%)] blur-2xl" />
    </div>
  );
}
