export type ProjectCategory =
  | "Analytics"
  | "Risk"
  | "Fraud"
  | "Dashboards"
  | "Web Apps";

export type Project = {
  id: string;
  title: string;
  categories: ProjectCategory[];
  summary: string; // one-liner shown on the card
  problem: string;
  approach: string;
  process: string[];
  result: string;
  role: string;
  tech: string[];
  demoUrl: string; // empty string = no demo button
  githubUrl: string;
  accent: string; // small color accent, e.g. "#2D5F8F"
};

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Analytics",
  "Risk",
  "Fraud",
  "Dashboards",
  "Web Apps",
];

export const projects: Project[] = [
  {
    id: "credit-risk-dashboard",
    title: "Credit Risk Dashboard",
    categories: ["Risk", "Dashboards"],
    summary:
      "Interactive Power BI dashboard for credit risk analysis: approval and default rates across borrower segments.",
    problem:
      "Overall approval and default rates hide where the real risk sits — portfolio quality only becomes visible when segmented by borrower characteristics.",
    approach:
      "Build a segmented view of a ~29,000-application credit dataset with DAX measures and interactive filters.",
    process: [
      "Modeled the data: loans table + LoanGrade dimension, related by grade",
      "Wrote DAX measures: Approval Rate, Default Rate, Average Interest Rate",
      "Segmented risk by grade, home ownership and loan-to-income ratio",
      "Added interactive filters by loan purpose",
    ],
    result:
      "78.3% of applications approved, with a 21.7% default rate among approved loans. Default falls nearly linearly from grade G to A; renters default almost twice as often as mortgage holders; high loan-to-income applications cluster in the high-default zone — together these define the segments worth tighter scoring control.",
    role: "Data modeling, DAX measures, dashboard design",
    tech: ["Power BI", "DAX", "Data Modeling"],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/credit-risk-dashboard",
    accent: "#2D5F8F",
  },
  {
    id: "fraud-detection-analysis",
    title: "Fraud Detection Analysis",
    categories: ["Fraud", "Dashboards"],
    summary:
      "SQL + Power BI analysis of credit card fraud: anomaly detection with CTEs and window functions over 285K transactions.",
    problem:
      "Fraud is a rare event — 0.17% of transactions in a heavily imbalanced dataset — so suspicious patterns are invisible without systematic analysis.",
    approach:
      "Combine SQL analytics (CTEs, window functions) with a Power BI dashboard to surface anomalies and visualize fraud patterns over time.",
    process: [
      "Analyzed the Kaggle Credit Card Fraud dataset: 285K transactions, 492 fraudulent",
      "Wrote CTE queries to flag outliers — transactions 5× above the class average amount",
      "Used RANK() and moving averages to rank transactions and track temporal fraud spikes",
      "Built a Power BI dashboard: KPI metrics, amount distribution, top-20 fraud operations",
    ],
    result:
      "Fraudulent operations reach amounts of ~700 to ~2,100 — so simply blocking large transactions is insufficient and a multi-factor approach is needed. Moving-average analysis shows fraud spread across the entire period rather than concentrated in one window.",
    role: "Data analysis, SQL, dashboard development",
    tech: ["SQL", "Power BI", "CTEs", "Window Functions"],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/credit-card-fraud-detection",
    accent: "#7A4A2B",
  },
  {
    id: "aml-transaction-monitoring",
    title: "AML Transaction Monitoring",
    categories: ["Fraud", "Risk"],
    summary:
      "End-to-end anti-money-laundering system: rule-based detection combined with ML, graph analytics and explainable alerts.",
    problem:
      "Money laundering hides in legitimate transaction flows — rules alone miss new patterns, and black-box models produce alerts analysts cannot act on.",
    approach:
      "Layer rule-based detection, machine learning and graph analytics in one monitoring system, with SHAP explainability behind model alerts and a Streamlit dashboard for review.",
    process: [
      "Rule-based detection layer for known suspicious patterns",
      "Machine learning models for anomaly scoring",
      "Graph analytics over transaction networks",
      "SHAP explainability for model alerts",
      "Streamlit dashboard for alert review",
    ],
    result:
      "See the repository for implementation details and current progress.",
    role: "System design, modeling and dashboard development",
    tech: ["Python", "Machine Learning", "Graph Analytics", "SHAP", "Streamlit"],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/aml-transaction-monitoring-ml",
    accent: "#A34E3F",
  },
  {
    id: "fraud-command-center",
    title: "Fraud Command Center",
    categories: ["Fraud"],
    summary:
      "Anti-fraud monitoring and analytics tool — work in progress, code available in the repository.",
    problem:
      "Detailed case study is being prepared together with the project documentation.",
    approach:
      "See the repository for the current code and development progress.",
    process: [],
    result: "In active development.",
    role: "Design and development",
    tech: [],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/fraud-command-center",
    accent: "#52606D",
  },
  {
    id: "sql-reporting-automation",
    title: "SQL Reporting Automation",
    categories: ["Analytics"],
    summary:
      "PostgreSQL stored procedures that replace manual report assembly with a single parameterized call.",
    problem:
      "Recurring reports are rebuilt by hand every month — analysts rewrite the same SQL queries and adjust dates manually.",
    approach:
      "Wrap recurring reporting logic in parameterized PostgreSQL stored procedures, using the Chinook sample database.",
    process: [
      "Created generate_monthly_sales_report(month, year): revenue and average check by country",
      "Created flag_high_value_customers(min_spent): segments clients above a spending threshold",
      "Made reporting reproducible with a single parameterized CALL",
    ],
    result:
      "Monthly reporting becomes a one-command process — the same procedure recalculates the report for any period instead of manual query editing.",
    role: "Database development and query design",
    tech: ["PostgreSQL", "Stored Procedures", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/sql-stored-procedures-reporting",
    accent: "#2E6B5E",
  },
  {
    id: "video-game-sales-analysis",
    title: "Video Game Sales Analysis",
    categories: ["Analytics"],
    summary:
      "Excel pivot-table analysis of 16.5K+ game sales records: which genres and platforms sell best globally.",
    problem:
      "A large sales dataset needs a quick, reliable read of genre and platform performance without heavy tooling.",
    approach:
      "Pivot-table analysis in Excel / Google Sheets, starting with data-type validation.",
    process: [
      "Imported the Kaggle dataset (vgsales.csv) and validated data types",
      "Built pivot tables: genre → global sales, platform → global sales",
      "Visualized both views with column charts",
    ],
    result:
      "Action leads global sales ($1,751M), followed by Sports ($1,330M). PS2, Wii and X360 top the platform ranking thanks to long life cycles and large installed bases; Strategy and Puzzle stay niche.",
    role: "Data cleaning, pivot analysis, visualization",
    tech: ["Excel", "Google Sheets", "Pivot Tables"],
    demoUrl: "",
    githubUrl: "https://github.com/katanaban888/vg-sales-analysis",
    accent: "#8A5A2B",
  },
];
