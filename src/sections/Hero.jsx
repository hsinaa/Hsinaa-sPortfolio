// ─────────────────────────────────────────────────────────────
//  src/sections/Hero.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { Button, Tag } from "../components/ui.jsx";
import MeshCanvas from "../components/MeshCanvas.jsx";
import { useLanguage } from "../i18n.jsx";

export default function Hero() {
  const { personal, t } = useLanguage();
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(145deg, #F0F0FF 0%, #FAF9FF 40%, #EDE9FE 100%)",
        display: "flex",
        alignItems: "center",
        padding: "80px clamp(20px,5vw,80px) 60px",
        overflow: "hidden",
      }}
    >
      <MeshCanvas />

      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 440, height: 440, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 60, left: -60,
        width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 640 }}>

          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: COLORS.accentSoft,
            border: `1px solid ${COLORS.accentLight}`,
            borderRadius: 999, padding: "5px 16px", marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: COLORS.accent, display: "inline-block",
            }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.accent, letterSpacing: "0.06em" }}>
              {personal.status}
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 900,
            color: COLORS.text,
            lineHeight: 1.08,
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}>
            {personal.name.split(" ")[0]}
            <br />
            <span style={{
              background: `linear-gradient(135deg, ${COLORS.gradA}, ${COLORS.gradB})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Title */}
          <p style={{
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            fontWeight: 600,
            color: COLORS.textMid,
            marginBottom: 12,
            letterSpacing: "-0.01em",
          }}>
            {personal.title} · {personal.subtitle}
          </p>

          {/* Tagline */}
          <p style={{
            fontSize: 16,
            color: COLORS.textMuted,
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 480,
          }}>
            {personal.tagline}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button href={personal.cvPath}>{t.downloadCv}</Button>
            <Button outline onClick={scrollToContact}>{t.contactMe}</Button>
          </div>

          {/* Floating tech tags */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 44 }}>
            {personal.heroTags.map((t) => <Tag key={t} label={t} small />)}
          </div>
        </div>
      </div>
    </section>
  );
}
