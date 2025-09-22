import companyLogos from "@/assets/company-logos.png";
import sweepLogo from "@/assets/company-logos-with-sweep.png";

const CompaniesSection = () => {
  return (
    <section className="py-8 bg-background w-full">
      <div className="w-full px-6">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, and mazars" 
            className="h-16 w-auto grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <img 
            src={sweepLogo} 
            alt="Sweep logo" 
            className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
