import { Target, PenTool, TrendingUp, Code } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: TrendingUp,
      title: "GTM workflow and sales intelligence",
      description: "CRM Management (Salesforce/HubSpot), Campaign ROI Analysis, Lead Scoring, Sales Analytics, Conversion Optimization",
      color: "tertiary",
    },
    {
      icon: PenTool,
      title: "Finance Operations & Analysis",
      description: "Advanced Excel, VBA, Pivot Tables, Performance Reporting, Budget Planning",
      color: "secondary",
    },
    {
      icon: Target,
      title: "Operational Efficiency & RevOps",
      description: "Lean Operations, Agile Methodologies, Process Optimization, Revenue Forecasting, Pipeline Management, Workflow Automation, Continuous Improvement",
      color: "primary",
    },
    {
      icon: Code,
      title: "Data Engineering & API Integration",
      description: "SQL, SAP ABAP, API/Webhooks, Workflow Automation, Data Hygiene, Sales Tech Stack Integration",
      color: "primary",
    },
  ];

  return (
    <section className="py-section px-6 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-[var(--space-lg)] animate-fade-in">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        {/* Golden ratio grid: 2 columns, gap using golden ratio spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)] lg:gap-[var(--space-xl)]">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`group bg-card/70 backdrop-blur-sm rounded-2xl p-[var(--space-lg)] shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105 ${
                  skill.color === 'primary' ? 'hover:shadow-glow-primary' :
                  skill.color === 'secondary' ? 'hover:shadow-glow-secondary' :
                  'hover:shadow-glow-tertiary'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-[var(--space-md)]">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                    <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-medium text-justify">
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