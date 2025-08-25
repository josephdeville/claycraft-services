import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award, Video, Download, MessageSquare, Zap } from "lucide-react";

const ClayClassroom = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Clay Fundamentals Bootcamp",
      description: "Master the basics of Clay automation in 5 days with hands-on projects and real workflows",
      duration: "5 days",
      level: "Beginner",
      format: "Live + Recorded",
      price: "$497",
      features: ["Live daily sessions", "Hands-on projects", "Template library access", "Community support"]
    },
    {
      icon: Zap,
      title: "Advanced Clay Workflows",
      description: "Build complex signal-based automations and multi-stage lead qualification systems", 
      duration: "3 weeks",
      level: "Advanced",
      format: "Self-paced",
      price: "$997",
      features: ["Advanced integrations", "Custom API setups", "A/B testing frameworks", "1-on-1 office hours"]
    },
    {
      icon: Users,
      title: "Team Clay Certification",
      description: "Get your entire team certified in Clay best practices with custom training modules",
      duration: "Custom",
      level: "All Levels", 
      format: "Custom",
      price: "Contact us",
      features: ["Custom curriculum", "Team workshops", "Implementation support", "Ongoing mentorship"]
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: "Live & Recorded Sessions",
      description: "Join live training sessions or learn at your own pace with recorded content"
    },
    {
      icon: Download,
      title: "Templates & Resources",
      description: "Get access to proven Clay templates and workflow blueprints"
    },
    {
      icon: MessageSquare,
      title: "Expert Community",
      description: "Connect with other Clay practitioners and get answers from experts"
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Earn official Clay certifications to showcase your expertise"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4">Clay Classroom</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Master <span className="text-orange-500">Clay Automation</span> with Expert Training
          </h2>
          <p className="text-lg text-muted-foreground">
            From beginner fundamentals to advanced enterprise workflows - learn from the experts who've built 500+ Clay automations
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-orange-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <course.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <Badge variant="outline">{course.format}</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Course Details */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="font-semibold text-orange-500 text-lg">
                    {course.price}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant={index === 1 ? "hero" : "outline"}>
                  {course.price === "Contact us" ? "Get Custom Quote" : "Enroll Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12">Why Choose Clay Classroom?</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-none bg-background">
                <CardContent className="space-y-4 p-0">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Team's Clay Skills?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 500+ professionals who've accelerated their careers with Clay expertise. Start with a free consultation to find the right training path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Course Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClayClassroom;