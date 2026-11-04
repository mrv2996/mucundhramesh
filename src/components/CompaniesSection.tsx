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
   * artwork; the default (no theme) returns light lettering on a dark tile.
   */
  theme?: "light" | "dark";
  /**
   * Logo.dev PNGs are opaque, so a logo can arrive on its own near-white
   * tile that reads as a faint box on this page. Brightness lifts that
   * tile to the page colour while leaving the lettering dark.
   */
  liftTile?: boolean;
};

/**
 * Reverse chronology: the newest role first, down through the older ones,
 * then the two brands that sit outside the Journey timeline.
 */
const companies: Company[] = [
  { name: "Proxymity", domain: "proxymity.io" },
  { name: "Sweep", domain: "sweep.net" },
  { name: "Transdev", domain: "transdev.de" },
  { name: "L'Oréal", domain: "loreal.com" },
  { name: "Forvis Mazars", domain: "mazars.com", wide: true },
  { name: "GE", domain: "ge.com" },
  { name: "Fidelity", domain: "fidelity.com" },
];

const logoUrl = ({ domain, theme }: Pick<Company, "domain" | "theme">) =>
  `https://img.logo.dev/${domain}?token=${token}&size=160&format=png&greyscale=true&retina=true${
    theme ? `&theme=${theme}` : ""
  }`;

const CompaniesSection = () => (
  <section className="px-6 py-5 lg:py-6 w-full" aria-label="Companies I've worked with">
    <ul className="max-w-content mx-auto flex justify-between items-center gap-x-6 gap-y-4 flex-wrap max-md:justify-center">
      {companies.map(({ name, domain, wide, theme, liftTile }) => (
        <li key={domain} className="flex items-center justify-center">
          <img
            src={logoUrl({ domain, theme })}
            alt={`${name} logo`}
            title={name}
            width={wide ? 106 : 56}
            height={56}
            loading="lazy"
            className={[
              "h-10 md:h-11 rounded-md grayscale opacity-50 hover:opacity-100 transition-opacity duration-300",
              wide ? "w-[76px] md:w-[84px] object-cover" : "w-10 md:w-11 object-contain",
              liftTile ? "brightness-[1.12]" : "",
            ].join(" ")}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default CompaniesSection;
