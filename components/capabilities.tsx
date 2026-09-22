import {
  ChartLine,
  ShieldCheck,
  CreditCard,
  LayoutDashboard,
  Workflow,
  Sparkles,
  Globe,
  PieChart,
} from "lucide-react";
import { capabilities, type Capability } from "@/data/capabilities";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const iconMap: Record<Capability["icon"], React.ComponentType<{ className?: string }>> = {
  chart: ChartLine,
  shield: ShieldCheck,
  "credit-card": CreditCard,
  layout: LayoutDashboard,
  workflow: Workflow,
  sparkles: Sparkles,
  globe: Globe,
  pie: PieChart,
};

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="02"
      title="Core capabilities"
      description="What I can help with — from raw data to a working product."
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-card-line bg-line shadow-card sm:grid-cols-2">
        {capabilities.map((capability, i) => {
          const Icon = iconMap[capability.icon];
          return (
            <li key={capability.title} className="bg-surface">
              <Reveal delay={i * 60} className="h-full">
                <div className="flex h-full flex-col gap-2.5 p-6 transition-colors duration-200 hover:bg-surface-muted">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="size-[18px] text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-base font-semibold tracking-tight">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
