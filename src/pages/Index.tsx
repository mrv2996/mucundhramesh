import ContactCTA from "@/components/ContactCTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import JourneySection from "@/components/ExperienceSection";
import HomeRecommendation from "@/components/HomeRecommendation";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <Reveal><HomeRecommendation /></Reveal>
        <SelectedWorkSection />
        <Reveal><JourneySection /></Reveal>
      </main>
      <Reveal><ContactCTA /></Reveal>
      <Footer />
    </div>
  );
};

export default Index;
