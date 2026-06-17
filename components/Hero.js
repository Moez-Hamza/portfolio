import React from "react";
import { mono, serif } from "../lib/theme";
import { GridBg, RuledBg } from "./atoms";
import { sketchBtn } from "../lib/theme";
import { PROFILE } from "../data/content";
import Reveal from "./Reveal";

export default function Hero({ t, c }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: c.bp_bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GridBg c={c} />
      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: c.bp_grid, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: c.bp_grid, pointerEvents: "none" }} />

      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          maxWidth: "960px",
          width: "100%",
          padding: "7rem 2rem 4rem",
        }}
      >
        {/* Photo + blueprint frame */}
        <Reveal className="soft" style={{ position: "relative", flexShrink: 0 }}>
          {[["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]].map(([v, h], i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                [v]: "-8px",
                [h]: "-8px",
                width: "16px",
                height: "16px",
                borderTop: v === "top" ? `1.5px solid ${c.gold}` : "none",
                borderBottom: v === "bottom" ? `1.5px solid ${c.gold}` : "none",
                borderLeft: h === "left" ? `1.5px solid ${c.gold}` : "none",
                borderRight: h === "right" ? `1.5px solid ${c.gold}` : "none",
              }}
            />
          ))}
          <div style={{ width: "190px", height: "230px", overflow: "hidden", border: `1px solid ${c.bp_line}`, position: "relative" }}>
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `repeating-linear-gradient(transparent,transparent 7px,rgba(11,24,41,0.05) 7px,rgba(11,24,41,0.05) 8px)`,
                pointerEvents: "none",
              }}
            />
          </div>
          {/* dim labels */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "5px", gap: "4px", alignItems: "center" }}>
            <div style={{ height: "1px", width: "12px", background: c.gold }} />
            <span style={{ fontFamily: mono, fontSize: "0.6rem", color: c.gold }}>190</span>
            <div style={{ height: "1px", width: "12px", background: c.gold }} />
          </div>
          <div style={{ position: "absolute", right: "-34px", top: 0, height: "230px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
            <div style={{ width: "1px", height: "20px", background: c.gold }} />
            <span style={{ fontFamily: mono, fontSize: "0.6rem", color: c.gold, writingMode: "vertical-lr" }}>230</span>
            <div style={{ width: "1px", height: "20px", background: c.gold }} />
          </div>
        </Reveal>

        {/* Paper card */}
        <Reveal delay={140} className="hero-card" style={{ flex: 1 }}>
        <div style={{ position: "relative", background: c.paper_bg, padding: "2rem 2rem 2rem 2.5rem", border: `1px solid ${c.card_border}`, borderLeft: `3px solid ${c.red}`, boxShadow: c.panel_shadow, overflow: "hidden" }}>
          <RuledBg c={c} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: mono, fontSize: "0.62rem", color: c.ink3, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              {t.role}
            </div>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 700, color: c.ink, margin: "0 0 0.6rem", lineHeight: 1.1 }}>
              {PROFILE.name}
            </h1>
            <svg width="170" height="6" style={{ display: "block", marginBottom: "1rem" }}>
              <path className="draw-path" pathLength="1" d="M2,4 Q42,1 88,3 Q134,5 168,2" stroke={c.red} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: c.ink2, fontSize: "0.93rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
              {t.hero_sub}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={sketchBtn("outline", c)}>
                GitHub ↗
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={sketchBtn("filled", c)}>
                LinkedIn ↗
              </a>
            </div>
            <span style={{ position: "absolute", top: "0.5rem", right: "0.75rem", fontFamily: serif, fontStyle: "italic", fontSize: "0.68rem", color: c.ink3 }}>
              {PROFILE.location}
            </span>
          </div>
        </div>
        </Reveal>
      </div>

      <div style={{ position: "absolute", bottom: "1.5rem", left: "2rem", fontFamily: mono, fontSize: "0.58rem", color: c.bp_label, letterSpacing: "0.1em" }}>
        MOEZ-HAMZA / PORTFOLIO / REV.2025
      </div>
      <div style={{ position: "absolute", bottom: "1.5rem", right: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <span style={{ fontFamily: mono, color: c.bp_label, fontSize: "0.58rem", letterSpacing: "0.1em" }}>{t.scroll}</span>
        <div style={{ width: "1px", height: "32px", background: `linear-gradient(to bottom,${c.gold},transparent)` }} />
      </div>
    </section>
  );
}
