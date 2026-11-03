import { ArrowLeft } from "lucide-react";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, TrendingUp, DollarSign, Bot, Database, FileText, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import crossbeamInterface from "@/assets/crossbeam-interface.png";
import agentOutputExample from "@/assets/agent-output-example.png";
import { useEffect } from "react";
const CaseStudy2 = () => {
  // Scroll to top when component mounts and update meta tags
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update meta tags for Crossbeam AI Agent case study
    document.title = "AI-Powered Partner Intelligence Agent - Case Study | Mucundh Ramesh";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How Mucundh Ramesh replaced expensive Crossbeam licenses with a GenAI agent that processes partner data from Drive and Notion, reducing costs while maintaining partner intelligence capabilities.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AI-Powered Partner Intelligence Agent - Case Study | Mucundh Ramesh');
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'How Mucundh Ramesh replaced expensive Crossbeam licenses with a GenAI agent that processes partner data from Drive and Notion, reducing costs while maintaining partner intelligence capabilities.');
    }
  }, []);
  return <div className="min-h-screen bg-background pt-16">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container py-section">
          <div className="max-w-4xl mx-auto">
            <Link to="/work" className="inline-flex min-h-11 items-center gap-2 text-base font-medium text-primary hover:underline mb-4"><ArrowLeft className="h-4 w-4" />Back to case studies</Link>
            <div className="space-y-6 text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  6 min read
                </Badge>
                <Badge variant="secondary">
                  Case Study #2
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight break-words">From $14K Software Licenses to AI-Powered Partner Intelligence</h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">How a partner mapping software could be replaced with a GenAI agent that processes structured partner data from Drive and Notion to deliver similar intelligence at a fraction of the cost.</p>

              <div className="flex flex-wrap justify-center gap-2">
                {["GenAI", "Partner Intelligence", "Cost Optimization", "Dust", "Drive API", "Notion", "Partner Mapping"].map(tag => <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>)}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">$14K</div>
                  <div className="text-sm text-muted-foreground">Annual license savings</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">Low</div>
                  <div className="text-sm text-muted-foreground">Crossbeam user adoption</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Bot className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">AI Agent</div>
                  <div className="text-sm text-muted-foreground">GenAI solution built</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 dark:text-red-200">
                  The Problem: Expensive Tool, Low Adoption
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-justify">
                <p className="text-muted-foreground leading-relaxed">
                  We implemented Crossbeam, a partner mapping platform, at $14K annually with seat-based tiered pricing. 
                  While the co-pilot widget in Salesforce CRM was useful for account managers to identify partner overlaps 
                  and influence deals, usage statistics revealed critically low user adoption across the sales and partnerships teams.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Issues:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Low user adoption despite high annual cost</li>
                      <li>• Live tracking not suited for our partner network</li>
                      <li>• Consulting partners with offline static data</li>
                      <li>• Over-engineered for our actual use case</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Partner Network Reality:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Consulting partners used offline data files</li>
                      <li>• Static data for GTM planning</li>
                      <li>• Limited need for real-time CRM tracking</li>
                      <li>• Structured files already Crossbeam-ready</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Crossbeam Interface */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Understanding Crossbeam's Co-selling Intelligence
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  The Crossbeam Copilot provided valuable partner insights and co-selling recommendations, 
                  but our usage patterns suggested a simpler solution could achieve similar outcomes.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img src={crossbeamInterface} alt="Crossbeam Copilot interface showing co-selling opportunities with Bozer Enterprises, account highlights, and recommended next steps" className="max-w-full w-full rounded-lg shadow-lg border border-muted" />
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  * Image for reference purposes only. Source: Crossbeam
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Crossbeam Capabilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time partner overlap identification</li>
                      <li>• Co-selling opportunity recommendations</li>
                      <li>• Account-based partner intelligence</li>
                      <li>• CRM integration with next steps</li>
                      <li>• Partner ecosystem analytics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Our Actual Usage:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Static file analysis for planning</li>
                      <li>• Partner priority matrix consultation</li>
                      <li>• Technographic data lookups</li>
                      <li>• Customer name-based queries</li>
                      <li>• Offline partner data processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Agent Solution */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Bot className="h-6 w-6 text-green-600" />
                  AI-Powered Partner Intelligence Agent
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  A custom GenAI agent that processes partner data from Google Drive and Notion, 
                  delivering structured partner intelligence at a fraction of Crossbeam's cost.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center border-dashed">
                    <CardContent className="pt-6">
                      <Database className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-medium mb-2">Data Sources</h4>
                      <p className="text-sm text-muted-foreground">Google Drive files + Notion priority matrix</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center border-dashed">
                    <CardContent className="pt-6">
                      <Zap className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <h4 className="font-medium mb-2">Processing</h4>
                      <p className="text-sm text-muted-foreground">Web-enhanced AI analysis with structured output</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center border-dashed">
                    <CardContent className="pt-6">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="font-medium mb-2">Output</h4>
                      <p className="text-sm text-muted-foreground">Ranked partner recommendations (1-5 scoring)</p>
                    </CardContent>
                  </Card>
                </div>

                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Agent Implementation & Output</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Agent Instructions</h4>
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap text-slate-800 dark:text-slate-200">
                        {`Agent Instructions
<Role> Partner overlap identifier for customer accounts
<Input> Customer name only (e.g., "coca-cola")
<Do>
Search Google Drive partner data files for customer mentions
Check Notion partner priority matrix
Use web search for additional partner intelligence
Rank partners 1-5 (1=highest overlap)
</Do>
Output Format (STRICT - NO OTHER TEXT):
\`\`\`
Customer: [customer_name]

Partner Overlaps:
1. [Partner Name] (Score: X) - [5-7 word reason]
2. [Partner Name] (Score: X) - [5-7 word reason] 
3. [Partner Name] (Score: X) - [5-7 word reason]

\`\`\`
<Rules>
Maximum 3 partners listed
Score must be 1-5 integer
Reason must be exactly 5-7 words
NO explanatory text before or after
NO "Let me search" or process descriptions
Return ONLY the formatted output above
</Rules>`}
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Structured Output</h4>
                      <div className="flex justify-center">
                        <img src={agentOutputExample} alt="AI agent structured output showing partner overlaps with scores and concise reasoning" className="max-w-full w-full rounded-lg border border-muted shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Agent Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Customer name-based queries</li>
                      <li>• 1-5 scoring system (1=highest overlap)</li>
                      <li>• Concise 5-7 word reasoning</li>
                      <li>• Web-enhanced partner intelligence</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Cost & Adoption:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Significant annual savings vs. Crossbeam</li>
                      <li>• Tailored to actual usage patterns</li>
                      <li>• Higher adoption due to simplicity</li>
                      <li>• Leverages existing data infrastructure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <RelatedCaseStudies currentPath="/case-studies/crossbeam-ai-agent" />

      <Footer />
    </div>;
};
export default CaseStudy2;