// ─────────────────────────────────────────────────────────────
//  src/styles/tokens.js
//
//  ✏️  EDIT THIS FILE to change colors, fonts, or spacing
//      globally across the entire portfolio.
// ─────────────────────────────────────────────────────────────

export const COLORS = {
  bg:           "#0D1117",
  bgSoft:       "#161B22",
  bgCard:       "#24292F",

  primary:      "#72D49B",
  primaryLight: "#A0E8BD",
  accent:       "#79B8FF",
  accentLight:  "#3A6F9F",
  accentSoft:   "#172B3D",

  text:         "#D6DBE1",
  textMid:      "#B7C0CA",
  textMuted:    "#8B949E",

  border:       "#3A4149",

  gradA:        "#72D49B",
  gradB:        "#79B8FF",
};

export const FONTS = {
  family: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'Liberation Mono', 'DejaVu Sans Mono', Consolas, monospace",
};

// Reusable CSS-in-JS style helpers
export const gradient = `linear-gradient(135deg, ${COLORS.gradA}, ${COLORS.gradB})`;

export const cardBase = {
  background: COLORS.bgCard,
  border:     `1px solid ${COLORS.border}`,
  borderRadius: 12,
  boxShadow:  "0 2px 12px rgba(0,0,0,0.24)",
  transition: "box-shadow 0.25s, transform 0.25s",
};

export const cardHover = {
  boxShadow: "0 8px 36px rgba(0,0,0,0.38)",
  transform: "translateY(-3px)",
};
