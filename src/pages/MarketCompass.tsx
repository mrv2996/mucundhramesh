import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePageMeta } from "@/hooks/use-page-meta";

const dashboardUrl = "https://brazil-fx.lovable.app/";
const MarketCompass = () => {
  usePageMeta("Market Compass — Brazil Market Entry | Mucundh Ramesh", "Explore a Brazil market-entry scenario model with editable launch assumptions, profit, payback and public USD/BRL exchange-rate data.");
  return <div className="min-h-screen bg-background pt-16 font-source">
    <Navigation />
    <main>
      <section className="container max-w-content py-section">
        <Button asChild variant="link" className="px-0 min-h-11 text-base"><Link to="/#projects"><ArrowLeft />Back to projects</Link></Button>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-base">Market-entry strategy</Badge>
            <h1 className="mt-4 font-inter text-3xl font-semibold text-primary leading-tight">Market Compass</h1>
            <p className="mt-2 text-xl font-inter">Brazil Market Entry</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">A first-draft view of launch economics: test setup costs, revenue, operating costs and tax assumptions against profit and payback, alongside public Banco Central do Brasil USD/BRL data.</p>
          </div>
          <Button asChild className="min-h-11 text-base"><a href={dashboardUrl} target="_blank" rel="noopener noreferrer">Open dashboard<ExternalLink /></a></Button>
        </div>
      </section>
      <section aria-label="Market Compass public dashboard" className="border-y border-border bg-muted/30">
        <div className="hidden md:block">
          <iframe src={dashboardUrl} title="Market Compass — Brazil market-entry dashboard" className="w-full h-[820px] border-0" loading="lazy" />
        </div>
        <div className="container py-section md:hidden">
          <h2 className="font-inter text-2xl font-semibold text-primary">Brazil launch economics</h2>
          <p className="mt-4 mb-6 text-base text-muted-foreground leading-relaxed">Setup cost, monthly profit, payback and currency exposure in a single operating view.</p>
          <Button asChild className="min-h-11 text-base"><a href={dashboardUrl} target="_blank" rel="noopener noreferrer">View public dashboard<ExternalLink /></a></Button>
        </div>
      </section>
      <div className="container max-w-content py-8"><p className="text-base leading-relaxed text-muted-foreground">Commercial inputs are illustrative assumptions. Tax treatment is simplified, not tax advice. FX source: Banco Central do Brasil PTAX.</p></div>
    </main>
    <Footer />
  </div>;
};
export default MarketCompass;
