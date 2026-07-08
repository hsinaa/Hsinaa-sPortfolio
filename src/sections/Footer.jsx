// ─────────────────────────────────────────────────────────────
//  src/sections/Footer.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { personal } from "../data/personal.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: COLORS.text, padding: "32px clamp(20px,5vw,80px)", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
        © {year} {personal.name} · {personal.title}
      </p>
    </footer>
  );
}
