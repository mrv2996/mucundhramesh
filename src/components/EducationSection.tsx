import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master in Management - Grande École",
      school: "ESCP BUSINESS SCHOOL",
      period: "2021 - 2024",
      location: "Paris & London",
      specializations: ["Consumer Behaviour", "Sustainability", "Scale-up Strategy"],
      type: "master",
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      school: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      period: "2014 - 2018",
      location: "Chennai, INDIA",
      specializations: [],
      type: "bachelor",
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
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{edu.period}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
              
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