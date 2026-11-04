import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";

// Existing titles/descriptions reused verbatim from the case-study and project cards.
const selected = [
  {
    context: "SWEEP",
    title: "Partner Activation Automation",
    description: "Eliminated 7-8 hours of weekly manual work with an intelligent automation pipeline connecting Excel, Salesforce CRM, and SQL operations.",
    to: "/case-studies/partner-activation-automation",
    action: "Read full case study",
    visual: <div className="flex items-baseline gap-2"><span className="font-inter text-3xl text-primary">7-8</span><span className="text-base text-foreground">hrs/week</span><span className="text-sm text-muted-foreground">Time Saved</span></div>,
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
    context: "ESCP · biometrio.earth",
    title: "Biometrio.earth Growth Strategy",
    description: "Revenue growth and scaling strategy for biometrio.earth, a German green tech startup focused on sustainable technology solutions",
    href: "https://drive.google.com/file/d/1fVrTx7p09SS59jYrnWgxHZnzD9klxaHN/view?usp=sharing",
    action: "View Project",
    visual: <div className="font-inter text-2xl text-primary leading-tight">Strategy</div>,
  },
];

const SelectedWorkSection = () => (
  <section id="work" className="px-6 pt-6 lg:pt-8 pb-section">
    <div className="max-w-content mx-auto">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h2 className="font-inter text-2xl font-semibold text-primary">Selected work</h2>
        <Link to="/work" className="inline-flex min-h-11 items-center gap-1 text-base font-medium text-secondary hover:underline">All work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {selected.map((item) => {
          const inner = (
            <>
              <div className="bg-muted/40 px-5 py-3 h-[64px] flex items-center">{item.visual}</div>
              <div className="px-5 pt-3 pb-5 flex flex-col flex-1 gap-1.5">
                <div className="text-sm text-muted-foreground">{item.context}</div>
                <h3 className="font-inter text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <div className="flex items-center justify-between pt-2 text-base font-medium text-primary">
                  {item.action} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                </div>
              </div>
            </>
          );
          const cls = "group flex flex-col overflow-hidden rounded-xl border bg-card shadow-soft hover:shadow-medium transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
          return item.to ? (
            <Link key={item.title} to={item.to} className={cls}>{inner}</Link>
          ) : (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
          );
        })}
      </div>
    </div>
  </section>
);

export default SelectedWorkSection;
