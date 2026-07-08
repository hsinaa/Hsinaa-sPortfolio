// ─────────────────────────────────────────────────────────────
//  src/data/certifications.js
//
//  ✏️  ADD / REMOVE / EDIT your certifications.
//      Each object = one card.
// ─────────────────────────────────────────────────────────────

export const certifications = [
  {
    id:   1,
    icon: "🔐",
    title: "ISC2 CC",
    subtitle: "Candidate — Certified in Cybersecurity",
    org:  "ISC2",
    url:  null, // e.g. "https://www.isc2.org/Certifications/CC"
  },
  {
    id:   2,
    icon: "🎯",
    title: "SOC Level 1",
    subtitle: "TryHackMe Learning Path",
    org:  "TryHackMe",
    url:  null,
  },
  {
    id:   3,
    icon: "☁️",
    title: "Hybrid Cloud Fundamentals",
    subtitle: "Nutanix Certified",
    org:  "Nutanix",
    url:  null,
  },

  // ── To add a certification ──
  // {
  //   id:      4,
  //   icon:    "🏅",
  //   title:   "Cert Name",
  //   subtitle: "Full title or level",
  //   org:     "Issuing Organization",
  //   url:     "https://link-to-credential.com",  // shown as a button if provided
  // },
];
