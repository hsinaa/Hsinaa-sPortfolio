// ─────────────────────────────────────────────────────────────
//  src/sections/Experience.jsx
// ─────────────────────────────────────────────────────────────

import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Tag } from "../components/ui.jsx";
import TimelineItem, { Timeline } from "../components/TimelineItem.jsx";
import { useLanguage } from "../i18n.jsx";

export default function Experience() {
  const { experience, t } = useLanguage();
  return (
    <section id="experience" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bg }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionLabel>{t.experienceLabel}</SectionLabel>
        <SectionTitle>{t.experienceTitle}</SectionTitle>

        <div style={{ marginTop: 48 }}>
          <Timeline>
            {experience.map((job, i) => (
              <TimelineItem key={job.id} isLast={i === experience.length - 1}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", flexWrap: "wrap", gap: 8,
                }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: COLORS.text }}>
                      {job.role}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary, marginTop: 4 }}>
                      {job.company}
                    </div>
                    {job.period && (
                      <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 3 }}>
                        {job.period}
                      </div>
                    )}
                  </div>
                  <Tag label={job.type} />
                </div>

                <div style={{ marginTop: 16 }}>
                  {job.projectTitle && (
                    <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.text, marginBottom: 8 }}>
                      {job.projectTitle}
                    </div>
                  )}
                  <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
                    {job.description}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {job.tools.map((t) => <Tag key={t} label={t} small />)}
                  </div>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
