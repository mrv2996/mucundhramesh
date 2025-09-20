import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Case Study Analysis",
      description: "Strategic analysis and recommendations for business challenges",
      link: "https://drive.google.com/file/d/1X8G0VeMJSenVYqLVGrRXxp6azstdoINm/view?usp=sharing",
      type: "case-study",
      category: "Strategy"
    },
    {
      title: "Data Analytics Project",
      description: "Comprehensive data analysis and insights extraction",
      link: "https://docs.google.com/spreadsheets/d/1n108oRXqJUgCWPZJEuFLCwbcBpcjpIrC/edit?usp=sharing&ouid=109264352810466052364&rtpof=true&sd=true",
      type: "analytics",
      category: "Analytics"
    },
    {
      title: "WordPress Development",
      description: "Custom website development and content management",
      link: "https://xinyili4.wordpress.com/",
      type: "development",
      category: "Development"
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Strategy":
        return "bg-primary/10 text-primary border-primary/20";
      case "Analytics":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Development":
        return "bg-tertiary/10 text-tertiary border-tertiary/20";
      default:
        return "bg-muted/50 text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-section px-6 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-[var(--space-lg)] animate-fade-in">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        {/* Golden ratio grid: 3 columns maximum, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] lg:gap-[var(--space-xl)]">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card/70 backdrop-blur-sm rounded-2xl p-[var(--space-lg)] shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-[var(--space-md)] mb-[var(--space-md)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-mixed flex items-center justify-center shadow-medium">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-[var(--space-md)]">
                {project.description}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-glow-primary"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-[var(--space-xl)] text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Systems-level approach to problem-solving, designing technical solutions that integrate seamlessly with business operations while maintaining focus on scalability, efficiency, and measurable performance improvements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;