export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Clarifying business requirements, target users, and key project outcomes before writing code.",
    details: "I dissect the operational workflow, user constraints, and delivery goals to ensure technical scope directly serves the business purpose."
  },
  {
    number: "02",
    title: "Plan",
    description: "Defining data architecture, API contracts, milestones, and technology choices.",
    details: "Establishing clear database schemas, entity relationships, and component boundaries up front prevents costly architectural rewrites."
  },
  {
    number: "03",
    title: "Design",
    description: "Structuring user flows, responsive layouts, and accessible component hierarchies.",
    details: "Designing clean visual hierarchy with purposeful whitespace, intuitive navigation, and consistent interaction states."
  },
  {
    number: "04",
    title: "Build",
    description: "Developing robust frontend interfaces, backend endpoints, and database interactions.",
    details: "Writing clean, type-safe code with modular components, secure API routes, and maintainable project organization."
  },
  {
    number: "05",
    title: "Test",
    description: "Verifying functionality across edge cases, device viewports, and network conditions.",
    details: "Checking responsive breakpoints, cross-browser compatibility, form validation edge cases, and accessibility standards."
  },
  {
    number: "06",
    title: "Deploy",
    description: "Configuring production hosting, domain DNS, SSL certificates, and build pipelines.",
    details: "Deploying to reliable platforms like Vercel, Render, or cloud VPS with secure environment variables and caching headers."
  },
  {
    number: "07",
    title: "Improve",
    description: "Monitoring real-world performance, SEO indicators, and iterative user feedback.",
    details: "Remediating Core Web Vitals, refining search engine indexing, and rolling out iterative updates as business requirements grow."
  }
];
