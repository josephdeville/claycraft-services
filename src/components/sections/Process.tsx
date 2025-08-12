import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock, Workflow, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "Step 1 of 3",
    icon: CalendarClock,
    title: "Discovery",
    desc:
      "Fast alignment on goals, stack, data sources, and constraints to define the shortest path to value.",
    bullets: [
      "Goals, stack, and data inputs",
      "ICP, segments, and key motions",
      "Success metrics and guardrails",
    ],
  },
  {
    step: "Step 2 of 3",
    icon: Workflow,
    title: "Design",
    desc:
      "We blueprint resilient workflows with observability, ownership, and clear SLAs across tools.",
    bullets: [
      "System architecture + tooling",
      "Routing, scoring, and data contracts",
      "QA plan and rollout milestones",
    ],
  },
  {
    step: "Step 3 of 3",
    icon: Rocket,
    title: "Build & Launch",
    desc:
      "We implement, test, and ship to production with docs and handoff so your team can operate confidently.",
    bullets: [
      "Implementation + instrumentation",
      "UAT, training, and playbooks",
      "Handoff, iterate, and scale",
    ],
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Process</h2>
          <p className="mt-3 text-muted-foreground">A proven three-step path from idea to production.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ step, icon: Icon, title, desc, bullets }) => (
            <Card key={title} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{step}</Badge>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground ring-1 ring-border">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{desc}</p>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
                      <span className="text-sm text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brand" size="lg">
            <a href="mailto:hello@yourdomain.com?subject=Discovery%20Call%20-%20Clay%20%26%20GTM">Book a discovery call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;

