import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Mail, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import headshotImage from "@/assets/mucundh-headshot-clean.jpeg";
import { CV_URL, EMAIL, HACKATHON_URL, LINKEDIN } from "@/lib/site";

const metrics = [
  { value: "7-8 hrs/week", label: "manual work removed" },
  { value: "85% faster", label: "partner activation" },
  { value: "95% fewer", label: "data errors" },
];

/** Counts the leading number up once; the full value is always in the DOM text for readers. */
const CountUp = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 900);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!match) return <span>{value}</span>;
  return <span ref={ref} aria-label={value}><span aria-hidden>{n}{match[2]}</span></span>;
};

const HeroSection = () => {
  const badge = (
<a
              href={HACKATHON_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Company Brain Buildathon — Finance & Ops track, judged by Round Treasury"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-3 text-sm font-semibold font-inter text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Trophy className="h-4 w-4 text-tertiary" />
              Hackathon winner
            </a>
  );
  return (
    <section className="px-6 pt-8 pb-6 lg:pt-12 lg:pb-10">
      <div className="max-w-content mx-auto">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[1.618fr_1fr] gap-4 lg:gap-[var(--space-lg)] items-start lg:items-center">
          <div className="space-y-3 min-w-0">
            <h1 className="sr-only">Mucundh Ramesh</h1>
            <div className="sm:hidden flex items-center gap-3">
              <img src={headshotImage} alt="" aria-hidden className="w-11 h-11 rounded-full object-cover object-top shadow-medium shrink-0" />
              {badge}
            </div>
            <h2 className="text-xl lg:text-2xl font-semibold text-primary leading-tight">
              Building and Scaling GTM with a people, process and technology-first approach
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Passionate about designing scalable infrastructures with technical precision to build relationships that
              drive measurable business outcomes. Software Systems Engineer turned go-to-market strategy and operations
              specialist with proven commercial experience.
            </p>

            <div className="flex flex-wrap gap-3 pt-0">
              <Button className="font-semibold" asChild>
                <Link to="/#work">Explore my work<ArrowDown className="ml-1 h-4 w-4" /></Link>
              </Button>
              {CV_URL && (
                <Button variant="outline" className="font-semibold" asChild>
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer">View CV</a>
                </Button>
              )}
              <Button variant="outline" className="font-semibold border-secondary text-primary hover:bg-secondary hover:text-secondary-foreground" asChild>
                <a href={EMAIL}><Mail className="mr-1 h-4 w-4" />Get in Touch</a>
              </Button>
              <Button variant="ghost" className="font-semibold text-primary" asChild>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-1 h-4 w-4" />LinkedIn Profile</a>
              </Button>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-2 lg:justify-self-end">
            <div className="w-24 h-[7.75rem] sm:w-40 sm:h-[13rem] lg:w-56 lg:h-[18rem] rounded-2xl overflow-hidden shadow-large bg-gradient-primary">
              <img
                src={headshotImage}
                alt="Mucundh Ramesh - Strategic operations professional in high-growth tech scale-ups"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {badge}
          </div>
        </div>

        {/* Impact metrics */}
        <ul aria-label="Impact highlights" className="mt-6 lg:mt-8 grid grid-cols-3 border-y divide-x divide-border">
          {metrics.map((m) => (
            <li key={m.label} className="py-3 px-3 md:px-4 first:pl-0">
              <div className="text-xl lg:text-2xl font-bold text-primary font-inter"><CountUp value={m.value} /></div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HeroSection;
