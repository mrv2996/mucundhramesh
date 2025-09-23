import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp, Zap, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Partner Activation Automation",
      subtitle: "Excel + Salesforce + SQL + Zapier pipeline",
      readTime: "8 min read",
      tags: ["Automation", "Zapier", "Salesforce", "SQL"],
      icon: <Zap className="h-6 w-6 text-primary" />,
      summary: "Eliminated 7-8 hours of weekly manual work with an intelligent automation pipeline connecting Excel, Salesforce CRM, and SQL operations.",
      keyMetrics: [
        { label: "Time Saved", value: "7-8 hrs/week", icon: <Clock className="h-4 w-4" /> },
        { label: "Efficiency", value: "85% faster", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Teams", value: "3 depts", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      id: 2,
      title: "AI-Powered Partner Intelligence",
      subtitle: "GenAI agent replaced $14K Software licenses",
      readTime: "6 min read", 
      tags: ["GenAI", "Cost Optimization", "Partner Intelligence"],
      icon: <Bot className="h-6 w-6 text-primary" />,
      summary: "Built a custom GenAI copilot processing Drive and Notion data to deliver partner intelligence at a fractional cost.",
      keyMetrics: [
        { label: "Savings", value: "$14K/year", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Adoption", value: "Low → High", icon: <Zap className="h-4 w-4" /> },
        { label: "Solution", value: "Custom", icon: <Clock className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section id="case-studies" className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Case Studies
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Real-world stories of operational improvements, automation wins, and strategic implementations that drive measurable business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <Link 
            key={study.id} 
            to={study.id === 1 ? "/case-studies/partner-activation-automation" : "/case-studies/crossbeam-ai-agent"}
          >
            <Card 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary h-full"
            >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {study.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {study.readTime}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {study.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {study.summary}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {study.keyMetrics.map((metric, metricIndex) => (
                  <div 
                    key={metricIndex}
                    className="flex flex-col items-center gap-1 p-3 rounded-lg bg-muted/50 border text-center"
                  >
                    <div className="text-primary">
                      {metric.icon}
                    </div>
                    <div className="font-semibold text-xs text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Read More CTA */}
              <div className="pt-3 border-t">
                <div className="text-primary font-medium text-sm group-hover:underline text-center">
                  Read full case study →
                </div>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;