const linePoints = [
  [0, 88],
  [16, 74],
  [32, 80],
  [48, 58],
  [64, 64],
  [80, 44],
  [96, 50],
  [112, 30],
  [128, 22],
];

export function DashboardMock() {
  const path = linePoints
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");

  return (
    <div className="w-full max-w-sm rounded-lg border border-card-line bg-surface shadow-card">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-card-line px-4 py-3">
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-xs text-muted-foreground">
          portfolio-analytics · overview
        </span>
      </div>

      <div className="space-y-4 p-5">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Portfolio", value: "—" },
            { label: "Overdue", value: "—" },
            { label: "Risk score", value: "—" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-md border border-card-line bg-background px-3 py-2.5"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {kpi.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-muted-foreground">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div className="rounded-md border border-card-line p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium">Trend</p>
            <span
              className="inline-block size-2 rounded-full"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
          </div>
          <svg
            viewBox="0 0 128 100"
            className="h-28 w-full"
            role="img"
            aria-label="Abstract upward trend chart"
          >
            {[20, 45, 70, 95].map((y) => (
              <line
                key={y}
                x1="0"
                x2="128"
                y1={y}
                y2={y}
                stroke="var(--chart-grid)"
                strokeWidth="0.75"
              />
            ))}
            <path
              d={`${path} L128,100 L0,100 Z`}
              fill="var(--chart-area)"
              stroke="none"
            />
            <path
              d={path}
              fill="none"
              stroke="var(--chart-line)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="128"
              cy="22"
              r="2.5"
              fill="var(--chart-line)"
            />
          </svg>
        </div>

        {/* Bars */}
        <div className="rounded-md border border-card-line p-4">
          <p className="mb-3 text-xs font-medium">Distribution</p>
          <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
            {[35, 55, 42, 70, 48, 88, 60, 75, 40, 95, 52, 66].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    h > 80 ? "var(--accent)" : "var(--chart-bar-muted)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
