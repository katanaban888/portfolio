export type Capability = {
  title: string;
  description: string;
  icon:
    | "chart"
    | "shield"
    | "credit-card"
    | "layout"
    | "workflow"
    | "sparkles"
    | "globe"
    | "pie";
};

export const capabilities: Capability[] = [
  {
    title: "Data Analysis",
    description:
      "Exploring datasets, cleaning data and finding patterns that answer real business questions.",
    icon: "chart",
  },
  {
    title: "Risk & Fraud Analytics",
    description:
      "Analyzing risk factors, anomalies and suspicious operations in transactional data.",
    icon: "shield",
  },
  {
    title: "Credit Monitoring",
    description:
      "Tracking portfolio health: overdue dynamics, client segments and risk indicators.",
    icon: "credit-card",
  },
  {
    title: "Dashboard Development",
    description:
      "Building clear interactive dashboards that turn raw numbers into decisions.",
    icon: "layout",
  },
  {
    title: "Business Process Analysis",
    description:
      "Understanding how processes really work — from contracts and documents to cash operations.",
    icon: "workflow",
  },
  {
    title: "AI-assisted Development",
    description:
      "Using modern AI tools to prototype and build software faster, with manual quality control.",
    icon: "sparkles",
  },
  {
    title: "Web Applications",
    description:
      "Developing full-stack web apps with React, Next.js and TypeScript, deployed to Vercel.",
    icon: "globe",
  },
  {
    title: "Data Visualization",
    description:
      "Designing charts and reports that communicate insights without noise or decoration.",
    icon: "pie",
  },
];
