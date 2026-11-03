import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Work = () => {
  usePageMeta("Work | Mucundh Ramesh", "All case studies and projects by Mucundh Ramesh.");
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <h1 className="sr-only">Work</h1>
        <CaseStudiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
