import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { usePageMeta } from "@/hooks/use-page-meta";
import salesforceHierarchy from "@/assets/salesforce-hierarchy-new.png";
import zapierWorkflow from "@/assets/zapier-workflow.png";

const CaseStudy1 = () => {
  usePageMeta(
    "Partner Activation Automation - Case Study | Mucundh Ramesh",
    "How Mucundh Ramesh automated partner activation processes using Excel, Salesforce, SQL and Zapier to save 7-8 hours weekly and improve operational efficiency by 85%.",
  );
  return (
    <CaseStudyLayout
      path="/case-studies/partner-activation-automation"
      company="SWEEP"
      title="Partner Activation Automation"
      tldr="A simple rule-based Excel → SQL → Zapier pipeline that saved 7-8 hours of manual partner work every week."
      metric={{ value: "7-8 hrs/week", label: "Time saved" }}
      tools={[
        { name: "Salesforce", domain: "salesforce.com" },
        { name: "Zapier", domain: "zapier.com" },
        { name: "Excel", domain: "microsoft.com" },
        { name: "SQL" },
      ]}
      context={[
        "Partner activation ran on manual Excel updates, Salesforce data entry and tracking spreadsheets.",
        "7-8 hours a week of repetitive, error-prone processing.",
        "Result: poor KPI visibility and delayed partner readiness reporting.",
      ]}
      strategy={[
        "Clean the CRM first: one parent-child account hierarchy.",
        "Pull data with simple SQL lookups instead of manual exports.",
        "Automate Excel → Salesforce record creation with Zapier.",
      ]}
      execution={[
        {
          title: "CRM hygiene: parent-child accounts",
          content: (
            <>
              <p>Parent accounts named "{`{Consulting Partner}`}-Parent" with regional child accounts. All contacts sit under the parent — no duplicates, no double counting.</p>
              <img src={salesforceHierarchy} alt="Salesforce account hierarchy with a parent account and Asia, Europe and US child accounts" loading="lazy" className="w-full rounded-lg border" />
            </>
          ),
        },
        {
          title: "SQL solution logic",
          content: (
            <>
              <pre className="overflow-x-auto rounded-md border bg-muted/50 p-4 text-sm font-mono text-foreground"><code>{`SELECT Name, Id FROM Account WHERE Name LIKE '%Parent'`}</code></pre>
              <p>This SOQL command pulls every account containing "Parent", feeding the lookup sheets and partner tracking reports.</p>
            </>
          ),
        },
        {
          title: "Zapier workflow",
          content: (
            <>
              <p>Two steps: Microsoft Excel — New Row in Table → Salesforce Essentials — Create Record. No manual data entry.</p>
              <img src={zapierWorkflow} alt="Zapier workflow: Excel trigger followed by Salesforce record creation" loading="lazy" className="w-full max-w-md rounded-lg border" />
            </>
          ),
        },
      ]}
      result={[
        "7-8 hours saved weekly — 2 full days every two weeks.",
        "85% faster process, 95% fewer errors.",
        "Real-time partner readiness tracking for leadership.",
      ]}
    />
  );
};
export default CaseStudy1;
