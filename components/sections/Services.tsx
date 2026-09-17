import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ArrowDownRight } from "lucide-react";

export const Services: React.FC = () => {
  const capabilities = [
    {
      id: "web-apps",
      icon: (
        <svg className="w-8 h-8 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
          <path d="M16 11l-3-3-4 4"/>
        </svg>
      ),
      title: "Enterprise Web Apps",
      description: "High-performance React & Next.js applications with reactive UX, state-of-the-art accessibility, and microsecond responsiveness.",
      href: "/#work"
    },
    {
      id: "business-systems",
      icon: (
        <svg className="w-8 h-8 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 22v-4.23"/>
        </svg>
      ),
      title: "ERP & LMS Portals",
      description: "Full-scale administrative suites with multi-role permissions, student registers, automated fees, and analytics dashboards.",
      href: "/#work"
    },
    {
      id: "ecommerce",
      icon: (
        <svg className="w-8 h-8 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M10 9a2 2 0 1 1 4 0v3"/>
          <path d="M8 17h8"/>
          <path d="M12 12v5"/>
        </svg>
      ),
      title: "Custom E-Commerce",
      description: "Tailored multi-currency storefronts with lightning-fast catalog search, Razorpay integrations, and automated inventory sync.",
      href: "/#work"
    },
    {
      id: "cloud-apis",
      icon: (
        <svg className="w-8 h-8 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          <path d="M12 13v6"/>
          <path d="M9 16l3 3 3-3"/>
        </svg>
      ),
      title: "Cloud & API Architecture",
      description: "Resilient backend systems, PostgreSQL/MongoDB schemas, REST & GraphQL endpoints, and zero-downtime deployment pipelines.",
      href: "/#work"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Radial Background Watermark (Matching reference image) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10 opacity-35 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg className="w-full h-full text-violet-200/50 animate-spin-very-slow" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
          <path d="M100 0v200M0 100h200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        </svg>
      </div>

      <Container>
        {/* Centered Heading Section (Direct reference replica) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200/60 text-violet-600 text-xs font-bold tracking-widest uppercase">
            WHAT WE DO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B0F19] tracking-tight leading-[1.2]">
            Bring your imagination to the screen <br className="hidden sm:block" />
            with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Production Systems
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Create web systems engineered with surgical precision. Transform complex business logic into high-velocity digital experiences with dependable performance.
          </p>

          {/* Handwritten Signature */}
          <div className="pt-4 pb-2 flex flex-col items-center justify-center">
            <div className="relative w-64 sm:w-80 h-24 sm:h-28 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/signature-transparent.png"
                alt="Signature of Abhishek Pandey"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mt-1">
              Full-Stack Architect &amp; Engineering Lead
            </span>
          </div>
        </div>

        {/* 4 Feature Cards (Direct reference replica) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] hover:border-violet-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Icon */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-50/90 border border-violet-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-100 transition-all duration-300 mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-[#0B0F19] group-hover:text-violet-600 transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Circular arrow button */}
              <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-violet-600 transition-colors">
                  Explore stack
                </span>
                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/70 flex items-center justify-center text-slate-500 group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
