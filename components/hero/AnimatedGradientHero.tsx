"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTab {
  id: string;
  tabLabel: string;
  headlineLine1: string;
  headlineLine2: string;
  paragraph: string;
  // Exact positioning matching the reference image layout
  placement: "left" | "center" | "right-center" | "right";
  palette: {
    base: string;
    blobs: {
      color: string;
      size: string;
      position: string;
      animClass: string;
      opacity: string;
      blurClass: string;
    }[];
  };
}

export const AnimatedGradientHero: React.FC = () => {
  const tabs: HeroTab[] = [
    {
      id: "architecture",
      tabLabel: "Full-Stack Architecture",
      headlineLine1: "Full-Stack",
      headlineLine2: "Architecture",
      paragraph:
        "Engineering high-throughput web applications with Next.js 16, React 19, and TypeScript with strict end-to-end type safety.",
      placement: "left", // Matches Reference Image 3 (Pixel Streaming) left placement
      palette: {
        // Red ↔ Cyan/Blue chromatic bloom (Reference Image 3)
        base: "bg-[#0C0818]",
        blobs: [
          {
            // Vivid Crimson / Coral Wave on the Left
            color: "bg-gradient-to-tr from-[#DC2626] via-[#E11D48] to-[#EA580C]",
            size: "w-[600px] h-[600px] sm:w-[900px] sm:h-[900px]",
            position: "top-[-10%] left-[-15%]",
            animClass: "animate-lava-1",
            opacity: "opacity-90",
            blurClass: "blur-[70px] sm:blur-[100px]"
          },
          {
            // Electric Cyan & Azure Blue on the Right
            color: "bg-gradient-to-bl from-[#06B6D4] via-[#0284C7] to-[#38BDF8]",
            size: "w-[550px] h-[550px] sm:w-[850px] sm:h-[850px]",
            position: "bottom-[-15%] right-[-10%]",
            animClass: "animate-lava-2",
            opacity: "opacity-85",
            blurClass: "blur-[65px] sm:blur-[95px]"
          },
          {
            // Deep Violet / Magenta Shadow in between
            color: "bg-[#4C1D95]",
            size: "w-[450px] h-[450px] sm:w-[650px] sm:h-[650px]",
            position: "top-[20%] left-[25%]",
            animClass: "animate-lava-3",
            opacity: "opacity-75",
            blurClass: "blur-[80px] sm:blur-[110px]"
          }
        ]
      }
    },
    {
      id: "relational",
      tabLabel: "Relational & ERP",
      headlineLine1: "Relational",
      headlineLine2: "& ERP Systems",
      paragraph:
        "Designing normalized PostgreSQL schemas, multi-tenant RBAC models, and institutional ledger engines with zero state desync.",
      placement: "center", // Matches Reference Image 1 (Machine Learning & AI) center-left placement
      palette: {
        // Deep Cerulean Blue ↔ Molten Amber/Orange Dune (Reference Image 1)
        base: "bg-[#080B14]",
        blobs: [
          {
            // Deep Cerulean / Indigo Pool on the Left
            color: "bg-gradient-to-br from-[#0284C7] via-[#1D4ED8] to-[#0F172A]",
            size: "w-[600px] h-[600px] sm:w-[850px] sm:h-[850px]",
            position: "top-[-10%] left-[-10%]",
            animClass: "animate-lava-2",
            opacity: "opacity-90",
            blurClass: "blur-[70px] sm:blur-[95px]"
          },
          {
            // Warm Vibrant Golden Sand & Molten Orange on the Right
            color: "bg-gradient-to-tl from-[#EA580C] via-[#F59E0B] to-[#D97706]",
            size: "w-[600px] h-[600px] sm:w-[900px] sm:h-[900px]",
            position: "top-[-5%] right-[-12%]",
            animClass: "animate-lava-1",
            opacity: "opacity-90",
            blurClass: "blur-[60px] sm:blur-[90px]"
          },
          {
            // Soft Light Ambient Diffusion
            color: "bg-gradient-to-r from-[#93C5FD] to-[#FED7AA]",
            size: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
            position: "bottom-[-10%] left-[20%]",
            animClass: "animate-lava-3",
            opacity: "opacity-50",
            blurClass: "blur-[90px] sm:blur-[120px]"
          }
        ]
      }
    },
    {
      id: "products",
      tabLabel: "Product & Commerce",
      headlineLine1: "Digital Products",
      headlineLine2: "& Commerce",
      paragraph:
        "Crafting bespoke e-commerce and edtech platforms with sub-second catalog search, faceted filtering, and tactile micro-interactions.",
      placement: "right-center", // Matches Reference Image 4 (Inference Service) center-right placement
      palette: {
        // Royal Indigo/Blue ↔ Radiant Emerald/Lime Green (Reference Image 4)
        base: "bg-[#050B10]",
        blobs: [
          {
            // Deep Royal Indigo / Blue Fluid Pool on the Left
            color: "bg-gradient-to-tr from-[#1E1B4B] via-[#312E81] to-[#2563EB]",
            size: "w-[600px] h-[600px] sm:w-[900px] sm:h-[900px]",
            position: "bottom-[-10%] left-[-15%]",
            animClass: "animate-lava-3",
            opacity: "opacity-90",
            blurClass: "blur-[70px] sm:blur-[100px]"
          },
          {
            // Radiant Emerald & Lime Green Curved Wave on the Right
            color: "bg-gradient-to-bl from-[#22C55E] via-[#10B981] to-[#047857]",
            size: "w-[600px] h-[600px] sm:w-[880px] sm:h-[880px]",
            position: "top-[-10%] right-[-10%]",
            animClass: "animate-lava-1",
            opacity: "opacity-90",
            blurClass: "blur-[60px] sm:blur-[90px]"
          },
          {
            // Electric Cyan Accent in Between
            color: "bg-[#06B6D4]",
            size: "w-[450px] h-[450px] sm:w-[650px] sm:h-[650px]",
            position: "top-[25%] left-[20%]",
            animClass: "animate-lava-2",
            opacity: "opacity-75",
            blurClass: "blur-[80px] sm:blur-[115px]"
          }
        ]
      }
    },
    {
      id: "performance",
      tabLabel: "Performance & Cloud",
      headlineLine1: "Cloud &",
      headlineLine2: "Performance",
      paragraph:
        "Leveraging edge caching, server streaming SSR, and automated Git CI/CD pipelines to guarantee sub-second load times under high production scale.",
      placement: "right", // Matches Reference Image 2 (VFX & Rendering) right-aligned placement
      palette: {
        // Warm Sand/Caramel ↔ Electric Cobalt Blue (Reference Image 2)
        base: "bg-[#090C16]",
        blobs: [
          {
            // Warm Sand & Golden Amber Dune on the Left
            color: "bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#B45309]",
            size: "w-[600px] h-[600px] sm:w-[900px] sm:h-[900px]",
            position: "top-[-15%] left-[-12%]",
            animClass: "animate-lava-2",
            opacity: "opacity-90",
            blurClass: "blur-[60px] sm:blur-[90px]"
          },
          {
            // Massive Vivid Electric Cobalt Blue Wave on the Right
            color: "bg-gradient-to-tl from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
            size: "w-[650px] h-[650px] sm:w-[950px] sm:h-[950px]",
            position: "bottom-[-15%] right-[-10%]",
            animClass: "animate-lava-1",
            opacity: "opacity-90",
            blurClass: "blur-[65px] sm:blur-[95px]"
          },
          {
            // Glowing Cyan / White Edge Highlights
            color: "bg-gradient-to-r from-[#38BDF8] to-[#FEF3C7]",
            size: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
            position: "top-[15%] right-[25%]",
            animClass: "animate-lava-3",
            opacity: "opacity-60",
            blurClass: "blur-[85px] sm:blur-[120px]"
          }
        ]
      }
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
  }, [tabs.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTabSelect = (index: number) => {
    setActiveTab(index);
    resetTimer();
  };

  const currentTab = tabs[activeTab];

  // Dynamic container alignment classes matching the reference images
  const getAlignmentClasses = (placement: HeroTab["placement"]) => {
    switch (placement) {
      case "left":
        return "items-start text-left mr-auto";
      case "center":
        return "items-start sm:items-center text-left sm:text-center mx-auto";
      case "right-center":
        return "items-start sm:items-end text-left sm:text-right ml-auto";
      case "right":
        return "items-start sm:items-end text-left sm:text-right ml-auto";
      default:
        return "items-start text-left mr-auto";
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-screen min-h-[700px] flex flex-col justify-between overflow-hidden text-white select-none rounded-none m-0 p-0"
    >
      {/* 1. Continuous Organic Lava-Lamp Background Layers with 1000ms Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {tabs.map((tab, tabIdx) => {
          const isCurrent = activeTab === tabIdx;
          return (
            <div
              key={tab.id}
              className={`absolute inset-0 ${tab.palette.base} transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isCurrent ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              {/* Floating Sculpted Organic Waves with Smooth Color Diffusion */}
              {tab.palette.blobs.map((blob, blobIdx) => (
                <div
                  key={blobIdx}
                  className={`absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] filter ${blob.blurClass} ${blob.color} ${blob.size} ${blob.position} ${blob.animClass} ${blob.opacity} mix-blend-screen`}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* 2. Tactile High-Fidelity Sand/Paper Film Grain Texture Overlay (Matching Reference) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.32] mix-blend-overlay z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* 3. Subtle Lighting & Contrast Vignette */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-black/15 z-[3]"
        aria-hidden="true"
      />

      {/* 4. Top-Left Fixed Sub-Headline (Clean, NO BADGES, positioned below floating header) */}
      <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 px-6 sm:px-12 lg:px-16 max-w-[380px] sm:max-w-[440px]">
        <p className="text-sm sm:text-base font-sans font-normal text-white/90 leading-[1.35] tracking-tight">
          Abhishek Pandey designs and builds resilient web platforms &amp; digital products that fuel modern production systems.
        </p>
      </div>

      {/* 5. Center Dynamic Headline & Paragraph with Dynamic Placement & Motion */}
      <div className="relative z-10 my-auto py-6 sm:py-8 px-6 sm:px-12 lg:px-16 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -26 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${getAlignmentClasses(currentTab.placement)}`}
          >
            {/* Display Headline in Clean Geometric Sans (Inter), snug line-height matching reference */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] font-sans font-medium -tracking-[0.04em] text-white leading-[0.96] drop-shadow-sm">
              <span className="block">{currentTab.headlineLine1}</span>
              <span className="block">{currentTab.headlineLine2}</span>
            </h1>

            {/* Supporting Paragraph directly underneath */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-6 text-xs sm:text-[13px] md:text-sm font-sans font-normal text-white/80 max-w-[420px] leading-relaxed tracking-normal"
            >
              {currentTab.paragraph}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 6. Pinned Bottom Tab Strip with Full Width & Sliding White Pill */}
      <div className="relative z-10 w-full">
        <div className="w-full px-4 sm:px-8 py-2.5 sm:py-3.5 bg-black/25 sm:bg-black/20 backdrop-blur-xl border-t border-white/10 grid grid-cols-4 gap-1 sm:gap-2 items-center">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabSelect(index)}
                onMouseEnter={() => handleTabSelect(index)}
                className="relative flex items-center justify-center px-2 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-[13px] transition-colors focus:outline-hidden"
              >
                {/* Sliding White Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="heroActiveTabPill"
                    className="absolute inset-0 bg-white rounded-lg sm:rounded-xl shadow-lg z-0"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 38
                    }}
                  />
                )}

                {/* Tab Label */}
                <span
                  className={`relative z-10 font-sans truncate tracking-tight transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-950 font-semibold sm:font-bold"
                      : "text-white/80 hover:text-white font-normal sm:font-medium"
                  }`}
                >
                  {tab.tabLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
