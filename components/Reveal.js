import React, { useEffect, useRef, useState } from "react";

// Scroll-triggered "sketch" reveal. When the element enters the viewport it
// gets the `in` class, which (via globals.css) wipes the content into view
// left-to-right like an architect drawing a line — no visible hand.
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  threshold = 0.15,
  once = true,
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    // Failsafe: never leave content hidden if the observer doesn't fire.
    const failsafe = setTimeout(() => setShown(true), 1800);
    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
