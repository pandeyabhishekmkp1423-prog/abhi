import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "navy" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = ""
}) => {
  const baseStyles = "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-md transition-colors";
  
  const variants = {
    default: "bg-slate-100 text-slate-800 border border-slate-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    navy: "bg-[#071327] text-white border border-[#071327]",
    outline: "bg-white text-slate-700 border border-slate-300"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
