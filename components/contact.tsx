"use client";

import * as React from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { submitContactForm } from "@/lib/contact";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    try {
      await submitContactForm(payload);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      index="07"
      title="Contact"
      description="Have a data problem, a product idea or an opportunity to collaborate? Let's talk."
    >
      <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am open to internships, junior roles, freelance projects and
              collaboration in data analytics, risk and fraud, and web
              development. The fastest way to reach me is email or Telegram.
            </p>
            <ul className="space-y-3" aria-label="Contact channels">
              {[
                { href: `mailto:${site.email}`, label: "Email", value: site.email, Icon: Mail },
                { href: site.linkedin, label: "LinkedIn", value: "LinkedIn profile", Icon: Linkedin },
                { href: site.github, label: "GitHub", value: "GitHub profile", Icon: Github },
                { href: site.telegram, label: "Telegram", value: "Telegram chat", Icon: Send },
              ].map(({ href, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-md p-2 -m-2 transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-card-line bg-surface p-6 shadow-card sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                placeholder="Tell me about your task or idea…"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  "Get in touch"
                )}
              </Button>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {status === "sent" ? (
                  <span className="inline-flex items-center gap-1.5 text-foreground">
                    <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                    Message sent — I will get back to you soon.
                  </span>
                ) : status === "error" ? (
                  <span>Something went wrong. Please try again.</span>
                ) : null}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
