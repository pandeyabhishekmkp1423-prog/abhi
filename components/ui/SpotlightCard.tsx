"use client";

import React, { useRef, useEffect } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  curtainGradient?: string;
  borderGradient?: string;
  spotlightColor?: string;
  radiusPercent?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  curtainGradient,
  borderGradient = "linear-gradient(135deg, #2563EB, #06B6D4, #7C3AED)",
  spotlightColor,
  radiusPercent = 75,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const resolvedCurtain =
    curtainGradient ||
    (spotlightColor
      ? `radial-gradient(circle, ${spotlightColor}, transparent 75%)`
      : "linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(6, 182, 212, 0.22), rgba(124, 58, 237, 0.18))");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handlePointerMove = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
      card.style.setProperty("--radius", `${radiusPercent}%`);
    };

    const handlePointerLeave = () => {
      card.style.setProperty("--radius", "0%");
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [radiusPercent]);

  return (
    <div
      ref={cardRef}
      className={`card relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        ...style,
        ["--curtain-gradient" as string]: resolvedCurtain,
        ["--curtain-border" as string]: borderGradient
      }}
      {...props}
    >
      {/* Clip-Path Dynamic Curtain Reveal Underlay */}
      <div className="card-underlay" aria-hidden="true" />

      {/* Clip-Path Dynamic Curtain Border Outline */}
      <div className="card-curtain-border" aria-hidden="true" />

      {/* Card Content - elevated above curtain layers */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
