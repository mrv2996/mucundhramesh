import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileCheck2, GitBranch, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

const SecFilingsCaseStudy = () => {
  usePageMeta("Scaling Customer Onboarding for SEC Filings | Mucundh Ramesh", "An end-to-end SEC filings workflow using Python, field mapping and Codex-assisted edge-case validation to support repeatable customer onboarding.");
  return <div className="min-h-screen bg-background pt-16 font-source">
    <Navigation />
    <main>
      <section className="container max-w-content py-section">
        <Button asChild variant="link" className="px-0 min-h-11 text-base"><Link to="/#case-studies"><ArrowLeft />Back to case studies</Link></Button>
        <div className="max-w-4xl mt-6">
          <div className="flex flex-wrap gap-2">{["Python", "Workflow Design", "Data Quality", "Codex"].map(tag => <Badge key={tag} variant="outline" className="text-base">{tag}</Badge>)}</div>
          <h1 className="mt-6 font-inter text-3xl font-semibold leading-tight text-primary">Scaling Customer Onboarding for SEC Filings</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">Turning a recurring regulatory workflow into a repeatable process—combining end-to-end mapping, a team-accessible Python interface and checks for ambiguous security matches.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 border-y py-6">
          {[{ icon: GitBranch, title: "End-to-end mapping", text: "Fetch → match → validate" }, { icon: FileCheck2, title: "Team-accessible execution", text: "Python script with a simple interface" }, { icon: ShieldCheck, title: "Edge-case validation", text: "Ambiguous tickers and false positives" }].map(item => <div key={item.title}><item.icon className="h-6 w-6 text-primary mb-3" /><h2 className="font-inter text-lg font-semibold text-primary">{item.title}</h2><p className="mt-2 text-base text-muted-foreground">{item.text}</p></div>)}
        </div>
      </section>
      <section className="bg-muted/30 border-y">
        <div className="container max-w-content py-section grid md:grid-cols-2 gap-8">
          <div><h2 className="font-inter text-2xl font-semibold text-primary">The challenge</h2><p className="mt-4 text-base text-muted-foreground leading-relaxed">Daily SEC filings must be associated with the right securities and investors. Incorrect matches or delayed delivery introduce compliance risk, and the same requirement recurs as new banking clients are onboarded.</p></div>
          <div><h2 className="font-inter text-2xl font-semibold text-primary">The approach</h2><ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground list-disc pl-5"><li>Map the full journey from fetching a filing to checking its intended recipients.</li><li>Implement field matching and data-quality checks in a Python script.</li><li>Provide a simple interface colleagues can use to run the workflow.</li></ul></div>
        </div>
      </section>
      <section className="container max-w-content py-section">
        <div className="max-w-4xl"><h2 className="font-inter text-2xl font-semibold text-primary">Where matching can go wrong</h2><p className="mt-4 text-base text-muted-foreground leading-relaxed">The walkthrough highlights TCW Strategic Fund, whose ticker is <strong className="text-foreground">TSI</strong>. A name-based match can mistakenly treat <strong className="text-foreground">TCW</strong> as the ticker, creating a false positive and potentially selecting the wrong filing.</p><p className="mt-4 text-base text-muted-foreground leading-relaxed">I used Codex to help develop a skill file that addresses these matching edge cases. This adds explicit validation to the workflow rather than relying on the first apparent text match.</p></div>
        <div className="mt-10 border-l-4 border-primary pl-6 max-w-4xl"><h2 className="font-inter text-2xl font-semibold text-primary">Built for repeatable onboarding</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">The goal is to reuse the same mapped process and validation checks for each new banking client. The demo demonstrates the workflow and its handling of matching ambiguity; it does not establish quantified savings or guarantee regulatory compliance.</p></div>
      </section>
      <section className="container max-w-content pb-16">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6"><h2 className="font-inter text-2xl font-semibold text-primary">Workflow walkthrough</h2><Button asChild variant="outline" className="min-h-11 text-base"><a href="https://www.loom.com/share/8e8b9bd1e12443408b16f38cc795a48b" target="_blank" rel="noopener noreferrer">Watch on Loom<ExternalLink /></a></Button></div>
        <iframe src="https://www.loom.com/embed/8e8b9bd1e12443408b16f38cc795a48b" title="Customer onboarding workflow for SEC filings — Mucundh Ramesh" className="w-full aspect-video rounded-lg border" loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen />
      </section>
    </main>
    <RelatedCaseStudies currentPath="/case-studies/sec-filings-onboarding" />
    <Footer />
  </div>;
};
export default SecFilingsCaseStudy;
