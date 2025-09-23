import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-background/70 backdrop-blur-xl border-b shadow-lg" 
        : "bg-background/95 backdrop-blur-sm border-b border-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-semibold hover:text-primary transition-colors">
            Mucundh Ramesh
          </Link>
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
          <button 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                // Navigate to home first, then scroll after navigation
                navigate("/");
                // Use setTimeout to ensure navigation completes before scrolling
                setTimeout(() => {
                  const element = document.getElementById("case-studies");
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                  }
                }, 100);
              } else {
                // Already on home page, just scroll with offset for fixed navbar
                const element = document.getElementById("case-studies");
                if (element) {
                  const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
                  window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
              }
            }}
          >
            Case Studies
          </button>
        </div>
      </div>
    </nav>
  );
};