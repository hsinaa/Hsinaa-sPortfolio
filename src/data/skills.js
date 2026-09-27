// ─────────────────────────────────────────────────────────────
//  src/data/skills.js
//
//  ✏️  ADD / REMOVE / EDIT skill categories and skills.
//      Each object = one card in the dark Skills section.
// ─────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    id:     "cloud-infrastructure",
    icon:   "☁️",
    label:  "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, S3, SQS, Lambda, EventBridge, GuardDuty, CloudWatch, ASG, ALB)",
      "OpenStack / DevStack",
      "VMware ESXi & vCenter Server (VCSA)",
      "Terraform",
      "Ansible",
      "Packer",
    ],
  },
  {
    id:     "containers-orchestration",
    icon:   "🐳",
    label:  "Containers & Orchestration",
    skills: [
      "Kubernetes",
      "Docker / Docker Compose",
      "Helm",
    ],
  },
  {
    id:     "devops-gitops-cicd",
    icon:   "🔁",
    label:  "DevOps / GitOps / CI-CD",
    skills: [
      "Jenkins",
      "ArgoCD",
      "GitHub",
    ],
  },
  {
    id:     "security-devsecops",
    icon:   "🔐",
    label:  "Security (DevSecOps / Cybersecurity)",
    skills: [
      "SonarQube, Trivy, OWASP ZAP, GitLeaks",
      "Falco",
      "Honeypots (Cowrie)",
    ],
  },
  {
    id:     "soc-siem-threat-intel",
    icon:   "🕵️",
    label:  "SOC / SIEM / Threat Intel",
    skills: [
      "Kibana / ElasticSearch",
      "TheHive, Cortex, MISP",
      "Wazuh",
    ],
  },
  {
    id:     "observability",
    icon:   "📊",
    label:  "Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "Loki",
      "ELK Stack",
    ],
  },
  {
    id:     "development-scripting",
    icon:   "💻",
    label:  "Development / Scripting",
    skills: [
      "Python",
      "Bash/Shell scripting",
    ],
  },
  {
    id:     "systems-networking",
    icon:   "🖥️",
    label:  "Systems & Networking",
    skills: [
      "Linux (administration, hardening)",
      "Active Directory",
      "Networks Fundamentals",
    ],
  },
  {
  id:     "grc",
  icon:   "📋",
  label:  "GRC (Governance, Risk & Compliance)",
  skills: [
    "EBIOS Risk Manager",
    "ISO/IEC 27001",
    "PCA/PRA",
  ],
},
  // ── To add a category ──
  // {
  //   id:     "your-category",
  //   icon:   "🔧",
  //   label:  "Category Name",
  //   skills: ["Skill 1", "Skill 2"],
  // },
];