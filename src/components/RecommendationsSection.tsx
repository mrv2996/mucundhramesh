import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: 1,
      name: "Victor Falières",
      title: "Partnerships Manager",
      company: "SWEEP",
      relationship: "Victor managed Mucundh directly",
      text: "Mucundh is a proactive and eager-to-learn professional. I had the opportunity to have him on my team during his time as a Partnerships Operations specialist. He demonstrated a strong ability to learn quickly, adapt to new situations, and contribute with impact. He also took initiative by proposing and implementing actions that helped improve our processes."
    },
    {
      id: 2,
      name: "Marcia Dantas de Lima",
      title: "Head of Business Development",
      company: "biometrio.earth",
      relationship: "Marcia was Mucundh's client",
      text: "Mucundh was conducting a study case for the company that I work for, a deep-tech startup focused on biodiversity assessment, the scope of the project was to assess the scalability of our business. I can recommend especially, his ability to use data to increase conversion and retention, and unlock product decisions (pricing, competitive benchmarking) by identifying ideal user personas, mapping customer journeys and eventually increasing revenues. It was a pleasure working with him and I can definitely recommend him to any agile tech start-up environments that needs support to use data to drive product and business decision making."
    },
    {
      id: 3,
      name: "Jean-Philippe Kervadec",
      title: "Group Business Controller",
      company: "Forvis Mazars Group",
      relationship: "Jean-Philippe was Mucundh's mentor",
      text: "Between February & April 2022, I worked with Mucundh in the framework of a student project. A partnership between ESCP Business School and my company, Mazars. With other ESCP students, he helped us on one of key project for the near future: our Global IT platform programme. They worked on many topics such as the IT cost accounting, the charge-back model, the transfer pricing issue and much more. Mucundh was one of the most involved in that project and he brought his IT vision thanks to his previous experience at GE. I strongly recommend him for an internship in your company. He has precious soft & hard skills so do not hesitate."
    }
  ];

  return (
    <section className="py-section px-6 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-[var(--space-lg)] bg-gradient-mixed bg-clip-text text-transparent">
            Recommendations
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-[var(--space-md)]">
            What colleagues and partners say about working with me
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="flex items-center">
              {recommendations.map((rec) => (
                <CarouselItem key={rec.id} className="basis-full">
                  <Card className="h-full bg-card/70 backdrop-blur-sm border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-[var(--space-lg)] h-full flex flex-col">
                      <div className="flex items-start gap-[var(--space-md)] mb-[var(--space-md)]">
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
                      
                      <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                        "{rec.text}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;