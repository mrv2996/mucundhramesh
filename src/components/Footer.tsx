import { Link } from "react-router-dom";
import { Linkedin, Mail, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mucundh Ramesh</h3>
            <p className="text-muted-foreground max-w-md">
              Connecting technology, data, and people.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <button 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#skills";
                  } else {
                    const element = document.getElementById('skills');
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                  }
                }}
              >
                Skills
              </button>
              <button 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#case-studies";
                  } else {
                    const element = document.getElementById('case-studies');
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                  }
                }}
              >
                Case Studies
              </button>
              <a 
                href="https://www.linkedin.com/in/mucundh-ramesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Linkedin className="h-3 w-3" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Mucundh Ramesh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> in London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};