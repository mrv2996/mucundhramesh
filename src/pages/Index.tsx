import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import JourneySection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <CompaniesSection />
        <CaseStudiesSection />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <ToolsSection />
        <RecommendationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
