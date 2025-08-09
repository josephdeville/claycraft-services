import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover",
    text: "We map your GTM goals, data sources, and constraints to identify the fastest path to value.",
  },
  {
    icon: Wrench,
    title: "Design",
    text: "We architect resilient workflows with observability, guardrails, and clear ownership.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    text: "We implement, test, and handoff with docs so your team can operate and iterate with confidence.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Process</h2>
          <p className="mt-3 text-muted-foreground">A simple path from problem to production.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground ring-1 ring-border">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
