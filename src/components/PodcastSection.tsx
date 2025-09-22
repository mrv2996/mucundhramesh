import { Button } from "@/components/ui/button";
import { Mic, ExternalLink, Clock, Calendar } from "lucide-react";

const PodcastSection = () => {
  const podcasts = [
    {
      title: "The Growth Show",
      episode: "Scaling Product-Led Growth at Scale",
      date: "March 2024",
      duration: "45 min",
      host: "HubSpot",
      description: "Deep dive into PLG strategies for enterprise companies and common pitfalls to avoid.",
      url: "#"
    },
    {
      title: "Masters of Scale",
      episode: "Building Growth Teams That Last",
      date: "February 2024", 
      duration: "38 min",
      host: "Reid Hoffman",
      description: "How to structure and scale growth organizations from startup to IPO.",
      url: "#"
    },
    {
      title: "Product Talk",
      episode: "Monetization Strategy Frameworks",
      date: "January 2024",
      duration: "52 min", 
      host: "Product School",
      description: "Practical frameworks for pricing, packaging, and revenue optimization.",
      url: "#"
    },
    {
      title: "SaaS Revolution",
      episode: "The Future of Growth Leadership",
      date: "December 2023",
      duration: "41 min",
      host: "SaaStr",
      description: "Emerging trends in growth strategy and what leaders need to know for 2024.",
      url: "#"
    }
  ];

  return (
    <section className="py-section px-6 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic className="h-8 w-8 text-primary" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Podcast Episodes</h2>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Featured conversations on leading growth and product podcasts
          </p>
        </div>

        <div className="space-y-6">
          {podcasts.map((podcast, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {podcast.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">• {podcast.host}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {podcast.episode}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {podcast.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{podcast.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button 
                      variant="outline" 
                      className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={podcast.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Listen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to have me on your podcast? Let's connect!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href="https://www.linkedin.com/in/elenaverna" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;