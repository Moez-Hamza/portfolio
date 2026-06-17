import React, { useState, useEffect } from "react";
import { theme, sans } from "../lib/theme";
import { T } from "../data/content";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (saved === "fr" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (mounted) window.localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const t = T[lang];
  const c = theme();

  return (
    <div style={{ fontFamily: sans, minHeight: "100vh", background: c.bp_bg }}>
      <Navbar t={t} lang={lang} setLang={setLang} c={c} />
      <Hero t={t} c={c} />
      <About t={t} lang={lang} c={c} />
      <Skills t={t} c={c} />
      <Projects t={t} lang={lang} c={c} />
      <Contact t={t} c={c} />
      <Footer t={t} c={c} />
    </div>
  );
}
