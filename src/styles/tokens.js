// ─────────────────────────────────────────────────────────────
//  src/styles/tokens.js
//
//  ✏️  EDIT THIS FILE to change colors, fonts, or spacing
//      globally across the entire portfolio.
// ─────────────────────────────────────────────────────────────

export const COLORS = {
  bg:           "#FFFFFF",
  bgSoft:       "#F8F7FF",
  bgCard:       "#FFFFFF",

  primary:      "#4F46E5",   // indigo-600  — main brand color
  primaryLight: "#818CF8",   // indigo-400
  accent:       "#7C3AED",   // violet-600
  accentLight:  "#C4B5FD",   // violet-300
  accentSoft:   "#EDE9FE",   // violet-100  — pill backgrounds

  text:         "#1E1B4B",   // indigo-950  — headings
  textMid:      "#4338CA",   // indigo-700  — sub-headings
  textMuted:    "#6B7280",   // gray-500    — body / captions

  border:       "#E0E7FF",

  gradA:        "#6366F1",   // gradient start (indigo)
  gradB:        "#8B5CF6",   // gradient end   (violet)
};

export const FONTS = {
  family: "'Inter', system-ui, sans-serif",
};

// Reusable CSS-in-JS style helpers
export const gradient = `linear-gradient(135deg, ${COLORS.gradA}, ${COLORS.gradB})`;

export const cardBase = {
  background: COLORS.bgCard,
  border:     `1px solid ${COLORS.border}`,
  borderRadius: 20,
  boxShadow:  "0 2px 12px rgba(99,102,241,0.06)",
  transition: "box-shadow 0.25s, transform 0.25s",
};

export const cardHover = {
  boxShadow: "0 8px 36px rgba(99,102,241,0.16)",
  transform: "translateY(-3px)",
};
