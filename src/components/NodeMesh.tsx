"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  isFailure: boolean;
}

// Draws the MAKZ crosshair logo exactly: rounded square outline, 4 crosshair lines, blue centre dot
function drawLogo(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  alpha: number
) {
  const half = size / 2;
  const radius = size * 0.19; // corner radius
  const gap = size * 0.16; // gap from centre where lines stop
  const dotR = size * 0.09; // centre dot radius
  const lw = size * 0.045;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = lw;
  ctx.lineCap = "round";

  // Rounded rectangle outline
  const x = cx - half;
  const y = cy - half;
  const w = size;
  const h = size;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.stroke();

  // Crosshair lines — from edges inward, stopping before centre
  // Top
  ctx.beginPath();
  ctx.moveTo(cx, cy - half);
  ctx.lineTo(cx, cy - gap);
  ctx.stroke();

  // Bottom
  ctx.beginPath();
  ctx.moveTo(cx, cy + gap);
  ctx.lineTo(cx, cy + half);
  ctx.stroke();

  // Left
  ctx.beginPath();
  ctx.moveTo(cx - half, cy);
  ctx.lineTo(cx - gap, cy);
  ctx.stroke();

  // Right
  ctx.beginPath();
  ctx.moveTo(cx + gap, cy);
  ctx.lineTo(cx + half, cy);
  ctx.stroke();

  // Blue centre dot
  ctx.beginPath();
  ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
  ctx.fillStyle = "#4d8eff";
  ctx.globalAlpha = alpha;
  ctx.fill();

  ctx.restore();
}

