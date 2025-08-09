import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gtm.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-brand" aria-hidden="true" />

      <div className="container mx-auto px-6 py-20 md:py-28">
        <header className="mb-10">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="text-lg">GTM Clay Studio</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button asChild variant="brand" size="sm">
                <a href="mailto:hello@yourdomain.com?subject=Discovery%20Call%20-%20Clay%20%26%20GTM">Get in touch</a>
              </Button>
            </div>
          </nav>
        </header>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Clay & GTM engineering services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Automate prospecting, enrichment, lead routing, and outreach with reliable, production‑grade workflows powered by Clay and a modern GTM stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="mailto:hello@yourdomain.com?subject=Discovery%20Call%20-%20Clay%20%26%20GTM">Book a discovery call</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#services">See services</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Abstract neon network representing Clay automations and GTM data flows"
              className="w-full rounded-xl border border-border shadow-elevated"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
