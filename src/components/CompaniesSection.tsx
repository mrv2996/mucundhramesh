import companyLogos from "@/assets/company-logos.png";
import sweepLogo from "@/assets/company-logos-with-sweep.png";

const CompaniesSection = () => {
  return (
    <section className="py-8 bg-background overflow-hidden">
      <div className="relative">
        <div className="animate-scroll flex whitespace-nowrap items-center">
          {/* First set of logos */}
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, and mazars" 
            className="h-16 w-auto grayscale opacity-60 inline-block"
          />
          <div className="inline-block mx-8">
            <img 
              src={sweepLogo} 
              alt="Sweep logo" 
              className="h-12 w-auto grayscale opacity-60 inline-block"
            />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, and mazars" 
            className="h-16 w-auto grayscale opacity-60 inline-block ml-16"
          />
          <div className="inline-block mx-8">
            <img 
              src={sweepLogo} 
              alt="Sweep logo" 
              className="h-12 w-auto grayscale opacity-60 inline-block"
            />
          </div>
          
          {/* Third set for smooth infinite loop */}
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, and mazars" 
            className="h-16 w-auto grayscale opacity-60 inline-block ml-16"
          />
          <div className="inline-block mx-8">
            <img 
              src={sweepLogo} 
              alt="Sweep logo" 
              className="h-12 w-auto grayscale opacity-60 inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
