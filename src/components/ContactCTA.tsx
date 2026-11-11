import { FileText, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_URL, EMAIL, LINKEDIN } from "@/lib/site";

const ContactCTA = () => (
  <section className="px-6 py-8 lg:py-10" aria-labelledby="contact-cta-heading">
    <div className="max-w-content mx-auto rounded-xl border bg-muted/40 p-6 lg:p-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 id="contact-cta-heading" className="font-inter text-2xl font-semibold text-primary">Discuss a role</h2>
        <p className="mt-1 text-base text-muted-foreground">Open to Strategy & Business Operations and generalist roles.</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        {CV_URL && (
          <Button asChild className="min-h-11">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer"><FileText className="h-4 w-4" /> View CV</a>
          </Button>
        )}
        <Button asChild variant="outline" className="min-h-11">
          <a href={EMAIL}><Mail className="h-4 w-4" /> Email me</a>
        </Button>
        <Button asChild variant="outline" className="min-h-11">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactCTA;
