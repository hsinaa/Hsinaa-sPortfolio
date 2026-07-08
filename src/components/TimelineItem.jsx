// ─────────────────────────────────────────────────────────────
//  src/components/TimelineItem.jsx
//
//  Generic vertical-timeline card.
//  Used by both Education and Experience sections.
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { Tag } from "./ui.jsx";

export default function TimelineItem({ children, isLast }) {
  return (
    <div style={{ paddingLeft: 72, position: "relative", marginBottom: isLast ? 0 : 32 }}>
      {/* Dot on the line */}
      <div style={{
        position: "absolute",
        left: 18,
        top: 24,
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${COLORS.gradA}, ${COLORS.gradB})`,
        boxShadow: `0 0 0 5px ${COLORS.accentSoft}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
      </div>

      {/* Card */}
      <div style={{
        background: COLORS.bg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 20,
        padding: "28px 32px",
        boxShadow: "0 4px 24px rgba(99,102,241,0.07)",
      }}>
        {children}
      </div>
    </div>
  );
}

// ── Shared timeline wrapper (line + items) ───────────────────
export function Timeline({ children }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute",
        left: 28,
        top: 0,
        bottom: 0,
        width: 2,
        background: `linear-gradient(to bottom, ${COLORS.gradA}, ${COLORS.gradB})`,
        borderRadius: 2,
      }} />
      {children}
    </div>
  );
}
