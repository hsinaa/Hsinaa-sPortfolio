// ─────────────────────────────────────────────────────────────
//  src/components/ui.jsx
//
//  Primitive UI building blocks used across sections.
//  Edit styles here to change how tags, buttons, and labels look.
// ─────────────────────────────────────────────────────────────

import { COLORS, FONTS, gradient } from "../styles/tokens.js";

// ── Section eye-brow label ───────────────────────────────────
export function SectionLabel({ children, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
        fontFamily: FONTS.mono,
        textTransform: "uppercase",
        color: light ? COLORS.accentLight : COLORS.accent,
      }}>
        <span style={{ color: COLORS.primary, marginRight: 7 }}>$</span>
        {children}
      </span>
      <div style={{
        flex: 1, height: 1,
        background: light ? "rgba(255,255,255,0.15)" : COLORS.border,
      }} />
    </div>
  );
}

// ── Section heading ──────────────────────────────────────────
export function SectionTitle({ children, light }) {
  return (
    <h2 style={{
      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
      fontWeight: 800,
      color: light ? "#fff" : COLORS.text,
      lineHeight: 1.15,
      marginBottom: 0,
    }}>
      {children}
    </h2>
  );
}

// ── Pill / tag ───────────────────────────────────────────────
export function Tag({ label, small }) {
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "2px 10px" : "4px 12px",
      borderRadius: 6,
      fontSize: small ? 11 : 12,
      fontWeight: 600, fontFamily: FONTS.mono,
      background: COLORS.accentSoft,
      color: COLORS.accent,
      border: `1px solid ${COLORS.accentLight}`,
    }}>
      {label}
    </span>
  );
}

// ── Gradient or outlined button ──────────────────────────────
export function Button({ children, onClick, outline, href, small }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: small ? "8px 18px" : "11px 26px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: small ? 13 : 14,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s",
    border: "none",
    fontFamily: FONTS.mono,
  };

  const filled = {
    ...base,
    background: gradient,
    color: "#fff",
    boxShadow: "0 4px 20px rgba(114,212,155,0.18)",
  };

  const outlined = {
    ...base,
    background: "transparent",
    color: COLORS.primary,
    border: `2px solid ${COLORS.primary}`,
  };

  const style = outline ? outlined : filled;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
