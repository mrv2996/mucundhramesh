import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import headshotImage from "@/assets/mucundh-headshot-clean.jpeg";
const HeroSection = () => {
  return <section className="min-h-[85vh] flex items-center justify-center px-6 py-section">
      <div className="max-w-content mx-auto">
        {/* Golden ratio grid: 62% content, 38% image */}
        <div className="grid lg:grid-cols-[1.618fr_1fr] gap-[var(--space-xl)] lg:gap-[var(--space-2xl)] items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-[var(--space-lg)]">
            {/* Typography hierarchy using golden ratio scale */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-mixed bg-clip-text text-transparent">
              Mucundh Ramesh
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-primary leading-tight">Building and Scaling GTM with a people, process and technology-first approach</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">Software Systems Engineer turned go-to-market strategy and operations specialist with proven partnership experience, combining technical precision with relationship-building expertise to design scalable infrastructures that drive measurable business outcomes through collaborative operational excellence.</p>
            
            {/* CTAs with golden ratio spacing */}
            <div className="flex flex-col sm:flex-row gap-[var(--space-md)] justify-center lg:justify-start pt-[var(--space-md)]">
              <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold shadow-medium hover:shadow-glow-primary" asChild>
                <a href="mailto:mucundh.ramesh@edu.escp.eu">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="font-semibold bg-card border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-glow-secondary" asChild>
                <a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Image dimensions following golden ratio: width 1, height 1.618 */}
              <div className="w-64 h-[25.8rem] lg:w-80 lg:h-[32.3rem] rounded-3xl overflow-hidden shadow-large bg-gradient-primary">
                <img src={headshotImage} alt="Mucundh Ramesh - Systems operations analyst and technical strategist" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              {/* Shadow offset using golden ratio spacing */}
              <div className="absolute -z-10 top-[var(--space-md)] left-[var(--space-md)] w-full h-full rounded-3xl bg-gradient-secondary opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;