import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, CheckCircle } from "lucide-react";
import { useState } from "react";
import CounterAnimation from "@/components/interactive/CounterAnimation";
import FloatingElements from "@/components/interactive/FloatingElements";
const Hero = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, use mailto - can be replaced with API later
    const subject = encodeURIComponent('Free Lead Audit Request');
    const body = encodeURIComponent(`Hi,\n\nFirst Name: ${firstName}\nEmail: ${email}\n\nI'm interested in booking a free lead audit to discover how Clay Works of Art can generate qualified leads for my business.`);
    window.location.href = `mailto:hello@clayworksofart.com?subject=${subject}&body=${body}`;
  };
  return <section className="relative min-h-screen bg-black overflow-hidden">
    <FloatingElements />
      <div className="container mx-auto px-6 py-8">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-8">
          
          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
            🔥 FREE LEAD AUDIT 🔥
          </Badge>
        </nav>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-1000">
            <span className="text-orange-500 hover:text-orange-400 transition-colors cursor-pointer">Clay Works of Art</span>: Precision-Crafted{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">B2B Lead Generation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            We engineer data-driven campaigns that generate <CounterAnimation target={30} className="text-orange-500 font-semibold" />-<CounterAnimation target={50} className="text-orange-500 font-semibold" /> qualified leads per month for B2B companies
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            Through advanced GTM engineering and AI-powered automation, we transform your sales pipeline with prospects who are ready to buy.
          </p>

          

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required className="bg-background" />
              <Input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required className="bg-background" />
            </div>
            
            <Button type="submit" variant="hero" className="w-full h-12 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white border-orange-500" data-testid="button-book-audit">
              Book Your Free Lead Audit →
            </Button>
            
            <Button type="button" variant="outline" className="w-full h-12 text-base font-semibold border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" data-testid="button-see-case-studies">
              See Our Case Studies
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
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">150+</div>
                <div className="text-xs text-muted-foreground">B2B companies served with 85% average email open rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;