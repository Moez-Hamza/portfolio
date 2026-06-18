import React from "react";
import { mono, serif } from "../lib/theme";
import { GridBg, RuledBg, SectionLabel } from "./atoms";
import { sketchBtn } from "../lib/theme";
import { PROFILE, RESUME_URL } from "../data/content";
import Reveal from "./Reveal";

export default function Contact({ t, c, lang }) {
  const contacts = [
    { label: "email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "tel", value: PROFILE.phone, href: PROFILE.phoneHref },
    { label: "linkedin", value: PROFILE.linkedinUser, href: PROFILE.linkedin },
    { label: "github", value: PROFILE.githubUser, href: PROFILE.github },
  ];
  return (
    <section id="contact" style={{ background: c.bp_bg, position: "relative", overflow: "hidden", padding: "5rem 2rem" }}>
      <GridBg c={c} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel text={t.contact_title} c={c} />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <Reveal delay={0} threshold={0.2}>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: c.bp_text, lineHeight: 1.8, marginBottom: "1.75rem", fontSize: "0.93rem" }}>
              {t.contact_sub}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {contacts.map((ct) => (
                <a
                  key={ct.label}
                  href={ct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.55rem 0.75rem",
                    textDecoration: "none",
                    background: "rgba(82,140,220,0.05)",
                    border: `1px solid ${c.bp_line}`,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.bp_line)}
                >
                  <span style={{ fontFamily: mono, fontSize: "0.6rem", color: c.bp_label, width: "54px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {ct.label}
                  </span>
                  <span style={{ fontFamily: mono, fontSize: "0.8rem", color: c.gold }}>{ct.value}</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140} threshold={0.2} style={{ background: c.paper_bg, padding: "1.75rem", border: `1px solid ${c.card_border}`, borderLeft: `3px solid ${c.red}`, boxShadow: c.panel_shadow, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <RuledBg c={c} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: mono, fontSize: "0.6rem", color: c.ink3, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{"// note"}</div>
              <p style={{ fontFamily: serif, fontStyle: "italic", color: c.ink, fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                {t.loc} <strong>Tunis</strong> — {t.loc2}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <a href={`mailto:${PROFILE.email}`} style={sketchBtn("filled", c)}>{t.send}</a>
                <a href={RESUME_URL[lang]} target="_blank" rel="noopener noreferrer" style={sketchBtn("outline", c)}>
                  {t.dl} ({lang.toUpperCase()})
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
