import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { logoUrl } from "@/lib/logos";

// One impactful line per recommendation, quoted verbatim from the full text
// in RecommendationsSection.tsx. LinkedIn profile is the source of proof.
type Highlight = {
  id: number;
  name: string;
  title: string;
  company?: string;
  relationship: string;
  domain: string;
  line: string;
};

const highlights: Highlight[] = [
  {
    id: 1,
    name: "Mey Raksmeythida Oum",
    title: "Project Lead",
    company: "Proxymity",
    domain: "proxymity.io",
    relationship: "Mey worked with Mucundh on the same team",
    line: "This automation would not have been a success without his dedication and market knowledge.",
  },
  {
    id: 2,
    name: "Victor Falières",
    title: "Partnerships Director",
    company: "SWEEP",
    domain: "sweep.net",
    relationship: "Victor managed Mucundh directly",
    line: "He also took initiative by proposing and implementing actions that helped improve our processes.",
  },
  {
    id: 3,
    name: "Marcia Dantas de Lima",
    title: "Head of Business Development",
    company: "biometrio.earth",
    domain: "biometrio.earth",
    relationship: "Marcia was Mucundh's client",
    line: "I can recommend especially, his ability to use data to increase conversion and retention, and unlock product decisions.",
  },
  {
    id: 4,
    name: "Jean-Philippe Kervadec",
    title: "Group Business Controller",
    company: "Forvis Mazars Group",
    domain: "mazars.com",
    relationship: "Jean-Philippe was Mucundh's mentor",
    line: "Mucundh was one of the most involved in that project and he brought his IT vision thanks to his previous experience at GE.",
  },
];

const HomeRecommendation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const paused = useRef(false);
  const { ref, inView } = useInView<HTMLDivElement>();
  useEffect(() => {
    if (!api || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => { if (!paused.current && !document.hidden) api.scrollNext(); }, 3000);
    return () => window.clearInterval(id);
  }, [api]);
  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  return (
    <section className="px-6 py-8 lg:py-10 bg-surface-deep text-surface-deep-foreground">
      <div className="max-w-content mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-inter text-2xl font-semibold text-surface-deep-foreground">Working with me</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-surface-deep-foreground/30 bg-transparent text-surface-deep-foreground hover:bg-surface-deep-foreground/10 hover:text-surface-deep-foreground" aria-label="Previous recommendation" onClick={() => api?.scrollPrev()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-surface-deep-foreground/30 bg-transparent text-surface-deep-foreground hover:bg-surface-deep-foreground/10 hover:text-surface-deep-foreground" aria-label="Next recommendation" onClick={() => api?.scrollNext()}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div ref={ref} onPointerEnter={pause} onPointerLeave={resume} onFocus={pause} onBlur={resume} onTouchStart={pause}>
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="mt-4">
          <CarouselContent className="-ml-3">
            {highlights.map((rec, i) => (
              <CarouselItem key={rec.id} className="pl-3 basis-[85%] sm:basis-[60%] lg:basis-1/3">
                <figure style={{ transitionDelay: `${i * 90}ms` }} className={`reveal ${inView ? "reveal-in" : ""} h-full rounded-lg border border-surface-deep-foreground/15 bg-surface-deep-foreground/5 p-5 sm:p-6 flex flex-col`}>
                  <span aria-hidden className="mb-2 font-inter text-4xl leading-none text-tertiary">“</span>
                  <blockquote className="text-base leading-snug text-surface-deep-foreground flex-1">{rec.line}</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm text-surface-deep-muted">
                    <img src={logoUrl(rec.domain)} alt={`${rec.company} logo`} width={36} height={36} loading="lazy" className="h-9 w-9 shrink-0 rounded-md bg-background object-contain p-0.5" />
                    <div className="min-w-0">
                      <span className="font-semibold text-surface-deep-foreground">{rec.name}</span>
                      <div>{rec.company ? `${rec.title}, ${rec.company}` : rec.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeRecommendation;
