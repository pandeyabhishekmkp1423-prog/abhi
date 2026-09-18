"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { Search, Sparkles } from "lucide-react";

interface WorkCatalogProps {
  initialProjects: Project[];
}

export const WorkCatalog: React.FC<WorkCatalogProps> = ({ initialProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "LMS & EdTech Platform",
    "Institutional Digital Platform",
    "Education Management System",
    "E-Commerce Platform",
    "IT Solutions & Digital Services",
    "Civic Tech & Digital Platform",
    "Bilingual Rural Marketplace & Directory",
    "Personal Portfolio Website"
  ];

  const filteredProjects = initialProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-white/10">
        {/* Search Input */}
        <div className="relative max-w-sm w-full">
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by system name or tech stack..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-[#0E121B] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
        </div>

        {/* Count Badge */}
        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
          Showing {filteredProjects.length} of {initialProjects.length} verified production systems
        </span>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-mono transition-all ${
                isSelected
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-md scale-105"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white border border-slate-200/80 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-white/10">
          <p className="text-slate-900 dark:text-white font-semibold text-base">No matching systems found</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Try adjusting your search query or selecting &apos;All&apos; categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};
