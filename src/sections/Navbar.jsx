// ─────────────────────────────────────────────────────────────
//  src/sections/Navbar.jsx
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../styles/tokens.js";
import { Button } from "../components/ui.jsx";
import { useLanguage } from "../i18n.jsx";

export default function Navbar() {
  const { navLinks, personal, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (anchor) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(36,41,47,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
      transition: "all 0.3s",
      fontFamily: FONTS.mono,
      padding: "0 clamp(16px,4vw,60px)",
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span style={{ fontWeight: 800, fontSize: 18, color: COLORS.primary, letterSpacing: "-0.02em" }}>
            {personal.initials.split(".")[0]}
            <span style={{ color: COLORS.accent }}>.</span>
            {personal.initials.split(".")[1]}
          </span>
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {navLinks.map((l) => (
            <button
              key={l.anchor}
              onClick={() => scrollTo(l.anchor)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, color: COLORS.textMid,
                padding: "6px 10px", borderRadius: 8,
              }}
            >
              {l.label}
            </button>
          ))}
          <Button onClick={() => setLanguage(language === "en" ? "fr" : "en")}>Eng/Fr</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", fontSize: 22, color: COLORS.primary,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: "rgba(36,41,47,0.98)",
          backdropFilter: "blur(12px)",
          padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: 4,
          borderTop: `1px solid ${COLORS.border}`,
        }}>
          {navLinks.map((l) => (
            <button
              key={l.anchor}
              onClick={() => scrollTo(l.anchor)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 15, fontWeight: 600, color: COLORS.text,
                padding: "10px 0", textAlign: "left",
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: 8 }}>
            <Button onClick={() => setLanguage(language === "en" ? "fr" : "en")}>Eng/Fr</Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
