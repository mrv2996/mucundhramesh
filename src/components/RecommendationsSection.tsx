import { Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: 1,
      name: "Victor Falières",
      title: "Partnerships Manager",
      company: "SWEEP",
      relationship: "Victor managed Mucundh directly",
      text: "Mucundh is a proactive and eager-to-learn professional. I had the opportunity to have him on my team during his time as a Partnerships Operations specialist. He demonstrated a strong ability to learn quickly, adapt to new situations, and contribute with impact. He also took initiative by proposing and implementing actions that helped improve our processes.",
      linkedinUrl: "https://www.linkedin.com/in/victor-falieres/"
    },
    {
      id: 2,
      name: "Marcia Dantas de Lima",
      title: "Head of Business Development",
      company: "biometrio.earth",
      relationship: "Marcia was Mucundh's client",
      text: "Mucundh was conducting a study case for the company that I work for, a deep-tech startup focused on biodiversity assessment, the scope of the project was to assess the scalability of our business. I can recommend especially, his ability to use data to increase conversion and retention, and unlock product decisions (pricing, competitive benchmarking) by identifying ideal user personas, mapping customer journeys and eventually increasing revenues. It was a pleasure working with him and I can definitely recommend him to any agile tech start-up environments that needs support to use data to drive product and business decision making.",
      linkedinUrl: "https://www.linkedin.com/in/marcia-dantas-de-lima/"
    },
    {
      id: 3,
      name: "Jean-Philippe Kervadec",
      title: "Group Business Controller",
      company: "Forvis Mazars Group",
      relationship: "Jean-Philippe was Mucundh's mentor",
      text: "Between February & April 2022, I worked with Mucundh in the framework of a student project. A partnership between ESCP Business School and my company, Mazars. With other ESCP students, he helped us on one of key project for the near future: our Global IT platform programme. They worked on many topics such as the IT cost accounting, the charge-back model, the transfer pricing issue and much more. Mucundh was one of the most involved in that project and he brought his IT vision thanks to his previous experience at GE. I strongly recommend him for an internship in your company. He has precious soft & hard skills so do not hesitate.",
      linkedinUrl: "https://www.linkedin.com/in/jean-philippe-kervadec/"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-mixed bg-clip-text text-transparent">
            Recommendations
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
            What colleagues and partners say about working with me
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {recommendations.map((rec) => (
              <CarouselItem key={rec.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card/70 backdrop-blur-sm border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 h-full flex flex-col">
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
                    
                    <blockquote className="text-sm text-foreground leading-relaxed mb-4 flex-1">
                      "{rec.text}"
                    </blockquote>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs mt-auto"
                      onClick={() => window.open(rec.linkedinUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View on LinkedIn
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default RecommendationsSection;