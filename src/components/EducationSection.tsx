import { GraduationCap, MapPin, ExternalLink } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master in Management - Grande École",
      school: "ESCP BUSINESS SCHOOL",
      location: "Paris & London",
      specializations: ["Consumer Behaviour", "Sustainability", "Scale-up Strategy"],
      type: "master",
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      school: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      location: "Chennai, INDIA",
      specializations: [],
      type: "bachelor",
      researchPaper: {
        title: "SECURE DATA RETRIEVAL IN CLOUD USING MULTIPLE KEYS: A SURVEY",
        journal: "International Journal of Pure and Applied Mathematics",
        url: "https://www.researchgate.net/publication/325878411_SECURE_DATA_RETRIEVAL_IN_CLOUD_USING_MULTIPLE_KEYS_A_SURVEY"
      }
    },
  ];

  return (
    <section className="py-section px-6 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {education.map((edu, index) => (
            <div
              key={edu.school}
              className={`bg-card/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105 ${
                edu.type === 'master' 
                  ? 'hover:shadow-glow-primary border-primary/20' 
                  : 'hover:shadow-glow-secondary border-secondary/20'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl ${
                  edu.type === 'master' ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                } flex items-center justify-center shadow-medium`}>
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className={`text-base font-medium mb-3 ${
                    edu.type === 'master' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {edu.school}
                  </h4>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
              
              {edu.researchPaper && (
                <div className="mb-4">
                  <a
                    href={edu.researchPaper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-secondary group-hover:text-secondary/80">
                        {edu.researchPaper.title}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        Published in {edu.researchPaper.journal}
                      </span>
                    </div>
                  </a>
                </div>
              )}
              
              {edu.specializations.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3">
                    Specializations:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.specializations.map((spec) => (
                      <span
                        key={spec}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          edu.type === 'master'
                            ? 'bg-primary/10 text-primary border-primary/20'
                            : 'bg-secondary/10 text-secondary border-secondary/20'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;