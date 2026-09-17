import { Hero } from "@/components/hero/Hero";
import { ProjectCurvedRibbon } from "@/components/hero/ProjectCurvedRibbon";
import { Services } from "@/components/sections/Services";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { ContactSection } from "@/components/sections/ContactSection";
import { GlowingDivider } from "@/components/ui/GlowingDivider";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden bg-white">
      {/* 1. Hero Section: Command Search Bar, 3D Mascot & Orbiting Telemetry Cards */}
      <Hero />

      {/* 2. Panoramic Curved Project Ribbon (5 Perspective-Tilted Preview Cards) */}
      <ProjectCurvedRibbon />

      {/* 3. Capabilities Section: WHAT WE DO, Signature & 4 Feature Cards */}
      <Services />

      {/* 4. Infinite Hollow Outline Text Marquee Ticker */}
      <MarqueeTicker />

      {/* 5. How We Build Systems (2-Column Overlapping Visuals & Step Breakdown) */}
      <HowItWorks />
      <GlowingDivider />

      {/* 6. Selected Work: 8 Verified Real Projects with Interactive Previews */}
      <SelectedProjects />
      <GlowingDivider />

      {/* 7. Technology Stack: Categorized Full-Stack Technologies */}
      <TechStack />
      <GlowingDivider />

      {/* 8. Execution Process: Predictable Delivery Blueprint */}
      <Process />
      <GlowingDivider />

      {/* 9. Engineering Guarantees: Why Work With Me */}
      <WhyWorkWithMe />
      <GlowingDivider />

      {/* 10. Conversion Section: Direct Inquiry & Contact Form */}
      <ContactSection />
    </main>
  );
}
