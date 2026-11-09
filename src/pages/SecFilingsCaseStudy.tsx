import { ExternalLink } from "lucide-react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { usePageMeta } from "@/hooks/use-page-meta";

const SecFilingsCaseStudy = () => {
  usePageMeta("Scaling Customer Onboarding for SEC Filings | Mucundh Ramesh", "An end-to-end SEC filings workflow using Python, field mapping and Codex-assisted edge-case validation to support repeatable customer onboarding.");
  return (
    <CaseStudyLayout
      path="/case-studies/sec-filings-onboarding"
      company="Proxymity"
      title="Scaling Customer Onboarding for SEC Filings"
      tldr="A Python fetch → match → validate workflow that makes SEC filings onboarding repeatable for each new client."
      metric={{ value: "Repeatable", label: "Onboarding workflow" }}
      tools={[
        { name: "Python", domain: "python.org" },
        { name: "Codex", domain: "openai.com" },
        { name: "Loom", domain: "loom.com" },
      ]}
      context={[
        "Daily SEC filings must reach the right securities and investors.",
        "Wrong matches or late delivery create compliance risk.",
        "The same need recurs with every new banking client.",
      ]}
      strategy={[
        "Map the full journey: fetch, match, validate.",
        "Put matching and data-quality checks in one Python script.",
        "Give colleagues a simple interface to run it.",
      ]}
      execution={[
        {
          title: "Workflow walkthrough",
          content: (
            <>
              <iframe src="https://www.loom.com/embed/8e8b9bd1e12443408b16f38cc795a48b" title="Customer onboarding workflow for SEC filings — Mucundh Ramesh" className="w-full aspect-video rounded-lg border" loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen />
              <a href="https://www.loom.com/share/8e8b9bd1e12443408b16f38cc795a48b" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 font-medium text-primary hover:underline">Watch on Loom <ExternalLink className="h-4 w-4" /></a>
            </>
          ),
        },
        {
          title: "Edge case: ambiguous tickers",
          content: <p>TCW Strategic Fund's ticker is <strong className="text-foreground">TSI</strong>. Name matching can wrongly read <strong className="text-foreground">TCW</strong> as the ticker — a false positive that selects the wrong filing.</p>,
        },
        {
          title: "Codex-assisted skill file",
          content: <p>Used Codex to build a skill file for matching edge cases, adding explicit validation instead of trusting the first text match.</p>,
        },
      ]}
      result={[
        "One mapped process reused for each new banking client.",
        "Explicit checks for ambiguous security matches.",
        "No quantified savings or compliance guarantee claimed.",
      ]}
    />
  );
};
export default SecFilingsCaseStudy;
