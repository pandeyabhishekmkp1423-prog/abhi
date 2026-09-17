export interface TechCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, accessible, and fast user interfaces with modern toolchains.",
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "Vite" }
    ]
  },
  {
    title: "Backend",
    description: "Designing structured business logic, data models, and secure server endpoints.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "RESTful APIs" }
    ]
  },
  {
    title: "Databases",
    description: "Modeling normalized schemas, transactions, and indexing for data consistency.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Supabase" }
    ]
  },
  {
    title: "Platforms & Cloud",
    description: "Deploying, securing, and operating production environments and commerce engines.",
    skills: [
      { name: "Vercel" },
      { name: "Render" },
      { name: "Cloudflare" },
      { name: "Shopify" },
      { name: "WordPress" },
      { name: "Hostinger" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Maintaining engineering rigor, version control, and collaborative workflows.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "AI-assisted Development" }
    ]
  }
];
