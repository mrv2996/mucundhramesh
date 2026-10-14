import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import NotFound from "./pages/NotFound";
import MarketCompass from "./pages/MarketCompass";
import SecFilingsCaseStudy from "./pages/SecFilingsCaseStudy";
import { RouteScroll } from "./components/RouteScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <RouteScroll />
        <Routes>
          <Route path="/projects/market-compass" element={<MarketCompass />} />
          <Route path="/case-studies/sec-filings-onboarding" element={<SecFilingsCaseStudy />} />
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/partner-activation-automation" element={<CaseStudy1 />} />
          <Route path="/case-studies/crossbeam-ai-agent" element={<CaseStudy2 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
