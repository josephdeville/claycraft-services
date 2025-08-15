import { lazy, Suspense, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Target, Zap } from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Lazy load sections for better performance
const Hero = lazy(() => import("@/components/sections/Hero"));
const Services = lazy(() => import("@/components/sections/Services"));
const Process = lazy(() => import("@/components/sections/Process"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const ToolsSection = lazy(() => import("@/components/sections/ToolsSection"));

const Index = () => {
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Clay & GTM Engineering Services',
    description:
      'Clay automation, data enrichment, lead routing, and GTM tooling. High-impact workflows engineered for growth.',
    areaServed: 'Global',
    url: '/',
  }), []);

  const features = useMemo(() => [
    {
      icon: TrendingUp,
      title: "90-Day GTM Framework", 
      description: "Step-by-step system to go from manual processes to automated growth engine in 90 days"
    },
    {
      icon: Target,
      title: "Lead Generation Method",
      description: "Our personal method for generating 500+ qualified leads per month on autopilot"
    },
    {
      icon: Zap,
      title: "Clay Signal Stacking and Insights",
      description: "How to build scalable data enrichment workflows that turn prospects into customers"
    }
  ], []);

  return (
    <main>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      {/* What You'll Discover Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              What You'll Discover in This Strategy Session:
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4 p-0">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingSpinner />}>
        <ToolsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Process />
      </Suspense>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Index;