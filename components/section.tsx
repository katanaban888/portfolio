import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
  containerClassName,
}: {
  id: string;
  /** Editorial section number, e.g. "01". */
  index?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-5xl px-5 sm:px-8",
          containerClassName
        )}
      >
        <Reveal>
          <div className="flex items-baseline gap-4">
            {index ? (
              <span
                className="font-display text-sm font-medium tabular-nums text-accent"
                aria-hidden="true"
              >
                {index}
              </span>
            ) : null}
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
