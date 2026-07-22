// ─────────────────────────────────────────────────────────────
//  src/sections/Contact.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { COLORS } from "../styles/tokens.js";
import { SectionLabel, SectionTitle, Button } from "../components/ui.jsx";
import { useLanguage } from "../i18n.jsx";

// ✏️  Edit these link rows to change icons, labels, or order
const contactLinks = (c) => [
  { icon: "📧", label: "Email",    value: c.email,                   href: `mailto:${c.email}`   },
  { icon: "📱", label: "Phone",    value: c.phone,                   href: `tel:${c.phone.replace(/\s/g, "")}` },
  { icon: "💼", label: "LinkedIn", value: "hasnae-amansag",          href: c.linkedin            },
  { icon: "📝", label: "Medium",   value: "@amansag.hasnae",         href: c.medium              },
  { icon: "💻", label: "GitHub",   value: "hsinaa",                  href: c.github              },
];

const inputStyle = (focus, COLORS) => ({
  width: "100%", padding: "12px 16px", borderRadius: 12,
  border: `1.5px solid ${focus ? COLORS.primary : COLORS.border}`,
  fontSize: 14, color: COLORS.text, background: COLORS.bgSoft,
  outline: "none", fontFamily: "inherit",
  transition: "border-color 0.2s", boxSizing: "border-box",
});

export default function Contact() {
  const { personal, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focus, setFocus] = useState({});
  const [sent,  setSent]  = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const links = contactLinks(personal.contact).map((link) => link.label === "Phone" ? { ...link, label: t.phone } : link);

  return (
    <section id="contact" style={{ padding: "96px clamp(20px,5vw,80px)", background: COLORS.bgSoft }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>{t.contactLabel}</SectionLabel>
        <SectionTitle>{t.contactTitle}</SectionTitle>
        <p style={{ color: COLORS.textMuted, fontSize: 15, marginTop: 12, marginBottom: 56, lineHeight: 1.7 }}>
          {t.contactIntro}
        </p>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

          {/* Left — contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "16px 20px", borderRadius: 14,
                  background: COLORS.bg,
                  border: `1px solid ${COLORS.border}`,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.04)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(99,102,241,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(99,102,241,0.04)")}
              >
                <span style={{ fontSize: 20 }}>{l.icon}</span>
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: COLORS.accent,
                    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2,
                  }}>
                    {l.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>
                    {l.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — contact form */}
          <div style={{
            background: COLORS.bg, border: `1px solid ${COLORS.border}`,
            borderRadius: 20, padding: "36px 32px",
            boxShadow: "0 4px 24px rgba(99,102,241,0.07)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✨</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: COLORS.text, marginBottom: 8 }}>
                  {t.messageReceived}
                </div>
                <div style={{ color: COLORS.textMuted, fontSize: 14 }}>
                  {t.response}
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { name: "name",    label: t.name,    type: "text",  placeholder: t.yourName       },
                  { name: "email",   label: t.email,   type: "email", placeholder: "your@email.com"  },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{
                      fontSize: 12, fontWeight: 700, color: COLORS.textMid,
                      letterSpacing: "0.06em", display: "block", marginBottom: 6,
                    }}>
                      {f.label}
                    </label>
                    <input
                      name={f.name}
                      type={f.type}
                      value={form[f.name]}
                      placeholder={f.placeholder}
                      onChange={handle}
                      onFocus={() => setFocus({ ...focus, [f.name]: true  })}
                      onBlur={()  => setFocus({ ...focus, [f.name]: false })}
                      style={inputStyle(focus[f.name], COLORS)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{
                    fontSize: 12, fontWeight: 700, color: COLORS.textMid,
                    letterSpacing: "0.06em", display: "block", marginBottom: 6,
                  }}>
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    placeholder={t.yourMessage}
                    onChange={handle}
                    onFocus={() => setFocus({ ...focus, message: true  })}
                    onBlur={()  => setFocus({ ...focus, message: false })}
                    style={{ ...inputStyle(focus.message, COLORS), resize: "vertical" }}
                  />
                </div>
                <Button onClick={submit}>{t.sendMessage}</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
