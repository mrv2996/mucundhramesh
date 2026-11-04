import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN } from "@/lib/site";

// One impactful line per recommendation, quoted verbatim from the full text
// in RecommendationsSection.tsx. LinkedIn profile is the source of proof.
const highlights = [
  {
    id: 1,
    name: "Victor Falières",
    title: "Partnerships Manager",
    company: "SWEEP",
    relationship: "Victor managed Mucundh directly",
    line: "He also took initiative by proposing and implementing actions that helped improve our processes.",
  },
  {
    id: 2,
    name: "Marcia Dantas de Lima",
    title: "Head of Business Development",
    company: "biometrio.earth",
    relationship: "Marcia was Mucundh's client",
    line: "I can recommend especially, his ability to use data to increase conversion and retention, and unlock product decisions.",
  },
  {
    id: 3,
    name: "Jean-Philippe Kervadec",
    title: "Group Business Controller",
    company: "Forvis Mazars Group",
    relationship: "Jean-Philippe was Mucundh's mentor",
    line: "Mucundh was one of the most involved in that project and he brought his IT vision thanks to his previous experience at GE.",
  },
];

const HomeRecommendation = () => {
  const scrollBy = (dir: 1 | -1) => {
    const track = document.getElementById("working-with-me-track");
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-section border-t">
      <div className="max-w-content mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-inter text-2xl font-semibold text-primary">Working with me</h2>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Verified on LinkedIn
            </a>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous recommendation"
              onClick={() => scrollBy(-1)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next recommendation"
              onClick={() => scrollBy(1)}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          id="working-with-me-track"
          className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin]"
        >
          {highlights.map((rec) => (
            <figure
              key={rec.id}
              data-card
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-2rem)/3)] rounded-lg border bg-card p-[var(--space-md)] flex flex-col"
            >
              <blockquote className="text-base leading-relaxed text-foreground flex-1">
                “{rec.line}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{rec.name}</span>
                <br />
                {rec.title}, {rec.company}
                <div className="text-xs italic mt-1">{rec.relationship}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecommendation;
