import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
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
          {!isMobile && (
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
          )}
          <button 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById("case-studies");
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                  }
                }, 100);
              } else {
                setTimeout(() => {
                  const element = document.getElementById("case-studies");
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                  }
                }, 50);
              }
            }}
          >
            Case Studies
          </button>
          {!isMobile && (
            <>
              <button 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("projects");
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }, 100);
                  } else {
                    setTimeout(() => {
                      const element = document.getElementById("projects");
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }, 50);
                  }
                }}
              >
                Projects
              </button>
              <button 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("journey");
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }, 100);
                  } else {
                    setTimeout(() => {
                      const element = document.getElementById("journey");
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }, 50);
                  }
                }}
              >
                Journey
              </button>
            </>
          )}
          <a 
            href="https://www.linkedin.com/in/mucundh-ramesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </nav>
  );
};