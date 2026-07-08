// ─────────────────────────────────────────────────────────────
//  src/data/experience.js
//
//  ✏️  ADD / REMOVE / EDIT your work experience entries.
//      Each object = one timeline card.
// ─────────────────────────────────────────────────────────────

export const experience = [
  {
    id: 1,
    role:        "Cybersecurity Intern",
    company:     "Atlas Cloud Services",
    period:      "Mars – Août 2026",
    type:        "Internship",
    projectTitle: "Design and Implementation of a Wazuh SIEM for Centralized Log Collection and Analysis",
    description:
      "Designed and deployed an AI-enhanced SIEM platform using Wazuh to centralize and correlate physical access control logs from EXGARDE. Engineered custom detection rules, developed a real-time UEBA engine powered by Isolation Forest for anomaly detection, implemented SQL Server high availability through transactional replication, and integrated live dashboards with automated email alerting.",
    tools: ["Wazuh", "Python"],
  },

  // ── To add another entry, copy the block below and fill it in ──
  {
    id: 2,
    role:        "Cybersecurity Intern",
    company:     "Atlas Cloud Services",
    period:      "Juillet – Août 2025",
    type:        "Internship",
    projectTitle: "Implementation of a Data Loss Prevention Solution",
    description:
      "Built an automated Data Loss Prevention (DLP) platform by containerizing OpenDLP and extending it with Python-based automation. Developed Selenium-driven workflows for profile creation, scan execution, XML export, and integrated an AI-powered classification engine for intelligent identification of sensitive data.",
    tools: ["OpenDLP", "Docker", "Python", "Selenium"],
  },
];
