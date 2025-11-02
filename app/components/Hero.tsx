"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  name: string;
}

export default function Hero({ name }: HeroProps) {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax des particules au scroll
    const handleScroll = () => {
      if (!particlesRef.current) return;
      
      const scrollY = window.scrollY;
      const particles = particlesRef.current.querySelectorAll<HTMLDivElement>(".particle");
      
      particles.forEach((particle, index) => {
        const speed = 0.3 + (index * 0.1);
        particle.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    // Vérifier si l'utilisateur préfère les animations réduites
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex min-h-[calc(100vh-theme(spacing.20))] flex-col items-center justify-center p-8 md:p-24 overflow-hidden">
      {/* Particules flottantes avec parallax */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="particle absolute top-[20%] left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="particle absolute top-[60%] right-[15%] w-40 h-40 bg-blue-400/15 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="particle absolute bottom-[30%] left-[20%] w-36 h-36 bg-primary/10 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="particle absolute top-[40%] right-[30%] w-28 h-28 bg-blue-500/20 rounded-full blur-2xl motion-reduce:hidden" />
      </div>

      <div className="container max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Hero XXL avec lueur animée */}
          <div className="relative inline-block">
            {/* Lueur animée derrière le titre */}
            <div 
              className="absolute inset-0 blur-3xl opacity-40 animate-pulse-glow motion-reduce:opacity-30 motion-reduce:animate-none"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
              }}
            />
            
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
              <span className="text-white">Salut </span>
              <span className="text-primary font-bold">{name}</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-white">l&apos;aventure </span>
              <span className="text-primary font-bold">DARAJA</span>
              <br />
              <span className="text-white">commence ici</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent font-bold">
                et maintenant
              </span>
            </h1>
          </div>
          
          {/* Sous-titre */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mt-8 font-medium">
            Ambition. Excellence. Impact.
          </p>
        </div>
      </div>
    </div>
  );
}
