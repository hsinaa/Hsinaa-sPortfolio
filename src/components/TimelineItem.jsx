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
        borderRadius: 6,
        background: COLORS.primary,
        boxShadow: `0 0 0 5px ${COLORS.accentSoft}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
      </div>

      {/* Card */}
      <div style={{
        background: COLORS.bgCard,
        border: `1px solid ${COLORS.border}`,
        borderLeft: `3px solid ${COLORS.primary}`,
        borderRadius: 12,
        padding: "28px 32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.28)",
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
        background: COLORS.border,
        borderRadius: 2,
      }} />
      {children}
    </div>
  );
}
