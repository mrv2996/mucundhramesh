import HeroSection from "@/components/HeroSection";
import NextEventSection from "@/components/NextEventSection";
import ExperienceSection from "@/components/ExperienceSection";
import AdvisedCompaniesSection from "@/components/AdvisedCompaniesSection";
import CoursesSection from "@/components/CoursesSection";
import YouTubeSection from "@/components/YouTubeSection";
import AboutMeSection from "@/components/AboutMeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-background">
      {/* Floating background orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      <HeroSection />
      <NextEventSection />
      <ExperienceSection />
      <AdvisedCompaniesSection />
      <CoursesSection />
      <YouTubeSection />
      <AboutMeSection />
    </div>
  );
};

export default Index;
