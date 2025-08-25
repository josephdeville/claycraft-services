import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Search, Shield, CheckCircle } from "lucide-react";

const CustomAIAgents = () => {
  const agents = [
    {
      icon: Target,
      title: "Prospecting Intelligence Agent",
      description: "Monitors buying signals, researches prospects automatically, and generates pain-qualified insights for your sales team",
      features: ["Signal detection", "Pain point mapping", "Automated research", "Trigger alerts"],
      bestFor: "B2B companies with complex sales cycles"
    },
    {
      icon: TrendingUp,
      title: "Account Intelligence Agent", 
      description: "Tracks customer health, identifies expansion opportunities, and alerts on risks before they impact revenue",
      features: ["Customer health scoring", "Expansion signals", "Churn prediction", "Competitive monitoring"],
      bestFor: "SaaS and subscription businesses"
    },
    {
      icon: Search,
      title: "Market Research Agent",
      description: "Continuously monitors industry trends, competitor moves, and market opportunities to keep you ahead",
      features: ["Trend analysis", "Competitor tracking", "Market sizing", "Content research"],
      bestFor: "Marketing teams and executives"
    },
    {
      icon: Shield,
      title: "Compliance & Risk Agent",
      description: "Automates regulatory monitoring, vendor assessments, and audit preparation for enterprise security teams",
      features: ["Regulatory tracking", "Risk assessment", "Contract monitoring", "Audit automation"],
      bestFor: "Highly regulated industries"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4">Custom AI Agents</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Custom <span className="text-orange-500">AI Agents</span> for Enterprise GTM
          </h2>
          <p className="text-lg text-muted-foreground">
            Intelligent automation that transforms your sales, marketing, and compliance operations using Clay's enterprise data engine
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-orange-500/20 hover:border-orange-500/40">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 flex-shrink-0">
                    <agent.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl mb-2 leading-tight">
                      {agent.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {agent.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {agent.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Best For:</p>
                      <p className="text-sm font-semibold">{agent.bestFor}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 hover:bg-orange-500/10 hover:border-orange-500">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Build Your Custom AI Agent?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a strategy session to discuss your specific automation needs and get a custom AI agent roadmap.
            </p>
            <Button variant="hero" size="lg">
              Book Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAIAgents;