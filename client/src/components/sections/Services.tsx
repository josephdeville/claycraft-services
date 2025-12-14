import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Rocket, RefreshCw } from "lucide-react";
import { Link } from "wouter";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "30-Day Experimentation Activation",
      description: "Diagnose your GTM blockers and launch your experimentation operating system",
      duration: "30 Days",
      outcomes: [
        "GTM stack audit and consolidation",
        "First 4 experiments designed and shipped",
        "Hypothesis testing framework installed",
        "Weekly experiment ritual established",
        "Methodology documentation for your team"
      ],
      popular: false
    },
    {
      icon: Rocket,
      title: "90-Day Velocity Lab",
      description: "Weekly experiments with compounding learnings—become dangerous on your own",
      duration: "90 Days",
      outcomes: [
        "12+ experiments shipped per month",
        "Signal-driven targeting system built",
        "Campaign velocity increased 10x",
        "Team trained on experimentation methodology",
        "Exit criteria: you're shipping weekly without us"
      ],
      popular: true
    },
    {
      icon: RefreshCw,
      title: "Experiment Ops Residency",
      description: "Rolling month-to-month support with experiment backlog governance",
      duration: "Monthly",
      outcomes: [
        "Ongoing experiment prioritization",
        "New hypothesis generation",
        "Performance analysis and optimization",
        "Tool stack evolution support",
        "Strategic GTM intelligence briefings"
      ],
      popular: false
    }
  ];


  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Experimentation Sprints</h2>
          <p className="text-lg text-muted-foreground">
            We don't sell leads or promises. We build your capacity to experiment rapidly and trust your own data.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className={`relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-0 left-0 right-0 mx-auto w-full rounded-none bg-orange-500 text-white hover:bg-orange-600 text-base md:text-sm py-2 md:py-1 font-semibold justify-center">
                    ⭐ Most Popular
                  </Badge>
                )}
                <CardHeader className={`pb-4 ${service.popular ? 'pt-12 md:pt-10' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-orange-500 mt-4">{service.duration}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white" 
                    data-testid={`button-contact-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Link href="/contact">Book Your Experiment Mapping Call</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Ready to Ship Campaigns Weekly?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Book an Experiment Mapping Call to discover which sprint is right for your team's velocity goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-schedule-audit">
              <Link href="/contact">Book Your Experiment Mapping Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
