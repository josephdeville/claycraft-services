import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  currentLeadVolume: z.string().min(1, "Please select your current monthly lead volume"),
  biggestChallenge: z.string().min(10, "Please describe your biggest lead generation challenge"),
  preferredContact: z.string().min(1, "Please select your preferred contact method"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      currentLeadVolume: "",
      biggestChallenge: "",
      preferredContact: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("/api/contact", "POST", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      trackEvent('form_submit', 'contact', 'contact_form');
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Thank you for reaching out!</h2>
              <p className="text-muted-foreground mb-6">
                We've received your information and will get back to you within 24 hours with next steps for your lead generation strategy.
              </p>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>What happens next:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• GTM experimentation audit and gap analysis</li>
                  <li>• Experiment Mapping Call scheduling</li>
                  <li>• Personalized velocity roadmap and next steps</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-black section-padding" id="contact">
      <div className="container mx-auto px-4 md:px-6 container-mobile">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Get Started</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to <span className="text-orange-500">Transform</span> Your Lead Generation?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your current challenges and we'll create a custom GTM engineering strategy for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto grid-responsive">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">joe.deville@clayworksofart.com</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span>Experiment Mapping Call</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Schedule a free 30-min experiment mapping session</p>
                <Button asChild variant="outline" className="mt-3 border-orange-500 text-orange-500 hover:bg-orange-50" data-testid="button-book-call">
                  <Link to="/contact#calendar">Schedule Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-orange-500" />
                  <span>LinkedIn</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect with us on LinkedIn</p>
                <Button asChild variant="outline" className="mt-3 border-orange-500 text-orange-500 hover:bg-orange-50" data-testid="link-linkedin">
                  <a href="https://linkedin.com/company/clayworksofart" target="_blank" rel="noopener noreferrer">Connect</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free Lead Generation Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} data-testid="input-name" className="form-mobile" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email and Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Current Monthly Lead Volume */}
                    <FormField
                      control={form.control}
                      name="currentLeadVolume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Monthly Lead Volume *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-lead-volume">
                                <SelectValue placeholder="Select your current monthly lead volume" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0-10">0-10 leads per month</SelectItem>
                              <SelectItem value="11-25">11-25 leads per month</SelectItem>
                              <SelectItem value="26-50">26-50 leads per month</SelectItem>
                              <SelectItem value="51-100">51-100 leads per month</SelectItem>
                              <SelectItem value="100-plus">100+ leads per month</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Biggest Lead Generation Challenge */}
                    <FormField
                      control={form.control}
                      name="biggestChallenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Biggest Lead Generation Challenge *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your biggest challenge with lead generation (e.g., low lead quality, manual processes, poor conversion rates, etc.)" 
                              className="min-h-[120px]" 
                              {...field}
                              data-testid="textarea-challenge"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Preferred Contact Method */}
                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-contact-method">
                                <SelectValue placeholder="How would you prefer we contact you?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="calendly">Schedule a Call</SelectItem>
                              <SelectItem value="linkedin">LinkedIn Message</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-mobile bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;