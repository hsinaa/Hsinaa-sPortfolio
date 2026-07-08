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
      "Kata Containers (VM-grade isolation)",
    ],
  },
  {
    id:     "devops-gitops-cicd",
    icon:   "🔁",
    label:  "DevOps / GitOps / CI-CD",
    skills: [
      "Jenkins (CI/CD pipelines)",
      "ArgoCD (GitOps, continuous reconciliation)",
      "Kolla Ansible (OpenStack deployment via Docker)",
      "GitHub (code integration & deployment)",
    ],
  },
  {
    id:     "security-devsecops",
    icon:   "🔐",
    label:  "Security (DevSecOps / Cybersecurity)",
    skills: [
      "SonarQube, Trivy, OWASP ZAP, GitLeaks (pipeline security)",
      "Falco (Kubernetes runtime detection)",
      "Honeypots (Cowrie, AWS self-healing)",
    ],
  },
  {
    id:     "soc-siem-threat-intel",
    icon:   "🕵️",
    label:  "SOC / SIEM / Threat Intel",
    skills: [
      "Splunk",
      "Kibana / ElasticSearch",
      "TheHive, Cortex, MISP (incident handling, threat intel enrichment)",
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
      "ELK Stack (ElasticSearch, Logstash, Kibana)",
    ],
  },
  {
    id:     "development-scripting",
    icon:   "💻",
    label:  "Development / Scripting",
    skills: [
      "Python (boto3, automation, pipelines)",
      "Bash (scripting, modular toolkits)",
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
  // ── To add a category ──
  // {
  //   id:     "your-category",
  //   icon:   "🔧",
  //   label:  "Category Name",
  //   skills: ["Skill 1", "Skill 2"],
  // },
];