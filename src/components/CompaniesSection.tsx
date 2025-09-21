import companyLogos from "@/assets/company-logos-with-sweep.png";

const CompaniesSection = () => {
  return (
    <section className="py-8 bg-background overflow-hidden">
      <div className="relative">
        <div className="animate-scroll flex whitespace-nowrap">
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, mazars, and Sweep" 
            className="h-16 w-auto grayscale opacity-60 inline-block"
          />
          <img 
            src={companyLogos} 
            alt="Company logos including L'ORÉAL, Fidelity, GE, transdev, biometrio.earth, mazars, and Sweep" 
            className="h-16 w-auto grayscale opacity-60 inline-block ml-16"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
