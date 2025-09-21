import companyLogos from "@/assets/company-logos.png";
import sweepLogo from "@/assets/sweep-logo.png";

const CompaniesSection = () => {
  return (
    <section className="py-section px-6 bg-background">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-[var(--space-lg)] bg-gradient-mixed bg-clip-text text-transparent">
            Trusted by Leading Companies
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-[var(--space-md)]">
            I've had the privilege to work with and support these amazing organizations
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Existing companies from the uploaded image */}
          <div className="flex justify-center">
            <img 
              src={companyLogos} 
              alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, and mazars" 
              className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
            />
          </div>

          {/* Additional company - Sweep */}
          <div className="flex justify-center items-center">
            <div className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3">
                <img 
                  src={sweepLogo} 
                  alt="Sweep logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-semibold text-foreground">Sweep</h3>
                  <p className="text-xs text-muted-foreground">Climate SaaS Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
