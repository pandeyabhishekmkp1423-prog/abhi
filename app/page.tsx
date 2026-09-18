import { AnimatedGradientHero } from "@/components/hero/AnimatedGradientHero";
import { ProjectCurvedRibbon } from "@/components/hero/ProjectCurvedRibbon";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { TechStack } from "@/components/sections/TechStack";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden bg-white dark:bg-[#07090E] transition-colors">
      {/* 1. Interactive Animated Gradient Hero Panel */}
      <AnimatedGradientHero />

      {/* 2. Visual Project Ribbon */}
      <ProjectCurvedRibbon />

      {/* 3. Selected Work: Flagship Case Study & Curated Systems */}
      <SelectedProjects />

      {/* 4. Technical Foundation & Production Toolchains */}
      <TechStack />

      {/* 5. Engineering Principles & Delivery Lifecycle */}
      <EngineeringPrinciples />

      {/* 6. Direct Contact & Project Scoping */}
      <ContactSection />
    </main>
  );
}

