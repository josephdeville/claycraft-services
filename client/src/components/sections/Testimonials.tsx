import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Target, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CounterAnimation from "@/components/interactive/CounterAnimation";
import ProgressBar from "@/components/interactive/ProgressBar";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Clay automation increased our lead generation by 400% in just 60 days. The signal stacking approach is game-changing.",
      name: "Sarah Chen",
      title: "VP of Growth, TechFlow",
      result: "400% Lead Increase",
      logo: "TF",
      rating: 5
    },
    {
      quote: "From 50 to 500+ qualified leads per month. The ROI on Clay automation was immediate and scalable.",
      name: "Marcus Johnson", 
      title: "Head of Sales, DataScale",
      result: "10x Lead Volume",
      logo: "DS",
      rating: 5
    },
    {
      quote: "Saved 30 hours per week on manual prospecting. Now our team focuses on closing, not searching.",
      name: "Lisa Park",
      title: "Sales Director, GrowthLab",
      result: "30 Hours Saved Weekly",
      logo: "GL",
      rating: 5
    }
  ];

  const stats = [
    { icon: TrendingUp, label: "Average Lead Increase", value: "300%", target: 300 },
    { icon: Target, label: "Time Saved Per Week", value: "25+ Hours", target: 25 },
    { icon: Users, label: "Happy Clients", value: "150+", target: 150 }
  ];

  const progressBars = [
    { label: "Lead Generation Improvement", percentage: 85 },
    { label: "Time Savings", percentage: 92 },
    { label: "Client Satisfaction", percentage: 98 },
    { label: "ROI Achievement", percentage: 89 }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        {/* Interactive Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map(({ icon: Icon, label, value, target }) => (
            <Card key={label} className="text-center p-6 hover:scale-105 transition-transform cursor-pointer group">
              <CardContent className="space-y-3 p-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-2xl font-bold text-orange-500">
                  <CounterAnimation target={target} className="text-orange-500" suffix={value.includes('%') ? '%' : value.includes('+') ? '+' : ''} />
                  {value.includes('Hours') && ' Hours'}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Bars Section */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Success Metrics</h3>
          <div className="space-y-6">
            {progressBars.map((bar, index) => (
              <ProgressBar 
                key={bar.label} 
                label={bar.label} 
                percentage={bar.percentage}
                duration={2000 + (index * 200)}
              />
            ))}
          </div>
        </div>

        {/* Interactive Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <Card className="p-8">
                    <CardContent className="space-y-6 p-0 text-center">
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                          {testimonial.logo}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                      
                      <Badge className="bg-orange-500 text-white">
                        {testimonial.result}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls - Improved Visibility */}
          <div className="flex items-center justify-between mt-6">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={prevTestimonial} 
              className="bg-orange-500 text-white hover:bg-orange-600 border-none w-12 h-12 md:w-14 md:h-14 rounded-full p-0 shadow-lg hover:scale-110 transition-transform"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-orange-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={nextTestimonial} 
              className="bg-orange-500 text-white hover:bg-orange-600 border-none w-12 h-12 md:w-14 md:h-14 rounded-full p-0 shadow-lg hover:scale-110 transition-transform"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid (for comparison) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto opacity-50">
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