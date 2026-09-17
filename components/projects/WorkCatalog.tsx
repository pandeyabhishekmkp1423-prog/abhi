"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { Search } from "lucide-react";

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
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
        {/* Search Input */}
        <div className="relative max-w-sm w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or tech stack..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] bg-white text-[#071327]"
          />
        </div>

        {/* Count Label */}
        <span className="text-xs font-medium text-[#64748B]">
          Showing {filteredProjects.length} of {initialProjects.length} projects
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
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                isSelected
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-[#071327] font-semibold text-base">No matching projects found</p>
          <p className="text-xs text-[#64748B] mt-1">
            Try adjusting your search query or selecting &apos;All&apos; categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-xs font-semibold text-[#2563EB] hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};
