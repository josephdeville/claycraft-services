import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import CalendarBooking from "@/components/sections/CalendarBooking";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, HelpCircle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";

const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors" data-testid={`faq-trigger-${index}`}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
              <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <p className="text-muted-foreground" data-testid={`faq-answer-${index}`}>{faq.answer}</p>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const ContactPage = () => {
  // Set SEO meta tags
  useEffect(() => {
    // Set document title
    document.title = "Contact Clay Works of Art - Lead Generation Strategy Call | Clay Works of Art";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schedule a free strategy call to discover how Clay Works of Art can transform your sales pipeline with our GTM engineering solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Schedule a free strategy call to discover how Clay Works of Art can transform your sales pipeline with our GTM engineering solutions.';
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
    
    setOGTag('og:title', 'Contact Clay Works of Art - Lead Generation Strategy Call');
    setOGTag('og:description', 'Schedule a free strategy call to discover how Clay Works of Art can transform your sales pipeline with our GTM engineering solutions.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.origin + '/contact');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/contact');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.origin + '/contact');
      document.head.appendChild(canonical);
    }
    
    // Cleanup function
    return () => {
      document.title = 'Clay Works of Art';
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@clayworksofart.com",
      description: "We typically respond within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "(555) 123-4567",
      description: "Mon-Fri 9am-6pm PST"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we see results?",
      answer: "Most clients see increased lead flow within 2-3 weeks, with significant improvements by month 2."
    },
    {
      question: "Do you work with specific industries?",
      answer: "We specialize in B2B services, SaaS, and technology companies but have experience across various industries."
    },
    {
      question: "What's included in the free audit?",
      answer: "We'll analyze your current lead generation process, identify gaps, and provide a custom strategy recommendation."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Clay Works of Art',
    description: 'Get in touch with our Clay Works of Art experts for a free strategy session.',
    url: '/contact'
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's Engineer Your <span className="text-orange-500">Lead Generation Success</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Schedule a free strategy call to discover how we can transform your sales pipeline
                with our precision-crafted GTM engineering solutions.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-orange-200">
                  <CardContent className="space-y-4 p-0">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-orange-600 font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
        <div id="calendar">
          <CalendarBooking />
        </div>
        
        {/* FAQ Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our lead generation services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => {
                return (
                  <FAQItem key={index} faq={faq} index={index} />
                );
              })}
            </div>
          </div>
        </section>
        
        <NewsletterSignup />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;