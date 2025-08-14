import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Database, Target, TrendingUp, Users } from "lucide-react";

const Services = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Clay Automation Services',
    description: 'Professional Clay automation, data enrichment, and lead generation services for B2B companies.',
    provider: {
      '@type': 'Organization',
      name: 'Clay Automation Experts'
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
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge>Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Clay Automation <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple lead enrichment to complex multi-stage automation workflows, we build Clay systems that scale your business.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Scale Your Clay Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free strategy call to discuss your Clay automation needs and get a custom implementation plan.
          </p>
          <Button variant="hero" size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Services;