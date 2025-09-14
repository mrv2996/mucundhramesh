import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import headshotImage from "@/assets/elena-headshot-new.jpg";
const HeroSection = () => {
  return <section className="min-h-[80vh] flex items-center justify-center px-6 py-12 pb-1">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left order-1">
            <h1 className="lg:text-7xl font-bold mb-6 leading-tight text-4xl animate-fade-in bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl [text-shadow:0_0_30px_hsl(var(--primary)/0.5)]">
              Elena Verna
            </h1>
            <p className="lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-base font-normal">From SQL monkey to growth junkie... Nowadays I sit somewhere between data, marketing, and product constantly obsessing about acquisition, activation, monetization, and retention. B2B self-serve is my jam. #PLG4Life.</p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-4 justify-center lg:justify-start mt-8">
              {/* Top row: LinkedIn and AI Agent */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold shadow-medium" asChild>
                  <a href="https://www.linkedin.com/in/elenaverna" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold" asChild>
                  <a href="https://www.superme.ai/elena" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with my AI Agent
                  </a>
                </Button>
              </div>
              
              {/* Bottom row: Newsletter centered */}
              <div className="flex justify-center lg:justify-start">
                <Button variant="outline" size="lg" className="font-semibold bg-card border-2 border-border hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="https://www.elenaverna.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Read my newsletter
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="hidden lg:flex justify-center lg:justify-start order-2">
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-large bg-gradient-secondary">
                <img src={headshotImage} alt="Elena Verna - Growth leader and advisor" className="w-full h-full object-cover" />
              </div>
              {/* Subtle background accent */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl bg-gradient-primary opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;