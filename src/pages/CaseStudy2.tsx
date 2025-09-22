import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, TrendingUp, DollarSign, Bot, Database, FileText, ArrowRight, CheckCircle, Zap } from "lucide-react";
import crossbeamInterface from "@/assets/crossbeam-interface.png";
import agentQueryExample from "@/assets/agent-query-example.png";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
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
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                From $14K Crossbeam Licenses to AI-Powered Partner Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                How we replaced expensive partner mapping software with a GenAI agent that processes structured partner data from Drive and Notion to deliver similar intelligence at a fraction of the cost.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["GenAI", "Partner Intelligence", "Cost Optimization", "Dust", "Drive API", "Notion", "Partner Mapping"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
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
                  <img 
                    src={crossbeamInterface} 
                    alt="Crossbeam Copilot interface showing co-selling opportunities with Bozer Enterprises, account highlights, and recommended next steps"
                    className="max-w-full w-full rounded-lg shadow-lg border border-muted"
                  />
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

        {/* Solution Overview */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">AI-Powered Alternative Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">1. Structured Data</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Leverage existing structured files already formatted for Crossbeam readiness, uploaded to Google Drive for centralized access.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">2. Dust Integration</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Connect Google Drive and Notion through Dust admin for seamless access to partner data and priority matrices.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Bot className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">3. GenAI Agent</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Deploy intelligent agent that processes partner files and returns similar intelligence when queried with customer names.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Details */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Implementation Architecture</h2>
            
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Data Layer */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Data Infrastructure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">Google Drive Repository:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Structured partner data files</li>
                          <li>• Technographic information datasets</li>
                          <li>• Historical deal influence records</li>
                          <li>• Partner capability matrices</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">Notion Integration:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Partner priority matrix</li>
                          <li>• Strategic partner rankings</li>
                          <li>• Deal influence frameworks</li>
                          <li>• GTM planning resources</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* AI Agent Layer */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">GenAI Agent Capabilities</h3>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h4 className="font-medium mb-3">Agent Functions:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>File Analysis:</strong> Process structured partner data</li>
                          <li>• <strong>Query Processing:</strong> Handle customer name lookups</li>
                          <li>• <strong>Priority Matching:</strong> Cross-reference Notion matrices</li>
                        </ul>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>Technographic Insights:</strong> Provide contextual data</li>
                          <li>• <strong>Partner Recommendations:</strong> Suggest optimal partners</li>
                          <li>• <strong>Deal Intelligence:</strong> Influence opportunity analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Outcome Comparison</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-red-200 dark:border-red-800">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-red-700 dark:text-red-300">Crossbeam</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-muted-foreground">• $14K annual licensing cost</p>
                          <p className="text-sm text-muted-foreground">• Low user adoption rates</p>
                          <p className="text-sm text-muted-foreground">• Over-engineered for use case</p>
                          <p className="text-sm text-muted-foreground">• Real-time features unused</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-200 dark:border-green-800">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-green-700 dark:text-green-300">AI Agent</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-muted-foreground">• Significant cost reduction</p>
                          <p className="text-sm text-muted-foreground">• Tailored to actual usage patterns</p>
                          <p className="text-sm text-muted-foreground">• Leverages existing structured data</p>
                          <p className="text-sm text-muted-foreground">• Similar intelligence outcomes</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Key Learnings & Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Strategic Insights:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Usage analytics revealed misalignment between tool capabilities and actual needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Existing structured data provided foundation for custom AI solution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>GenAI agents can replicate expensive SaaS functionality at lower cost</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Implementation Benefits:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Cost optimization without sacrificing partner intelligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Solution tailored to actual workflow patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Leveraged existing data infrastructure investments</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Bot className="h-6 w-6 text-blue-600" />
                      AI Agent Implementation Guide
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Agent Instructions</h4>
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
</Rules>
Example Output:
\`\`\`
Customer: Coca-Cola

Partner Overlaps:
1. Accenture (Score: 1) - Leading digital transformation, strong Salesforce
2. Deloitte (Score: 2) - Extensive beverage industry consulting experience  
3. IBM (Score: 3) - Long-standing technology partnership history
\`\`\``}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Example Usage</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Agent Query:</p>
                            <img 
                              src={agentQueryExample} 
                              alt="AI agent query example showing customer input"
                              className="w-full rounded-lg border border-muted shadow-sm"
                            />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Structured Output:</p>
                            <img 
                              src={agentOutputExample} 
                              alt="AI agent structured output showing partner overlaps with scores"
                              className="w-full rounded-lg border border-muted shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Web-enhanced partner intelligence</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Structured, consistent output format</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Multi-source data integration</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Intelligent scoring system (1-5)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Concise reasoning (5-7 words)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">No verbose explanations</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy2;