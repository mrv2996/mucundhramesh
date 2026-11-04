const token = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;

type Company = {
  name: string;
  domain: string;
  /**
   * Wordmarks (e.g. Forvis Mazars) sit inside a wide box that crops the
   * square canvas Logo.dev returns, so the lettering stays readable at
   * the same row height as the square icons.
   */
  wide?: boolean;
  /**
   * Logo.dev's `theme` swap. "dark" returns the dark-lettering-on-light-tile
   * artwork, which sits on this page's off-white background instead of the
   * default black tile (L'Oréal).
   */
  theme?: "light" | "dark";
  /**
   * Logo.dev PNGs are opaque, so a logo can arrive on its own near-white
   * tile that reads as a faint box on this page. Brightness lifts that
   * tile to the page colour while leaving the lettering dark (L'Oréal).
   */
  liftTile?: boolean;
};

const companies: Company[] = [
  { name: "Proxymity", domain: "proxymity.io" },
  { name: "Sweep", domain: "sweep.net" },
  { name: "GE", domain: "ge.com" },
  { name: "Fidelity", domain: "fidelity.com" },
  { name: "L'Oréal", domain: "loreal.com", theme: "dark", liftTile: true },
  { name: "Transdev", domain: "transdev.de" },
  { name: "Forvis Mazars", domain: "mazars.com", wide: true },
];

const logoUrl = ({ domain, theme }: Company) =>
  `https://img.logo.dev/${domain}?token=${token}&size=128&format=png&greyscale=true&retina=true${
    theme ? `&theme=${theme}` : ""
  }`;

const CompaniesSection = () => (
  <section className="py-8 lg:py-12 bg-background w-full" aria-label="Companies I've worked with">
    <ul className="flex justify-center items-center gap-6 md:gap-10 flex-wrap px-6">
      {companies.map(({ name, domain, wide, theme, liftTile }) => (
        <li key={domain} className="flex items-center justify-center">
          <img
            src={logoUrl({ domain, theme })}
            alt={`${name} logo`}
            title={name}
            width={wide ? 92 : 48}
            height={48}
            loading="lazy"
            className={[
              "h-10 md:h-12 rounded-lg grayscale opacity-60 hover:opacity-100 transition-opacity duration-300",
              wide ? "w-[76px] md:w-[92px] object-cover" : "w-10 md:w-12 object-contain",
              liftTile ? "brightness-[1.12]" : "",
            ].join(" ")}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default CompaniesSection;
