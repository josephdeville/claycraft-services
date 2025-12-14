import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Rocket, Award, CheckCircle } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      number: "12+",
      label: "Experiments/Week",
      icon: Zap
    },
    {
      number: "50+",
      label: "Hypotheses Tested/Quarter",
      icon: Target
    },
    {
      number: "10x",
      label: "Campaign Velocity Increase",
      icon: Rocket
    },
    {
      number: "95%",
      label: "Client Independence Rate",
      icon: Award
    }
  ];

  const companies = [
    "Accuris", "RevCentric", "Orbit Media", "B2B SaaS Teams", 
    "Growth-Stage Startups", "Marketing Agencies", "Enterprise GTM", "Revenue Teams"
  ];

  const recentWins = [
    {
      company: "Enterprise SaaS",
      result: "Built GTM intelligence system monitoring 6,000+ accounts",
      metric: "Signal-driven targeting",
      timeAgo: "This month"
    },
    {
      company: "Outbound Agency", 
      result: "Connected fragmented stack into unified intelligence",
      metric: "Predictive prospecting",
      timeAgo: "Last month"
    },
    {
      company: "Digital Agency",
      result: "Replaced lead volume focus with buyer signal intelligence",
      metric: "Quality over quantity",
      timeAgo: "Last quarter"
    }
  ];

  const certifications = [
    "Clay Certified Expert",
    "GTM Engineering Specialist",
    "HubSpot Certified", 
    "Signal-Driven Methodology"
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-slate-50 section-padding">
      <div className="container mx-auto px-4 md:px-6 container-mobile">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Velocity Metrics</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Experimentation <span className="text-orange-500">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Teams using our methodology ship campaigns weekly and become self-sufficient in 90 days or less.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 grid-responsive">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-orange-500/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Client Wins */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto grid-responsive">
            {recentWins.map((win, index) => (
              <Card key={index} className="border-green-200 bg-green-50/50">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-xs text-muted-foreground">{win.timeAgo}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{win.company}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{win.result}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {win.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <h3 className="text-center text-muted-foreground mb-8">Trusted by companies worldwide</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white border">
                <div className="text-xs font-medium text-muted-foreground">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Certifications</h3>
              <p className="text-muted-foreground">
                Our team holds industry-leading certifications to ensure best practices
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-center p-2 border-orange-200">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialProof;