import { CV_URL, EMAIL, LINKEDIN } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t font-source">
    <div className="max-w-chrome mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-base text-muted-foreground">
      <p>© {new Date().getFullYear()} Mucundh Ramesh / London, United Kingdom</p>
      <div className="flex items-center gap-4">
        <a href={EMAIL} className="inline-flex min-h-11 items-center hover:text-secondary">Email</a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-secondary">LinkedIn</a>
        {CV_URL && <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-secondary">CV</a>}
      </div>
    </div>
  </footer>
);
