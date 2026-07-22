// ─────────────────────────────────────────────────────────────
//  src/data/personal.js
//
//  ✏️  YOUR NAME, TITLE, BIO, AND CONTACT LINKS
//      Edit this file to update your personal information.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name:       "Hasnae Amansag",
  initials:   "hsinaa",

  title:      "Cybersecurity Engineer",
  subtitle:   "Cloud & DevSecOps Enthusiast",

  tagline:    "Building secure cloud infrastructures, automating deployments, and exploring modern cybersecurity solutions.",

  // Shown as floating tags in the Hero
  heroTags:   ["Cloud Security", "DevSecOps", "Kubernetes", "Terraform", "AWS", "SIEM"],

  // Shown as interest cards in About
  interests: [
    { icon: "🛡️", label: "Cloud Security",     desc: "Designing secure-by-default cloud architectures on AWS and OpenStack" },
    { icon: "⚙️", label: "DevSecOps",           desc: "Integrating security at every stage of the CI/CD pipeline" },
    { icon: "🔍", label: "Threat Detection",    desc: "Building SIEM pipelines with automated incident response workflows" },
    { icon: "🤖", label: "AI × Cybersecurity",  desc: "Applying machine learning to data classification and anomaly detection" },
  ],

  // About section paragraphs — add/remove as needed
  bio: [
    "I am a Cybersecurity Engineering graduate specialized in cloud security, DevSecOps, and infrastructure automation. My journey spans designing secure architectures, containerizing security solutions, and integrating threat intelligence into modern cloud environments.",
    "I enjoy experimenting with cybersecurity technologies — from deploying self-healing honeypots on AWS to building cloud-native SIEM pipelines with automated incident response. Currently seeking opportunities where I can push the boundaries of secure cloud engineering.",
  ],

  // Status badge shown in Hero
  status: "Open to opportunities",

  // Path to your CV file — place it in /public/cv.pdf
  cvPath: "/AMANSAG_Hasnae_CV_22_7.pdf",

  contact: {
    email:    "amansag.hasnae@gmail.com",
    phone:    "+212 694 234 813",
    linkedin: "https://www.linkedin.com/in/hasnae-amansag-b7ba81214/",
    medium:   "https://medium.com/@amansag.hasnae",
    github:   "https://github.com/hsinaa",
  },
};
