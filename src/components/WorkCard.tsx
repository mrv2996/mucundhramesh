import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/lib/work";

const Row = ({ label, text }: { label: string; text: string }) => (
  <div className="grid grid-cols-[72px_1fr] gap-2">
    <dt className="text-sm font-semibold uppercase tracking-wider text-secondary pt-0.5">{label}</dt>
    <dd className="text-base text-muted-foreground leading-snug">{text}</dd>
  </div>
);

export const WorkCard = ({ item, headingLevel = "h3" }: { item: WorkItem; headingLevel?: "h2" | "h3" }) => {
  const H = headingLevel;
  const linked = item.to || item.href;
  const inner = (
    <>
      <div className="bg-muted/40 px-5 py-3 h-[64px] flex items-center">{item.visual}</div>
      <div className="px-5 pt-3 pb-5 flex flex-col flex-1 gap-2">
        <div className="text-sm text-muted-foreground">{item.context}</div>
        <H className="font-inter text-lg font-semibold text-foreground">{item.title}</H>
        <dl className="flex-1 space-y-1.5">
          <Row label="Problem" text={item.problem} />
          <Row label="Action" text={item.action} />
          <Row label="Result" text={item.result} />
        </dl>
        <div className={`flex items-center justify-between pt-2 text-base font-medium ${linked ? "text-primary" : "text-muted-foreground"}`}>
          {item.cta}
          {linked && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />}
        </div>
      </div>
    </>
  );
  const cls = "group flex flex-col overflow-hidden rounded-xl border bg-card shadow-soft hover:shadow-medium transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  if (item.to) return <Link to={item.to} className={cls}>{inner}</Link>;
  if (item.href) return <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  return <div className={cls}>{inner}</div>;
};
