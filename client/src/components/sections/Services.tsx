import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const core = [
    {
      title: "GTM Strategy Development",
      bullets: [
        "Market opportunity assessment",
        "Competitive landscape analysis",
        "Ideal Customer Profile (ICP) development",
        "Value proposition crafting",
        "Pricing strategy and model development",
      ],
    },
    {
      title: "Sales Enablement",
      bullets: [
        "Sales playbook creation",
        "Demo script development",
        "Objection handling frameworks",
        "Sales process optimization",
        "Technical sales training",
        "Solution architecture documentation",
      ],
    },
    {
      title: "Product Marketing",
      bullets: [
        "Messaging and positioning frameworks",
        "Feature-to-benefit mapping",
        "Product launch planning and execution",
        "Market requirement documentation",
        "Use case development",
        "Competitive battlecards",
      ],
    },
    {
      title: "Revenue Operations",
      bullets: [
        "Sales tech stack implementation",
        "Pipeline management systems",
        "CRM configuration and optimization",
        "Sales forecast modeling",
        "Performance metrics design",
        "Revenue attribution models",
      ],
    },
    {
      title: "Channel Strategy",
      bullets: [
        "Partner program design",
        "Channel enablement materials",
        "Partner onboarding processes",
        "Channel pricing and incentive structures",
        "Partner marketing initiatives",
      ],
    },
  ];

  const technical = [
    {
      title: "Technical Discovery Services",
      bullets: [
        "Needs assessment workshops",
        "Technical requirement mapping",
        "Solution fit analysis",
        "Proof of concept design",
        "Integration assessment",
      ],
    },
    {
      title: "Solution Engineering",
      bullets: [
        "Custom demo environment setup",
        "Technical proof of concept delivery",
        "Integration planning and roadmapping",
        "Implementation scoping",
        "Custom solution design",
      ],
    },
    {
      title: "Technical Content Creation",
      bullets: [
        "White papers and case studies",
        "Integration guides",
        "Technical blog posts",
        "Product documentation",
        "API implementation examples",
      ],
    },
    {
      title: "Customer Success Engineering",
      bullets: [
        "Implementation planning",
        "Customer onboarding frameworks",
        "Success metrics definition",
        "Technical adoption strategies",
        "Expansion opportunity mapping",
      ],
    },
  ];

  const advisory = [
    {
      title: "GTM Team Development",
      bullets: [
        "Team structure planning",
        "Hiring strategy and job descriptions",
        "Compensation model design",
        "Performance management frameworks",
        "Training and onboarding programs",
      ],
    },
    {
      title: "Startup GTM Acceleration",
      bullets: [
        "MVP positioning",
        "First customer acquisition strategy",
        "Early adopter programs",
        "Product-market fit validation",
        "Fundraising narrative support",
      ],
    },
    {
      title: "SaaS Growth Consulting",
      bullets: [
        "Growth bottleneck identification",
        "Conversion rate optimization",
        "Customer journey mapping",
        "Revenue expansion strategies",
        "Churn reduction frameworks",
      ],
    },
  ];

  const renderGroup = (id: string, heading: string, items: { title: string; bullets: string[] }[]) => (
    <section aria-labelledby={id} className="mt-10">
      <header className="mb-4">
        <h3 id={id} className="text-2xl md:text-3xl font-semibold tracking-tight">
          {heading}
        </h3>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <Card key={`${item.title}-${idx}`} className="overflow-hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${idx}`} className="border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left">
                  <span className="text-base font-medium">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-6">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-muted-foreground">
            Core GTM, technical, and advisory services engineered to drive pipeline and revenue with clarity and speed.
          </p>
        </header>

        {renderGroup("core-gtm-services", "Core GTM Services", core)}
        {renderGroup("technical-gtm-specialties", "Technical GTM Specialties", technical)}
        {renderGroup("advisory-services", "Advisory Services", advisory)}
      </div>
    </section>
  );
};

export default Services;
