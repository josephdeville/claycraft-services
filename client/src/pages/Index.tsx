import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import ToolsSection from "@/components/sections/ToolsSection";
import CustomAIAgents from "@/components/sections/CustomAIAgents";
import ClayClassroom from "@/components/sections/ClayClassroom";
import Credentials from "@/components/sections/Credentials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap, Search, Send, BarChart3, Users, Database, MessageSquare, CheckCircle, TrendingUp as TrendingUpIcon } from "lucide-react";

const Index = () => {
  // Set SEO meta tags
  useEffect(() => {
    // Set document title
    document.title = "Clay Works of Art - B2B Lead Generation & GTM Engineering Experts";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your B2B sales pipeline with precision-engineered lead generation solutions. Expert Clay automation, data enrichment, and GTM engineering services that deliver measurable results.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your B2B sales pipeline with precision-engineered lead generation solutions. Expert Clay automation, data enrichment, and GTM engineering services that deliver measurable results.';
      document.head.appendChild(meta);
    }
    
    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };
    
    setOGTag('og:title', 'Clay Works of Art - B2B Lead Generation & GTM Engineering Experts');
    setOGTag('og:description', 'Transform your B2B sales pipeline with precision-engineered lead generation solutions. Expert Clay automation, data enrichment, and GTM engineering services that deliver measurable results.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.origin + '/');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.origin + '/');
      document.head.appendChild(canonical);
    }
    
    // Cleanup function
    return () => {
      document.title = 'Clay Works of Art';
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Clay Works of Art & GTM Engineering Services',
    description:
      'Clay Works of Art automation, data enrichment, lead routing, and GTM tooling. High-impact workflows engineered for growth.',
    areaServed: 'Global',
    url: '/',
  };

  const valueProps = [
    {
      icon: Search,
      title: "Precision Prospect Research",
      features: [
        "AI-powered prospect identification",
        "Advanced data enrichment",
        "Intent signal analysis",
        "Technographic profiling"
      ]
    },
    {
      icon: Send,
      title: "Automated Outreach Campaigns",
      features: [
        "Hyper-personalized messaging at scale",
        "Multi-channel sequences (email + LinkedIn)",
        "A/B tested subject lines and content",
        "Intelligent follow-up automation"
      ]
    },
    {
      icon: BarChart3,
      title: "Lead Qualification & Analytics",
      features: [
        "Predictive lead scoring",
        "Real-time campaign optimization",
        "Detailed ROI reporting",
        "CRM integration and management"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      icon: Users,
      title: "Discovery & Strategy",
      features: [
        "Ideal Customer Profile (ICP) refinement",
        "Market analysis and competitor research",
        "Campaign strategy development",
        "Success metrics definition"
      ]
    },
    {
      step: "2",
      icon: Database,
      title: "Data & Research",
      features: [
        "AI-powered prospect identification",
        "Multi-source data enrichment",
        "Intent signal tracking",
        "Contact verification and scoring"
      ]
    },
    {
      step: "3",
      icon: MessageSquare,
      title: "Campaign Engineering",
      features: [
        "Personalized message creation",
        "Multi-channel sequence design",
        "Automation workflow setup",
        "A/B test framework implementation"
      ]
    },
    {
      step: "4",
      icon: TrendingUpIcon,
      title: "Optimization & Scaling",
      features: [
        "Real-time performance monitoring",
        "Continuous campaign optimization",
        "Detailed reporting and insights",
        "Scale successful campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        {/* Value Propositions Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Core Services</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Why B2B Companies Choose Clay Works of Art
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {valueProps.map(({ icon: Icon, title, features }, index) => (
                <Card key={title} className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animate-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="space-y-4 p-0">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors mb-3">{title}</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Our 4-Step GTM Engineering Process
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {processSteps.map(({ step, icon: Icon, title, features }, index) => (
                <Card key={title} className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animate-in slide-in-from-bottom-8 relative" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="space-y-4 p-0">
                    <div className="absolute -top-3 -left-3 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step}
                    </div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors mb-3">{title}</h3>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ToolsSection />
        <Credentials />
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