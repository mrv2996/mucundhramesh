import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Partner Operations Specialist",
      company: "SWEEP",
      period: "Jan 2024 - Present",
      location: "",
      type: "current",
    },
    {
      title: "Strategy Analyst Intern",
      company: "TRANSDEV",
      period: "Jan 2023 - July 2023",
      location: "Paris, FRANCE",
      type: "past",
    },
    {
      title: "Beauty Tech Intern",
      company: "L'ORÉAL",
      period: "July 2022 - Dec 2022",
      location: "Paris, FRANCE",
      type: "past",
    },
    {
      title: "Software Engineer",
      company: "GENERAL ELECTRIC (GE)",
      period: "July 2018 - June 2021",
      location: "Bangalore, INDIA",
      type: "past",
    },
  ];

  return (
    <section className="py-section px-6 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-primary items-center justify-center shadow-medium relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>
                
                {/* Content card */}
                <div className="flex-1">
                  <div className={`bg-card/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300 ${
                    exp.type === 'current' ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-transparent' : ''
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium text-primary mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      
                      {exp.type === 'current' && (
                        <div className="bg-tertiary text-tertiary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;