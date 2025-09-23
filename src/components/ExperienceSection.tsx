import { MapPin, Calendar, Briefcase, GraduationCap, ExternalLink } from "lucide-react";
const JourneySection = () => {
  const journeyItems = [{
    title: "Partner Operations Specialist",
    company: "SWEEP",
    period: "Jan 2024 - Present",
    location: "London, United Kingdom",
    type: "work",
    status: "current",
    color: "primary"
  }, {
    title: "Master in Management - Grande École",
    company: "ESCP BUSINESS SCHOOL",
    period: "2021 - 2024",
    location: "Paris & London",
    type: "education",
    status: "completed",
    color: "secondary",
    specializations: ["Consumer Behaviour", "Sustainability", "Scale-up Strategy"]
  }, {
    title: "Strategy Analyst Intern, Commercial Strategy and Partnerships",
    company: "TRANSDEV",
    period: "Jan 2023 - July 2023",
    location: "Paris, FRANCE",
    type: "work",
    status: "completed",
    color: "tertiary"
  }, {
    title: "Financial Analyst Intern, Beauty Tech",
    company: "L'ORÉAL",
    period: "July 2022 - Dec 2022",
    location: "Paris, FRANCE",
    type: "work",
    status: "completed",
    color: "secondary"
  }, {
    title: "Software Engineer",
    company: "GENERAL ELECTRIC (GE)",
    period: "July 2018 - June 2021",
    location: "Bangalore, INDIA",
    type: "work",
    status: "completed",
    color: "primary"
  }, {
    title: "Bachelor of Technology, Computer Science and Engineering",
    company: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    period: "2014 - 2018",
    location: "Chennai, INDIA",
    type: "education",
    status: "completed",
    color: "secondary",
    researchPaper: {
      title: "SECURE DATA RETRIEVAL IN CLOUD USING MULTIPLE KEYS: A SURVEY",
      journal: "International Journal of Pure and Applied Mathematics",
      url: "https://www.researchgate.net/publication/325878411_SECURE_DATA_RETRIEVAL_IN_CLOUD_USING_MULTIPLE_KEYS_A_SURVEY"
    }
  }];
  return <section className="py-section px-6 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-[var(--space-lg)] animate-fade-in">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Animated timeline line with gradient sections */}
          <div className="absolute left-8 top-2 bottom-16 w-1 hidden md:block">
            <div className="w-full h-full bg-gradient-to-b from-primary via-secondary via-tertiary via-accent to-transparent rounded-full shadow-glow"></div>
          </div>
          
          <div className="space-y-[var(--space-sm)]">
            {journeyItems.map((item, index) => <div key={`${item.company}-${item.title}`} className="relative flex items-start gap-[var(--space-md)]">
                {/* Timeline dot with dynamic colors */}
                <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center shadow-glow relative z-10 bg-muted/5 ${item.color === 'primary' ? 'bg-gradient-primary' : item.color === 'secondary' ? 'bg-gradient-secondary' : item.color === 'tertiary' ? 'bg-gradient-tertiary' : 'bg-gradient-accent'}`}>
                  {item.type === 'education' ? <GraduationCap className="w-6 h-6 text-white" /> : <Briefcase className="w-6 h-6 text-white" />}
                </div>
                
                {/* Content card with enhanced styling */}
                <div className="flex-1">
                  <div className={`bg-card/80 backdrop-blur-sm rounded-lg p-[var(--space-md)] shadow-soft border transition-all duration-300 hover:scale-[1.02] hover:shadow-glow ${item.color === 'primary' ? 'border-primary/30 hover:border-primary/50 hover:shadow-glow-primary' : item.color === 'secondary' ? 'border-secondary/30 hover:border-secondary/50 hover:shadow-glow-secondary' : item.color === 'tertiary' ? 'border-tertiary/30 hover:border-tertiary/50 hover:shadow-glow-tertiary' : 'border-accent/30 hover:border-accent/50 hover:shadow-glow-accent'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-sm lg:text-base font-semibold ${item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : item.color === 'tertiary' ? 'text-tertiary' : 'text-accent'}`}>
                            {item.title}
                          </h3>
                          {item.status === 'current'}
                        </div>
                        
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          {item.company}
                        </h4>
                        
                        {item.location && <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-xs">{item.location}</span>
                          </div>}
                        
                        {/* Research paper for education */}
                        {item.researchPaper && <div className="mb-2">
                            <a href={item.researchPaper.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 group">
                              <ExternalLink className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform" />
                              <div className="flex flex-col">
                                <span className="text-xs font-medium text-secondary group-hover:text-secondary/80">
                                  {item.researchPaper.title}
                                </span>
                                <span className="text-xs text-muted-foreground mt-1">
                                  Published in {item.researchPaper.journal}
                                </span>
                              </div>
                            </a>
                          </div>}
                        
                        {/* Specializations for education */}
                        {item.specializations && item.specializations.length > 0 && <div>
                            <h5 className="text-xs font-semibold text-foreground mb-2">
                              Specializations:
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {item.specializations.map(spec => <span key={spec} className={`px-2 py-1 rounded-full text-xs font-medium border ${item.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/20' : 'bg-primary/10 text-primary border-primary/20'}`}>
                                  {spec}
                                </span>)}
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default JourneySection;