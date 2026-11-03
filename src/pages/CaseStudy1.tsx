import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, TrendingUp, Zap, Database, FileSpreadsheet, ArrowRight, CheckCircle, Cog, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import salesforceHierarchy from "@/assets/salesforce-hierarchy-new.png";
import zapierWorkflow from "@/assets/zapier-workflow.png";
import { useEffect } from "react";
const CaseStudy1 = () => {
  // Scroll to top when component mounts and update meta tags
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update meta tags for Partner Activation Automation case study
    document.title = "Partner Activation Automation - Case Study | Mucundh Ramesh";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How Mucundh Ramesh automated partner activation processes using Excel, Salesforce, SQL and Zapier to save 7-8 hours weekly and improve operational efficiency by 85%.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Partner Activation Automation - Case Study | Mucundh Ramesh');
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'How Mucundh Ramesh automated partner activation processes using Excel, Salesforce, SQL and Zapier to save 7-8 hours weekly and improve operational efficiency by 85%.');
    }
  }, []);
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
  return <div className="min-h-screen bg-background pt-16">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container py-section">
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
              
              <h1 className="text-3xl md:text-6xl break-words font-bold tracking-tight leading-tight">
                How a Simple Rule-Based Automation Saved 7-8 Hours Weekly in Partner Activation
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Using Excel, Salesforce, SQL and Zapier to streamline partner onboarding operations and eliminate manual data processing bottlenecks.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Automation", "Zapier", "Salesforce", "SQL", "Excel", "ETL"].map(tag => <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>)}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">7-8 hrs</div>
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
                <p className="text-muted-foreground leading-relaxed">Partner activation relied on manual Excel updates, Salesforce data entry and tracking spreadsheets. I spent 7-8 hours each week on repetitive data processing that was prone to human error.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Pain Points:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Manual salesforce update process</li>
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
            <h2 className="text-3xl font-bold text-center mb-8">3-Step Process Optimization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                <CardContent className="pt-6">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">1. CRM Hygiene</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Establish parent account hierarchy structure to organize partner relationships and enable efficient data extraction through standardized nomenclature.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Cog className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">2. SOQL Logic</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Dynamic lookup sheets using SQL queries to pull real-time CRM data and partner activation status from hierarchical accounts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">3. Zapier Workflow</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Automated Excel to Salesforce integration eliminating manual data entry and ensuring consistent partner tracking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 1: CRM Hygiene */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Step 1: CRM Hygiene</h2>
            
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-4">Parent-Child Account Structure</h3>
                  <p className="text-muted-foreground text-justify">
                    The automation leverages Salesforce's hierarchical account structure using a specific naming convention: 
                    "{`{Consulting Partner}`}-Parent" for parent accounts with region-based child accounts. This approach ensures 
                    all contacts are saved under the parent account, avoiding duplicates in our system and preventing 
                    double counting in performance tracking for partner readiness and consultants onboarded/trained.
                  </p>
                  <p className="text-muted-foreground text-justify mt-4">
                    This structure enables us to pull account details and generate lookup sheets in Excel by using the 
                    "contains parent" keyword in our SQL statements, creating a seamless data extraction process for 
                    comprehensive partner activation tracking.
                  </p>
                </div>
                
                <div className="relative">
                  {/* Salesforce UI Screenshot */}
                  <div className="mb-8 flex justify-center">
                    <img src={salesforceHierarchy} alt="Salesforce Account Hierarchy showing parent account with regional subsidiaries including Asia, Europe, and US child accounts" className="max-w-2xl w-full rounded-lg shadow-lg border border-muted" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold mb-3">Hierarchy Benefits:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Standardized nomenclature across all partner accounts</li>
                        <li>• Clear parent-child relationship mapping</li>
                        <li>• Prevents duplicates and double counting</li>
                        <li>• Simplified data extraction using "contains parent" logic</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Structure Components:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Parent Account:</strong> "{`{Consulting Partner}`}-Parent"</li>
                        <li>• <strong>Child Accounts:</strong> Regional subsidiaries</li>
                        <li>• <strong>Contact Management:</strong> Centralized under parent</li>
                        <li>• <strong>Performance Tracking:</strong> Unified reporting framework</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Implementation Foundation:</h4>
                    <p className="text-sm text-muted-foreground text-justify">
                      This structured CRM hygiene approach forms the foundation for the automated SQL extraction and 
                      Zapier integration processes. By maintaining consistent naming conventions and hierarchical 
                      relationships, we ensure reliable data extraction and seamless partner activation tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 2: SOQL Solution Logic */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Step 2: SOQL Solution Logic</h2>
            
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h4 className="font-semibold mb-4">SOQL Solution Logic</h4>
                  <div className="bg-background p-4 rounded-md border">
                    <pre className="text-sm font-mono text-foreground">
                      <code>{`SELECT Name, Id FROM Account WHERE Name LIKE '%Parent'`}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    This SOQL command ensures we pull all accounts that contain the "Parent" keyword, 
                    enabling efficient data extraction for our lookup sheets and partner tracking reports.
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Zapier Integration */}
        <section className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Step 3: Zapier Workflow</h2>
            
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Automated Excel to Salesforce Integration
                </CardTitle>
                <p className="text-muted-foreground text-justify">
                  This two-step Zapier workflow automatically processes new Excel data and creates corresponding 
                  Salesforce records, eliminating manual data entry and ensuring consistent partner activation tracking.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img src={zapierWorkflow} alt="Zapier workflow showing Excel trigger followed by Salesforce record creation" className="max-w-md w-full rounded-lg shadow-lg border border-muted" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Workflow Steps:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Microsoft Excel - New Row in Table</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Salesforce Essentials - Create Record</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time data synchronization</li>
                      <li>• Eliminates manual data entry</li>
                      <li>• Reduces human error by 95%</li>
                      <li>• Instant Salesforce record creation</li>
                      <li>• Maintains data consistency</li>
                      <li>• Scales with business growth</li>
                    </ul>
                  </div>
                </div>
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
                        <span className="font-bold text-lg">7-8 hours</span>
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
                        <strong>Resource Optimization:</strong> Freed up 7-8 hours per week for the partner enablement manager, allowing focus on strategic training tasks and partner relationship building rather than administrative data processing.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <RelatedCaseStudies currentPath="/case-studies/partner-activation-automation" />

      <Footer />
    </div>;
};
export default CaseStudy1;