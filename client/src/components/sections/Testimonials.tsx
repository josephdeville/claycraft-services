import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Target, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Clay automation increased our lead generation by 400% in just 60 days. The signal stacking approach is game-changing.",
      name: "Sarah Chen",
      title: "VP of Growth, TechFlow",
      result: "400% Lead Increase",
      logo: "TF"
    },
    {
      quote: "From 50 to 500+ qualified leads per month. The ROI on Clay automation was immediate and scalable.",
      name: "Marcus Johnson", 
      title: "Head of Sales, DataScale",
      result: "10x Lead Volume",
      logo: "DS"
    },
    {
      quote: "Saved 30 hours per week on manual prospecting. Now our team focuses on closing, not searching.",
      name: "Lisa Park",
      title: "Sales Director, GrowthLab",
      result: "30 Hours Saved Weekly",
      logo: "GL"
    }
  ];

  const stats = [
    { icon: TrendingUp, label: "Average Lead Increase", value: "300%" },
    { icon: Target, label: "Time Saved Per Week", value: "25+ Hours" },
    { icon: Users, label: "Happy Clients", value: "150+" }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">Client Results</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Real Results from Clay Automation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our clients transformed their lead generation with data-driven Clay workflows
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="text-center p-6">
              <CardContent className="space-y-3 p-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-orange-500">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                
                <blockquote className="text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
                
                <Badge variant="secondary" className="text-xs">
                  {testimonial.result}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;