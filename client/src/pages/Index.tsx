import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import ToolsSection from "@/components/sections/ToolsSection";
import CustomAIAgents from "@/components/sections/CustomAIAgents";
import ClayClassroom from "@/components/sections/ClayClassroom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap } from "lucide-react";

const Index = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Clay & GTM Engineering Services',
    description:
      'Clay automation, data enrichment, lead routing, and GTM tooling. High-impact workflows engineered for growth.',
    areaServed: 'Global',
    url: '/',
  };

  const features = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        {/* What You'll Discover Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Strategy Session</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                What You'll Discover in This Strategy Session:
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {features.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="text-center p-6 hover:shadow-lg transition-shadow">
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

        <ToolsSection />
        <Testimonials />
        <Services />
        <CustomAIAgents />
        <ClayClassroom />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;