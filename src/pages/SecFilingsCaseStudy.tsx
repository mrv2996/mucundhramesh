import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { secFilings } from "@/lib/work";
import { usePageMeta } from "@/hooks/use-page-meta";

const SecFilingsCaseStudy = () => {
  usePageMeta(
    "Scaling Customer Onboarding for SEC Filings | Mucundh Ramesh",
    "An end-to-end SEC filings workflow using Python, field mapping and Codex-assisted edge-case validation to support repeatable customer onboarding.",
  );
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
      strategy="Map the full journey: fetch, match, validate. Put matching and data-quality checks in one Python script, run a skills file for edge-cases and give colleagues a simple interface to run it."
      execution={[
        {
          summary: "Mapped the end-to-end workflow: fetch the filing, map the fields, run data-quality checks.",
          content: (
            <p>
              Every ISIN has a security ticker attached, and 500 to 1,000 investors may trade a single security — each
              needs the right filing at the right time. The map covered how to fetch the file, how to map fields between
              sources, and which data-quality checks must pass before anything is sent.
            </p>
          ),
        },
        {
          summary: "Built a Python script with a simple interface anyone on the team can run.",
          content: (
            <p>
              The script runs the fetch, mapping and checks in one place. True/false checks are written straight into
              the filing field, so the team can see at a glance what passed.
            </p>
          ),
        },
        {
          summary: "Caught name matches that select the wrong filing.",
          content: (
            <p>
              TCW Strategic Fund's ticker is <strong className="text-foreground">TSI</strong>. The system can wrongly
              read <strong className="text-foreground">TCW</strong> as the ticker — a false positive that sends the
              wrong filing.
            </p>
          ),
        },
        {
          summary: "Used Codex to build a skill file that handles matching edge cases.",
          content: (
            <p>
              The skill file manages the different edge cases and removes the false positives they create, instead of
              trusting the first text match.
            </p>
          ),
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
