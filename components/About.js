import React from "react";
import { mono, serif, sans } from "../lib/theme";
import { RuledBg, SectionLabel } from "./atoms";
import { EXPERIENCE, PROFILE } from "../data/content";

export default function About({ t, lang, c }) {
  return (
    <section id="a-propos" style={{ background: c.paper_bg, position: "relative", overflow: "hidden", padding: "5rem 2rem" }}>
      <RuledBg c={c} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel text={t.about_title} c={c} />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div style={{ borderLeft: `2px solid ${c.red}`, paddingLeft: "1.25rem" }}>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: c.ink, lineHeight: 1.8, fontSize: "0.97rem", marginBottom: "1rem" }}>
              {t.about_p1}
            </p>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: c.ink2, lineHeight: 1.8, fontSize: "0.92rem" }}>
              {t.about_p2}
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={{ color: c.gold, fontFamily: serif, fontStyle: "italic", fontSize: "0.85rem", textDecoration: "none" }}>
                ↗ GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: c.gold, fontFamily: serif, fontStyle: "italic", fontSize: "0.85rem", textDecoration: "none" }}>
                ↗ LinkedIn
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: "0.62rem", color: c.ink3, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {t.exp_title}
            </div>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ marginBottom: "1rem", paddingLeft: "1rem", borderLeft: `1.5px solid ${c.bp_line}`, position: "relative" }}>
                <div style={{ color: c.ink, fontWeight: 600, fontFamily: sans, fontSize: "0.88rem" }}>{e.company}</div>
                <div style={{ color: c.gold, fontFamily: serif, fontStyle: "italic", fontSize: "0.78rem", margin: "1px 0" }}>{e.role[lang]}</div>
                <div style={{ color: c.ink3, fontFamily: mono, fontSize: "0.68rem" }}>{e.period}</div>
                <div style={{ position: "absolute", left: "-4px", top: "6px", width: "6px", height: "6px", borderRadius: "50%", border: `1.5px solid ${c.red}`, background: c.paper_bg }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
