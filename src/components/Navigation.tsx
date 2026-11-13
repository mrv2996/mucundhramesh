import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";
import { EMAIL, LINKEDIN } from "@/lib/site";
import { useEffect, useState } from "react";

const items = [
  ["Home", "/"],
  ["Work", "/work"],
] as const;

export const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/"
    : location.pathname === "/work" || location.pathname.startsWith("/case-studies") || location.pathname.startsWith("/projects");
  return <nav aria-label="Main navigation" className={cn("fixed top-0 inset-x-0 z-[100] border-b transition-colors duration-300 font-inter", isScrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-background/95 backdrop-blur-sm border-transparent")}>
    <div className="mx-auto max-w-chrome px-4 md:px-8 flex h-16 items-center justify-between gap-1 min-[360px]:gap-2">
      <Link to="/" className="font-inter font-semibold text-sm min-[360px]:text-base md:text-lg text-primary shrink-0 py-3">Mucundh Ramesh</Link>
      <div className="flex items-center gap-0 min-[360px]:gap-1 md:gap-4">
        {items.map(([label, to]) => (
          <Link key={to} to={to} aria-current={isActive(to) ? "page" : undefined}
            className={cn("inline-flex min-h-11 items-center px-1.5 min-[360px]:px-2 text-sm md:text-base border-b-2 transition-colors", isActive(to) ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-secondary")}>
            {label}
          </Link>
        ))}
        <a href={EMAIL} aria-label="Email Mucundh" title="Email Mucundh"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary hover:text-secondary hover:bg-secondary/10 transition-colors">
          <Mail className="h-5 w-5" />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary hover:text-secondary hover:bg-secondary/10 transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  </nav>;
};
