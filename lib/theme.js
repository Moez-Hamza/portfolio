// Blueprint design tokens — a single, fixed blueprint-navy palette (no dark mode).
// Page background is the deepest navy; panels ("windows") are clearly lighter
// navy with visible borders + shadow so they read as distinct sheets.
export const theme = () => ({
  // Blueprint sections (page background)
  bp_bg: "#0a1424",
  bp_grid: "rgba(82,140,220,0.10)",
  bp_line: "rgba(96,150,225,0.45)",
  bp_text: "rgba(150,190,255,0.80)",
  bp_label: "rgba(150,190,255,0.55)",
  // Panel / "window" sections — clearly lighter navy than the page
  paper_bg: "#1a2f52",
  paper_bg2: "#10213a",
  ruled: "rgba(120,165,235,0.10)",
  // Text on panels
  ink: "#eaf1fd",
  ink2: "#a8c1e6",
  ink3: "#6f89b3",
  // Accents
  gold: "#c9a86c",
  gold_dark: "#8a6630",
  red: "#c0392b",
  // Nav
  nav_bg: "rgba(10,20,36,0.97)",
  // Card border + shadow
  card_border: "rgba(96,150,225,0.38)",
  panel_shadow: "0 14px 40px rgba(0,0,0,0.38)",
  // Tag bg on panels
  tag_bg: "rgba(82,140,220,0.12)",
  tag_text: "#a8c1e6",
  footer_bg: "#070f1c",
});

export const mono = "'Courier New', Courier, monospace";
export const serif = "Georgia, 'Times New Roman', serif";
export const sans =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export function sketchBtn(v, c) {
  const base = {
    padding: "0.55rem 1.4rem",
    fontFamily: serif,
    fontStyle: "italic",
    fontSize: "0.88rem",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.2s",
    borderRadius: "2px",
  };
  if (v === "filled")
    return { ...base, background: c.ink, color: c.paper_bg, border: `1.5px solid ${c.ink}` };
  return { ...base, background: "transparent", color: c.ink, border: `1.5px solid ${c.ink2}` };
}
