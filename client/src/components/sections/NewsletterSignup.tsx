import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Mail, CheckCircle, TrendingUp, Users, BookOpen } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name is required"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const NewsletterSignup = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return apiRequest("/api/newsletter", "POST", data);
    },
    onSuccess: () => {
      setIsSubscribed(true);
      trackEvent('newsletter_signup', 'engagement', 'newsletter_form');
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our next Clay automation newsletter.",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    newsletterMutation.mutate(data);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Weekly Clay Tips",
      description: "Advanced automation strategies and workflow optimizations"
    },
    {
      icon: BookOpen,
      title: "Case Studies",
      description: "Real client results and implementation breakdowns"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Exclusive access to our Clay practitioners community"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center bg-green-50 border-green-200">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Welcome to Clay Mastery!</h2>
              <p className="text-muted-foreground mb-6">
                You're now subscribed to our weekly newsletter. Check your inbox for a welcome email with exclusive Clay templates.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium mb-2">What to expect:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Weekly automation case studies</li>
                  <li>• Clay workflow templates and blueprints</li>
                  <li>• Early access to new training content</li>
                  <li>• Community tips from other practitioners</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50 section-padding">
      <div className="container mx-auto px-4 md:px-6 container-mobile">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-200">Newsletter</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Master <span className="text-orange-500">Clay Works of Art</span> Weekly
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 2,500+ growth professionals getting actionable Clay strategies, case studies, and templates delivered every Tuesday.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center grid-responsive">
            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-orange-500/10">
                    <benefit.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-orange-200">
                <p className="text-sm font-medium text-orange-600 mb-2">Free Welcome Bonus:</p>
                <p className="text-sm text-muted-foreground">
                  Get our "10 High-Converting Clay Templates" guide immediately after subscribing.
                </p>
              </div>
            </div>

            {/* Signup Form */}
            <Card className="border-orange-200 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Start Learning Today</h3>
                  <p className="text-sm text-muted-foreground">
                    No spam, unsubscribe anytime. Trusted by growth teams at 500+ companies.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="First name" 
                              {...field} 
                              data-testid="input-newsletter-name"
                            />
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
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              {...field} 
                              data-testid="input-newsletter-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={newsletterMutation.isPending}
                      data-testid="button-subscribe-newsletter"
                    >
                      {newsletterMutation.isPending ? "Subscribing..." : "Get Free Clay Templates"}
                    </Button>
                  </form>
                </Form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By subscribing, you agree to receive weekly emails. You can unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;