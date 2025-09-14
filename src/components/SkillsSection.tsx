import { Target, PenTool, Search, Code } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Roadmapping, A/B Tests, Project Management",
      color: "primary",
    },
    {
      icon: PenTool,
      title: "Product Design",
      description: "User Stories, User Flows, Wireframes, Persona Creation",
      color: "secondary",
    },
    {
      icon: Search,
      title: "Market & User Research",
      description: "Market Analysis, Experiment Design, Usability Testing",
      color: "tertiary",
    },
    {
      icon: Code,
      title: "Data Analytics & Programming",
      description: "Software Development and Management",
      color: "primary",
    },
  ];

  return (
    <section className="py-section px-6 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`group bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105 hover:shadow-glow-${skill.color}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;