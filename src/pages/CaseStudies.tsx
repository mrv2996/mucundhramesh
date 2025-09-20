import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp, Zap, Bot } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "How a Simple Automation Saved Manual Hours in Partner Activation",
      subtitle: "Using Excel, Salesforce, SQL and Zapier to streamline operations",
      readTime: "8 min read",
      tags: ["Automation", "Zapier", "Salesforce", "SQL"],
      icon: <Zap className="h-8 w-8 text-primary" />,
      summary: "Discover how we eliminated 15+ hours of weekly manual work by creating an intelligent automation pipeline that connects Excel data processing, Salesforce CRM updates, and SQL database operations through Zapier workflows.",
      keyMetrics: [
        { label: "Time Saved", value: "15+ hrs/week", icon: <Clock className="h-4 w-4" /> },
        { label: "Process Efficiency", value: "85% faster", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Team Impact", value: "3 departments", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      id: 2,
      title: "How a Custom AI Agent Replaced Software Licenses",
      subtitle: "Building a Dust agent that outperformed Crossbeam for partner alignment",
      readTime: "12 min read", 
      tags: ["AI", "Dust", "Partner Management", "Cost Optimization"],
      icon: <Bot className="h-8 w-8 text-primary" />,
      summary: "Learn how we developed a custom AI agent using Dust that not only replaced expensive Crossbeam licenses but also provided superior partner mapping and alignment capabilities, resulting in better insights and significant cost savings.",
      keyMetrics: [
        { label: "Cost Reduction", value: "70% savings", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Accuracy Improvement", value: "40% better", icon: <Zap className="h-4 w-4" /> },
        { label: "Processing Speed", value: "5x faster", icon: <Clock className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world stories of operational improvements, automation wins, and strategic implementations that drive measurable business impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="container pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {study.icon}
                      </div>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs">
                          {study.readTime}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.keyMetrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border"
                      >
                        <div className="text-primary">
                          {metric.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Read More CTA */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Coming soon - Full case study with implementation details
                      </span>
                      <div className="text-primary font-medium text-sm group-hover:underline">
                        Read more →
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto mt-16 text-center space-y-6 p-8 rounded-lg bg-muted/30 border">
            <h3 className="text-2xl font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get notified when new case studies are published. Learn from real operational improvements and automation wins.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;