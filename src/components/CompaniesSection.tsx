import companiesRow1 from "@/assets/companies-row1.png";
import companiesRow2 from "@/assets/companies-row2.png";
import proxymityLogo from "@/assets/proxymity-logo.svg";

const CompaniesSection = () => {
  return (
    <section className="py-8 lg:py-12 bg-background w-full">
      <div className="flex justify-center items-center gap-8 flex-wrap px-6">
        <img
          src={proxymityLogo}
          alt="Proxymity logo"
          className="h-8 w-auto grayscale opacity-20 hover:opacity-70 transition-opacity duration-300"
        />
        <img
          src={companiesRow1}
          alt="L'ORÉAL, Fidelity, GE, transdev logos"
          className="h-12 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src={companiesRow2}
          alt="Mazars logo"
          className="h-12 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};

export default CompaniesSection;
