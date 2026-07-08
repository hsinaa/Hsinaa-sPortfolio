// ─────────────────────────────────────────────────────────────
//  src/sections/Education.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Tag } from "../components/ui.jsx";
import TimelineItem, { Timeline } from "../components/TimelineItem.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bgSoft }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionLabel>Education</SectionLabel>
        <SectionTitle>Academic Background</SectionTitle>

        <div style={{ marginTop: 48 }}>
          <Timeline>
            {education.map((entry, i) => (
              <TimelineItem key={entry.id} isLast={i === education.length - 1}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", flexWrap: "wrap", gap: 8,
                }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: COLORS.text }}>
                      {entry.school}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary, marginTop: 5 }}>
                      {entry.degree} · {entry.field}
                    </div>
                    {entry.period && (
                      <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 3 }}>
                        {entry.period}
                      </div>
                    )}
                  </div>
                  <Tag label={entry.tag} />
                </div>
                {entry.description && (
                  <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.75, marginTop: 14, marginBottom: 0 }}>
                    {entry.description}
                  </p>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
