import React, { useState } from "react";
import { mono, serif, sans } from "../lib/theme";
import { RuledBg, SectionLabel } from "./atoms";
import { PRO, SCHOOL } from "../data/content";

export default function Projects({ t, lang, c }) {
  const [tab, setTab] = useState("pro");
  const projects = tab === "pro" ? PRO : SCHOOL;
  return (
    <section id="projets" style={{ background: c.paper_bg2, position: "relative", overflow: "hidden", padding: "5rem 2rem" }}>
      <RuledBg c={c} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel text={t.projects_title} c={c} />
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
          {["pro", "school"].map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              style={{
                padding: "0.4rem 1.2rem",
                cursor: "pointer",
                fontFamily: mono,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                borderRadius: "2px",
                background: tab === k ? c.ink : "transparent",
                color: tab === k ? c.paper_bg : c.ink2,
                border: `1.5px solid ${tab === k ? c.ink : c.card_border}`,
              }}
            >
              {k === "pro" ? t.pro_label : t.school_label}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: c.paper_bg,
                border: `1px solid ${c.card_border}`,
                borderLeft: `3px solid ${c.bp_line}`,
                padding: "1.25rem 1.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-left-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = c.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = c.bp_line)}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "35%",
                  backgroundImage: `repeating-linear-gradient(transparent,transparent 27px,${c.ruled} 27px,${c.ruled} 28px)`,
                  backgroundPosition: "0 16px",
                  pointerEvents: "none",
                  opacity: 0.5,
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", alignItems: "flex-start", gap: "0.75rem", position: "relative" }}>
                <div>
                  <span style={{ fontFamily: sans, fontWeight: 700, color: c.ink, fontSize: "0.98rem" }}>{p.name}</span>
                  <span style={{ fontFamily: serif, fontStyle: "italic", color: c.ink3, fontSize: "0.76rem", marginLeft: "0.75rem" }}>{p.type[lang]}</span>
                </div>
                <span style={{ fontFamily: mono, color: c.gold, fontSize: "0.72rem", flexShrink: 0 }}>{p.year}</span>
              </div>
              <p style={{ fontFamily: serif, fontStyle: "italic", color: c.ink2, fontSize: "0.87rem", lineHeight: 1.65, margin: "0 0 0.75rem", position: "relative" }}>
                {p.desc[lang]}
              </p>
              <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", alignItems: "center", position: "relative" }}>
                {p.tags.map((tg) => (
                  <span key={tg} style={{ fontFamily: mono, fontSize: "0.66rem", padding: "2px 8px", background: c.tag_bg, color: c.tag_text, border: `1px solid ${c.card_border}`, borderRadius: "2px" }}>
                    {tg}
                  </span>
                ))}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: "0.66rem", color: c.gold, textDecoration: "none", border: `1px solid ${c.gold}`, padding: "2px 8px", borderRadius: "2px" }}>
                    ↗ {t.code}
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: "0.66rem", color: c.red, textDecoration: "none", border: `1px solid ${c.red}`, padding: "2px 8px", borderRadius: "2px" }}>
                    ▶ {t.demo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
