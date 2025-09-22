import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Mucundh Ramesh</span>
        </div>
        <div className="flex gap-6 md:gap-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link 
            to="/case-studies" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/case-studies") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Case Studies
          </Link>
        </div>
      </div>
    </nav>
  );
};