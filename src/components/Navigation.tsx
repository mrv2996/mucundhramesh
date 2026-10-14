import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { publishedStudies } from "@/lib/case-studies";

export const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav aria-label="Main navigation" className={cn("fixed top-0 inset-x-0 z-[100] border-b transition-colors duration-300 font-inter", isScrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-background/95 backdrop-blur-sm border-transparent")}>
    <div className="mx-auto max-w-content px-3 md:px-8 flex h-16 items-center justify-between gap-1">
      <Link to="/" className="font-playfair font-semibold text-base md:text-lg text-primary shrink-0 py-3">Mucundh Ramesh</Link>
      <div className="flex items-center gap-0 md:gap-2">
        <Button asChild variant="link" className="hidden md:inline-flex min-h-11 text-sm md:text-base"><Link to="/">Home</Link></Button>
        <NavigationMenu delayDuration={100} className="[&>div:last-child]:left-auto [&>div:last-child]:right-0">
          <NavigationMenuList><NavigationMenuItem>
            <NavigationMenuTrigger className="px-2 md:px-3 min-h-11 text-sm md:text-base bg-transparent text-primary">Case Studies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[min(280px,calc(100vw-24px))] p-2 space-y-1">
                {[{ path: "/#case-studies", title: "All Case Studies" }, ...publishedStudies].map(study => <li key={study.path}><NavigationMenuLink asChild active={location.pathname === study.path}><Link to={study.path} className="block rounded-md px-3 py-3 text-base leading-snug text-foreground hover:bg-muted focus:bg-muted focus:outline-none">{study.title}</Link></NavigationMenuLink></li>)}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem></NavigationMenuList>
        </NavigationMenu>
        {[["Projects", "/#projects"], ["Journey", "/#journey"]].map(([label,to]) => <Button key={to} asChild variant="link" className="hidden md:inline-flex min-h-11 text-sm md:text-base"><Link to={to}>{label}</Link></Button>)}
        <Button asChild variant="link" className="min-h-11 px-1 md:px-3 text-sm md:text-base"><a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer">LinkedIn<ExternalLink className="h-3 w-3" /></a></Button>
      </div>
    </div>
  </nav>;
};
