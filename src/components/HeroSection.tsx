import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, ArrowUp, Trophy } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { logoUrl } from "@/lib/logos";
import { Link } from "react-router-dom";
import headshotImage from "@/assets/mucundh-headshot-clean.jpeg";
import { CV_URL, HACKATHON_URL } from "@/lib/site";

const companies = [
  { name: "Proxymity", domain: "proxymity.io" },
  { name: "Sweep", domain: "sweep.net" },
  { name: "Transdev", domain: "transdev.de" },
  { name: "L'Oréal", domain: "loreal.com" },
  { name: "GE", domain: "ge.com" },
];

const metrics = [
  { value: "7-8 hrs/week", label: "manual work removed" },
  { value: "85% faster", label: "partner activation" },
  { value: "$14K/year", label: "licenses replaced" },
];

/** Counts the leading number up once; the full value is always in the DOM text for readers. */
const CountUp = ({ value }: { value: string }) => {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const [n, setN] = useState(target);
  const { ref, inView } = useInView<HTMLSpanElement>();
  useEffect(() => {
    if (!inView || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
  }, [inView]);
  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden>
        {match[1]}
        {n}
        {match[3]}
      </span>
    </span>
  );
};

const HeroSection = () => {
  const status = (
    <span
      role="status"
      tabIndex={0}
      aria-label="Open to opportunities"
      className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-metric-border bg-metric-bg px-2.5 py-1 text-sm font-medium font-inter text-metric-label animate-status-fade focus-within:animate-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metric focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-metric opacity-50 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-metric" />
      </span>
      Open to opportunities
      <span className="sr-only">Available for new roles.</span>
    </span>
  );
  const focus = (
    <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-xs font-medium font-inter text-primary">
      <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden />
      Strategy & Business Operations · Generalist
    </span>
  );
  const badge = (
    <a
      href={HACKATHON_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Company Brain Buildathon: Finance & Ops track, judged by Round Treasury"
      className="group inline-flex min-h-11 items-center rounded-md px-3 text-sm font-semibold font-inter text-primary transition-colors hover:bg-secondary/10 hover:text-secondary"
    >
      <Trophy className="h-4 w-4 shrink-0 text-tertiary" />
      <span className="relative ml-1.5 inline-grid">
        <span className="col-start-1 row-start-1 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">Hackathon winner</span>
        <span aria-hidden className="col-start-1 row-start-1 inline-flex translate-y-1 items-center whitespace-nowrap opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
          Watch live demo<ArrowRight className="ml-1 h-4 w-4 shrink-0" />
        </span>
      </span>
    </a>
  );
  return (
    <section className="px-6 pt-5 pb-4 lg:pt-6 lg:pb-5">
      <div className="max-w-content mx-auto">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[1.618fr_1fr] gap-4 lg:gap-[var(--space-lg)] items-stretch">
          <div className="flex min-w-0 flex-col justify-center gap-4 py-0 lg:gap-5">
            <h1 className="sr-only">Mucundh Ramesh</h1>
            <div className="sm:hidden space-y-2">
              {status}
              <div className="flex items-center gap-3">
                <img
                  src={headshotImage}
                  alt=""
                  aria-hidden
                  className="w-11 h-11 rounded-full object-cover object-top shadow-medium shrink-0"
                />
                {badge}
              </div>
            </div>
            <div className="space-y-2.5 lg:space-y-3 motion-safe:animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                {focus}
                <span className="hidden sm:inline-flex">{badge}</span>
              </div>
              <h2 className="font-inter text-2xl lg:text-[1.875rem] font-semibold text-primary leading-[1.2]">
                Engineering roots.
                <br />
                <span className="relative inline-block">
                  Business impact.
                  <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-tertiary motion-safe:animate-underline-draw" />
                </span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                Experience across operations, partnerships and enablement in high-growth Tech Scaleups. An engineering
                background that connects the work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-0 motion-safe:animate-fade-up [animation-delay:120ms]">
              <Button variant="action" asChild>
                <Link to="/#work">
                  Explore my work
                  <ArrowDown className="ml-1 h-4 w-4 motion-safe:animate-nudge" />
                </Link>
              </Button>
              {CV_URL && (
                <Button variant="outline" className="font-semibold" asChild>
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-center justify-center gap-2 lg:justify-self-end motion-safe:animate-fade-up [animation-delay:80ms]">
            {status}
            <div className="w-24 h-[7.75rem] sm:w-40 sm:h-[13rem] lg:w-48 lg:h-[15rem] rounded-2xl overflow-hidden shadow-large bg-gradient-primary">
              <img
                src={headshotImage}
                alt="Mucundh Ramesh - Strategic operations professional in high-growth tech scale-ups"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        {/* Impact blocks */}
        <ul aria-label="Impact highlights" className="motion-safe:animate-fade-up [animation-delay:240ms] mt-4 lg:mt-6 mx-auto grid w-full grid-cols-3 gap-2 lg:gap-4">
          {metrics.map((m) => (
            <li key={m.label} className="metric-card min-w-0 px-2 py-2.5 sm:px-3 md:px-3.5 md:py-3">
              <div className="metric-value flex min-w-0 flex-wrap items-baseline gap-x-1 text-[clamp(0.875rem,4.2vw,1.125rem)] md:text-[1.375rem] font-bold font-inter tracking-tight leading-tight">
                <CountUp value={m.value} />
                <ArrowUp aria-hidden className="metric-arrow h-3 w-3 md:h-3.5 md:w-3.5 shrink-0" />
              </div>
              <div className="metric-label mt-0.5 break-words text-sm md:text-[0.8125rem] leading-snug">{m.label}</div>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] font-inter text-muted-foreground">Worked with</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <ul className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 sm:flex sm:items-center sm:justify-between">
            {companies.map((c, i) => (
              <li key={c.domain} title={c.name} style={{ animationDelay: `${400 + i * 80}ms` }} className="group flex items-center justify-center gap-2 motion-safe:animate-fade-in-soft">
                <img src={logoUrl(c.domain)} alt="" width={22} height={22} loading="lazy" className="h-[22px] w-[22px] rounded object-contain grayscale opacity-70 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100" />
                <span className="text-sm font-semibold font-inter text-muted-foreground transition-colors group-hover:text-primary">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
