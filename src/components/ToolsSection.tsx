const ToolsSection = () => {
  const tools = [
    { name: "SQL", category: "data" },
    { name: "Google Analytics", category: "analytics" },
    { name: "Python", category: "programming" },
    { name: "MS Excel", category: "data" },
    { name: "Salesforce", category: "platform" },
    { name: "Jira", category: "management" },
    { name: "Tableau", category: "visualization" },
    { name: "Notion", category: "productivity" },
    { name: "Figma", category: "design" },
    { name: "OKR", category: "strategy" },
    { name: "HubSpot", category: "platform" },
    { name: "UX Research", category: "research" },
    { name: "Go-to-Market", category: "strategy" },
    { name: "UX/UI Design", category: "design" },
    { name: "CRM", category: "platform" },
    { name: "Statistical Analysis", category: "data" },
    { name: "Web-Analytics", category: "analytics" },
    { name: "HotJar", category: "analytics" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "data":
      case "programming":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground";
      case "analytics":
      case "visualization":
        return "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary hover:text-secondary-foreground";
      case "design":
      case "research":
        return "bg-tertiary/10 text-tertiary border-tertiary/20 hover:bg-tertiary hover:text-tertiary-foreground";
      default:
        return "bg-muted/50 text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground";
    }
  };

  return (
    <section className="py-section px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium hover:scale-105 hover:shadow-medium ${getCategoryColor(tool.category)}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {tool.name}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leveraging a diverse toolkit to bridge the gap between technical implementation 
            and strategic business outcomes, with expertise spanning data analysis, 
            product design, and growth optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;