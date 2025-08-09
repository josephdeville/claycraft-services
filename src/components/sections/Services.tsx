import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Database, PlugZap } from "lucide-react";

const Services = () => {
  const items = [
    {
      icon: Workflow,
      title: "Clay automation & workflows",
      desc: "Custom Clay canvases and sequences that scale reliably with monitoring, error handling, and performance tuning.",
    },
    {
      icon: Database,
      title: "Data enrichment & routing",
      desc: "Multi-source enrichment, deduplication, scoring, and lead routing across your CRM and GTM tools.",
    },
    {
      icon: PlugZap,
      title: "GTM tooling & integrations",
      desc: "Bi-directional integrations with HubSpot, Salesforce, Outreach, Apollo, webhooks, and custom APIs.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-muted-foreground">
            Practical, high‑impact engineering focused on revenue. We build the data pipes and automations your GTM team actually uses.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="group transition-transform duration-200 hover:-translate-y-0.5">
              <CardHeader>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground ring-1 ring-border">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  {title.includes("Clay") && (
                    <>
                      <li>Canvas design, scaling, and run‑time optimization</li>
                      <li>Quality checks, retries, and alerting</li>
                      <li>Cost controls and run visibility</li>
                    </>
                  )}
                  {title.includes("enrichment") && (
                    <>
                      <li>Identity resolution and deduplication</li>
                      <li>Lead scoring models and prioritization</li>
                      <li>HubSpot/Salesforce assignment logic</li>
                    </>
                  )}
                  {title.includes("integrations") && (
                    <>
                      <li>Secure webhooks and middleware</li>
                      <li>Robust syncs with idempotency</li>
                      <li>Custom API connectors</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
