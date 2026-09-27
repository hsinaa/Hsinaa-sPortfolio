// ─────────────────────────────────────────────────────────────
//  src/data/projects.js
//
//  ✏️  ADD / REMOVE / EDIT your projects.
//      Each object = one card + modal.
//
//  Fields:
//    title       — shown on card and modal header
//    short       — one-liner shown on the card
//    tools       — array of tech tags (first 4 shown on card, rest in modal)
//    full        — array of key-point strings shown as a bullet list in the modal
//    challenges  — array of key-point strings shown as a bullet list in the modal
//    results     — array of key-point strings shown as a bullet list in the modal
//    diagramUrl  — (optional) URL/path to an architecture diagram image
//                  e.g. "/diagrams/k8s.png"  →  place file in /public/diagrams/
//
//  ⚠️ full / challenges / results changed from paragraph strings to
//  ARRAYS of short bullet strings. ProjectModal.jsx must be updated to
//  render these as a <ul>/<li> list instead of a single <p> tag — share
//  that file and I'll update it to match.
//
//  NOTE: Projects no longer have an `id` field. Components that render
//  these (e.g. Projects.jsx, ProjectModal.jsx) should use the array
//  index instead — e.g. `key={index}` and badge number `index + 1`.
//
//  ORDER = DISPLAY ORDER: whichever object comes first in this array
//  is the first card shown on the page. To make a NEW project appear
//  FIRST, paste it right below `export const projects = [` (top of
//  the list) — NOT at the bottom.
// ─────────────────────────────────────────────────────────────

