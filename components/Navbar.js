import React, { useState, useEffect } from "react";
import { mono, serif } from "../lib/theme";

const ids = ["a-propos", "competences", "projets", "contact"];

export default function Navbar({ t, lang, setLang, dark, setDark, c }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (i) =>
    document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: scrolled ? c.nav_bg : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${c.bp_line}` : "none",
        transition: "all 0.3s",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontFamily: mono, color: c.gold, fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em" }}>
          MH.
        </span>
        <span style={{ fontFamily: serif, fontStyle: "italic", color: c.bp_text, fontSize: "0.72rem" }}>
          arch → dev
        </span>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <div className="nav-sections" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {t.nav.map((l, i) => (
            <button
              key={l}
              onClick={() => go(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: c.bp_text,
                fontFamily: mono,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = c.gold)}
              onMouseLeave={(e) => (e.target.style.color = c.bp_text)}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}
          aria-label="Toggle language"
          style={{
            background: "rgba(82,140,220,0.12)",
            border: `1px solid ${c.bp_line}`,
            borderRadius: "3px",
            cursor: "pointer",
            color: c.gold,
            fontFamily: mono,
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "3px 9px",
            letterSpacing: "0.1em",
          }}
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          style={{
            background: "rgba(82,140,220,0.12)",
            border: `1px solid ${c.bp_line}`,
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "0.9rem",
            padding: "3px 7px",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
