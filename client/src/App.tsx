import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { initGA, trackPageView, trackInitialPageView } from "./lib/analytics";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import CaseStudiesPage from "./pages/CaseStudies";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Component to handle route-based page view tracking
const RouteTracker = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);
  
  useEffect(() => {
    // Skip tracking on first load since trackInitialPageView handles it
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return null;
};

const App = () => {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
      // Track initial page view after GA is initialized
      trackInitialPageView();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
