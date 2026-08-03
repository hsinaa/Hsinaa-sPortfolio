// ─────────────────────────────────────────────────────────────
//  src/components/MeshCanvas.jsx
//
//  Animated mesh-network canvas — the hero signature element.
//  Tweak NODE_COUNT, MAX_DIST, or speed values to change
//  how dense / fast the animation is.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

const NODE_COUNT = 26;   // restrained background density
const MAX_DIST   = 130;  // max px distance to draw an edge
const SPEED      = 0.4;  // max velocity per axis

export default function MeshCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const W = (canvas.width  = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * SPEED,
      vy:    (Math.random() - 0.5) * SPEED,
      r:     Math.random() * 3 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.025;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(121,184,255,${(1 - d / MAX_DIST) * 0.14})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const glow = 1 + 0.4 * Math.sin(n.pulse);
        // core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(114,212,155,0.40)";
        ctx.fill();
        // soft halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(121,184,255,0.12)";
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
