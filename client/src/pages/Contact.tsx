import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import CalendarBooking from "@/components/sections/CalendarBooking";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@clayautomation.com",
      description: "We typically respond within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-CLAY",
      description: "Mon-Fri 9am-6pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "San Francisco, CA",
      description: "Available for in-person meetings"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "< 2 Hours",
      description: "Average response time during business hours"
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Clay Automation',
    description: 'Get in touch with our Clay automation experts for a free strategy session.',
    url: '/contact'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Ready to Scale Your 
                <span className="text-orange-500"> Lead Generation?</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Book a free 30-minute strategy session where we'll analyze your current process 
                and show you exactly how Clay automation can 10x your qualified leads.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
        <CalendarBooking />
        <NewsletterSignup />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;