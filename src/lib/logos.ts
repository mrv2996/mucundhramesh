const token = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;

/** Logo.dev image URL for a company domain, shared by every logo on the site. */
export const logoUrl = (domain: string, size = 96) =>
  `https://img.logo.dev/${domain}?token=${token}&size=${size}&format=png&retina=true`;