export function NodeMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;

    // Animation state for the searching crosshair
    let logoX = 0;
    let logoY = 0;
    let logoTargetX = 0;
    let logoTargetY = 0;
    let failNodeX = 0;
    let failNodeY = 0;
    let searchPhase: "searching" | "found" = "searching";
    let searchStep = 0;
    const searchPoints: { x: number; y: number }[] = [];
    let stepStartTime = 0;
    const stepDuration = 1.2; // seconds per search stop
    const pauseDuration = 0.6; // pause at each stop
    let foundTime = 0;

    function resize() {
      const container = canvas!.parentElement;
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas!.width = width * window.devicePixelRatio;
      canvas!.height = height * window.devicePixelRatio;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      initNodes();
    }

    function initNodes() {
      const nodes: Node[] = [];
      const spacing = 80;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const spacingX = width / cols;
      const spacingY = height / rows;

      const failCol = Math.floor(cols * 0.3) + Math.floor(Math.random() * Math.floor(cols * 0.4));
      const failRow = Math.floor(rows * 0.82) + Math.floor(Math.random() * Math.floor(rows * 0.1));

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * spacingX + (Math.random() - 0.5) * 20;
          const y = r * spacingY + (Math.random() - 0.5) * 20;
          const isFail = c === failCol && r === failRow;
          nodes.push({ x, y, baseX: x, baseY: y, isFailure: isFail });
          if (isFail) {
            failNodeX = x;
            failNodeY = y;
          }
        }
      }
      nodesRef.current = nodes;

      // Generate search waypoints — random nodes the logo visits before finding the failure
      searchPoints.length = 0;
      const normalNodes = nodes.filter((n) => !n.isFailure);
      const numStops = 3 + Math.floor(Math.random() * 2); // 3-4 stops
      for (let i = 0; i < numStops; i++) {
        const pick = normalNodes[Math.floor(Math.random() * normalNodes.length)];
        searchPoints.push({ x: pick.baseX, y: pick.baseY });
      }
      // Final waypoint is the failure node
      searchPoints.push({ x: failNodeX, y: failNodeY });

      // Start logo at a random position
      const start = normalNodes[Math.floor(Math.random() * normalNodes.length)];
      logoX = start.baseX;
      logoY = start.baseY;
      logoTargetX = searchPoints[0].x;
      logoTargetY = searchPoints[0].y;
      searchStep = 0;
      searchPhase = "searching";
      stepStartTime = timeRef.current;
    }

    function easeInOutCubic(t: number): number {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function draw() {
      if (!ctx) return;
      timeRef.current += 0.016; // ~60fps
      const t = timeRef.current;

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const connectionDist = 130;

      // Update node positions with drift
      if (!prefersReducedMotion) {
        for (const node of nodes) {
          node.x = node.baseX + Math.sin(t * 0.5 + node.baseX * 0.01) * 6;
          node.y = node.baseY + Math.cos(t * 0.5 + node.baseY * 0.01) * 5;

          const dx = (mouseRef.current.x - width / 2) * 0.005;
          const dy = (mouseRef.current.y - height / 2) * 0.005;
          node.x += dx;
          node.y += dy;
        }
        // Update failure node position for tracking
        const failNode = nodes.find((n) => n.isFailure);
        if (failNode) {
          failNodeX = failNode.x;
          failNodeY = failNode.y;
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.3;
            const nearFailure = nodes[i].isFailure || nodes[j].isFailure;
            if (nearFailure) {
              const pulse = (Math.sin(t * 3) + 1) / 2;
              if (searchPhase === "found") {
                // Transition lines from orange to blue
                const sinceLock = t - foundTime;
                const tr = Math.min(sinceLock / 1.2, 1);
                const red = Math.round(255 - tr * (255 - 77));
                const green = Math.round(120 + pulse * 60 - tr * (120 + pulse * 60 - 142));
                const blue = Math.round(60 + pulse * 40 + tr * (255 - 60 - pulse * 40));
                ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * (0.6 + pulse * 0.4)})`;
              } else {
                // Orange lines before found
                ctx.strokeStyle = `rgba(255, ${120 + pulse * 60}, ${60 + pulse * 40}, ${alpha * (0.6 + pulse * 0.4)})`;
              }
            } else {
              ctx.strokeStyle = `rgba(77, 142, 255, ${alpha})`;
            }
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        if (node.isFailure) {
          const pulse = (Math.sin(t * 3) + 1) / 2;

          if (searchPhase === "found") {
            // Found — transition from orange to blue
            const sinceLock = t - foundTime;
            const transition = Math.min(sinceLock / 1.2, 1); // 1.2s transition
            const r = 4 + pulse * 2;

            // Interpolate orange -> blue
            const red = Math.round(255 - transition * (255 - 77));
            const green = Math.round(140 - transition * (140 - 142));
            const blue = Math.round(60 + transition * (255 - 60));

            // Outer glow
            ctx.beginPath();
            ctx.arc(node.x, node.y, r + 10, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.04 + pulse * 0.04})`;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.8 + pulse * 0.2})`;
            ctx.fill();
          } else {
            // Before found — pulse orange (the broken node)
            const r = 4 + pulse * 2;

            // Outer glow
            ctx.beginPath();
            ctx.arc(node.x, node.y, r + 10, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 140, 60, ${0.06 + pulse * 0.06})`;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, ${100 + pulse * 55}, ${40 + pulse * 30}, ${0.8 + pulse * 0.2})`;
            ctx.fill();
          }
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(77, 142, 255, 0.5)";
          ctx.fill();
        }
      }

      // Animate the searching crosshair logo
      if (searchPhase === "searching" && searchPoints.length > 0) {
        const elapsed = t - stepStartTime;
        const totalStep = stepDuration + pauseDuration;

        if (elapsed < stepDuration) {
          // Moving to target
          const progress = easeInOutCubic(Math.min(elapsed / stepDuration, 1));
          const prevX =
            searchStep === 0
              ? logoX
              : searchPoints[searchStep - 1]?.x ?? logoX;
          const prevY =
            searchStep === 0
              ? logoY
              : searchPoints[searchStep - 1]?.y ?? logoY;

          logoTargetX = searchPoints[searchStep].x;
          logoTargetY = searchPoints[searchStep].y;

          // If this is the last step, track live failure node position
          if (searchStep === searchPoints.length - 1) {
            logoTargetX = failNodeX;
            logoTargetY = failNodeY;
          }

          logoX = prevX + (logoTargetX - prevX) * progress;
          logoY = prevY + (logoTargetY - prevY) * progress;
        } else if (elapsed < totalStep) {
          // Pausing at target — slight scan wobble
          const wobble = (elapsed - stepDuration) / pauseDuration;
          logoX = logoTargetX + Math.sin(wobble * 8) * 2;
          logoY = logoTargetY + Math.cos(wobble * 6) * 1.5;
        } else {
          // Move to next step
          searchStep++;
          stepStartTime = t;

          if (searchStep >= searchPoints.length) {
            // Found the failure node!
            searchPhase = "found";
            foundTime = t;
            logoX = failNodeX;
            logoY = failNodeY;
          }
        }

        // Draw the logo at current search position
        const logoSize = Math.min(width, height) * 0.1;
        const clampedSize = Math.max(36, Math.min(logoSize, 64));
        drawLogo(ctx, logoX, logoY, clampedSize, 0.7);

      }

      if (searchPhase === "found") {
        // Logo locked on failure node — subtle breathing
        const sinceLock = t - foundTime;
        const breathe = Math.sin(sinceLock * 1.5) * 1;
        const currentFailX = failNodeX;
        const currentFailY = failNodeY;

        const logoSize = Math.min(width, height) * 0.1;
        const clampedSize = Math.max(36, Math.min(logoSize, 64)) + breathe;

        // Flash effect on lock
        if (sinceLock < 0.5) {
          const flash = 1 - sinceLock / 0.5;
          ctx.beginPath();
          ctx.arc(currentFailX, currentFailY, clampedSize * flash * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 140, 60, ${flash * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        drawLogo(ctx, currentFailX, currentFailY, clampedSize, 0.85);

        // "LOCATED" label — fades out after 1 second
        if (sinceLock < 2) {
          const fadeIn = Math.min(sinceLock * 2, 0.5);
          const fadeOut = sinceLock > 1 ? Math.max(0, 1 - (sinceLock - 1)) : 1;
          ctx.save();
          ctx.globalAlpha = fadeIn * fadeOut;
          ctx.fillStyle = "#ff8c3c";
          ctx.font = "9px monospace";
          ctx.textAlign = "center";
          ctx.fillText("LOCATED", currentFailX, currentFailY + clampedSize / 2 + 14);
          ctx.restore();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
