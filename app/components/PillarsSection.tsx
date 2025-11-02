"use client";

import { useState } from "react";
import { EyeIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: "Vision à long terme",
    subtitle: "Construire pour durer",
    description: "Construire pour durer, innover sans cesse.",
    icon: EyeIcon,
  },
  {
    id: 2,
    title: "Excellence opérationnelle",
    subtitle: "Standards élevés",
    description: "Précision, exigence, fiabilité.",
    icon: SparklesIcon,
  },
  {
    id: 3,
    title: "Leadership partagé",
    subtitle: "Croissance collective",
    description: "Autonomie, responsabilité, progression.",
    icon: UserGroupIcon,
  },
];

interface PillarCardProps {
  pillar: Pillar;
}

function PillarCard({ pillar }: PillarCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = pillar.icon;

  return (
    <div
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 ease-out motion-reduce:transform-none"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ombre interne subtile */}
        <div className="absolute inset-0 rounded-2xl shadow-inner opacity-50 pointer-events-none" />
        
        {/* Reflet au survol */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none motion-reduce:hidden"
          style={{
            transform: "translateZ(10px)",
          }}
        />

        {/* Contenu */}
        <div className="relative z-10 space-y-6">
          {/* Icône */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          {/* Titre */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {pillar.title}
            </h3>
            <p className="text-sm text-primary/80 font-medium">
              {pillar.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-white/70 leading-relaxed">
            {pillar.description}
          </p>

          {/* Indicateur de profondeur */}
          <div className="flex gap-1 pt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-8 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300"
                style={{
                  transitionDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PillarsSection() {
  return (
    <section className="relative py-24 px-8 md:px-24 overflow-hidden">
      {/* Fond avec particules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Nos <span className="text-primary font-bold">3 Piliers</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Les fondations de notre excellence et de notre vision commune
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
