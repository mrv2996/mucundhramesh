import { Database, BarChart3, Settings, Code, Target, TrendingUp } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    // Data & Analytics
    { name: "SQL", category: "data", icon: Database },
    { name: "Power BI", category: "data", icon: BarChart3 },
    { name: "Looker", category: "data", icon: BarChart3 },
    { name: "Python", category: "data", icon: Code },
    { name: "MS Excel Advanced", category: "data", icon: BarChart3 },
    
    // RevOps & CRM
    { name: "Salesforce", category: "platform", icon: Target },
    { name: "HubSpot", category: "platform", icon: Target },
    { name: "Apollo", category: "platform", icon: Settings },
    //{ name: "Appian", category: "platform", icon: Settings },
    
    // GTM & Growth
    { name: "GTM Strategy", category: "strategy", icon: TrendingUp },
    { name: "Paid Ads", category: "strategy", icon: TrendingUp },
    { name: "A/B Testing", category: "strategy", icon: TrendingUp },
    
    // Technical Tools
    { name: "JIRA", category: "management", icon: Settings },
    { name: "Figma", category: "design", icon: Settings },
    { name: "AWS", category: "platform", icon: Code },
    { name: "SAP", category: "platform", icon: Database },
    
    // AI & Automation
    { name: "Dust AI", category: "ai", icon: Code },
    { name: "UX Research", category: "research", icon: Settings },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "data":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground";
      case "platform":
        return "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary hover:text-secondary-foreground";
      case "strategy":
        return "bg-tertiary/10 text-tertiary border-tertiary/20 hover:bg-tertiary hover:text-tertiary-foreground";
      case "ai":
        return "bg-gradient-mixed/10 text-foreground border-primary/30 hover:bg-gradient-mixed hover:text-white";
      default:
        return "bg-muted/50 text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground";
    }
  };

  return (
    <section className="py-section">
      <div className="w-full overflow-hidden">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-[var(--space-lg)] animate-fade-in">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        {/* Truly seamless infinite scroll */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-4">
            {/* Create enough copies to ensure seamless loop */}
            {[...Array(6)].map((_, setIndex) => 
              tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`set-${setIndex}-${tool.name}-${index}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-full border-2 transition-all duration-300 font-medium hover:scale-105 hover:shadow-medium flex-shrink-0 whitespace-nowrap ${getCategoryColor(tool.category)}`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{tool.name}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
        <div className="mt-[var(--space-xl)] text-center px-6">
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revenue operations expertise backed by technical engineering foundation - architecting scalable systems that drive measurable business growth through data-driven automation, process optimization, and strategic commercial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;