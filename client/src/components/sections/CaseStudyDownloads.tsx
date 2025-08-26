import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Download, FileText, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const downloadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name is required"),
  company: z.string().min(2, "Company name is required"),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

const CaseStudyDownloads = () => {
  const [downloadedStudy, setDownloadedStudy] = useState<string | null>(null);
  const { toast } = useToast();
  
  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadSchema),
    defaultValues: {
      email: "",
      firstName: "",
      company: "",
    },
  });

  const downloadMutation = useMutation({
    mutationFn: async (data: DownloadFormData & { caseStudyId: string }) => {
      return apiRequest("/api/case-study-download", "POST", data);
    },
    onSuccess: (data, variables) => {
      setDownloadedStudy(variables.caseStudyId);
      trackEvent('case_study_download', 'content', variables.caseStudyId);
      toast({
        title: "Download started!",
        description: "Check your email for the case study PDF.",
      });
    },
    onError: (error) => {
      toast({
        title: "Download failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const caseStudies = [
    {
      id: "saas-leadgen",
      title: "SaaS Company Generates 1,200 Qualified Leads in 30 Days",
      description: "How a B2B SaaS startup automated their entire lead generation process using Clay workflows and generated $400K in pipeline.",
      industry: "SaaS",
      results: [
        "+340% increase in qualified leads",
        "20 hours saved per week",
        "$400K pipeline generated",
        "85% reduction in manual work"
      ],
      icon: TrendingUp,
      downloadCount: "2,100+ downloads"
    },
    {
      id: "agency-automation",
      title: "Marketing Agency Scales Client Acquisition 5x",
      description: "Complete breakdown of how a marketing agency used Clay AI agents to identify and qualify prospects for 15+ clients simultaneously.",
      industry: "Agency",
      results: [
        "5x increase in client acquisition",
        "90% automation of research tasks",
        "$2M+ revenue for clients",
        "3-month ROI payback"
      ],
      icon: Users,
      downloadCount: "1,800+ downloads"
    },
    {
      id: "ecommerce-personalization",
      title: "E-commerce Brand Achieves 65% Email Open Rates",
      description: "Step-by-step guide to building hyper-personalized email campaigns using Clay data enrichment and AI-powered messaging.",
      industry: "E-commerce",
      results: [
        "65% email open rates",
        "+180% click-through rates",
        "300% increase in conversions",
        "$1.2M additional revenue"
      ],
      icon: Target,
      downloadCount: "1,500+ downloads"
    }
  ];

  const onSubmit = (data: DownloadFormData, caseStudyId: string) => {
    downloadMutation.mutate({ ...data, caseStudyId });
  };

  if (downloadedStudy) {
    const study = caseStudies.find(s => s.id === downloadedStudy);
    return (
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto text-center bg-green-50 border-green-200">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Download Started!</h2>
              <p className="text-muted-foreground mb-6">
                The "{study?.title}" case study has been sent to your email. Check your inbox (and spam folder) for the download link.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium mb-2">What's included:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Complete workflow documentation</li>
                  <li>• Clay templates and configurations</li>
                  <li>• ROI calculations and metrics</li>
                  <li>• Implementation timeline</li>
                </ul>
              </div>
              <Button 
                onClick={() => setDownloadedStudy(null)} 
                variant="outline" 
                className="mt-6"
                data-testid="button-download-another"
              >
                Download Another Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100" id="case-studies">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Case Studies</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Real Results from <span className="text-orange-500">Clay Works of Art</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Download detailed case studies showing exactly how we've helped companies transform their lead generation with Clay.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="h-full hover:shadow-lg transition-shadow border-orange-500/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <study.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3">{study.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Results */}
                  <div>
                    <h4 className="font-medium mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Count */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{study.downloadCount}</span>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>PDF Guide</span>
                    </div>
                  </div>

                  {/* Download Form */}
                  <div className="pt-4 border-t">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit((data) => onSubmit(data, study.id))} className="space-y-3">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="First name" 
                                  {...field} 
                                  data-testid={`input-case-study-name-${study.id}`}
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
                                  placeholder="Work email" 
                                  {...field} 
                                  data-testid={`input-case-study-email-${study.id}`}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="Company name" 
                                  {...field} 
                                  data-testid={`input-case-study-company-${study.id}`}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          size="sm" 
                          className="w-full"
                          disabled={downloadMutation.isPending}
                          data-testid={`button-download-${study.id}`}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {downloadMutation.isPending ? "Sending..." : "Download Case Study"}
                        </Button>
                      </form>
                    </Form>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Free download. No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Value Props */}
        <Card className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <CardContent className="pt-6 pb-6 text-center">
            <h3 className="text-xl font-bold mb-4">Get All Case Studies + Bonus Materials</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and get instant access to all case studies plus exclusive Clay templates and workflows.
            </p>
            <Button size="lg" data-testid="button-get-all-case-studies">
              Get Complete Case Study Bundle
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudyDownloads;