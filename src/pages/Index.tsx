import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-background">
      {/* Floating background orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      <HeroSection />
      <SkillsSection />
      <ToolsSection />
      <RecommendationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default Index;
