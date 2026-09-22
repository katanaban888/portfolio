export type ExperienceItem = {
  period: string; // placeholder where unknown
  title: string;
  place: string; // placeholder where unknown
  description: string;
  tags: string[];
};

// No invented companies, titles or dates — placeholders where unknown.
export const experience: ExperienceItem[] = [
  {
    period: "[PERIOD]",
    title: "Contract & Administrative Work",
    place: "[COMPANY / DEPARTMENT]",
    description:
      "Working with contracts, documentation and operating processes: preparation, control and accuracy at every step.",
    tags: ["Contracts", "Documentation", "Processes"],
  },
  {
    period: "[PERIOD]",
    title: "Administrative & Cash Operations",
    place: "[COMPANY / DEPARTMENT]",
    description:
      "Administrative support and cash-operation procedures — daily work where structure, discipline and attention to detail are essential.",
    tags: ["Cash operations", "Administration"],
  },
  {
    period: "[PERIOD]",
    title: "Learning Data Analytics",
    place: "Self-study & courses",
    description:
      "Systematic learning of data analytics: Python, Pandas, SQL, statistics and practical analysis of real datasets.",
    tags: ["Python", "SQL", "Statistics"],
  },
  {
    period: "[PERIOD]",
    title: "Development Skills & Tooling",
    place: "Self-study & practice",
    description:
      "Growing into the technical side: dashboards, Git and GitHub, web development and AI-assisted coding tools.",
    tags: ["Dashboards", "Git", "Web", "AI tools"],
  },
  {
    period: "[PERIOD]",
    title: "Portfolio Projects",
    place: "Personal projects",
    description:
      "Building an applied portfolio: risk and finance dashboards, fraud analysis, and web applications deployed end to end.",
    tags: ["Portfolio", "Analytics", "Web"],
  },
];
