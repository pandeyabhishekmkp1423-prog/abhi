import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SheenCard } from "../ui/SheenCard";
import { whyWorkWithMeList } from "@/data/whyWorkWithMe";
import { CheckCircle2, Shield, Code2, Rocket, RefreshCw, Cpu, Layers } from "lucide-react";

export const WhyWorkWithMe: React.FC = () => {
  const iconList = [
    <Layers key="1" className="w-5 h-5 text-[#2563EB]" />,
    <Shield key="2" className="w-5 h-5 text-[#2563EB]" />,
    <Code2 key="3" className="w-5 h-5 text-[#2563EB]" />,
    <Cpu key="4" className="w-5 h-5 text-[#2563EB]" />,
    <Rocket key="5" className="w-5 h-5 text-[#2563EB]" />,
    <RefreshCw key="6" className="w-5 h-5 text-[#2563EB]" />
  ];

  return (
    <section className="py-24 lg:py-32 bg-white bg-tech-grid border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Radiant ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-500/12 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          label="Engineering Advantages"
          title="Practical strengths grounded in verifiable delivery"
          description="Direct capabilities that eliminate cross-team miscommunication, ensure clean data architectures, and ship production software that scales."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMeList.map((item, index) => (
            <SheenCard
              key={item.title}
              className="p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-white border border-blue-200/80 shadow-[0_0_18px_rgba(37,99,235,0.2)] flex items-center justify-center mb-5">
                  {iconList[index % iconList.length] || <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />}
                </div>

                <h3 className="font-heading font-bold text-lg text-[#071327] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#2563EB]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in production projects</span>
              </div>
            </SheenCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
