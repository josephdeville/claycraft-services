import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Boxes, Signal, Wrench } from "lucide-react";

const Services = () => {
  const items = [
    {
      icon: Bot,
      title: "AI Agent Creation",
      desc:
        "Design and build production‑ready AI agents for GTM—research, enrichment, outreach, and ops.",
      bullets: [
        "Agent architecture with guardrails, evals, and monitoring",
        "Tooling integrations (CRMs, SEPs, data providers, calendars)",
        "Human‑in‑the‑loop reviews and safety controls",
      ],
    },
    {
      icon: Boxes,
      title: "Tech Stack Implementation",
      desc:
        "Stand up the right stack and wire it together so data and workflows flow end‑to‑end.",
      bullets: [
        "Select and implement LLM, vector, and orchestration layers",
        "Secure infra, secrets, and environments with observability",
        "Event pipelines and webhooks with idempotency",
      ],
    },
    {
      icon: Signal,
      title: "Signal Stacking",
      desc:
        "Aggregate buying signals to prioritize and trigger outreach that converts.",
      bullets: [
        "Multi‑source intent, product usage, and firmographic signals",
        "Scoring models and routing to reps and sequences",
        "Real‑time alerts and dashboards",
      ],
    },
    {
      icon: Wrench,
      title: "CRM Optimization",
      desc:
        "Fix the data model, automation, and UX so reps get speed and accuracy.",
      bullets: [
        "Identity resolution, dedupe, and enrichment loops",
        "Assignment, SLAs, and lifecycle automation",
        "Reporting, hygiene checks, and governance",
      ],
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
          {items.map(({ icon: Icon, title, desc, bullets }) => (
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
                  {bullets?.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
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
