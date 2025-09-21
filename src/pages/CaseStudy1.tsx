import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, TrendingUp, Zap, Database, FileSpreadsheet, ArrowRight, CheckCircle, Settings, Play } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import salesforceHierarchy from "@/assets/salesforce-hierarchy-blurred.png";

const CaseStudy1 = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleZapierTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          automation_type: "bi-weekly_partner_activation_cadence",
          case_study: "partner_activation_automation"
        }),
      });

      toast({
        title: "Automation Triggered",
        description: "Your bi-weekly partner activation cadence has been initiated. Check your Zap history to confirm execution.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the automation. Please check your webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sqlCode = `-- Partner Account Hierarchy Query
-- Extract parent-child relationships for partner activation tracking

SELECT 
    parent.Id AS ParentAccountId,
    parent.Name AS ParentAccountName,
    parent.Type AS ParentAccountType,
    child.Id AS ChildAccountId,
    child.Name AS ChildAccountName,
    child.Type AS ChildAccountType,
    child.Partner_Status__c AS PartnerStatus,
    child.Activation_Date__c AS ActivationDate,
    parent.Region__c AS ParentRegion
FROM Account parent
INNER JOIN Account child ON child.ParentId = parent.Id
WHERE 
    parent.Name CONTAINS 'parent'
    AND child.Type = 'Partner'
    AND child.Partner_Status__c IN ('Active', 'Pending', 'In_Progress')
ORDER BY 
    parent.Region__c,
    parent.Name,
    child.Activation_Date__c DESC;`;

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
                  8 min read
                </Badge>
                <Badge variant="secondary">
                  Case Study #1
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                How a Simple Automation Saved 15+ Hours Weekly in Partner Activation
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Using Excel, Salesforce, SQL and Zapier to streamline partner onboarding operations and eliminate manual data processing bottlenecks.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Automation", "Zapier", "Salesforce", "SQL", "Excel", "ETL"].map((tag) => (
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
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">15+ hrs</div>
                  <div className="text-sm text-muted-foreground">Saved per week</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Process efficiency gain</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">3</div>
                  <div className="text-sm text-muted-foreground">Departments impacted</div>
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
                  The Problem: Manual Partner Activation Chaos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-justify">
                <p className="text-muted-foreground leading-relaxed">
                  The partner activation process was a weekly nightmare of manual Excel file updates, 
                  Salesforce data entry, and tracking spreadsheets. Teams were spending 15+ hours 
                  weekly on repetitive data processing tasks that were prone to human error.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Pain Points:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Manual Excel file uploads to Outlook</li>
                      <li>• Disconnected partner tracking systems</li>
                      <li>• No automated ETL process for CRM data</li>
                      <li>• Delayed partner readiness reporting</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Business Impact:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Poor KPI tracking visibility</li>
                      <li>• Delayed deal leadership decisions</li>
                      <li>• Reduced partner satisfaction</li>
                      <li>• Resource allocation inefficiencies</li>
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
            <h2 className="text-3xl font-bold text-center mb-8">The Automated Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileSpreadsheet className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">1. Upload Automation</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Automated nomenclature uploads for partner and regional account tracking with bi-weekly deal controls.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">2. SQL Lookup</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Dynamic lookup sheets using SQL queries to pull real-time CRM data and parent-child account hierarchies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">3. Data Processing</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Automated formatting and detail extraction from local files into standardized partner tracking sheets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">4. Zapier Integration</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Bi-weekly Salesforce connector automation ensuring consistent partner activation cadence and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Salesforce Account Hierarchy Illustration */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Salesforce Account Hierarchy</h2>
            
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-4">Parent-Child Account Structure</h3>
                  <p className="text-muted-foreground text-justify">
                    The automation leverages Salesforce's hierarchical account structure to map parent organizations 
                    with their regional partner subsidiaries, enabling comprehensive partner activation tracking.
                  </p>
                </div>
                
                <div className="relative">
                  {/* Salesforce UI Screenshot */}
                  <div className="mb-8">
                    <img 
                      src={salesforceHierarchy} 
                      alt="Salesforce Account Hierarchy showing parent account with regional subsidiaries including Asia, Europe, and US child accounts"
                      className="w-full rounded-lg shadow-lg border border-muted"
                    />
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Automation Benefits:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <ul className="space-y-1">
                        <li>• Automatic parent-child relationship mapping</li>
                        <li>• Regional partner status tracking</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Bi-weekly activation cadence monitoring</li>
                        <li>• Centralized partner readiness reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SQL Code Implementation */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">SQL Implementation</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Partner Hierarchy Query
                </CardTitle>
                <p className="text-muted-foreground text-justify">
                  This SQL query extracts parent-child account relationships for automated partner activation tracking, 
                  focusing on accounts containing "parent" keywords and their associated regional partners.
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{sqlCode}</code>
                  </pre>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Query Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Parent account identification using CONTAINS</li>
                      <li>• Partner status filtering for active tracking</li>
                      <li>• Regional grouping for reporting</li>
                      <li>• Activation date sorting for prioritization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Automation Integration:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Feeds data into Zapier workflows</li>
                      <li>• Updates bi-weekly tracking sheets</li>
                      <li>• Triggers partner readiness alerts</li>
                      <li>• Generates KPI dashboard metrics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Zapier Integration */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Set Up Your Bi-Weekly Automation</h2>
            
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Zapier Bi-Weekly Cadence Setup
                </CardTitle>
                <p className="text-muted-foreground text-justify">
                  Implement the same automation used in this case study. Connect your Zapier webhook to trigger 
                  bi-weekly partner activation processes, ensuring consistent cadence and improved partner readiness tracking.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Setup Steps:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Create a new Zap in Zapier</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Add a Webhook trigger</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Connect to Salesforce actions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Set bi-weekly schedule trigger</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Copy your webhook URL below</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Automation Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automated partner status updates</li>
                      <li>• Consistent bi-weekly reporting cadence</li>
                      <li>• Real-time KPI tracking alerts</li>
                      <li>• Reduced manual intervention by 85%</li>
                      <li>• Improved partner satisfaction scores</li>
                      <li>• Enhanced deal leadership visibility</li>
                    </ul>
                  </div>
                </div>
                
                <Separator />
                
                <form onSubmit={handleZapierTrigger} className="space-y-4">
                  <div>
                    <label htmlFor="webhook" className="block text-sm font-medium mb-2">
                      Your Zapier Webhook URL
                    </label>
                    <input
                      id="webhook"
                      type="url"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Paste your Zapier webhook URL to test the bi-weekly automation trigger
                    </p>
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Settings className="mr-2 h-4 w-4 animate-spin" />
                        Triggering Automation...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Test Bi-Weekly Automation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results */}
        <section className="container pb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Measurable Results</h2>
            
            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                      Performance Improvements
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Weekly Time Savings:</span>
                        <span className="font-bold text-lg">15+ hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Process Efficiency:</span>
                        <span className="font-bold text-lg">85% faster</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Error Reduction:</span>
                        <span className="font-bold text-lg">95% fewer</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Bi-weekly Savings:</span>
                        <span className="font-bold text-lg">2 full days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                      Business Impact
                    </h3>
                    <div className="space-y-3 text-justify">
                      <p className="text-muted-foreground">
                        <strong>Better KPI Tracking:</strong> Real-time partner readiness monitoring and governance reporting improved decision-making across leadership teams.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Enhanced Efficiency:</strong> Eliminated manual delays in deal leadership processes, enabling faster partner activation and improved project delivery timelines.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Resource Optimization:</strong> Freed up 5-8 hours per week per team member, allowing focus on strategic partner relationship building rather than administrative tasks.
                      </p>
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

export default CaseStudy1;