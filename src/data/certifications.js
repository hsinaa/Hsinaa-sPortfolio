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
    title: "Cisco Introduction to Cybersecurity",
    subtitle: "Cisco Introduction to Cybersecurity",
    org:  "Cisco Networking Academy",
    image: "/certifications/introtocybersec.jpeg",
    url:  "https://www.credly.com/badges/8d76dab0-3af3-442a-9436-5f186503b021/public_url,"
  },
  {
    id:   2,
    icon: "🎯",
    title: "ISO/IEC 27001 Information Security Associate",
    subtitle: "ISO/IEC 27001 Information Security Associate",
    org:  "SkillFront",
    image: null,
    url:  "https://www.skillfront.com/Badges/35582149896088",
  },
  {
    id:   3,
    icon: "🔐",
    title: "Introduction à la méthode EBIOS Risk Manager",
    subtitle: "EBIOS RM",
    org:  "Club EBIOS",
    image: "/certifications/ebiosrm.jpeg",
    url:  null,
  },
    {
    id:   4,
    icon: "🏅",
    title: "GitOps for Amazon EKS Automation",
    subtitle: "GitOps for Amazon EKS Automation",
    org:  "Amazon Web Services (AWS)",
    image: "/certifications/gitopsforeksaut.jpeg",
    url:  null,
  },
      {
    id:   5,
    icon: "☁️",
    title: "AWS Solutions Architect",
    subtitle: "Fundamentals of Architecting on AWS",
    org:  "Amazon Web Services (AWS)",
    image: "/certifications/awssolutionarchitectfundamentals.jpeg",
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
