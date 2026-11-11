import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WorkCard } from "@/components/WorkCard";
import { usePageMeta } from "@/hooks/use-page-meta";
import { allWork } from "@/lib/work";

const Work = () => {
  usePageMeta("Work | Mucundh Ramesh", "All case studies and projects by Mucundh Ramesh.");
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="px-6 pt-10 lg:pt-14 pb-section">
          <div className="max-w-content mx-auto">
            <div className="mb-[var(--section-heading-gap)]">
              <h1 className="font-inter text-2xl lg:text-3xl font-semibold text-primary">Work</h1>
              <p className="mt-2 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed">
                Case studies and projects across operations, automation and strategy: real-world stories of operational
                improvements, automation wins, and strategic implementations that drive measurable business impact.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allWork.map((item) => <WorkCard key={item.title} item={item} headingLevel="h2" />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
