import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Target, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CounterAnimation from "@/components/interactive/CounterAnimation";
import ProgressBar from "@/components/interactive/ProgressBar";
import michaelSeymourImg from "@assets/MichaelProfilepic_1765680153740.jpeg";
import hunterDeskinImg from "@assets/Hunterprofilepic_1765680153740.jpeg";
import andyCrestodinaImg from "@assets/AndyProfilePic_1765680153740.jpeg";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "ClayWorks of Art built us a GTM intelligence system that monitors engineering standards changes and component obsolescence patterns across our 6,000+ customers.",
      name: "Michael Seymour",
      title: "Demand Gen Manager, Accuris",
      company: "Enterprise, $500M ARR",
      result: "GTM Intelligence System",
      image: michaelSeymourImg,
      rating: 5
    },
    {
      quote: "We sell outbound prospecting services but our own pipeline generation was broken—classic cobbler's shoes situation. ClayWorks of Art connected our fragmented stack into an intelligence system that predicts which B2B SaaS companies are restructuring their go-to-market teams.",
      name: "Hunter Deskin", 
      title: "Founder, RevCentric",
      company: "Bootstrapped, $20M+ client pipeline",
      result: "Pipeline Intelligence",
      image: hunterDeskinImg,
      rating: 5
    },
    {
      quote: "We thought we needed more leads for our web design services. ClayWorks of Art showed us we needed better intelligence. Their system monitors hiring patterns, tech stack migrations, and website redesign signals across our target accounts.",
      name: "Andy Crestodina",
      title: "Co-Founder & CMO, Orbit Media",
      company: "B Corp, 50-person agency",
      result: "Signal-Based Targeting",
      image: andyCrestodinaImg,
      rating: 5
    }
  ];

  const stats = [
    { icon: Zap, label: "Experiments Shipped Weekly", value: "12+", target: 12 },
    { icon: Target, label: "Hypothesis Testing Speed", value: "50x", target: 50 },
    { icon: Rocket, label: "Campaign Velocity Increase", value: "10x", target: 10 }
  ];

  const progressBars = [
    { label: "Experimentation Velocity", percentage: 92 },
    { label: "Methodology Adoption", percentage: 88 },
    { label: "Client Independence", percentage: 95 },
    { label: "GTM Intelligence Coverage", percentage: 90 }
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
          <Badge className="mb-4">Client Transformations</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            GTM Intelligence in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our clients built experimentation systems that transformed their go-to-market velocity
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
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                        />
                        <div className="text-left">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                          <div className="text-xs text-orange-500">{testimonial.company}</div>
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
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                    />
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