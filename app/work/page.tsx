import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { WorkCatalog } from "@/components/projects/WorkCatalog";
import { projects } from "@/data/projects";
import { FolderGit2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Systems Directory | Abhishek Pandey",
  description: "Browse verified digital products, institutional web platforms, educational ERPs, and e-commerce applications built by full-stack developer Abhishek Pandey.",
  alternates: {
    canonical: "/work"
  },
  openGraph: {
    title: "Selected Work & Systems Directory | Abhishek Pandey",
    description: "Browse verified digital products, institutional web platforms, educational ERPs, and e-commerce applications built by full-stack developer Abhishek Pandey.",
    url: "/work"
  }
};

export default function WorkPage() {
  return (
    <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white dark:bg-[#07090E] min-h-screen transition-colors">
      <Container>
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT DIRECTORY &amp; CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered systems &amp; digital products
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive index of 8 real-world software platforms, web applications, and management systems built across diverse industry requirements.
          </p>
        </div>

        <WorkCatalog initialProjects={projects} />
      </Container>
    </main>
  );
}
