import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ToolsSection from "@/components/sections/ToolsSection";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Zap, Rocket, BarChart3, Users } from "lucide-react";

const Index = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Clay & GTM Engineering Services',
    description:
      'Clay automation, data enrichment, lead routing, and GTM tooling. High-impact workflows engineered for growth.',
    areaServed: 'Global',
    url: '/',
  };

  const features = [
    {
      icon: TrendingUp,
      title: "90-Day GTM Framework",
      description: "Step-by-step system to go from manual processes to automated growth engine in 90 days",
      gradient: "from-[var(--coalfire-cyan)] to-[var(--coalfire-light-green)]"
    },
    {
      icon: Target,
      title: "Lead Generation Method",
      description: "Our personal method for generating 500+ qualified leads per month on autopilot",
      gradient: "from-[var(--coalfire-orange)] to-orange-400"
    },
    {
      icon: Zap,
      title: "Clay Signal Stacking",
      description: "How to build scalable data enrichment workflows that turn prospects into customers",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Automation Blueprints",
      description: "Pre-built templates and workflows you can deploy immediately to save 40+ hours/week",
      gradient: "from-blue-500 to-cyan-400"
    }
  ];

  const stats = [
    { icon: BarChart3, value: "500+", label: "Leads Generated Monthly", suffix: "" },
    { icon: Users, value: "247", label: "Happy Clients", suffix: "+" },
    { icon: TrendingUp, value: "90", label: "Time Saved", suffix: "%" },
    { icon: Target, value: "10", label: "Pipeline Growth", suffix: "x" },
  ];

  return (
    <main className="relative">
      <Hero />

      {/* What You'll Discover Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--coalfire-cyan)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--coalfire-orange)]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--coalfire-cyan)]/30 text-sm font-mono mb-4">
              <Zap className="w-4 h-4 text-[var(--coalfire-cyan)]" />
              EXCLUSIVE INSIGHTS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              What You'll{" "}
              <span className="gradient-text">Discover</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In this strategy session, you'll unlock the exact systems that generated $2M+ in pipeline
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {features.map(({ icon: Icon, title, description, gradient }, index) => (
              <div key={title} className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                <Card className="relative h-full glass-card-strong border-white/10 hover:border-white/20 transition-all duration-500 card-lift overflow-hidden">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <CardContent className="p-8 space-y-6">
                    {/* Icon with glow */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                      <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${gradient} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-xl text-white group-hover:gradient-text transition-all duration-300">
                        {title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {description}
                      </p>
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="font-display font-bold text-6xl text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--coalfire-cyan)]/5 via-transparent to-[var(--coalfire-orange)]/5" />
        <div className="absolute inset-0 hex-pattern opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map(({ icon: Icon, value, label, suffix }, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-[var(--coalfire-cyan)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                  <Icon className="relative h-8 w-8 text-[var(--coalfire-cyan)] group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {value}{suffix}
                </div>
                <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolsSection />
      <Testimonials />
      <Services />
      <Process />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Index;
