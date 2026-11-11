import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

/** Fades content up once as it enters the viewport; static for reduced motion. */
export const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", inView && "reveal-in", className)}>
      {children}
    </div>
  );
};
