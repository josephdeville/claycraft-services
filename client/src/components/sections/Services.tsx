import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, Send, BarChart3, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Prospect Research & Data Services",
      description: "Advanced AI-powered research to identify and enrich your ideal prospects",
      price: "Starting at $2,500/month",
      deliverables: [
        "Comprehensive prospect lists (500-1000 contacts)",
        "Multi-point data enrichment",
        "Intent signal identification",
        "Technographic and firmographic analysis",
        "Contact verification and scoring"
      ],
      popular: false
    },
    {
      icon: Send,
      title: "Automated Outreach Campaigns",
      description: "Personalized, multi-channel campaigns that drive consistent responses",
      price: "Starting at $3,500/month",
      deliverables: [
        "Custom email sequences (5-7 touch points)",
        "LinkedIn outreach automation",
        "Personalized messaging at scale",
        "A/B tested subject lines and content",
        "Response handling and scheduling"
      ],
      popular: true
    },
    {
      icon: BarChart3,
      title: "Lead Qualification & Management",
      description: "Intelligent systems to score, qualify, and manage your leads",
      price: "Starting at $2,000/month",
      deliverables: [
        "Predictive lead scoring models",
        "Automated qualification workflows",
        "CRM integration and management",
        "Lead routing and assignment",
        "Performance tracking and reporting"
      ],
      popular: false
    },
    {
      icon: Package,
      title: "Full-Service Lead Generation",
      description: "Complete end-to-end lead generation solution",
      price: "Starting at $7,500/month",
      deliverables: [
        "All services above combined",
        "Dedicated campaign manager",
        "Monthly strategy sessions",
        "Custom reporting dashboard",
        "Guaranteed lead volume*"
      ],
      popular: false
    }
  ];


  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">B2B Lead Generation Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive GTM engineering solutions that fill your pipeline with qualified prospects
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className={`relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white hover:bg-orange-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-orange-500 mt-4">{service.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white" 
                    data-testid={`button-contact-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Ready to Transform Your Sales Pipeline?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute strategy call to discover how Clay Works of Art can generate 30-50 qualified leads per month for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-schedule-audit">
              Schedule Your Free Audit
            </Button>
            <Button size="lg" variant="outline" data-testid="button-download-guide">
              Download Our Lead Gen Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
