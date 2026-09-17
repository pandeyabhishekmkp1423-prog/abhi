import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = "left",
  className = "",
  as: Component = "h2"
}) => {
  const alignmentClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#2563EB] mb-3 bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-100">
          {label}
        </span>
      )}
      <Component className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#071327] font-heading">
        {title}
      </Component>
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
