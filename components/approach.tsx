import { approach } from "@/data/approach";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Approach() {
  return (
    <Section
      id="approach"
      index="06"
      title="How I work"
      description="Analysis is not just code — it is a way of understanding a problem before solving it."
    >
      <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {approach.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 60}>
              <div className="flex gap-4 border-t border-line pt-5">
                <span
                  className="font-display text-sm font-medium tabular-nums text-accent"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
