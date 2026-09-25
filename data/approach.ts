export type ApproachStep = {
  title: string;
  description: string;
};

export const approach: ApproachStep[] = [
  {
    title: "Understand the business problem",
    description:
      "Clarify what decision the analysis should support before touching the data.",
  },
  {
    title: "Clean and investigate the data",
    description:
      "Check quality, structure and edge cases — reliable answers start with reliable data.",
  },
  {
    title: "Find meaningful patterns",
    description:
      "Look for signal, not noise: patterns that actually explain what is happening.",
  },
  {
    title: "Build a clear analytical solution",
    description:
      "Shape the result into a dashboard, model or report that is simple to use.",
  },
  {
    title: "Explain the result in simple language",
    description:
      "Translate numbers into a story that people without a technical background understand.",
  },
  {
    title: "Turn insights into action",
    description:
      "Connect the analysis to a concrete, actionable decision or next step.",
  },
];
