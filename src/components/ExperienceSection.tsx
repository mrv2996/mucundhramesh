import { Building2, TrendingUp, Users, Zap, Target, Palette } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [{
    role: "CEO",
    company: "Lovable",
    description: "building last piece of software and hopefully putting myself out of the job",
    icon: Building2,
    current: true,
    url: "https://lovable.dev"
  }, {
    role: "Growth",
    company: "Dropbox",
    description: "worked on acquisition, activation, monetization, and retention of the core cloud storage product",
    icon: TrendingUp,
    current: false,
    url: "https://dropbox.com"
  }, {
    role: "Interim Head of Growth",
    company: "Amplitude",
    description: "introduced self-serve monetization motion",
    icon: Target,
    current: false,
    url: "https://amplitude.com"
  }, {
    role: "Interim Head of Growth",
    company: "Netlify",
    description: "worked on self-serve product activation and monetization",
    icon: Zap,
    current: false,
    url: "https://netlify.com"
  }, {
    role: "Interim Head of Marketing",
    company: "Miro",
    description: "helped expand Miro's PMF during covid-era",
    icon: Palette,
    current: false,
    url: "https://miro.com"
  }, {
    role: "SVP of Growth",
    company: "SurveyMonkey",
    description: "built growth org from scratch, scaled from analyst to SVP",
    icon: Users,
    current: false,
    url: "https://surveymonkey.com"
  }];
  return <section className="py-6 px-4 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Leading growth and/or marketing teams in B2B SaaS</p>
        </div>

        <div className="space-y-2">
          {experiences.map((exp, index) => {
          const IconComponent = exp.icon;
          return <div key={index} className="group">
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-card rounded-lg p-3 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 cursor-pointer hover:scale-[1.01]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-foreground">
                          {exp.current ? 'Current: ' : ''}{exp.role === 'CEO' && exp.company === 'Lovable' ? 'Growth at Lovable' : `${exp.role} at ${exp.company}`}
                        </h3>
                        {exp.current && <span className="px-2 py-0.5 bg-gradient-primary text-white text-xs font-medium rounded-full">
                            Current
                          </span>}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;