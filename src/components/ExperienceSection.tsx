import { ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { journeyItems } from "@/lib/journey";
import { CV_URL } from "@/lib/site";

const JourneySection = () => {
  const work = journeyItems.filter((i) => i.type === "work");
  const education = journeyItems.filter((i) => i.type === "education");

  return (
    <section id="journey" className="px-6 py-section border-t">
      <div className="max-w-content mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="font-inter text-2xl font-semibold text-primary">Journey</h2>
          {CV_URL && (
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-base font-medium text-secondary hover:underline">
              View CV <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="grid gap-9 min-[651px]:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] items-start">
          <div className="min-w-0">
            <h3 className="font-inter text-lg font-semibold text-foreground mb-2">Experience</h3>
            <Accordion type="single" collapsible>
              {work.map((item) => (
                <AccordionItem key={item.company} value={item.company}>
                  <AccordionTrigger className="gap-4 py-4 text-left hover:no-underline [&>svg]:hidden group">
                    <div className="flex-1 min-w-0">
                      <div className="font-inter text-base lg:text-lg font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.company} / {item.location}</div>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                    <span aria-hidden className="w-5 text-center text-xl leading-none text-primary group-data-[state=open]:hidden">+</span>
                    <span aria-hidden className="w-5 text-center text-xl leading-none text-primary hidden group-data-[state=open]:inline">−</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.companyDetail && <p className="text-base text-muted-foreground">{item.companyDetail}</p>}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <aside className="rounded-xl bg-muted/40 border p-6 min-w-0">
            <h3 className="font-inter text-lg font-semibold text-foreground mb-4">Education</h3>
            <div className="divide-y">
              {education.map((item) => (
                <div key={item.company} className="py-4 first:pt-0 last:pb-0 space-y-1">
                  <div className="text-sm text-muted-foreground">{item.period}</div>
                  <div className="font-inter text-base font-semibold text-foreground">{item.company}</div>
                  <div className="text-base text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.location}</div>
                  {item.specializations && <div className="text-sm text-muted-foreground">{item.specializations.join(", ")}</div>}
                  {item.researchPaper && (
                    <a href={item.researchPaper.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 text-sm text-secondary hover:underline pt-1">
                      <ExternalLink className="h-3 w-3 mt-1 shrink-0" />
                      <span className="break-words">{item.researchPaper.title} — {item.researchPaper.journal}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
