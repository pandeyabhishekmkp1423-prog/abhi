import React from "react";
import { Container } from "../layout/Container";
import { whyWorkWithMeList } from "@/data/whyWorkWithMe";
import { CheckCircle2, Shield, Code2, Rocket, RefreshCw, Cpu, Layers, Sparkles } from "lucide-react";

export const WhyWorkWithMe: React.FC = () => {
  const iconList = [
    <Layers key="1" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Shield key="2" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Code2 key="3" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Cpu key="4" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Rocket key="5" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <RefreshCw key="6" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Radiant ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Practical strengths grounded in verifiable delivery
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Direct architectural capabilities that eliminate cross-team miscommunication, ensure clean data architectures, and ship production software that scales reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMeList.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xs flex items-center justify-center mb-5">
                  {iconList[index % iconList.length] || <CheckCircle2 className="w-5 h-5 text-indigo-500" />}
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified across 8 production projects</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
