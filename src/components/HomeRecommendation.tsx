import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
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

  return (
    <section className="px-6 py-6 lg:py-8 border-t">
      <div className="max-w-content mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-inter text-2xl font-semibold text-primary">Working with me</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="Previous recommendation" onClick={() => api?.scrollPrev()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next recommendation" onClick={() => api?.scrollNext()}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="mt-4">
          <CarouselContent className="-ml-3">
            {highlights.map((rec) => (
              <CarouselItem key={rec.id} className="pl-3 basis-[85%] sm:basis-[60%] lg:basis-1/3">
                <figure className="h-full rounded-lg border bg-card p-3.5 flex flex-col">
                  <blockquote className="text-base leading-snug text-foreground flex-1">“{rec.line}”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                    <img src={logoUrl(rec.domain)} alt={`${rec.company} logo`} width={36} height={36} loading="lazy" className="h-9 w-9 shrink-0 rounded-md object-contain" />
                    <div className="min-w-0">
                      <span className="font-semibold text-foreground">{rec.name}</span>
                      <div>{rec.company ? `${rec.title}, ${rec.company}` : rec.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeRecommendation;
