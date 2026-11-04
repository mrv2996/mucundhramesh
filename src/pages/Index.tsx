import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import JourneySection from "@/components/ExperienceSection";
import HomeRecommendation from "@/components/HomeRecommendation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <CompaniesSection />
        <SelectedWorkSection />
        <JourneySection />
        <HomeRecommendation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
