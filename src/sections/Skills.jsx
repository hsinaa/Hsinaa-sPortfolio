// ─────────────────────────────────────────────────────────────
//  src/sections/Skills.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle } from "../components/ui.jsx";
import { useLanguage } from "../i18n.jsx";

export default function Skills() {
  const { skillGroups, t } = useLanguage();
  return (
    <section
      id="skills"
      style={{
        padding: "96px clamp(20px,5vw,80px)",
        background: "linear-gradient(160deg, #0D1117 0%, #161B22 60%, #24292F 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel light>{t.skillsLabel}</SectionLabel>
        <SectionTitle light>{t.skillsTitle}</SectionTitle>
        <p style={{
          color: COLORS.textMuted, fontSize: 15,
          marginTop: 12, marginBottom: 52, lineHeight: 1.7,
        }}>
          {t.skillsIntro}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {skillGroups.map((group) => (
            <div
              key={group.id}
              style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: "28px 24px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 22 }}>{group.icon}</span>
                <span style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}>{group.label}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-block",
                      padding: "5px 13px",
                      borderRadius: 6,
                      fontSize: 12, fontWeight: 600,
                      background: "rgba(114,212,155,0.08)",
                      border: "1px solid rgba(114,212,155,0.25)",
                      color: COLORS.primaryLight,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
