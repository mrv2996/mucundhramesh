import ContactCTA from "@/components/ContactCTA";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { ToolLogos, Tool } from "@/components/ToolLogos";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type ExecutionStep = { title?: string; summary: string; content: ReactNode };

type Props = {
  path: string;
  company: string;
  title: string;
  tldr: string;
  demoUrl?: string;
  metric: { value: string; label: string };
  tools: Tool[];
  context: string;
  strategy: string;
  execution: ExecutionStep[];
  result: string[];
};

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted-foreground list-disc pl-5">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
);

const Para = ({ text }: { text: string }) => <p className="mt-3 text-base leading-relaxed text-muted-foreground">{text}</p>;

const Block = ({ label, children }: { label: string; children: ReactNode }) => (
  <section className="border-t pt-6">
    <h2 className="flex items-center gap-3 font-inter text-xl lg:text-2xl font-semibold text-primary"><span aria-hidden className="h-6 w-1 rounded-full bg-secondary" />{label}</h2>
    {children}
  </section>
);

export const CaseStudyLayout = (p: Props) => (
  <div className="min-h-screen bg-background pt-16 font-source">
    <Navigation />
    <main className="container max-w-content py-section">
      <Link to="/work" className="inline-flex min-h-11 items-center gap-2 text-base font-medium text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" />Back to work
      </Link>
      <header className="mt-4 max-w-3xl">
        <p className="inline-flex min-h-8 w-fit items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-xs font-medium font-inter text-primary">{p.company}</p>
        <h1 className="mt-3 font-inter text-2xl lg:text-3xl font-semibold leading-tight text-primary">{p.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{p.tldr}</p>
        {p.demoUrl && (
          <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-secondary/30 bg-secondary/10 px-4 font-inter text-sm font-medium text-primary transition-colors hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><PlayCircle className="h-4 w-4" aria-hidden />Watch demo</a>
        )}
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
        <aside className="order-first lg:order-last">
          <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto rounded-xl border bg-card p-5 shadow-soft space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Key impact metric</p>
              <p className="mt-1 font-inter text-2xl font-semibold text-primary">{p.metric.value}</p>
              <p className="text-sm text-muted-foreground">{p.metric.label}</p>
            </div>
            <div className="border-t pt-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Tools used</p>
              <ToolLogos tools={p.tools} />
            </div>
            <RelatedCaseStudies currentPath={p.path} />
          </div>
        </aside>

        <div className="min-w-0 space-y-8">
          <Block label="Context"><Para text={p.context} /></Block>
          <Block label="Strategy"><Para text={p.strategy} /></Block>
          <Block label="Execution">
            <Accordion type="multiple" className="mt-2">
              {(() => {
                let n = 0;
                return p.execution.map((s, i) => {
                  const numbered = s.title ? `${++n}. ${s.title}` : null;
                  return (
                <AccordionItem key={`step-${i}`} value={`step-${i}`}>
                  <AccordionTrigger className="min-h-11 gap-3 text-left font-source text-base font-normal text-foreground hover:no-underline">
                    {numbered ? (
                      <span className="flex flex-col gap-1">
                        <span>{numbered}</span>
                        <span className="font-source text-base font-normal text-muted-foreground">{s.summary}</span>
                      </span>
                    ) : (
                      <span className="flex items-start gap-3">
                        <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 font-inter text-xs font-semibold text-secondary">{i + 1}</span>
                        <span>{s.summary}</span>
                      </span>
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-relaxed text-muted-foreground">{s.content}</AccordionContent>
                </AccordionItem>
                  );
                });
              })()}
            </Accordion>
          </Block>
          <Block label="Result"><Bullets items={p.result} /></Block>
        </div>
      </div>
    </main>
    <ContactCTA />
    <Footer />
  </div>
);
