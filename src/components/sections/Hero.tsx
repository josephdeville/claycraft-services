import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, CheckCircle } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, use mailto - can be replaced with Supabase later
    window.location.href = `mailto:hello@yourdomain.com?subject=GTM%20Automation%20Interest&body=Hi,%0D%0A%0D%0AFirst%20Name:%20${firstName}%0D%0AEmail:%20${email}%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20GTM%20automation%20and%20Clay%20workflows.`;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6 py-8">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-xs">Step 1 of 3</Badge>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Free Strategy Session</span>
          </div>
          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
            🔥 FREE STRATEGY SESSION 🔥
          </Badge>
        </nav>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Scale Your Business with{" "}
            <span className="text-orange-500">Clay Automation</span>{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">& Data Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your lead generation with AI-powered Clay workflows that deliver 500+ qualified prospects monthly on autopilot
          </p>

          {/* Video/Case Study Section */}
          <div className="bg-card border rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Badge variant="destructive" className="bg-red-500">
                🔴 LIVE CASE STUDY
              </Badge>
              
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Watch: The $2M GTM Transformation</h3>
                <p className="text-muted-foreground">15 minutes that could change your business forever</p>
              </div>
              
              <div className="text-right text-sm text-muted-foreground">15:42</div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">See The Exact System That Generated $500K+ in Year 1</h4>
                <p className="text-sm text-muted-foreground">
                  Including the 'automation-first' strategy that scaled our pipeline 10x and the Clay workflows that generated qualified leads on autopilot
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex justify-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-sm text-red-500">• 50K+ leads</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-red-500">• $2M ARR generated</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-red-500">• 90% time saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            
            <Button type="submit" variant="hero" className="w-full h-12 text-base font-semibold">
              Book Your Clay Automation Audit →
            </Button>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Free - No Credit Card Required</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant Access - Check Your Email</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Real Results - Not Theory</span>
              </div>
              <p className="text-xs">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </form>

          {/* Social Proof */}
          <div className="bg-card border rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <Badge variant="destructive">LIVE</Badge>
              <div className="text-right">
                <div className="text-lg font-bold">247+</div>
                <div className="text-xs text-muted-foreground">GTM leaders have booked this session in the last 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;