export type ToolCategory = {
  category: string;
  tools: string[];
};

export const toolCategories: ToolCategory[] = [
  {
    category: "Analytics",
    tools: ["Python", "SQL", "Pandas", "NumPy", "scikit-learn", "Excel"],
  },
  {
    category: "Visualization",
    tools: ["Power BI", "Tableau", "Charts & Dashboards"],
  },
  {
    category: "Development",
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "REST APIs",
      "AI coding tools",
    ],
  },
  {
    category: "Deployment",
    tools: ["Git", "GitHub", "Vercel", "Replit"],
  },
];
