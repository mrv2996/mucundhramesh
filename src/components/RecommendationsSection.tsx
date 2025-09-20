import { Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Sales Director",
      company: "TechCorp Solutions",
      relationship: "Worked directly with Mucundh",
      text: "Mucundh's ability to bridge the gap between technical complexity and business outcomes is exceptional. His data-driven approach to sales operations transformed our lead qualification process, resulting in a 40% increase in conversion rates.",
      linkedinUrl: "#"
    },
    {
      id: 2,
      name: "David Chen",
      title: "VP of Operations",
      company: "DataFlow Inc",
      relationship: "Managed Mucundh directly",
      text: "Working with Mucundh was a game-changer for our operations team. His systematic approach to process optimization and automation freed up 20+ hours per week for our team to focus on strategic initiatives.",
      linkedinUrl: "#"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Chief Technology Officer",
      company: "InnovateTech",
      relationship: "Collaborated closely with Mucundh",
      text: "Mucundh's technical expertise in API integrations and data engineering is outstanding. He seamlessly connected our disparate systems, creating a unified view of our customer journey that improved our decision-making capabilities.",
      linkedinUrl: "#"
    },
    {
      id: 4,
      name: "Michael Thompson",
      title: "Head of Revenue Operations",
      company: "ScaleUp Ventures",
      relationship: "Worked with Mucundh on multiple projects",
      text: "Mucundh combines deep technical knowledge with business acumen in a way that's rare to find. His work on our RevOps infrastructure directly contributed to a 30% improvement in sales cycle efficiency.",
      linkedinUrl: "#"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Finance Director",
      company: "Growth Partners",
      relationship: "Collaborated with Mucundh on analytics projects",
      text: "Mucundh's financial modeling and reporting capabilities are exceptional. He transformed our monthly reporting process from a 2-week ordeal to an automated 2-day turnaround, while improving accuracy and insights.",
      linkedinUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-mixed bg-clip-text text-transparent">
            Recommendations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What colleagues and partners say about working with me
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-6 p-4">
            {recommendations.map((rec) => (
              <Card
                key={rec.id}
                className="w-[400px] flex-none bg-card/70 backdrop-blur-sm border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {rec.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {rec.title}
                      </p>
                      <p className="text-sm text-primary font-medium truncate">
                        {rec.company}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3 italic">
                    {rec.relationship}
                  </p>
                  
                  <blockquote className="text-sm text-foreground leading-relaxed mb-4 whitespace-normal">
                    "{rec.text}"
                  </blockquote>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => window.open(rec.linkedinUrl, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default RecommendationsSection;