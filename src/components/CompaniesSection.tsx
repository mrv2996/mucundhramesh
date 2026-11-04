const token = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;

const companies = [
  ["Proxymity", "proxymity.io"],
  ["Sweep", "sweep.io"],
  ["GE", "ge.com"],
  ["Fidelity", "fidelity.com"],
  ["L'Oréal", "loreal.com"],
  ["Transdev", "transdev.com"],
] as const;

const CompaniesSection = () => (
  <section className="py-8 lg:py-12 bg-background w-full" aria-label="Companies I've worked with">
    <ul className="flex justify-center items-center gap-6 md:gap-10 flex-wrap px-6">
      {companies.map(([name, domain]) => (
        <li key={domain}>
          <img
            src={`https://img.logo.dev/${domain}?token=${token}&size=128&format=png&greyscale=true&retina=true`}
            alt={`${name} logo`}
            title={name}
            width={48}
            height={48}
            loading="lazy"
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </li>
      ))}
    </ul>
  </section>
);

export default CompaniesSection;
