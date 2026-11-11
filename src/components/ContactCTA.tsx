import { FileText, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_URL, EMAIL, LINKEDIN } from "@/lib/site";
import { useInView } from "@/hooks/use-in-view";

const ghost = "min-h-11 border-surface-deep-foreground/40 bg-transparent text-surface-deep-foreground hover:bg-surface-deep-foreground/10 hover:text-surface-deep-foreground";

const ContactCTA = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="px-6 py-8 lg:py-10" aria-labelledby="contact-cta-heading">
      <div ref={ref} className="relative overflow-hidden max-w-content mx-auto rounded-xl bg-surface-deep text-surface-deep-foreground shadow-large p-6 lg:p-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {inView && <span aria-hidden className="pointer-events-none absolute inset-0 motion-safe:animate-sheen motion-reduce:hidden bg-[linear-gradient(100deg,transparent_30%,hsl(var(--surface-deep-foreground)/0.12)_50%,transparent_70%)]" />}
        <div className="relative">
          <h2 id="contact-cta-heading" className="font-inter text-2xl font-semibold">Discuss a role</h2>
          <p className="mt-1 text-base text-surface-deep-muted">Open to Strategy & Business Operations and generalist roles.</p>
        </div>
        <div className="relative flex flex-col gap-3 sm:flex-row">
          {CV_URL && (
            <Button asChild variant="action" className="min-h-11">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer"><FileText className="h-4 w-4" /> View CV</a>
            </Button>
          )}
          <Button asChild variant="outline" className={ghost}>
            <a href={EMAIL}><Mail className="h-4 w-4" /> Email me</a>
          </Button>
          <Button asChild variant="outline" className={ghost}>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
