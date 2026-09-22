import { ArrowRight, Download, Github, Linkedin, Send, Mail } from "lucide-react";
import { site } from "@/data/site";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "@/components/dashboard-mock";

const socials = [
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.telegram, label: "Telegram", Icon: Send },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="animate-rise-in">
          <p className="font-display text-sm font-medium text-accent">
            {site.role} · {site.tagline}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
          >
            {profile.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.heroSubline}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View my work
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.cvUrl} target="_blank" rel="noopener noreferrer">
                <Download aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex items-center gap-1" aria-label="Social links">
            {socials.map(({ href, label, Icon }, i) => {
              const isMail = label === "Email";
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    aria-label={isMail ? "Email" : label}
                    className="inline-flex rounded-md p-2.5 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
            <li className="ml-2 hidden text-sm text-muted-foreground sm:block">
              or <a className="text-accent underline-offset-4 hover:underline" href={`mailto:${site.email}`}>write me directly</a>
            </li>
          </ul>
        </div>

        <div
          className="flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms]"
          aria-hidden="true"
        >
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
