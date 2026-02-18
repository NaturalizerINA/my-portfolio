"use client";

import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    resize();

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Randomize initial positions so it doesn't start uniform
    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * (canvas.height / fontSize);
    }

    const draw = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = "rgba(8, 12, 8, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const char = Math.random() > 0.5 ? "1" : "0";

        // Vary green brightness for depth effect
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = "#4ade80"; // bright head
        } else if (brightness > 0.8) {
          ctx.fillStyle = "#0e6b0e"; // primary green
        } else {
          ctx.fillStyle = "rgba(14, 107, 14, 0.4)"; // dim trail
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after reaching bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const fps = 20;
    const interval = 1000 / fps;
    let then = performance.now();

    const animate = (now: number) => {
      animationId = requestAnimationFrame(animate);
      const delta = now - then;
      if (delta > interval) {
        then = now - (delta % interval);
        draw();
      }
    };

    animationId = requestAnimationFrame(animate);

    // Resize observer to keep canvas full-page
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(document.documentElement);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
