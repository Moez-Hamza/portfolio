import React from "react";
import { mono, serif } from "../lib/theme";
import { GridBg, RuledBg, SectionLabel } from "./atoms";
import { SKILLS, CERT } from "../data/content";
import Reveal from "./Reveal";

export default function Skills({ t, c }) {
  return (
    <section id="competences" style={{ background: c.bp_bg, position: "relative", overflow: "hidden", padding: "5rem 2rem" }}>
      <GridBg c={c} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel text={t.skills_title} c={c} />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} style={{ background: "rgba(82,140,220,0.05)", border: `1px solid ${c.bp_line}`, padding: "0.7rem 1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontFamily: mono, color: c.bp_text, fontSize: "0.82rem" }}>{s.name}</span>
                <span style={{ fontFamily: mono, color: c.gold, fontSize: "0.72rem" }}>{s.level}%</span>
              </div>
              <div style={{ height: "3px", background: "rgba(82,140,220,0.12)" }}>
                <div style={{ height: "100%", width: `${s.level}%`, background: `linear-gradient(90deg,${c.gold_dark},${c.gold})` }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* cert — paper card on blueprint bg */}
        <Reveal
          as="a"
          delay={120}
          href={CERT.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "2rem",
            textDecoration: "none",
            background: c.paper_bg,
            padding: "1.2rem 1.5rem",
            border: `1px solid ${c.card_border}`,
            borderLeft: `3px solid ${c.gold}`,
            boxShadow: c.panel_shadow,
            position: "relative",
            overflow: "hidden",
            transition: "border-left-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = c.red)}
          onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = c.gold)}
        >
          <RuledBg c={c} />
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: "0.6rem", color: c.ink3, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {t.cert_label}
              </div>
              <div style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 700, color: c.ink, margin: "4px 0 2px" }}>{CERT.label}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", color: c.gold, fontSize: "0.82rem" }}>{CERT.issuer}</div>
            </div>
            <span style={{ fontFamily: mono, color: c.gold, fontSize: "0.8rem" }}>↗</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
