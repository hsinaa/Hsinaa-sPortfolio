// ─────────────────────────────────────────────────────────────
//  src/sections/Footer.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { useLanguage } from "../i18n.jsx";

export default function Footer() {
  const { personal } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: COLORS.bgCard, borderTop: `1px solid ${COLORS.border}`, padding: "32px clamp(20px,5vw,80px)", textAlign: "center" }}>
      <p style={{ color: COLORS.textMuted, fontSize: 13 }}>
        © {year} {personal.name} · {personal.title}
      </p>
    </footer>
  );
}
