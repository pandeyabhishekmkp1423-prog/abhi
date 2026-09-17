import React from "react";

export const HeroFallback: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-white border border-[#E2E8F0] p-6 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full max-w-[360px] max-h-[320px] text-[#2563EB]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract Architectural Mesh */}
        <defs>
          <linearGradient id="fallbackLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2563EB" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.15" />
          </linearGradient>
        </defs>

        {/* Central Hexagonal Core */}
        <polygon
          points="200,60 290,110 290,210 200,260 110,210 110,110"
          stroke="url(#fallbackLineGrad)"
          stroke-width="1.5"
          fill="#EFF6FF"
          fill-opacity="0.5"
        />

        <polygon
          points="200,100 255,130 255,190 200,220 145,190 145,130"
          stroke="#2563EB"
          stroke-width="1.2"
          stroke-opacity="0.4"
          fill="none"
        />

        {/* Internal Interconnecting Nodes */}
        <line x1="200" y1="60" x2="200" y2="100" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />
        <line x1="290" y1="110" x2="255" y2="130" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />
        <line x1="290" y1="210" x2="255" y2="190" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />
        <line x1="200" y1="260" x2="200" y2="220" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />
        <line x1="110" y1="210" x2="145" y2="190" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />
        <line x1="110" y1="110" x2="145" y2="130" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.5" />

        {/* Inner Cross Lines */}
        <line x1="200" y1="100" x2="200" y2="220" stroke="#3B82F6" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="3 3" />
        <line x1="145" y1="160" x2="255" y2="160" stroke="#3B82F6" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="3 3" />

        {/* Outer Orbit Nodes */}
        <circle cx="200" cy="60" r="4.5" fill="#2563EB" />
        <circle cx="290" cy="110" r="4.5" fill="#2563EB" />
        <circle cx="290" cy="210" r="4.5" fill="#2563EB" />
        <circle cx="200" cy="260" r="4.5" fill="#2563EB" />
        <circle cx="110" cy="210" r="4.5" fill="#2563EB" />
        <circle cx="110" cy="110" r="4.5" fill="#2563EB" />

        {/* Core Node */}
        <circle cx="200" cy="160" r="6" fill="#071327" />
        <circle cx="200" cy="160" r="10" stroke="#2563EB" stroke-width="1.5" stroke-opacity="0.6" />

        {/* Satellite Data Points */}
        <circle cx="330" cy="80" r="3" fill="#3B82F6" fill-opacity="0.7" />
        <circle cx="70" cy="180" r="3" fill="#3B82F6" fill-opacity="0.7" />
        <circle cx="310" cy="270" r="3" fill="#3B82F6" fill-opacity="0.7" />
        <line x1="290" y1="110" x2="330" y2="80" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="110" y1="210" x2="70" y2="180" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="290" y1="210" x2="310" y2="270" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="2 2" />
      </svg>
    </div>
  );
};
