import { experience } from "@/data/experience";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      title="Experience & learning"
      description="A path from business processes to analytics and product development."
    >
      <ol className="relative space-y-0 border-l border-line pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <li key={item.title} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border-2 border-background bg-accent sm:-left-[39px]"
              aria-hidden="true"
            />
            <Reveal delay={i * 60}>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.period}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                {item.title}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  · {item.place}
                </span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
