import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const NextEventSection = () => {
  return <section className="pt-1 pb-16 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-foreground">My Next Speaking Gigs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First Event */}
          <div className="bg-gradient-accent p-1 rounded-lg shadow-medium">
            <div className="bg-background rounded-md p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">Spotlight Conference (by SemRush)</h3>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Oct 29, 2025</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">Amsterdam, NL</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">From self-serve to self-build</p>

                <Button asChild size="sm" className="mt-2 w-full">
                  <a href="https://www.spotlightconf.com/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Spotlight Conference by SemRush">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Second Event */}
          <div className="bg-gradient-accent p-1 rounded-lg shadow-medium">
            <div className="bg-background rounded-md p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">Product Drive Conference (by UserPilot)</h3>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Oct 7, 2025</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">Online Event</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">Next evolution of PLG</p>

                <Button asChild size="sm" className="mt-2 w-full">
                  <a href="https://productdrive.userpilot.com/talks/next-evolution-of-plg/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Product Drive by UserPilot">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Third Event */}
          <div className="bg-gradient-accent p-1 rounded-lg shadow-medium">
            <div className="bg-background rounded-md p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">ProductCon (by Product School)</h3>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Oct 8, 2025</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">San Francisco, CA</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">The collapse of distribution moats</p>

                <Button asChild size="sm" className="mt-2 w-full">
                  <a href="https://www.eventbrite.com/e/productcon-san-francisco-the-conference-for-product-leaders-tickets-1280588016229" target="_blank" rel="noopener noreferrer" aria-label="Learn more about ProductCon in San Francisco">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Fourth Event */}
          <div className="bg-gradient-accent p-1 rounded-lg shadow-medium">
            <div className="bg-background rounded-md p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">Want me to speak at your event?</h3>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">Your time</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">Your location</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">Something about growth</p>

                <Button asChild size="sm" className="mt-2 w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Learn more about SaaS Marketing Leaders">Contact me</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NextEventSection;