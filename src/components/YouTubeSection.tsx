import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Youtube } from "lucide-react";

const YouTubeSection = () => {
  const videos = [
    {
      id: "IHwS2By9UKM",
      title: "10 growth tactics to avoid",
      thumbnail: `https://img.youtube.com/vi/IHwS2By9UKM/maxresdefault.jpg`,
      url: "https://youtu.be/IHwS2By9UKM?feature=shared"
    },
    {
      id: "bxghtN-OlJQ",
      title: "the ultimate guide to product-led sales",
      thumbnail: `https://img.youtube.com/vi/bxghtN-OlJQ/maxresdefault.jpg`,
      url: "https://youtu.be/bxghtN-OlJQ?feature=shared"
    },
    {
      id: "UTmFuSZfJ9U",
      title: "PLG is the future",
      thumbnail: `https://img.youtube.com/vi/UTmFuSZfJ9U/maxresdefault.jpg`,
      url: "https://youtu.be/UTmFuSZfJ9U?feature=shared"
    },
    {
      id: "m02r7CJjx5U",
      title: "Could you, Would you, PLG?",
      thumbnail: `https://img.youtube.com/vi/m02r7CJjx5U/maxresdefault.jpg`,
      url: "https://youtu.be/m02r7CJjx5U?feature=shared"
    }
  ];

  return (
    <section className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-bold text-foreground">YouTube Videos</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into growth, product-led strategies, and leadership insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch Video
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href="https://www.youtube.com/results?search_query=elena+verna" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              View All Videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;