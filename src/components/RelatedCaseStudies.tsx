import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { publishedStudies } from "@/lib/case-studies";

export const RelatedCaseStudies = ({ currentPath }: { currentPath: string }) => {
  const others = publishedStudies.filter((study) => study.path !== currentPath);
  if (!others.length) return null;

  return (
    <div className="border-t pt-4">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">More case studies</p>
      <ul className="space-y-1">
        {others.map((study) => (
          <li key={study.path}>
            <Link
              to={study.path}
              className="group flex items-start justify-between gap-2 rounded-md px-2 py-2 -mx-2 font-inter text-sm font-medium leading-snug text-primary transition-colors hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>{study.title}</span>
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/work"
        className="mt-2 inline-flex min-h-8 items-center font-inter text-xs font-medium text-secondary hover:underline"
      >
        All case studies
      </Link>
    </div>
  );
};
