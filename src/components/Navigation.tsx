import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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