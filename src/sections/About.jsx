// ─────────────────────────────────────────────────────────────
//  src/sections/About.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Button } from "../components/ui.jsx";
import { personal } from "../data/personal.js";

export default function About() {
  return (
    <section id="about" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* Left — text */}
          <div>
            <SectionLabel>About Me</SectionLabel>
            <SectionTitle>Securing the digital frontier, one layer at a time.</SectionTitle>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              {personal.bio.map((paragraph, i) => (
                <p key={i} style={{ color: COLORS.textMuted, lineHeight: 1.8, fontSize: 15 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              <Button href={personal.cvPath}>↓ Download CV</Button>
              <Button outline href={personal.contact.medium}>Medium ↗</Button>
              <Button outline onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact
              </Button>
            </div>
          </div>

          {/* Right — interest cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {personal.interests.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "18px 20px", borderRadius: 16,
                  background: COLORS.bgSoft,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 14, marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
