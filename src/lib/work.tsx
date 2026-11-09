import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { BIOMETRIO_URL } from "@/lib/site";

export type WorkItem = {
  context: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  to?: string;
  href?: string;
  cta: string;
  visual: ReactNode;
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
  problem: "Partner activation took 7-8 hrs/week of manual Excel and Salesforce updates.",
  action: "Built an Excel → SQL → Zapier pipeline on a clean CRM hierarchy.",
  result: "Saved 7-8 hours weekly; process 85% faster.",
  to: "/case-studies/partner-activation-automation",
  cta: "Read case study",
  visual: metric("7-8 hrs/week", "Time saved"),
};

export const secFilings: WorkItem = {
  context: "Proxymity",
  title: "Scaling SEC Filings Onboarding",
  problem: "Daily SEC filings had to reach the right securities and investors.",
  action: "Mapped the workflow and built a Python fetch-match-validate tool.",
  result: "Repeatable onboarding with checks for ambiguous ticker matches.",
  to: "/case-studies/sec-filings-onboarding",
  cta: "Read case study",
  visual: <div className="flex flex-wrap items-center gap-1 text-sm font-medium text-primary">Fetch <ChevronRight className="h-4 w-4" /> Match <ChevronRight className="h-4 w-4" /> Validate</div>,
};

export const partnerIntelligence: WorkItem = {
  context: "SWEEP",
  title: "AI-Powered Partner Intelligence",
  problem: "A $14K/year partner-mapping tool had low adoption.",
  action: "Built a GenAI agent over existing Drive and Notion partner data.",
  result: "Similar partner intelligence at a fraction of the cost.",
  to: "/case-studies/crossbeam-ai-agent",
  cta: "Read case study",
  visual: metric("$14K/year", "Licenses replaced"),
};

export const biometrio: WorkItem = {
  context: "ESCP · biometrio.earth",
  title: "Biometrio.earth Growth Strategy",
  problem: "A German green-tech startup needed a path to scale.",
  action: "Developed a revenue growth and scaling strategy.",
  result: "Delivered a growth strategy for sustainable technology solutions.",
  href: BIOMETRIO_URL,
  cta: "View project",
  visual: <div className="font-inter text-2xl text-primary leading-tight">Strategy</div>,
};

export const tradingUi: WorkItem = {
  context: "SRM · Fidelity Investments",
  title: "Trading Platform UI Testing",
  problem: "New features on an online trading platform needed UI testing.",
  action: "Developed UI test scenarios and analysis.",
  result: "Test scenarios supporting feature development.",
  href: "https://docs.google.com/spreadsheets/d/1K_9GWb0-JDUaYN9VBhi5mFJundZaV20s/edit?usp=sharing&ouid=109264352810466052364&rtpof=true&sd=true",
  cta: "View project",
  visual: <div className="font-inter text-2xl text-primary leading-tight">Analytics</div>,
};

export const apAgent: WorkItem = {
  context: "Proxymity",
  title: "Web Scraping Agent for Accounts Payable",
  problem: "Accounts payable details relied on manual data entry.",
  action: "Building a web scraping agent to automate their procurement.",
  result: "In progress — aims to improve accuracy across financial workflows.",
  cta: "Case study coming soon",
  visual: <span className="font-inter text-2xl text-secondary leading-tight">In Progress</span>,
};

export const allWork = [partnerActivation, secFilings, partnerIntelligence, biometrio, tradingUi, apAgent];
export const selectedWork = [partnerActivation, secFilings, biometrio];
