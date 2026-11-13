import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/lib/work";

export const WorkCard = ({ item, headingLevel = "h3" }: { item: WorkItem; headingLevel?: "h2" | "h3" }) => {
  const H = headingLevel;
  const linked = item.to || item.href;
  const inner = (
    <>
      <div className="p-4 flex flex-col flex-1 gap-1.5">
        <div className="inline-flex min-h-8 w-fit items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-xs font-medium font-inter text-primary transition-colors duration-300 group-hover:border-secondary/60 group-hover:bg-secondary/20">{item.context}</div>
        <H className="font-inter text-lg font-semibold text-foreground">{item.title}</H>
        <p className="flex-1 text-base text-muted-foreground leading-snug">{item.summary}</p>
        <div className={`flex items-center justify-between pt-1.5 text-base font-medium ${linked ? "text-primary" : "text-muted-foreground"}`}>
          {item.cta}
          {linked && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />}
        </div>
      </div>
    </>
  );
  const cls = "group flex w-full flex-col motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 duration-300 ease-out overflow-hidden rounded-xl border bg-card shadow-soft transition-all hover:border-secondary/40 hover:bg-gradient-card-hover hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  if (item.to) return <Link to={item.to} className={cls}>{inner}</Link>;
  if (item.href) return <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  return <div className={cls}>{inner}</div>;
};
