import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
    <h2 className="font-inter text-sm font-semibold uppercase tracking-wider text-secondary">{label}</h2>
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
        <p className="text-sm text-muted-foreground">{p.company}</p>
        <h1 className="mt-1 font-inter text-2xl lg:text-3xl font-semibold leading-tight text-primary">{p.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{p.tldr}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
        <aside className="order-first lg:order-last">
          <div className="lg:sticky lg:top-24 rounded-xl border bg-card p-5 shadow-soft space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Impact</p>
              <p className="mt-1 font-inter text-2xl font-semibold text-primary">{p.metric.value}</p>
              <p className="text-sm text-muted-foreground">{p.metric.label}</p>
            </div>
            <div className="border-t pt-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Tools used</p>
              <ToolLogos tools={p.tools} />
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-8">
          <Block label="Context"><Para text={p.context} /></Block>
          <Block label="Strategy"><Para text={p.strategy} /></Block>
          <Block label="Execution">
            <Accordion type="multiple" defaultValue={["step-0"]} className="mt-2">
              {(() => {
                let n = 0;
                return p.execution.map((s, i) => {
                  const numbered = s.title ? `${++n}. ${s.title}` : null;
                  return (
                <AccordionItem key={`step-${i}`} value={`step-${i}`}>
                  <AccordionTrigger className="min-h-11 text-left font-inter text-base font-semibold text-foreground">
                    {numbered ? (
                      <span className="flex flex-col gap-1">
                        <span>{numbered}</span>
                        <span className="font-source text-base font-normal text-muted-foreground">{s.summary}</span>
                      </span>
                    ) : (
                      <span>{s.summary}</span>
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
    <RelatedCaseStudies currentPath={p.path} />
    <Footer />
  </div>
);
