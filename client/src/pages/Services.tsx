import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import CustomAIAgents from "@/components/sections/CustomAIAgents";
import Process from "@/components/sections/Process";
import SocialProof from "@/components/sections/SocialProof";
import CaseStudyDownloads from "@/components/sections/CaseStudyDownloads";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Database, Target, TrendingUp, Users, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Clay Works of Art Services',
    description: 'Professional Clay Works of Art automation, data enrichment, and lead generation services for B2B companies.',
    provider: {
      '@type': 'Organization',
      name: 'Clay Works of Art Experts'
    },
    areaServed: 'Global',
    url: '/services',
  };

  const clayServices = [
    {
      title: "Lead Enrichment Workflows",
      description: "Automated data enrichment that turns basic contact info into comprehensive prospect profiles",
      features: ["50+ data sources integration", "Real-time enrichment", "Custom scoring models", "CRM synchronization"],
      price: "Starting at $2,000/month",
      icon: Database
    },
    {
      title: "Signal-Based Automation",
      description: "Trigger-based workflows that identify and act on buying signals automatically",
      features: ["Intent data monitoring", "Job change tracking", "Company growth signals", "Automated outreach"],
      price: "Starting at $3,000/month", 
      icon: Target
    },
    {
      title: "Scale & Optimization",
      description: "Continuous optimization and scaling of your Clay automation infrastructure",
      features: ["Performance monitoring", "A/B testing setup", "Cost optimization", "Advanced integrations"],
      price: "Starting at $5,000/month",
      icon: TrendingUp
    }
  ];

  const dataServices = [
    {
      title: "Custom Data Pipelines",
      description: "Build custom data collection and processing pipelines tailored to your business",
      features: ["API integrations", "Data cleaning & validation", "Real-time processing", "Custom schemas"],
      price: "Custom pricing",
      icon: Zap
    },
    {
      title: "Clay Infrastructure Setup",
      description: "Complete Clay workspace setup and configuration for maximum efficiency",
      features: ["Workspace architecture", "Team permissions", "Workflow templates", "Best practices training"],
      price: "Starting at $1,500 one-time",
      icon: Users
    }
  ];

  const consultingServices = [
    {
      title: "Clay Strategy Audit",
      description: "Comprehensive analysis of your current Clay setup with optimization recommendations",
      features: ["Current state analysis", "Optimization roadmap", "ROI projections", "Implementation plan"],
      price: "$500 one-time",
      icon: CheckCircle
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <service.icon className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <Badge variant="secondary">{service.price}</Badge>
          </div>
        </div>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
          <Link to="/contact">Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="mb-4">Professional Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Scale Your Business with <span className="text-orange-500">Clay Works of Art</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From manual prospecting to automated lead generation machines. We engineer custom Clay workflows 
              that generate qualified leads while you focus on closing deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/contact" data-testid="button-services-contact">
                  Get Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/#case-studies" data-testid="link-view-case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="automation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="automation">Clay Automation</TabsTrigger>
              <TabsTrigger value="data">Data & Infrastructure</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
            </TabsList>

            <TabsContent value="automation" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Clay Automation Services</h2>
                <p className="text-muted-foreground">End-to-end automation workflows that run your lead generation on autopilot</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {clayServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Data & Infrastructure</h2>
                <p className="text-muted-foreground">Custom data solutions and Clay infrastructure setup</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {dataServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Consulting Services</h2>
                <p className="text-muted-foreground">Expert guidance to optimize your Clay operations</p>
              </div>
              <div className="grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
                {consultingServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services Sections */}
      <Services />
      <CustomAIAgents />
      <Process />
      <SocialProof />
      <CaseStudyDownloads />

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Scale Your Clay Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free strategy call to discuss your Clay automation needs and get a custom implementation plan.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" data-testid="button-services-cta">
              Schedule Free Consultation
            </Link>
          </Button>
        </div>
      </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;