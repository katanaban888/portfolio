"use client";

import * as React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import {
  categories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-card-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-lg">
      {/* Visual header — replace with a real screenshot if you have one */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open details for ${project.title}`}
        className="relative block h-36 w-full overflow-hidden border-b border-card-line text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <span
          className="absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${project.accent}14 0%, transparent 55%), var(--surface-muted)`,
          }}
          aria-hidden="true"
        />
        <svg
          className="absolute inset-x-0 bottom-0 h-16 w-full"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,20 C15,16 25,10 40,12 C55,14 65,6 80,8 C90,9 95,6 100,4 L100,24 L0,24 Z"
            fill={project.accent}
            opacity="0.18"
          />
          <path
            d="M0,20 C15,16 25,10 40,12 C55,14 65,6 80,8 C90,9 95,6 100,4"
            fill="none"
            stroke={project.accent}
            strokeWidth="0.6"
          />
        </svg>
        <span
          className="absolute left-4 top-4 inline-block size-2 rounded-full"
          style={{ background: project.accent }}
          aria-hidden="true"
        />
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((category) => (
              <Badge key={category} variant="accent">
                {category}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{project.role}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
          <button
            type="button"
            onClick={onOpen}
            className="text-left transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {project.tech.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tech.slice(0, 4).map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
            {project.tech.length > 4 ? (
              <li>
                <Badge>+{project.tech.length - 4}</Badge>
              </li>
            ) : null}
          </ul>
        ) : null}

        <div className="mt-6 flex items-center gap-2">
          <Button size="sm" onClick={onOpen}>
            Case details
          </Button>
          {project.demoUrl ? (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — live demo`}
              >
                <ExternalLink aria-hidden="true" />
                Live demo
              </a>
            </Button>
          ) : null}
          <Button asChild size="sm" variant="ghost">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
            >
              <Github aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const isWorkInProgress = project !== null && project.process.length === 0;

  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent aria-describedby={undefined}>
        {project ? (
          <div>
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((category) => (
                  <Badge key={category} variant="accent">
                    {category}
                  </Badge>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {project.role}
              </span>
            </div>
            <DialogTitle className="mt-3">{project.title}</DialogTitle>
            <DialogDescription className="mt-2">
              {project.summary}
            </DialogDescription>

            {isWorkInProgress ? (
              <p className="mt-6 rounded-md border border-card-line bg-surface-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                Case study is being prepared — see the repository for the
                current code and development progress.
              </p>
            ) : (
              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Problem
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Approach
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Process
                  </h4>
                  <ol className="mt-1.5 space-y-1.5">
                    {project.process.map((step, i) => (
                      <li
                        key={step}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="font-display text-xs font-medium tabular-nums text-accent"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Result
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    {project.result}
                  </p>
                </div>
                {project.tech.length > 0 ? (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <Badge>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.demoUrl ? (
                <Button asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
              <Button asChild variant={project.demoUrl ? "outline" : "default"}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [selected, setSelected] = React.useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      index="03"
      title="Featured projects"
      description="Selected analytical and development work. Each project opens into a short case: problem, approach, process and result."
    >
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent",
              filter === category
                ? "border-accent bg-accent text-accent-foreground"
                : "border-line bg-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={i * 70} className="h-full">
            <ProjectCard
              project={project}
              onOpen={() => setSelected(project)}
            />
          </Reveal>
        ))}
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
