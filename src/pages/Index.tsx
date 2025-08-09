import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";

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

  return (
    <main>
      <Hero />
      <Services />
      <Process />

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Let’s build your GTM engine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Tell us about your goals and stack. We’ll propose a pragmatic path to value in under 48 hours.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-8 text-base font-medium bg-gradient-brand text-brand-foreground shadow-glow hover:shadow-glow-strong transition"
              href="mailto:hello@yourdomain.com?subject=Project%20Inquiry%20-%20Clay%20%26%20GTM"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Index;
