// ─────────────────────────────────────────────────────────────
//  src/sections/Certifications.jsx
// ─────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Tag, Button } from "../components/ui.jsx";
import { certifications } from "../data/certifications.js";
import { useLanguage } from "../i18n.jsx";

export default function Certifications() {
  const { t } = useLanguage();
  const [activeCertificate, setActiveCertificate] = useState(null);
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
            <CertCard key={cert.id} cert={cert} t={t} onViewCertificate={setActiveCertificate} />
          ))}
        </div>
      </div>
      {activeCertificate && (
        <CertificateModal
          cert={activeCertificate}
          t={t}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </section>
  );
}

function CertCard({ cert, t, onViewCertificate }) {
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

      {(cert.image || cert.url) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
          {cert.image && (
            <Button onClick={() => onViewCertificate(cert)} small outline>
              {t.viewCertificate}
            </Button>
          )}
          {cert.url && (
          <Button href={cert.url} small outline>{t.credential}</Button>
          )}
        </div>
      )}
    </div>
  );
}

function CertificateModal({ cert, t, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 300,
        background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px clamp(16px,4vw,40px)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${cert.title} certificate`}
        onClick={(event) => event.stopPropagation()}
        style={{
          background: COLORS.bg, border: `1px solid ${COLORS.border}`,
          borderRadius: 16, width: "min(900px, 100%)", maxHeight: "90vh",
          overflowY: "auto", padding: "24px clamp(18px,4vw,32px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, marginBottom: 18 }}>
          <div>
            <h3 style={{ margin: "0 0 6px", color: COLORS.text, fontSize: 19 }}>{cert.title}</h3>
            <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{cert.org}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            style={{
              flex: "0 0 auto", background: COLORS.bgSoft, border: "none", borderRadius: "50%",
              width: 36, height: 36, cursor: "pointer", fontSize: 16, color: COLORS.textMuted,
            }}
          >✕</button>
        </div>
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          style={{ display: "block", width: "100%", maxHeight: "68vh", objectFit: "contain", borderRadius: 10, background: COLORS.bgSoft }}
        />
        {cert.url && (
          <div style={{ marginTop: 18 }}>
            <Button href={cert.url} small outline>{t.credential}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
