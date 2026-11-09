import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { secFilings } from "@/lib/work";
import { usePageMeta } from "@/hooks/use-page-meta";

const SecFilingsCaseStudy = () => {
  usePageMeta("Scaling Customer Onboarding for SEC Filings | Mucundh Ramesh", "An end-to-end SEC filings workflow using Python, field mapping and Codex-assisted edge-case validation to support repeatable customer onboarding.");
  return (
    <CaseStudyLayout
      path="/case-studies/sec-filings-onboarding"
      company="Proxymity"
      title="Scaling Customer Onboarding for SEC Filings"
      tldr={secFilings.summary}
      demoUrl="https://www.loom.com/share/8e8b9bd1e12443408b16f38cc795a48b"
      metric={{ value: "Repeatable", label: "Onboarding workflow" }}
      tools={[
        { name: "Python", domain: "python.org" },
        { name: "Codex", domain: "openai.com" },
        { name: "Confluence", domain: "atlassian.com" },
        { name: "Excel", domain: "microsoft.com" },
      ]}
      context="Daily SEC filings must reach the right securities and investors, and wrong matches or late delivery create compliance risk. The same need recurs with every new banking client."
      strategy="Map the full journey: fetch, match, validate. Put matching and data-quality checks in one Python script, and give colleagues a simple interface to run it."
      execution={[
        {
          summary: "Caught name matches that select the wrong filing.",
          content: <p>TCW Strategic Fund's ticker is <strong className="text-foreground">TSI</strong>. Name matching can wrongly read <strong className="text-foreground">TCW</strong> as the ticker — a false positive that selects the wrong filing.</p>,
        },
        {
          summary: "Used Codex to add explicit validation for matching edge cases.",
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
