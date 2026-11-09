import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { partnerIntelligence } from "@/lib/work";
import { usePageMeta } from "@/hooks/use-page-meta";
import crossbeamInterface from "@/assets/crossbeam-interface.png";
import agentOutputExample from "@/assets/agent-output-example.png";

const instructions = `<Role> Partner overlap identifier for customer accounts
<Input> Customer name only (e.g., "coca-cola")
<Do>
Search Google Drive partner data files for customer mentions
Check Notion partner priority matrix
Use web search for additional partner intelligence
Rank partners 1-5 (1=highest overlap)
</Do>
<Rules>
Maximum 3 partners listed
Score must be 1-5 integer
Reason must be exactly 5-7 words
Return ONLY the formatted output
</Rules>`;

const CaseStudy2 = () => {
  usePageMeta(
    "AI-Powered Partner Intelligence Agent - Case Study | Mucundh Ramesh",
    "How Mucundh Ramesh replaced expensive Crossbeam licenses with a GenAI agent that processes partner data from Drive and Notion, reducing costs while maintaining partner intelligence capabilities.",
  );
  return (
    <CaseStudyLayout
      path="/case-studies/crossbeam-ai-agent"
      company="SWEEP"
      title="AI-Powered Partner Intelligence"
      tldr={partnerIntelligence.summary}
      metric={{ value: "$14K/year", label: "Licenses replaced" }}
      tools={[
        { name: "Dust", domain: "dust.tt" },
        { name: "Crossbeam", domain: "crossbeam.com" },
        { name: "Notion", domain: "notion.so" },
        { name: "Google Drive", domain: "drive.google.com" },
      ]}
      context="Crossbeam cost $14K a year with seat-based pricing, yet usage showed critically low adoption across sales and partnerships. Consulting partners shared static, offline files, so live tracking was over-engineered."
      strategy="Match the tool to real usage: customer-name lookups on static data. Reuse data already in Google Drive and the Notion priority matrix, and return short, ranked answers people will actually read."
      execution={[
        {
          summary: "Reviewed Crossbeam Copilot to see what the team actually used.",
          content: (
            <>
              <p>Copilot surfaced partner overlaps and co-selling next steps — useful, but mostly used for static lookups.</p>
              <img src={crossbeamInterface} alt="Crossbeam Copilot interface showing co-selling opportunities" loading="lazy" className="w-full rounded-lg border" />
              <p className="text-sm">* Image for reference purposes only. Source: Crossbeam</p>
            </>
          ),
        },
        {
          summary: "Built a Dust agent that ranks partner overlap from a customer name.",
          content: (
            <>
              <p>Input a customer name; the agent searches Drive, checks Notion and the web, and ranks partners 1-5.</p>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted/50 p-4 text-sm font-mono text-foreground">{instructions}</pre>
            </>
          ),
        },
        {
          summary: "Capped answers at three scored partners with a 5-7 word reason.",
          content: (
            <>
              <p>Max three partners, each with a score and a 5-7 word reason.</p>
              <img src={agentOutputExample} alt="Agent output listing partner overlaps with scores and short reasons" loading="lazy" className="w-full rounded-lg border" />
            </>
          ),
        },
      ]}
      result={[
        "Similar partner intelligence at a fraction of the cost.",
        "Higher adoption due to simplicity.",
        "Built on existing data infrastructure.",
      ]}
    />
  );
};
export default CaseStudy2;
