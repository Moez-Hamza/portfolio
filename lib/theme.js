// Blueprint design tokens. Two modes share the same blueprint identity.
// Light → paper sections are warm cream; blueprint sections lighter navy.
// Dark  → paper sections become dark graphite-paper; blueprint sections deep navy.
export const theme = (dark) => ({
  // Blueprint sections
  bp_bg: dark ? "#0b1829" : "#162236",
  bp_grid: dark ? "rgba(82,140,220,0.10)" : "rgba(82,140,220,0.13)",
  bp_line: dark ? "rgba(82,140,220,0.50)" : "rgba(82,140,220,0.60)",
  bp_text: dark ? "rgba(140,185,255,0.75)" : "rgba(160,200,255,0.85)",
  bp_label: dark ? "rgba(140,185,255,0.55)" : "rgba(160,200,255,0.65)",
  // Paper / sketch sections
  paper_bg: dark ? "#1e1c18" : "#f7f4ec",
  paper_bg2: dark ? "#191814" : "#f0ece0",
  ruled: dark ? "rgba(255,255,255,0.05)" : "#ddd5c0",
  // Text on paper
  ink: dark ? "#e8e0cc" : "#1e1a10",
  ink2: dark ? "#a89e86" : "#5a4e3a",
  ink3: dark ? "#6e6455" : "#8a7a68",
  // Shared accents — same in both modes
  gold: "#c9a86c",
  gold_dark: "#8a6630",
  red: "#c0392b",
  // Nav
  nav_bg: dark ? "rgba(11,24,41,0.97)" : "rgba(22,34,54,0.97)",
  // Card border
  card_border: dark ? "rgba(255,255,255,0.08)" : "#ddd5c0",
  // Tag bg on paper
  tag_bg: dark ? "rgba(255,255,255,0.07)" : "rgba(11,24,41,0.07)",
  tag_text: dark ? "#a89e86" : "#5a4e3a",
  footer_bg: dark ? "#070f1c" : "#0b1829",
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
