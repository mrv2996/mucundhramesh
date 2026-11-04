import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { BIOMETRIO_URL } from "@/lib/site";

// Unified work collection — titles/descriptions reused verbatim from the
// existing case-study and project cards. Market Compass removed; the AP
// scraping agent stays last, after all other entries.
const work = [
  {
    context: "SWEEP",
    title: "Partner Activation Automation",
    description: "Eliminated 7-8 hours of weekly manual work with an intelligent automation pipeline connecting Excel, Salesforce CRM, and SQL operations.",
    to: "/case-studies/partner-activation-automation",
    action: "Read full case study",
    visual: <div className="flex items-baseline gap-2"><span className="font-playfair text-3xl text-primary">7-8</span><span className="text-base text-foreground">hrs/week</span><span className="text-sm text-muted-foreground">Time Saved</span></div>,
  },
  {
    context: "Proxymity",
    title: "Scaling SEC Filings Onboarding",
    description: "Mapped an end-to-end filings workflow, built a team-accessible Python interface and addressed ambiguous ticker matches for repeatable customer onboarding.",
    to: "/case-studies/sec-filings-onboarding",
    action: "Read full case study",
    visual: <div className="flex flex-wrap items-center gap-1 text-sm font-medium text-primary">Fetch <ChevronRight className="h-4 w-4" /> Match <ChevronRight className="h-4 w-4" /> Validate</div>,
  },
  {
    context: "SWEEP",
    title: "AI-Powered Partner Intelligence",
    description: "Built a custom GenAI copilot processing Drive and Notion data to deliver partner intelligence at a fractional cost.",
    to: "/case-studies/crossbeam-ai-agent",
    action: "Read full case study",
    visual: <div className="flex items-baseline gap-2"><span className="font-playfair text-3xl text-primary">$14K</span><span className="text-base text-foreground">/year</span><span className="text-sm text-muted-foreground">Licenses Replaced</span></div>,
  },
  {
    context: "ESCP · biometrio.earth",
    title: "Biometrio.earth Growth Strategy",
    description: "Revenue growth and scaling strategy for biometrio.earth, a German green tech startup focused on sustainable technology solutions",
    href: BIOMETRIO_URL,
    action: "View Project",
    visual: <div className="font-playfair text-2xl text-primary leading-tight">Strategy</div>,
  },
  {
    context: "ESCP",
    title: "Trading Platform UI Testing",
    description: "UI test scenario development and analysis for feature development of an online trading application platform",
    href: "https://docs.google.com/spreadsheets/d/1K_9GWb0-JDUaYN9VBhi5mFJundZaV20s/edit?usp=sharing&ouid=109264352810466052364&rtpof=true&sd=true",
    action: "View Project",
    visual: <div className="font-playfair text-2xl text-primary leading-tight">Analytics</div>,
  },
  {
    context: "Personal build",
    title: "Web Scraping Agent for Accounts Payable",
    description: "Building an intelligent web scraping agent to automate the procurement of accounts payable details, reducing manual data entry and improving accuracy across financial workflows.",
    action: "Case study coming soon",
    visual: <div className="flex items-baseline gap-2"><span className="font-playfair text-2xl text-secondary leading-tight">In Progress</span></div>,
  },
];

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
                Case studies and projects across operations, automation and strategy — real-world stories of operational improvements, automation wins, and strategic implementations that drive measurable business impact.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {work.map((item) => {
                const inner = (
                  <>
                    <div className="bg-muted/40 px-5 py-3 h-[64px] flex items-center">{item.visual}</div>
                    <div className="px-5 pt-3 pb-5 flex flex-col flex-1 gap-1.5">
                      <div className="text-sm text-muted-foreground">{item.context}</div>
                      <h2 className="font-inter text-lg font-semibold text-foreground">{item.title}</h2>
                      <p className="text-base text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                      <div className="flex items-center justify-between pt-2 text-base font-medium text-primary">
                        {item.action}
                        {(item.to || item.href) && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />}
                      </div>
                    </div>
                  </>
                );
                const cls = "group flex flex-col overflow-hidden rounded-xl border bg-card shadow-soft hover:shadow-medium transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
                if (item.to) return <Link key={item.title} to={item.to} className={cls}>{inner}</Link>;
                if (item.href) return <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
                return <div key={item.title} className={cls}>{inner}</div>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
