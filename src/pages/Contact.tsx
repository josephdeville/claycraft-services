import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show success message - can be enhanced with Supabase later
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact - Clay Automation Services',
    description: 'Get in touch for Clay automation consulting and book your free strategy session.',
    url: '/contact',
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge>Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to <span className="text-orange-500">Transform</span> Your Lead Generation?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free strategy session to discover how Clay automation can 10x your lead generation and save you 20+ hours per week.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Calendar Booking */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-orange-500" />
                  <div>
                    <CardTitle>Book Your Free Strategy Session</CardTitle>
                    <CardDescription>30-minute call to discuss your Clay automation needs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">Duration: 30 minutes</div>
                      <div className="text-sm text-muted-foreground">Free consultation call</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20">
                    <h4 className="font-semibold mb-2">What We'll Cover:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Current lead generation challenges</li>
                      <li>• Clay automation opportunities</li>
                      <li>• Custom implementation roadmap</li>
                      <li>• ROI projections and timeline</li>
                    </ul>
                  </div>
                  
                  {/* Calendar Integration Placeholder */}
                  <div className="p-8 text-center border-2 border-dashed border-muted rounded-lg">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Calendar Integration</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calendar booking widget will be integrated here (Calendly, Cal.com, etc.)
                    </p>
                    <Button variant="hero">
                      Book Now - It's Free
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-orange-500" />
                  <div>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>Prefer to write? Send us your questions directly</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your Clay automation needs..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" variant="hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="space-y-3 p-0">
                <Mail className="h-8 w-8 text-orange-500 mx-auto" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@clayautomation.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="space-y-3 p-0">
                <Phone className="h-8 w-8 text-orange-500 mx-auto" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">Available during strategy calls</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="space-y-3 p-0">
                <MapPin className="h-8 w-8 text-orange-500 mx-auto" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">Global - Remote Services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Contact;