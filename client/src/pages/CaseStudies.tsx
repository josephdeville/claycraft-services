import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Building2, Target, BarChart3, Clock, DollarSign, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CaseStudies = () => {
  // Set SEO meta tags
  useEffect(() => {
    // Set document title
    document.title = "Client Success Stories - B2B Lead Generation Case Studies | Clay Works of Art";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how we have transformed B2B sales pipelines across industries with our GTM engineering solutions. Real client results and success stories.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'See how we have transformed B2B sales pipelines across industries with our GTM engineering solutions. Real client results and success stories.';
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
    
    setOGTag('og:title', 'Client Success Stories - B2B Lead Generation Case Studies');
    setOGTag('og:description', 'See how we have transformed B2B sales pipelines across industries with our GTM engineering solutions. Real client results and success stories.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.origin + '/case-studies');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/case-studies');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.origin + '/case-studies');
      document.head.appendChild(canonical);
    }
    
    // Cleanup function
    return () => {
      document.title = 'Clay Works of Art';
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Client Success Stories',
    description: 'Case studies showcasing how Clay Works of Art transforms B2B sales pipelines across industries.',
    url: '/case-studies',
  };

  const caseStudies = [
    {
      industry: "SaaS",
      client: "TechFlow Solutions",
      clientType: "Series B SaaS",
      challenge: "Low lead quality and high customer acquisition costs",
      solution: [
        "Implemented AI-powered prospect research",
        "Created industry-specific messaging sequences", 
        "Set up predictive lead scoring system"
      ],
      results: [
        { metric: "240%", label: "increase in qualified leads", icon: TrendingUp },
        { metric: "65%", label: "reduction in cost per acquisition", icon: DollarSign },
        { metric: "18%", label: "improvement in sales conversion rates", icon: Target }
      ],
      icon: Building2,
      color: "blue"
    },
    {
      industry: "Professional Services",
      client: "Growth Consulting Firm",
      clientType: "Consulting Firm",
      challenge: "Inconsistent lead flow and manual outreach processes",
      solution: [
        "Automated prospect identification and enrichment",
        "Multi-channel outreach campaigns",
        "CRM integration and lead management"
      ],
      results: [
        { metric: "5 to 45", label: "leads per month increase", icon: TrendingUp },
        { metric: "85%", label: "reduction in manual research time", icon: Clock },
        { metric: "3.2x", label: "improvement in campaign ROI", icon: BarChart3 }
      ],
      icon: Users,
      color: "green"
    },
    {
      industry: "Manufacturing",
      client: "Industrial Equipment Manufacturer",
      clientType: "Manufacturing Company",
      challenge: "Difficulty reaching decision-makers in target accounts",
      solution: [
        "Account-based research and mapping",
        "Executive-level personalized outreach",
        "Intent signal tracking and timing optimization"
      ],
      results: [
        { metric: "45%", label: "increase in C-level responses", icon: Users },
        { metric: "$2.3M", label: "in new pipeline generated", icon: DollarSign },
        { metric: "60%", label: "faster sales cycle", icon: Clock }
      ],
      icon: Building2,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        border: "border-blue-500/20"
      },
      green: {
        bg: "bg-green-500/10", 
        text: "text-green-500",
        border: "border-green-500/20"
      },
      orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-500", 
        border: "border-orange-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <Badge className="mb-4">Success Stories</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Client <span className="text-orange-500">Success Stories</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how we have transformed B2B sales pipelines across industries with our precision-crafted 
                GTM engineering solutions and data-driven automation.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-8 md:py-16 lg:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                const colors = getColorClasses(study.color);
                
                return (
                  <Card key={study.client} className={`max-w-6xl mx-auto hover:shadow-lg transition-all duration-300 ${colors.border} border`} data-testid={`case-study-${index}`}>
                    <CardHeader className="pb-6">
                      <div className="flex items-start gap-6">
                        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} ${colors.text} flex-shrink-0`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className={colors.text}>{study.industry}</Badge>
                          </div>
                          <CardTitle className="text-2xl md:text-3xl mb-2">{study.client}</CardTitle>
                          <p className="text-muted-foreground text-lg">{study.clientType}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-red-400">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      {/* Solution */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-orange-400">Solution</h3>
                        <ul className="space-y-2">
                          {study.solution.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-400">Results</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          {study.results.map((result, i) => {
                            const ResultIcon = result.icon;
                            return (
                              <div key={i} className="text-center p-4 rounded-lg bg-card/50" data-testid={`result-${index}-${i}`}>
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} ${colors.text} mx-auto mb-3`}>
                                  <ResultIcon className="h-6 w-6" />
                                </div>
                                <div className="text-2xl font-bold mb-1">{result.metric}</div>
                                <div className="text-sm text-muted-foreground">{result.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free strategy call to discover how we can generate 30-50 qualified leads per month 
              for your business with our proven GTM engineering approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/contact" data-testid="button-case-studies-contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Book Your Free Strategy Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                <Link to="/services" data-testid="button-case-studies-services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default CaseStudies;