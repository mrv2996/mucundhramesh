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

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title} at {exp.company}
                    </h3>
                    {exp.type === 'current' && (
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  {exp.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;