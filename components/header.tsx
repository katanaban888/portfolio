"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-accent"
          aria-label={`${site.name} — home`}
        >
          {site.name}
          <span className="ml-2 hidden text-sm font-normal text-muted-foreground sm:inline">
            {site.role}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#projects">View projects</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-line bg-background md:hidden"
        >
          <ul className="mx-auto w-full max-w-5xl px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
