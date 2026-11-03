import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publishedStudies } from "@/lib/case-studies";

export const RelatedCaseStudies = ({ currentPath }: { currentPath: string }) => (
  <section className="container max-w-content pb-16 font-source">
    <div className="border-t pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="font-inter text-2xl font-semibold text-primary">More Case Studies</h2>
        <Button asChild variant="link" className="min-h-11 text-base"><Link to="/work"><ArrowLeft />All case studies</Link></Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {publishedStudies.filter(study => study.path !== currentPath).map(study => (
          <Link key={study.path} to={study.path} className="group rounded-lg border bg-card p-6 transition-shadow hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <div className="flex items-start justify-between gap-4"><h3 className="font-inter text-xl font-semibold text-primary">{study.title}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" /></div>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{study.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
