import companyLogos from "@/assets/company-logos.png";
import sweepLogo from "@/assets/sweep-logo.png";

const CompaniesSection = () => {
  return (
    <section className="py-[var(--space-lg)] bg-background w-full">
      <div className="w-full">
        <p className="text-center text-sm text-muted-foreground mb-[var(--space-md)] font-medium tracking-wide uppercase">
          Companies I've worked with
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap px-6">
          {/* Proxymity - text logo matching their brand */}
          <span className="text-2xl font-bold tracking-tight text-foreground/70 hover:text-foreground transition-opacity duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            Pro<span className="text-secondary">x</span>ymity
          </span>
          <img 
            src={sweepLogo} 
            alt="Sweep logo" 
            className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, and mazars" 
            className="h-14 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
