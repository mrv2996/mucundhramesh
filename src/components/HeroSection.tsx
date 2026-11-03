import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import headshotImage from "@/assets/mucundh-headshot-clean.jpeg";

const metrics = [
  { value: "7-8 hrs/week", label: "manual work removed" },
  { value: "85% faster", label: "partner activation" },
  { value: "95% fewer", label: "data errors" },
  { value: "4", label: "case studies & projects" },
];

const HeroSection = () => {
  return (
    <section className="px-6 pt-8 pb-6 lg:pt-12 lg:pb-8">
      <div className="max-w-content mx-auto">
        {/* Golden ratio grid: 62% content, 38% image */}
        <div className="grid lg:grid-cols-[1.618fr_1fr] gap-[var(--space-md)] lg:gap-[var(--space-lg)] items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-[var(--space-base)] lg:space-y-[var(--space-md)]">
            {/* Typography hierarchy using golden ratio scale */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-mixed bg-clip-text text-transparent">
              Mucundh Ramesh
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-primary leading-tight">
              Building and Scaling GTM with a people, process and technology-first approach
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about designing scalable infrastructures with technical precision to build relationships that
              drive measurable business outcomes. Software Systems Engineer turned go-to-market strategy and operations
              specialist with proven commercial experience.
            </p>

            {/* CTAs with golden ratio spacing */}
            <div className="flex flex-col sm:flex-row gap-[var(--space-md)] justify-center lg:justify-start pt-[var(--space-md)]">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold shadow-medium hover:shadow-glow-primary"
                asChild
              >
                <a href="mailto:mucundh.ramesh@edu.escp.eu">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-semibold bg-card border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-glow-secondary"
                asChild
              >
                <a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-[15.5rem] sm:w-56 sm:h-[18rem] lg:w-64 lg:h-[20.7rem] rounded-3xl overflow-hidden shadow-large bg-gradient-primary">
                <img
                  src={headshotImage}
                  alt="Mucundh Ramesh - Strategic operations professional in high-growth tech scale-ups"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 top-[var(--space-base)] left-[var(--space-base)] w-full h-full rounded-3xl bg-gradient-secondary opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Impact metric ticker */}
        <div aria-label="Impact highlights" className="mt-[var(--space-lg)] rounded-2xl bg-primary text-primary-foreground shadow-medium overflow-hidden">
          <ul className="hidden md:grid grid-cols-4 divide-x divide-primary-foreground/20">
            {metrics.map((m) => (
              <li key={m.label} className="px-4 py-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-tertiary font-inter">{m.value}</div>
                <div className="text-sm text-primary-foreground/85 mt-1">{m.label}</div>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex w-max animate-ticker" aria-hidden="false">
            {[...metrics, ...metrics].map((m, i) => (
              <div key={i} aria-hidden={i >= metrics.length} className="flex items-baseline gap-2 px-6 py-3 whitespace-nowrap">
                <span className="text-lg font-bold text-tertiary font-inter">{m.value}</span>
                <span className="text-base text-primary-foreground/85">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore divider */}
        <div className="mt-[var(--space-md)] flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <Link
            to="/#case-studies"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-secondary px-5 text-sm font-semibold font-inter text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
          >
            Explore my work
            <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" />
          </Link>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
