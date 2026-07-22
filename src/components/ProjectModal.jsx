// ─────────────────────────────────────────────────────────────
//  src/components/ProjectModal.jsx
//
//  Full-detail overlay shown when "View Details" is clicked.
//  Reads all data from the project object passed as a prop.
//  `index` (the project's position in the array) is passed in
//  separately to render the "Project 01" badge, since projects
//  no longer carry their own `id` field.
// ─────────────────────────────────────────────────────────────

import { useEffect } from "react";
import { COLORS, gradient } from "../styles/tokens.js";
import { Tag } from "./ui.jsx";
import { useLanguage } from "../i18n.jsx";

export default function ProjectModal({ project, index, onClose }) {
  const { t } = useLanguage();
  // Close on Escape key; lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(30,27,75,0.55)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px clamp(16px,4vw,40px)",
      }}
    >
      {/* Panel — stop click from closing */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: COLORS.bg,
          borderRadius: 24,
          maxWidth: 700,
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          boxShadow: "0 24px 80px rgba(99,102,241,0.22)",
          padding: "40px clamp(24px,4vw,48px)",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div style={{
            background: gradient,
            borderRadius: 14, padding: "8px 16px",
            fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.08em",
          }}>
            {t.project} {String(index + 1).padStart(2, "0")}
          </div>
          <button
            onClick={onClose}
            style={{
              background: COLORS.bgSoft, border: "none", borderRadius: "50%",
              width: 36, height: 36, cursor: "pointer",
              fontSize: 16, color: COLORS.textMuted,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 800, color: COLORS.text, marginBottom: 20, lineHeight: 1.3 }}>
          {project.title}
        </h3>

        {/* Architecture diagram — real image or placeholder */}
        {project.diagramUrl ? (
          <img
            src={project.diagramUrl}
            alt={`${project.title} architecture diagram`}
            style={{ width: "100%", borderRadius: 14, marginBottom: 28, objectFit: "cover" }}
          />
        ) : (
          <div style={{
            borderRadius: 16,
            border: `2px dashed ${COLORS.accentLight}`,
            background: COLORS.bgSoft,
            height: 160,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            marginBottom: 28, gap: 8,
          }}>
            <span style={{ fontSize: 32 }}>🏗️</span>
            <span style={{ color: COLORS.textMuted, fontSize: 13, fontWeight: 600 }}>Architecture Diagram</span>
            <span style={{ color: COLORS.accentLight, fontSize: 12 }}>
              Add <code>diagramUrl</code> in <code>src/data/projects.js</code> to show a diagram here
            </span>
          </div>
        )}

        {/* Content blocks — full / challenges / results are arrays of
            key-point strings, rendered as bullet lists */}
        {[
          { heading: t.overview,    points: project.full       },
          { heading: t.challenges,  points: project.challenges },
          { heading: t.results,     points: project.results    },
        ].map(({ heading, points }) => (
          <div key={heading} style={{ marginBottom: 20 }}>
            <div style={{
              fontWeight: 700, fontSize: 13, color: COLORS.accent,
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8,
            }}>
              {heading}
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: COLORS.textMuted, fontSize: 14, lineHeight: 1.8 }}>
              {points.map((point, i) => (
                <li key={i} style={{ marginBottom: 4 }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Technologies */}
        <div>
          <div style={{
            fontWeight: 700, fontSize: 13, color: COLORS.accent,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10,
          }}>
            {t.technologies}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tools.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}