export const projects = [
  // ── To add a NEW project so it shows FIRST, paste your object here ──
  // {
  //   title:      "Your Project Title",
  //   short:      "One-line description for the card.",
  //   tools:      ["Tool1", "Tool2", "Tool3"],
  //   full:       ["Key point 1", "Key point 2", "Key point 3"],
  //   challenges: ["Challenge 1", "Challenge 2"],
  //   results:    ["Result 1", "Result 2"],
  //   diagramUrl: null, // or "/diagrams/your-diagram.png"
  // },
  {
  title: "ISMS Design and Implementation for a Cloud-Native DevSecOps Environment",

  short:
    "ISO/IEC 27001:2022-aligned Information Security Management System for securing a cloud-native DevSecOps platform.",

  tools: [
    "ISO/IEC 27001:2022",
    "ISMS",
    "Risk Assessment",
    "DevSecOps",
  ],

  full: [
    "Designed an Information Security Management System (ISMS) aligned with ISO/IEC 27001:2022 for a cloud-native DevSecOps environment.",
    "Defined the ISMS scope covering the CI/CD, GitOps, containerization, Kubernetes, infrastructure-as-code, monitoring, and security tooling ecosystem.",
    "Identified and classified information, software, infrastructure, configuration, and human assets according to confidentiality, integrity, and availability requirements.",
    "Conducted a structured risk assessment covering threats, vulnerabilities, risk scenarios, impacts, probabilities, and treatment strategies.",
    "Developed a risk treatment plan with security controls including MFA, RBAC, secrets management, branch protection, vulnerability scanning, network policies, logging, monitoring, backup, and recovery.",
    "Defined residual-risk objectives and evidence required to demonstrate the effectiveness of implemented security controls."
  ],

  challenges: [
    "Defining an appropriate ISMS scope across a complex DevSecOps toolchain.",
    "Mapping business and technical assets to concrete information security risks.",
    "Managing security risks across CI/CD, GitOps, containers, and Kubernetes.",
    "Selecting appropriate security controls while maintaining the agility of the DevSecOps lifecycle.",
    "Defining measurable evidence to verify that security controls are effectively implemented."
  ],

  results: [
    "Structured ISMS framework for a cloud-native DevSecOps environment.",
    "Complete asset inventory and cybersecurity risk register.",
    "Identification and prioritization of 20 security risk scenarios.",
    "Risk treatment plan covering preventive, detective, and recovery controls.",
    "Defined transition from inherent risk to targeted residual risk.",
    "Security governance approach supporting continuous monitoring and improvement."
  ],

  diagramUrl: "/diagrams/CloudNative-ISMS.png",
},
  {
  title: "Cyber Risk Assessment of a Cloud Datacenter — EBIOS RM",

  short:
    "Cybersecurity risk assessment of a fictitious cloud datacenter using the EBIOS Risk Manager methodology.",

  tools: [
    "EBIOS Risk Manager",
    "Risk Assessment",
    "Threat Modeling",
    "Risk Analysis",
  ],

  full: [
    "Conducted a cybersecurity risk assessment of a fictitious cloud datacenter using the EBIOS Risk Manager methodology.",
    "Identified business values, supporting assets, feared events, risk sources, and attacker objectives.",
    "Designed strategic and operational attack scenarios targeting virtualized infrastructure, administrative accounts, databases, and client data.",
    "Evaluated cybersecurity risks and identified security measures to reduce exposure and limit attack impact.",
    "Developed a risk treatment plan covering MFA, PAM, network segmentation, patch management, immutable backups, and security monitoring."
  ],

  challenges: [
    "Translating business objectives into concrete cybersecurity risks.",
    "Mapping dependencies between business values and technical infrastructure.",
    "Building realistic attack scenarios from external and internal threat sources.",
    "Defining appropriate security controls and evaluating residual risks."
  ],

  results: [
    "Complete EBIOS RM-based risk assessment for a cloud datacenter.",
    "Structured mapping between business assets, threats, attack scenarios, and security controls.",
    "Identification of critical attack paths affecting cloud infrastructure and client data.",
    "Risk treatment plan covering preventive, detective, and recovery measures.",
    "Defined residual-risk assessment after implementation of security measures."
  ],

  diagramUrl: "/diagrams/AtlasCloud-EBIOS.png",
},
  {
    title: "Cloud-Native Microservices Platform for Sports Events",

    short:
      "Production-ready microservices platform with Kubernetes, GitOps, DevSecOps, and full observability.",

    tools: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "ArgoCD",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Loki",
      "SonarQube",
      "Trivy",
      "OWASP ZAP",
      "GitLeaks",
      "GitHub"
    ],

    full: [
      "Worked within a 6-member team to build a cloud-native microservices platform for visitor services during major sporting events.",
      "Deployed on Kubernetes using Helm and GitOps with ArgoCD.",
      "Engineered an end-to-end DevSecOps pipeline with Jenkins: from code commit to production deployment.",
      "Implemented centralized logging and monitoring.",
    ],

    challenges: [
      "Building a secure CI/CD pipeline without slowing down delivery.",
      "Coordinating multiple microservices through GitOps workflows.",
      "Integrating automated security testing at every stage of the software lifecycle.",
    ],

    results: [
      "Fully automated cloud-native platform with secure CI/CD.",
      "GitOps-based continuous delivery.",
      "Automated security validation across the pipeline.",
      "Centralized observability.",
      "Reproducible Kubernetes deployments from source to production.",
    ],

    diagramUrl: "/diagrams/AtlasPlay.png",
  },
  {
    title: "Secure Kubernetes Infrastructure Automation Platform",

    short:
      "Production-ready Kubernetes platform with Infrastructure as Code, GitOps, runtime security, and full-stack observability.",

    tools: [
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Helm",
      "ArgoCD",
      "Falco",
      "Prometheus",
      "Grafana",
      "Loki"
    ],

    full: [
      "Designed and automated a production-ready Kubernetes infrastructure following DevSecOps, GitOps, and IaC principles.",
      "Provisioned and configured the cluster using Terraform, Ansible, and Helm.",
      "Implemented continuous reconciliation with ArgoCD.",
      "Enforced runtime threat detection using Falco.",
      "Deployed a complete observability stack with Prometheus, Grafana, and Loki.",
    ],

    challenges: [
      "Building a fully reproducible Kubernetes platform without increasing operational complexity.",
      "Integrating security, observability, and GitOps automation together.",
      "Fine-tuning runtime threat detection to minimize false positives while keeping attack visibility.",
    ],

    results: [
      "Automated, secure, and reproducible Kubernetes platform.",
      "GitOps-driven deployments.",
      "Runtime threat detection in place.",
      "Centralized monitoring.",
      "Rapid infrastructure provisioning for cloud-native production environments.",
    ],

    diagramUrl: "/diagrams/pfsK8S.png",
  },
  {
    title: "Self-Healing Honeypot on AWS",
    short: "Resilient honeypot that auto-recovers and feeds attacker data to S3 for analysis.",
    tools: ["AWS", "Cowrie", "boto3", "S3", "Auto Scaling Groups"],
    full: [
      "Deployed a Cowrie SSH/Telnet honeypot on AWS designed to be self-healing.",
      "Auto Scaling Groups automatically replace compromised instances.",
      "boto3 scripts orchestrate the recycling logic.",
      "Attacker sessions, commands, and credentials streamed to S3 for analysis.",
    ],
    challenges: [
      "Ensuring the honeypot was convincingly authentic to sophisticated attackers.",
      "Preventing lateral movement from a compromised instance to production resources.",
    ],
    results: [
      "Collected rich attacker behavioral data over multiple campaigns.",
      "Fed threat intelligence back into the broader security monitoring ecosystem.",
    ],
    diagramUrl: "/diagrams/awshoneypot.png",
  },
  {
  title: "Automated AWS Application Deployment",

  short: "Highly available Flask deployment pipeline on AWS using Terraform, Ansible, and Packer.",

  tools: ["AWS", "Terraform", "Ansible", "Packer", "Flask", "Python", "GitHub", "CloudWatch"],

  full: [
    "Automated deployment of a Flask application to Ubuntu EC2 instances with Ansible: virtual environment setup, Flask installation via pip, code deployment from GitHub, and a systemd service for automatic startup.",
    "Built custom pre-configured Ubuntu AMIs with Packer, combining the amazon-ebs builder with an Ansible provisioner to bake the app and its dependencies directly into the image.",
    "Provisioned the AWS infrastructure with Terraform: an Application Load Balancer distributing HTTP traffic across healthy EC2 instances via a Target Group, and an Auto Scaling Group managing instance count through a Launch Template and CPU-based scaling rules.",
    "Set up CloudWatch monitoring to track instance performance.",
  ],

  challenges: [
    "Chaining three automation tools (Ansible, Packer, Terraform) into a single coherent pipeline.",
    "Configuring health checks and security groups so the ALB only routes traffic to healthy instances.",
    "Managing IAM instance profiles and security group rules consistently across the ALB, ASG, and EC2 layers.",
  ],

  results: [
    "Self-healing setup where the ASG automatically registers and deregisters instances from the ALB Target Group as it scales.",
    "Highly available Flask deployment with automatic traffic distribution across instances.",
    "Centralized performance monitoring via CloudWatch.",
  ],

  diagramUrl: "/diagrams/awsappdepl.png",
},
{
  title: "Private Cloud Deployment with OpenStack",

  short: "On-premises private cloud built on OpenStack/DevStack, covering compute, networking, storage, identity, containers, and automated deployment.",

  tools: ["OpenStack", "DevStack", "Ubuntu", "Kolla Ansible", "Kata Containers", "KVM/libvirt"],

  full: [
    "Installed OpenStack from source with DevStack on Ubuntu, provisioning a full IaaS stack (compute, network, storage, identity, image, dashboard) from a single local.conf configuration.",
    "Deployed and managed Linux VM instances end-to-end: image creation in QCOW2 format, flavor sizing (vCPU/RAM/disk), boot source selection, network/port assignment, security groups, and SSH key pairs.",
    "Operated the core OpenStack services directly: Nova for compute lifecycle, Glance for image storage, Neutron for private networks/subnets/routers with an external gateway, Cinder for attachable block volumes, and Keystone for multi-tenant identity (projects, users, roles).",
    "Diagnosed and resolved a network security issue by adding an allow_icmp rule to a security group, restoring ping connectivity that was blocked by the default deny-all policy.",
    "Cross-validated every operation between the OpenStack CLI and the Horizon web dashboard to confirm consistent state.",
    "Extended the platform to run containers via Kata Containers: configured libvirt/KVM as the Nova compute driver and created a dedicated Kata flavor so containers run with VM-grade isolation instead of shared-kernel isolation.",
    "Automated a second, Docker-based private cloud deployment using Kolla Ansible (all-in-one inventory, globals.yml service configuration, generated credentials, full playbook-driven deployment) as a more production-representative alternative to DevStack",
  ],

  challenges: [
    "Understanding why default security groups silently drop ICMP traffic and correctly scoping a new ingress rule instead of over-opening the group.",
    "Wiring Nova, Neutron, Cinder, and Keystone together correctly so instances get networking, storage, and access control as one coherent system rather than four independent services.",
    "Reconfiguring the hypervisor layer (libvirt driver, virt_type=kvm) so Nova could run Kata's VM-isolated containers alongside normal instances.",
    "Working within the resource limits of a lab VM while still deploying a second, heavier stack (Kolla Ansible + Docker) side by side with DevStack.",
  ],

  results: [
    "Fully functional private OpenStack cloud with working compute, network, storage, and identity services, verified via both CLI and Horizon.",
    "Demonstrated three deployment/isolation models in one environment: standard DevStack VMs, Kata Container-based lightweight isolation, and a Kolla Ansible/Docker production-style deployment.",
    "Working knowledge of how a private OpenStack cloud could be extended toward a public or hybrid-cloud model, including multi-tenancy via Keystone and cross-cloud integration via Terraform/API.",
  ],

  diagramUrl: "/diagrams/openstack.drawio.png",
},
{
  title: "Cloud-Native SIEM Pipeline with Threat Intelligence Integration",

  short: "Automated cloud-native SIEM pipeline connecting AWS threat detection to TheHive, Cortex, and MISP for case triage.",

  tools: [
    "AWS GuardDuty",
    "AWS EventBridge",
    "AWS Lambda",
    "AWS S3",
    "AWS SQS",
    "AWS EC2",
    "TheHive",
    "Cortex",
    "MISP",
    "Kibana",
    "Docker Compose",
    "Cassandra",
    "ElasticSearch",
    "MySQL",
    "Redis",
    "Python",
    "systemd",
  ],

  full: [
    "AWS GuardDuty detects malicious activity and generates a finding.",
    "An EventBridge rule triggers a Lambda function on every new GuardDuty finding.",
    "The Lambda function parses the alert (ID, title, description, severity), maps GuardDuty's severity to TheHive's severity scale, builds a TheHive-formatted JSON object, and uploads it to an S3 bucket with a UTC-timestamped filename.",
    "An S3 event notification pushes each new-object event into an SQS queue.",
    "A sqs_listener.py script on the main EC2 instance long-polls SQS, downloads the corresponding S3 object locally, and deletes the message once processed to avoid reprocessing.",
    "An import_to_thehive.py script posts each new JSON file into TheHive as an alert via its API, tracking already-imported files so nothing is duplicated.",
    "An alerts_to_cases.py script promotes new alerts above a severity threshold into TheHive cases, links each alert to its case, and closes the alert once converted.",
    "Cases are investigated and enriched through TheHive, Cortex (automated analysis), and MISP (threat intelligence), with results visualized on a Kibana dashboard.",
    "The full pipeline (thehive_pipeline.py orchestrating all three scripts) runs as a systemd service launched by a Bash wrapper, so it comes back up automatically after a reboot.",
    "The backend stack — TheHive, Cortex, MISP, Kibana, Cassandra, ElasticSearch, MySQL, Redis — is deployed via Docker Compose.",
  ],

  challenges: [
    "Chaining five AWS services (GuardDuty, EventBridge, Lambda, S3, SQS) together with three custom Python scripts into one reliable event-driven pipeline.",
    "Preventing duplicate processing at two separate points: SQS message deletion after download, and a processed-files tracker before importing into TheHive.",
    "Correctly mapping GuardDuty's severity scale onto TheHive's expected severity levels.",
    "Making the pipeline resilient to reboots by wrapping it in a systemd service instead of relying on a manually-run script.",
  ],

  results: [
    "Fully automated flow from a real GuardDuty finding to a severity-scored, triaged case in TheHive with no manual intervention.",
    "Threat intelligence enrichment via Cortex and MISP integrated directly into the case workflow.",
    "A self-healing pipeline that restarts automatically via systemd, with all activity visualized on a Kibana dashboard.",
  ],

  diagramUrl: "/diagrams/awscloudsiem.png",
},
{
  title: "VMware ESXi & vCenter Server Virtualization Lab",

  short: "Two-host ESXi virtualization environment managed centrally through a deployed vCenter Server Appliance.",

  tools: ["VMware ESXi 7.0", "vCenter Server Appliance (VCSA)", "vSphere Client", "Linux"],

  full: [
    "Installed and configured two VMware ESXi 7.0 hosts on VMware Workstation, each with a static IP on an isolated host-only network (192.168.73.0/24) with a shared gateway/DNS",
    "Configured each ESXi host post-install: static IPv4 addressing, hostname/DNS, and enabled ESXi Shell and SSH for direct troubleshooting access",
    "Created and formatted VMFS datastores on each host, since a fresh ESXi install ships with no usable storage",
    "Deployed Linux and Windows virtual machines directly on the ESXi hosts, configuring flavor (vCPU/RAM/disk), network adapter, and storage placement",
    "Deployed a vCenter Server Appliance (VCSA) as a guest on the second ESXi host via the two-stage vcsa-ui-installer (Stage 1: deploy the VCSA VM; Stage 2: configure networking, SSO domain, and CEIP)",
    "Reconfigured the environment from an isolated host-only adapter to a Bridged network once VCSA setup required outbound internet access, re-assigning static IPs across all hosts",
    "Connected to the deployed vCenter through vSphere Client, created a new Datacenter, and added both ESXi hosts into vCenter's inventory (image-based lifecycle management, host lockdown mode set to Normal)",
    "Verified centralized management by confirming both hosts and their VMs (Linux and Windows) were visible and controllable from the single vCenter inventory",
    "Layered network services on top of the lab environment: FTP (vsftpd) with firewall rules for FTP/FTP-data, a Web service (Apache2) serving a custom site, DNS (BIND9) with forward/reverse zones and forwarders, and SSH with key-based authentication (ssh-keygen + ssh-copy-id) as a more secure alternative to password auth",
  ],

  challenges: [
    "Networking had to be re-architected mid-project: the initial host-only adapter (192.168.73.0/24) isolated the hosts cleanly but blocked the internet access vCenter's installation and services required, forcing a switch to a Bridged network with re-assigned static IPs",
    "Coordinating the two-stage VCSA deployment (deploy, then configure) correctly, including SSO domain setup and time-sync mode between vCenter and the ESXi host",
    "Setting up DNS correctly with both forward and reverse lookup zones, and validating resolution end-to-end with dig and nslookup",
    "Moving from password-based to key-based SSH authentication cleanly across multiple hosts",
  ],

  results: [
    "A working two-host ESXi cluster centrally managed through a single vCenter Server Appliance, with both hosts and their VMs visible in one inventory",
    "Functional core infrastructure services (FTP, Web, DNS, SSH) running on top of the virtualized environment",
    "Hands-on understanding of the full vSphere stack: from bare ESXi installation to centralized multi-host management via vCenter",
  ],

  diagramUrl: "/diagrams/esxi.png",
},
{
  title: "SecureOps Lab — Virtual Cybersecurity Home Lab",

  short: "Segmented home lab combining a firewalled network, an Active Directory environment, a SIEM, DFIR tooling, and a red-team range.",

  tools: ["pfSense", "Active Directory", "Kali Linux", "Splunk", "Tsurugi Linux"],

  full: [
    "Built a pfSense gateway/firewall as the central router for the lab, segmenting traffic between the different mini-labs.",
    "Deployed an Active Directory Lab with a domain controller and a joined Windows client.",
    "Set up a Kali Linux VM as the management and offensive-tooling machine for the environment",
    "Deployed Splunk as the SIEM to centralize log collection and detection (blue team)",
    "Deployed Tsurugi Linux for digital forensics and incident response (DFIR) work",
  ],

  challenges: [
    "Designing the network segmentation in pfSense so the blue team (Splunk/DFIR), red team (Kali/vulnerable VMs), and AD lab could each operate realistically without one segment leaking into another",
    "Getting the Active Directory domain controller and client to join and authenticate correctly inside an isolated virtual network",
    "Feeding meaningful logs from across the lab (AD, endpoints, network) into Splunk so it functions as a real detection point rather than an empty SIEM",
  ],

  results: [
    "A self-contained, segmented lab environment covering offense, defense, forensics, and enterprise identity behind a single pfSense gateway",
    "A reusable practice environment for running detection engineering, DFIR, and red-team exercises end-to-end",
  ],

  diagramUrl: "/diagrams/secureops.png",
},
{
  title: "HardenedHost — Linux Hardening as Code (ANSSI-based)",

  short: "Modular Bash toolkit that automates Linux hardening across six system components, based on ANSSI recommendations.",

  tools: ["Bash", "Linux", "Hardening", "ANSSI guidelines"],

  full: [
    "Built a modular Bash toolkit (main.sh + per-component scripts) that audits and applies ANSSI-recommended hardening across six components: authentication, filesystem, kernel, hardware, network, and partitioning",
    "Authentication: added PAM lockout rules, enforced password aging policy (max/min days between changes), and disabled root login over SSH",
    "Filesystem: locked down permissions on sensitive files (/etc/shadow, /etc/passwd, /root, /boot), set a default UMASK of 027, reassigned orphaned files/directories to a valid owner, enabled the sticky bit on world-writable directories, audited for setuid/setgid binaries, and configured SELinux or AppArmor based on user choice",
    "Kernel: enabled ASLR to make buffer-overflow exploitation harder, and disabled the Magic SysRq key to close a physical-access attack vector",
    "Hardware: disabled hyper-threading to reduce cross-thread side-channel exposure, and enabled SMEP/SMAP to block kernel-level exploits and privilege escalation",
    "Network: disabled IP forwarding, dropped inbound packets spoofing a 127/8 source address, and disabled IPv6 when unused",
    "Partitioning: verified and hardened /boot mount options, and applied recommended secure mount options across other mounted partitions",
    "Split every module into a static variant (one-time predefined hardening) and a dynamic variant (continuous monitoring/adaptation)",
    "Built a system status check module reporting connected users, disk/memory usage, active services, and critical file permissions",
    "Delivered as an installable CLI: clone the repo, grant main.sh execute permission, and run it as an interactive menu or invoke individual modules directly for targeted hardening",
  ],

  challenges: [
    "Translating dense ANSSI guideline text into concrete, scriptable checks and remediations across six very different system layers (auth, kernel, hardware, network, filesystem, partitioning)",
    "Making hardening changes safely reversible/non-destructive, since a wrong kernel or network setting can break system availability rather than just improve security",
    "Structuring six independent modules behind one coherent main.sh menu without duplicating logic",
    "Balancing static one-shot hardening against a dynamic, continuously-monitoring mode for the same components",
  ],

  results: [
    "A reusable, modular hardening toolkit covering authentication, filesystem, kernel, hardware, network, and partitioning in one interactive CLI",
    "Both static (apply-once) and dynamic (monitor/adapt) hardening modes per component",
    "A built-in system status checker to verify hardening state (permissions, services, resource usage) after the fact",
  ],

  diagramUrl: "/diagrams/hardenedhost.jpeg",
},
];