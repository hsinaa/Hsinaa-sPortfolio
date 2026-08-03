// ─────────────────────────────────────────────────────────────
//  src/sections/Certifications.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Tag, Button } from "../components/ui.jsx";
import { certifications } from "../data/certifications.js";
import { useLanguage } from "../i18n.jsx";

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <section id="certifications" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>{t.certificationsLabel}</SectionLabel>
        <SectionTitle>{t.certificationsTitle}</SectionTitle>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
          marginTop: 48,
        }}>
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.bgSoft,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: 12,
        padding: "32px 28px",
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        transition: "box-shadow 0.2s, transform 0.2s",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.40)" : "0 2px 12px rgba(0,0,0,0.22)",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 10,
        background: COLORS.accentSoft,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, marginBottom: 20,
      }}>
        {cert.icon}
      </div>

      <div style={{ fontWeight: 800, fontSize: 16, color: COLORS.text, marginBottom: 6 }}>
        {cert.title}
      </div>
      <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, marginBottom: 14 }}>
        {cert.subtitle}
      </div>

      <Tag label={cert.org} small />

      {cert.url && (
        <div style={{ marginTop: 14 }}>
          <Button href={cert.url} small outline>{t.credential}</Button>
        </div>
      )}
    </div>
  );
}
