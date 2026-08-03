// ─────────────────────────────────────────────────────────────
//  src/sections/Projects.jsx
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Tag } from "../components/ui.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import { useLanguage } from "../i18n.jsx";

export default function Projects() {
  const { projects, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bgSoft }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>{t.projectsLabel}</SectionLabel>
        <SectionTitle>{t.projectsTitle}</SectionTitle>
        <p style={{ color: COLORS.textMuted, fontSize: 15, marginTop: 12, marginBottom: 48, maxWidth: 520, lineHeight: 1.7 }}>
          {t.projectsIntro}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              onOpen={() => setActiveIndex(i)}
              t={t}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ProjectModal
          project={projects[activeIndex]}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, index, onOpen, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.bgCard,
        borderRadius: 12,
        border: `1px solid ${hovered ? COLORS.primary : COLORS.border}`,
        padding: "28px 28px 24px",
        display: "flex", flexDirection: "column",
        transition: "box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered ? "0 8px 36px rgba(0,0,0,0.42)" : "0 2px 12px rgba(0,0,0,0.24)",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      {/* Number badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 36, height: 36, borderRadius: 10,
        background: COLORS.primary,
        color: COLORS.bg, fontWeight: 800, fontSize: 13,
        marginBottom: 18,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 style={{ fontWeight: 800, fontSize: 15, color: COLORS.text, lineHeight: 1.4, marginBottom: 10 }}>
        {project.title}
      </h3>

      <p style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.7, flex: 1, marginBottom: 18 }}>
        {project.short}
      </p>

      {/* First 4 tools + overflow count */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
        {project.tools.slice(0, 4).map((t) => <Tag key={t} label={t} small />)}
        {project.tools.length > 4 && <Tag label={`+${project.tools.length - 4}`} small />}
      </div>

      <button
        onClick={onOpen}
        style={{
          background: hovered ? COLORS.primary : "none",
          border: `1.5px solid ${COLORS.primary}`,
          borderRadius: 7, padding: "8px 20px",
          fontSize: 13, fontWeight: 700,
          color: hovered ? "#fff" : COLORS.primary,
          cursor: "pointer", alignSelf: "flex-start",
          transition: "all 0.2s",
          fontFamily: "inherit",
        }}
      >
        {t.viewDetails}
      </button>
    </div>
  );
}
