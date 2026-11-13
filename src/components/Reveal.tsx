import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

/** Fades content up once as it enters the viewport; static for reduced motion. */
export const Reveal = ({ children, className, delay = 0, margin = "0px 0px -10% 0px" }: { children: ReactNode; className?: string; delay?: number; margin?: string }) => {
  const { ref, inView } = useInView<HTMLDivElement>(margin);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", inView && "reveal-in", className)}>
      {children}
    </div>
  );
};
