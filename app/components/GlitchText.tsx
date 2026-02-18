"use client";

import { useEffect, useId } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function GlitchText({
  text,
  className = "",
  as: Tag = "h2",
}: GlitchTextProps) {
  const id = useId();
  const styleId = `glitch-style-${id.replace(/:/g, "")}`;

  useEffect(() => {
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes glitch-skew {
        0% { transform: skew(0deg); }
        2% { transform: skew(0.5deg); }
        4% { transform: skew(0deg); }
        20% { transform: skew(0deg); }
        21% { transform: skew(-0.5deg); }
        23% { transform: skew(0deg); }
        48% { transform: skew(0deg); }
        50% { transform: skew(1deg); }
        52% { transform: skew(0deg); }
        78% { transform: skew(0deg); }
        80% { transform: skew(-1deg); }
        82% { transform: skew(0deg); }
        100% { transform: skew(0deg); }
      }

      @keyframes glitch-top {
        0% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        5% { clip-path: inset(20% 0 50% 0); transform: translate(-2px, -1px); }
        10% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        15% { clip-path: inset(60% 0 5% 0); transform: translate(1px, 1px); }
        20% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        35% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 0); }
        37% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        50% { clip-path: inset(40% 0 20% 0); transform: translate(2px, -1px); }
        52% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        65% { clip-path: inset(5% 0 70% 0); transform: translate(-1px, 1px); }
        67% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        80% { clip-path: inset(50% 0 10% 0); transform: translate(2px, 0); }
        82% { clip-path: inset(0 0 90% 0); transform: translate(0); }
        100% { clip-path: inset(0 0 90% 0); transform: translate(0); }
      }

      @keyframes glitch-bottom {
        0% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        4% { clip-path: inset(50% 0 15% 0); transform: translate(2px, 1px); }
        8% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        22% { clip-path: inset(30% 0 40% 0); transform: translate(-1px, -1px); }
        24% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        42% { clip-path: inset(70% 0 5% 0); transform: translate(2px, 0); }
        44% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        58% { clip-path: inset(10% 0 65% 0); transform: translate(-2px, 1px); }
        60% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        75% { clip-path: inset(45% 0 25% 0); transform: translate(1px, -1px); }
        77% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        90% { clip-path: inset(15% 0 55% 0); transform: translate(-2px, 0); }
        92% { clip-path: inset(90% 0 0 0); transform: translate(0); }
        100% { clip-path: inset(90% 0 0 0); transform: translate(0); }
      }

      @keyframes glitch-flicker {
        0% { opacity: 1; }
        3% { opacity: 0.9; }
        6% { opacity: 1; }
        40% { opacity: 1; }
        42% { opacity: 0.8; }
        43% { opacity: 1; }
        70% { opacity: 1; }
        72% { opacity: 0.9; }
        74% { opacity: 1; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, [styleId]);

  const baseStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    color: "#e0ffe0",
    animation: "glitch-skew 4s infinite linear alternate-reverse, glitch-flicker 5s infinite linear",
    textShadow: "0 0 4px rgba(14, 107, 14, 0.4)",
  };

  const pseudoBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    pointerEvents: "none",
  };

  const beforeStyle: React.CSSProperties = {
    ...pseudoBase,
    color: "#0e6b0e",
    textShadow: "-1px 0 #22c55e, 1px 0 rgba(0, 255, 65, 0.3)",
    animation: "glitch-top 3s infinite linear alternate-reverse",
    clipPath: "inset(0 0 65% 0)",
  };

  const afterStyle: React.CSSProperties = {
    ...pseudoBase,
    color: "#4ade80",
    textShadow: "1px 0 #0e6b0e, -1px 0 #00ff41",
    animation: "glitch-bottom 2.5s infinite linear alternate-reverse",
    clipPath: "inset(65% 0 0 0)",
  };

  return (
    <Tag className={className} style={baseStyle}>
      {text}
      <span style={beforeStyle} aria-hidden="true">
        {text}
      </span>
      <span style={afterStyle} aria-hidden="true">
        {text}
      </span>
    </Tag>
  );
}
