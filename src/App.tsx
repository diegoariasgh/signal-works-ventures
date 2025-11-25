import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudiesFunds from "./pages/CaseStudiesFunds";
import CaseStudiesInstitutions from "./pages/CaseStudiesInstitutions";
import CaseStudiesStartups from "./pages/CaseStudiesStartups";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/funds-and-investors" element={<CaseStudiesFunds />} />
          <Route path="/case-studies/institutions-and-accelerators" element={<CaseStudiesInstitutions />} />
          <Route path="/case-studies/startups-and-founders" element={<CaseStudiesStartups />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
