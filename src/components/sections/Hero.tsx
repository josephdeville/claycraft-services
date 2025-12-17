import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, CheckCircle, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@yourdomain.com?subject=GTM%20Automation%20Interest&body=Hi,%0D%0A%0D%0AFirst%20Name:%20${firstName}%0D%0AEmail:%20${email}%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20GTM%20automation%20and%20Clay%20workflows.`;
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        {/* Cyber grid */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Floating orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full morph-blob opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--coalfire-cyan) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full morph-blob opacity-15"
          style={{
            background: 'radial-gradient(circle, var(--coalfire-orange) 0%, transparent 70%)',
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: 'right 0.5s ease-out, bottom 0.5s ease-out',
            animationDelay: '-4s',
          }}
        />

        {/* Particle field */}
        <div className="absolute inset-0 particle-field" />

        {/* Hex pattern */}
        <div className="absolute inset-0 hex-pattern opacity-50" />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--coalfire-cyan)] to-[var(--coalfire-orange)] blur-lg opacity-50 animate-pulse-glow" />
              <Sparkles className="relative h-8 w-8 text-[var(--coalfire-cyan)]" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Clay<span className="gradient-text">Craft</span>
            </span>
          </div>

          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 border-0 px-4 py-2 text-sm font-semibold btn-shimmer animate-bounce-subtle">
            <Zap className="w-4 h-4 mr-2" />
            FREE STRATEGY SESSION
          </Badge>
        </nav>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto space-y-10">
          {/* Headline with stunning effects */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--coalfire-cyan)]/30 text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--coalfire-cyan)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--coalfire-cyan)]"></span>
              </span>
              NOW ACCEPTING NEW CLIENTS
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="block text-white">Scale Your Business</span>
              <span className="block mt-2">
                with <span className="gradient-text-orange">Clay Automation</span>
              </span>
              <span className="block mt-2 gradient-text">& Data Intelligence</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your lead generation with <span className="text-[var(--coalfire-cyan)] font-semibold">AI-powered workflows</span> that deliver
            <span className="text-white font-bold"> 500+ qualified prospects </span>
            monthly on autopilot
          </p>

          {/* Stunning Video Card */}
          <div className="relative max-w-2xl mx-auto group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--coalfire-cyan)] via-[var(--coalfire-orange)] to-[var(--coalfire-light-green)] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />

            <div className="relative glass-card-strong rounded-2xl p-8 tech-border">
              <div className="space-y-6">
                <Badge variant="destructive" className="bg-red-500/90 backdrop-blur border-0 animate-pulse">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  LIVE CASE STUDY
                </Badge>

                {/* Play button with glow */}
                <div className="relative group/play cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-2xl opacity-50 group-hover/play:opacity-80 transition-opacity scale-150" />
                  <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-28 h-28 mx-auto flex items-center justify-center transform group-hover/play:scale-110 transition-transform duration-300 pulse-ring">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Watch: The $2M GTM Transformation
                  </h3>
                  <p className="text-muted-foreground mt-2">15 minutes that could change your business forever</p>
                </div>

                <div className="h-1 bg-gradient-to-r from-[var(--coalfire-cyan)] via-[var(--coalfire-orange)] to-[var(--coalfire-light-green)] rounded-full" style={{ width: '65%' }} />

                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-lg text-white">
                    See The Exact System That Generated $500K+ in Year 1
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Including the 'automation-first' strategy that scaled our pipeline 10x and the Clay workflows that generated qualified leads on autopilot
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {[
                    { value: '50K+', label: 'leads generated' },
                    { value: '$2M', label: 'ARR generated' },
                    { value: '90%', label: 'time saved' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center group/stat">
                      <div className="text-2xl font-display font-bold gradient-text group-hover/stat:scale-110 transition-transform">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stunning Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--coalfire-cyan)] to-[var(--coalfire-light-green)] rounded-lg blur opacity-0 group-focus-within:opacity-50 transition-opacity" />
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                  className="relative bg-background/50 border-white/10 h-12 focus:border-[var(--coalfire-cyan)] transition-colors"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--coalfire-cyan)] to-[var(--coalfire-light-green)] rounded-lg blur opacity-0 group-focus-within:opacity-50 transition-opacity" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="relative bg-background/50 border-white/10 h-12 focus:border-[var(--coalfire-cyan)] transition-colors"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />
              <Button
                type="submit"
                className="relative w-full h-14 text-lg font-display font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-0 btn-shimmer"
              >
                Book Your Clay Automation Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                '100% Free - No Credit Card Required',
                'Instant Access - Check Your Email',
                'Real Results - Not Theory',
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-center gap-2 group">
                  <CheckCircle className="w-4 h-4 text-[var(--coalfire-cyan)] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
              <p className="text-xs opacity-60">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </form>

          {/* Social Proof with glow */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-lg" />
            <div className="relative glass-card rounded-xl p-5 border border-red-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-red-400 font-mono text-sm font-bold">LIVE</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-display font-bold text-white">247+</div>
                  <div className="text-xs text-muted-foreground">GTM leaders booked in the last 30 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
