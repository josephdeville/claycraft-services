import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, TrendingUp, BarChart3, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  // Set SEO meta tags
  useEffect(() => {
    // Set document title
    document.title = "About Clay Works of Art - GTM Engineering Excellence | Clay Works of Art";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our GTM engineering approach that combines technical expertise with creative precision to deliver effective B2B lead generation solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about our GTM engineering approach that combines technical expertise with creative precision to deliver effective B2B lead generation solutions.';
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
    
    setOGTag('og:title', 'About Clay Works of Art - GTM Engineering Excellence');
    setOGTag('og:description', 'Learn about our GTM engineering approach that combines technical expertise with creative precision to deliver effective B2B lead generation solutions.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.origin + '/about');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/about');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.origin + '/about');
      document.head.appendChild(canonical);
    }
    
    // Cleanup function
    return () => {
      document.title = 'Clay Works of Art';
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Clay Works of Art',
    description: 'Learn about our GTM engineering approach that combines technical expertise with creative precision to deliver effective B2B lead generation.',
    url: '/about',
  };

  const specialties = [
    {
      icon: BarChart3,
      title: "Sales Automation & CRM Optimization",
      description: "Streamlining your sales processes with intelligent automation workflows"
    },
    {
      icon: Target,
      title: "AI-Powered Personalization",
      description: "Crafting hyper-personalized messaging that resonates with your prospects"
    },
    {
      icon: TrendingUp,
      title: "Data Enrichment & Analysis",
      description: "Transforming raw data into actionable insights for better targeting"
    },
    {
      icon: Users,
      title: "Campaign Performance Optimization",
      description: "Continuously refining campaigns for maximum ROI and lead quality"
    }
  ];

  const philosophyPoints = [
    {
      title: "Data-Driven",
      description: "Built on comprehensive market research and prospect analysis",
      icon: BarChart3
    },
    {
      title: "Highly Personalized", 
      description: "Crafted to speak directly to each prospect's specific needs",
      icon: Target
    },
    {
      title: "Continuously Optimized",
      description: "Refined based on real-time performance data",
      icon: TrendingUp
    },
    {
      title: "Scalable",
      description: "Designed to grow with your business needs",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <Badge className="mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                GTM Engineering Meets <span className="text-orange-500">Artistic Precision</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Clay Works of Art was founded on the principle that B2B lead generation should be both a science and an art. 
                Like master craftspeople who shape clay into beautiful, functional pieces, we engineer GTM strategies that are both elegant and effective.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team combines deep technical expertise in sales automation, data science, and AI with the creative precision needed to craft messages that truly resonate with your prospects.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Meet Your GTM Engineering Team
              </h2>
            </div>

            {/* Founder Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Founder & Lead GTM Engineer</CardTitle>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    With 8+ years in B2B sales and marketing automation, our founder has engineered lead generation systems 
                    for companies ranging from early-stage startups to Fortune 500 enterprises.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold mb-4">Specialties:</h3>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {specialties.map((specialty, index) => {
                      const Icon = specialty.icon;
                      return (
                        <div key={specialty.title} className="text-center" data-testid={`specialty-${index}`}>
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto mb-3">
                            <Icon className="h-8 w-8" />
                          </div>
                          <h4 className="font-semibold text-sm mb-2">{specialty.title}</h4>
                          <p className="text-xs text-muted-foreground">{specialty.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Philosophy</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                The Art and Science of B2B Lead Generation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that effective B2B lead generation requires both analytical rigor and creative insight. 
                Every campaign we create is:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {philosophyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={point.title} className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300" data-testid={`philosophy-${index}`}>
                    <CardContent className="space-y-4 p-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-lg text-orange-500">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Ready to Experience GTM Engineering Excellence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our unique blend of technical expertise and creative precision can transform your lead generation results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/contact" data-testid="button-about-contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Book Experiment Mapping Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                <Link to="/services" data-testid="button-about-services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default About;