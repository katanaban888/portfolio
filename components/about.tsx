import { MapPin, Target, Hammer, Handshake } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const factIcons = [MapPin, Target, Hammer, Handshake];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      title={profile.aboutTitle}
      description={profile.aboutText[0]}
    >
      <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80}>
          <p className="text-base leading-relaxed text-muted-foreground">
            {profile.aboutText[1]}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <dl className="divide-y divide-line rounded-lg border border-card-line bg-surface px-5 shadow-card">
            {profile.facts.map((fact, i) => {
              const Icon = factIcons[i % factIcons.length];
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 py-4 first:pt-5 last:pb-5"
                >
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium leading-snug">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
