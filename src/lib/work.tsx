import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { BIOMETRIO_URL } from "@/lib/site";

export type WorkItem = {
  context: string;
  title: string;
  summary: string;
  to?: string;
  href?: string;
  cta: string;
  visual: ReactNode;
  impact?: { value: string; label: string };
};

const metric = (value: string, label: string) => (
  <div className="flex items-baseline gap-2">
    <span className="font-inter text-2xl text-primary">{value}</span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

export const partnerActivation: WorkItem = {
  context: "SWEEP",
  title: "Partner Activation Automation",
  summary: "Automated partner activation to cut manual CRM work, saving hours every week and streamlining the data foundation.",
  to: "/case-studies/partner-activation-automation",
  cta: "Read case study",
  visual: metric("7-8 hrs/week", "Time saved"),
  impact: { value: "7-8 hrs/week", label: "Time saved" },
};

export const secFilings: WorkItem = {
  context: "Proxymity",
  title: "Scaling SEC Filings Onboarding",
  summary: "Built a repeatable workflow to route daily SEC filings to the right securities and investors, making client onboarding faster and more efficient.",
  to: "/case-studies/sec-filings-onboarding",
  cta: "Read case study",
  visual: <div className="flex flex-wrap items-center gap-1 text-sm font-medium text-primary">Fetch <ChevronRight className="h-4 w-4" /> Match <ChevronRight className="h-4 w-4" /> Validate</div>,
};

export const partnerIntelligence: WorkItem = {
  context: "SWEEP",
  title: "AI-Powered Partner Intelligence",
  summary: "Replaced a low-adoption partner-mapping tool with an in-house AI agent, keeping partner insight while cutting significant cost.",
  to: "/case-studies/crossbeam-ai-agent",
  cta: "Read case study",
  visual: metric("$14K/year", "Licenses replaced"),
  impact: { value: "$14K/year", label: "Licenses replaced" },
};

export const biometrio: WorkItem = {
  context: "ESCP · biometrio.earth",
  title: "Biometrio.earth Growth Strategy",
  summary: "Developed a revenue growth and scaling strategy to help a German green-tech startup scale its sustainable technology solutions, as an ESCP student project.",
  href: BIOMETRIO_URL,
  cta: "View project",
  visual: <div className="font-inter text-2xl text-primary leading-tight">Strategy</div>,
};

export const tradingUi: WorkItem = {
  context: "SRM · Fidelity Investments",
  title: "Trading Platform UI Testing",
  summary: "Developed UI test scenarios and analysis for new features on Fidelity's online trading platform to support feature development, as an SRM student project.",
  href: "https://docs.google.com/spreadsheets/d/1K_9GWb0-JDUaYN9VBhi5mFJundZaV20s/edit?usp=sharing&ouid=109264352810466052364&rtpof=true&sd=true",
  cta: "View project",
  visual: <div className="font-inter text-2xl text-primary leading-tight">Analytics</div>,
};

export const apAgent: WorkItem = {
  context: "Proxymity",
  title: "Web Scraping Agent for Accounts Payable",
  summary: "Building a web scraping agent to replace manual accounts-payable data entry and improve accuracy across financial workflows.",
  cta: "Case study coming soon",
  visual: <span className="font-inter text-2xl text-secondary leading-tight">In Progress</span>,
};

export const allWork = [partnerActivation, secFilings, partnerIntelligence, biometrio, tradingUi, apAgent];
export const selectedWork = [partnerIntelligence, secFilings, partnerActivation];
