import { Github, Linkedin, Send, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <p className="font-display text-base font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {site.role} · {site.tagline}
            </p>
          </div>
          <ul className="flex items-center gap-1" aria-label="Social links">
            {[
              { href: site.github, label: "GitHub", Icon: Github },
              { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: site.telegram, label: "Telegram", Icon: Send },
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-line pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with curiosity and data.</p>
        </div>
      </div>
    </footer>
  );
}
