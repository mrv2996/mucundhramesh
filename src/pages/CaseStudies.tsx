import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp, Zap, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CaseStudies = () => {
  useEffect(() => {
    // Update meta tags for Case Studies page
    document.title = "Case Studies - Mucundh Ramesh | Technical Systems and Operations Analyst";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Real-world case studies showcasing operational improvements, automation wins, and strategic implementations by Mucundh Ramesh, Technical Systems and Operations Analyst.');
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Case Studies - Mucundh Ramesh | Technical Systems and Operations Analyst');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Real-world case studies showcasing operational improvements, automation wins, and strategic implementations by Mucundh Ramesh, Technical Systems and Operations Analyst.');
    }
  }, []);
  const caseStudies = [
    {
      id: 1,
      title: "How a Simple Rule-Based Automation Saved Manual Hours in Partner Activation",
      subtitle: "Using Excel, Salesforce, SQL and Zapier to streamline operations",
      readTime: "8 min read",
      tags: ["Automation", "Zapier", "Salesforce", "SQL", "ETL"],
      icon: <Zap className="h-8 w-8 text-primary" />,
      summary: "Discover how we eliminated 7-8 hours of weekly manual work by creating an intelligent automation pipeline that connects Excel data processing, Salesforce CRM updates, and SQL database operations through Zapier workflows.",
      keyMetrics: [
        { label: "Time Saved", value: "7-8 hrs/week", icon: <Clock className="h-4 w-4" /> },
        { label: "Process Efficiency", value: "85% faster", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Team Impact", value: "3 departments", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      id: 2,
      title: "From $14K Crossbeam Licenses to AI-Powered Partner Intelligence",
      subtitle: "Building a GenAI agent that replaced expensive partner mapping software",
      readTime: "6 min read", 
      tags: ["GenAI", "Partner Intelligence", "Cost Optimization", "Dust", "Drive API"],
      icon: <Bot className="h-8 w-8 text-primary" />,
      summary: "Learn how we replaced expensive Crossbeam licenses with a custom GenAI agent that processes structured partner data from Drive and Notion, delivering similar intelligence outcomes at a fraction of the cost.",
      keyMetrics: [
        { label: "Annual Savings", value: "$14K", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Usage Adaptation", value: "Low → High", icon: <Zap className="h-4 w-4" /> },
        { label: "Solution Fit", value: "Custom built", icon: <Clock className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
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
              <Link 
                key={study.id} 
                to={study.id === 1 ? "/case-studies/partner-activation-automation" : "/case-studies/crossbeam-ai-agent"}
              >
                <Card 
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
                        {study.id === 1 ? "Click to read the full implementation details" : "Click to read the full case study details"}
                      </span>
                      <div className="text-primary font-medium text-sm group-hover:underline">
                        {study.id === 1 ? "Read full case study →" : "Read case study →"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;