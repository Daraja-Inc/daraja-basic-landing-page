"use client";

import { useEffect, useRef } from "react";

export default function AnimatedNeonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adapter la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Vérifier prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Orbes néon animés
    interface Orb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      opacity: number;
      opacityDirection: number;
    }

    const orbs: Orb[] = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 250,
        vx: 0.3,
        vy: 0.2,
        color: "59, 130, 246", // Blue
        opacity: 0.15,
        opacityDirection: 0.001,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.6,
        radius: 300,
        vx: -0.2,
        vy: 0.3,
        color: "37, 99, 235", // Darker blue
        opacity: 0.12,
        opacityDirection: 0.0015,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        radius: 200,
        vx: 0.25,
        vy: -0.25,
        color: "96, 165, 250", // Light blue
        opacity: 0.1,
        opacityDirection: 0.0012,
      },
    ];

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        // Mouvement
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Rebonds sur les bords
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
          orb.vx *= -1;
        }
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
          orb.vy *= -1;
        }

        // Animation d'opacité (pulsation)
        orb.opacity += orb.opacityDirection;
        if (orb.opacity >= 0.2 || orb.opacity <= 0.05) {
          orb.opacityDirection *= -1;
        }

        // Dessiner l'orbe avec effet de lueur
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none motion-reduce:hidden"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
