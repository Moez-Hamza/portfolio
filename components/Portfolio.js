import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  const { resolvedTheme, setTheme } = useTheme();
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

  // Default to dark until the persisted theme has resolved (avoids hydration flash).
  const dark = mounted ? resolvedTheme === "dark" : true;
  const setDark = (updater) => {
    const next = typeof updater === "function" ? updater(dark) : updater;
    setTheme(next ? "dark" : "light");
  };

  const t = T[lang];
  const c = theme(dark);

  return (
    <div style={{ fontFamily: sans, minHeight: "100vh", background: c.bp_bg }}>
      <Navbar t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} c={c} />
      <Hero t={t} c={c} />
      <About t={t} lang={lang} c={c} />
      <Skills t={t} c={c} />
      <Projects t={t} lang={lang} c={c} />
      <Contact t={t} c={c} />
      <Footer t={t} c={c} />
    </div>
  );
}
