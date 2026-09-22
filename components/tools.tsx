import { toolCategories } from "@/data/skills";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Tools() {
  return (
    <Section
      id="skills"
      index="05"
      title="Tools & technologies"
      description="The everyday toolkit — grouped by what it is used for."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-card-line bg-line shadow-card sm:grid-cols-2 lg:grid-cols-3">
        {toolCategories.map((group, i) => (
          <div key={group.category} className="bg-surface">
            <Reveal delay={i * 60} className="h-full">
              <div className="h-full p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm font-medium text-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
