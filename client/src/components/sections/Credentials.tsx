import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const Credentials = () => {
  const credentials = [
    {
      icon: Award,
      title: "Certified GTM Engineer",
      description: "Advanced certification in Go-To-Market automation and revenue operations",
      year: "2024"
    },
    {
      icon: BookOpen,
      title: "Clay Expert Certification",
      description: "Official Clay platform expert with advanced workflow automation credentials",
      year: "2024"
    },
    {
      icon: Users,
      title: "Revenue Operations Leader",
      description: "5+ years leading RevOps transformations for B2B SaaS companies",
      year: "2019-2024"
    },
    {
      icon: Target,
      title: "GTM Strategy Consultant",
      description: "Consulted for 50+ companies on GTM automation and lead generation",
      year: "2022-2024"
    }
  ];

  const achievements = [
    {
      metric: "$50M+",
      description: "Pipeline generated for clients through GTM automation"
    },
    {
      metric: "200%",
      description: "Average increase in qualified leads within 90 days"
    },
    {
      metric: "85%",
      description: "Time reduction in manual prospecting tasks"
    },
    {
      metric: "150+",
      description: "Successful GTM automation implementations"
    }
  ];

  const certifications = [
    "Clay Platform Expert Certification",
    "HubSpot Revenue Operations Certification",
    "Salesforce Administrator Certification",
    "Google Analytics 4 Certified",
    "Zapier Automation Expert",
    "Apollo.io Advanced User Certification"
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white">Expert Credentials</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Why Choose a <span className="text-orange-500">Certified GTM Engineer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials, proven results, and deep technical expertise in Go-To-Market automation
          </p>
        </div>

        {/* Professional Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <Card key={index} className="text-center p-6 hover:scale-105 transition-transform">
              <CardContent className="space-y-4 p-0">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                  <credential.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{credential.description}</p>
                  <Badge variant="outline" className="text-orange-500 border-orange-500">
                    {credential.year}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">{achievement.metric}</div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Statement */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4">Your Dedicated GTM Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                "As a certified GTM Engineer, I bring technical precision to revenue operations. 
                My approach combines deep platform expertise with strategic thinking to build 
                automation systems that scale with your business. Every implementation is backed 
                by proven methodologies and measurable outcomes."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                  CWA
                </div>
                <div className="text-left">
                  <div className="font-semibold">Joseph Deville</div>
                  <div className="text-sm text-muted-foreground">Certified GTM Engineer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Credentials;