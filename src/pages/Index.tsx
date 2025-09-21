import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import JourneySection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-background">
      <Navigation />
      {/* Floating background orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      <main>
        <HeroSection />
        <CompaniesSection />
        <SkillsSection />
        <ToolsSection />
        <ProjectsSection />
        <JourneySection />
        <RecommendationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
