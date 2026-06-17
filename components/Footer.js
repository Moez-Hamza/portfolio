import React from "react";
import { mono, serif } from "../lib/theme";

export default function Footer({ t, c }) {
  return (
    <footer
      className="site-footer"
      style={{
        background: c.footer_bg,
        borderTop: `1px solid ${c.bp_line}`,
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontFamily: mono, color: c.bp_label, fontSize: "0.68rem", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} MOEZ HAMZA
      </span>
      <span style={{ fontFamily: serif, fontStyle: "italic", color: c.gold, fontSize: "0.78rem" }}>{t.footer}</span>
      <span style={{ fontFamily: mono, color: c.bp_label, fontSize: "0.62rem" }}>REV.2025.06</span>
    </footer>
  );
}
