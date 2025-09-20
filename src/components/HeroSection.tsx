import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import headshotImage from "@/assets/mucundh-headshot-clean.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-12 pb-1">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-mixed bg-clip-text text-transparent">
              Mucundh Ramesh
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-8 leading-tight">
              Connecting technology, data, and people
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Systems-thinking engineer turned operations analyst, specializing in designing and optimizing technical infrastructures that drive measurable business outcomes through data-driven operational excellence.
            </p>
            
            <div className="flex flex-col gap-6 justify-center lg:justify-start mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold shadow-medium hover:shadow-glow-primary" asChild>
                  <a href="mailto:mucundh.ramesh@edu.escp.eu">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button variant="outline" size="lg" className="font-semibold bg-card border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-glow-secondary" asChild>
                  <a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-large bg-gradient-primary">
                <img 
                  src={headshotImage} 
                  alt="Mucundh Ramesh - Systems operations analyst and technical strategist" 
                  className="w-full h-full object-cover object-top" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl bg-gradient-secondary opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;