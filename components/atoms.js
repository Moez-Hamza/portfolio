import React from "react";
import { mono } from "../lib/theme";

export const GridBg = ({ c }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: `linear-gradient(${c.bp_grid} 1px,transparent 1px),linear-gradient(90deg,${c.bp_grid} 1px,transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
);

export const RuledBg = ({ c }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: `repeating-linear-gradient(transparent,transparent 27px,${c.ruled} 27px,${c.ruled} 28px)`,
      backgroundPosition: "0 16px",
    }}
  />
);

export const SectionLabel = ({ text, c }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}>
    <h2
      style={{
        fontFamily: mono,
        fontSize: "1.25rem",
        fontWeight: 700,
        color: c.gold,
        margin: 0,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {text}
    </h2>
    <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg,${c.bp_line},transparent)` }} />
    <span style={{ fontFamily: mono, fontSize: "0.6rem", color: c.bp_label }}>§</span>
  </div>
);
