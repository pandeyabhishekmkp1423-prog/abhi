export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  businessValue: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Frontend & Performance",
    description: "Architecting responsive, high-performance web applications with clean structure, accessible interfaces, and modern frontend frameworks.",
    deliverables: ["Single-page applications & multi-page web portals", "Responsive, accessible UI components", "Performance & Core Web Vitals optimization"],
    businessValue: "Reduces bounce rates and improves user retention through fast page loads and intuitive navigation."
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    category: "End-to-End Engineering",
    description: "Building complete digital products from relational database design and backend business logic to responsive user-facing interfaces.",
    deliverables: ["Full-stack Next.js and Node.js applications", "Robust PHP & Laravel enterprise solutions", "End-to-end authentication and role authorization"],
    businessValue: "Eliminates coordination overhead between separate frontend and backend teams by delivering unified, cohesive features."
  },
  {
    id: "business-systems",
    title: "Business Systems",
    category: "Workflow Automation",
    description: "Designing custom operational platforms that automate routine manual tasks, track critical operations, and improve departmental efficiency.",
    deliverables: ["Internal operations dashboards", "Workflow automation engines", "Role-based access management"],
    businessValue: "Cuts administrative hours and prevents operational human error by codifying business rules into software."
  },
  {
    id: "erp-crm-lms",
    title: "ERP, CRM & LMS Platforms",
    category: "Enterprise Applications",
    description: "Developing specialized management systems for educational institutions, sales pipelines, and organization-wide resource planning.",
    deliverables: ["Student, fee, and attendance management (ERP)", "Lead tracking and client communication pipelines (CRM)", "Structured course delivery and assessment engines (LMS)"],
    businessValue: "Provides centralized data integrity and actionable reporting across administrative departments."
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    category: "Digital Commerce",
    description: "Engineering secure online storefronts with structured product catalogs, faceted filtering, shopping cart workflows, and payment gateway integration.",
    deliverables: ["Custom e-commerce storefronts & Shopify development", "Secure payment gateway integration (Stripe, Razorpay)", "Inventory management and order notification workflows"],
    businessValue: "Maximizes checkout completion rates with low-friction shopping paths and secure payment processing."
  },
  {
    id: "api-integration",
    title: "API & System Integration",
    category: "Architecture & Data",
    description: "Connecting disparate third-party services, databases, and external APIs into cohesive data pipelines and unified interfaces.",
    deliverables: ["RESTful API design and documentation", "Third-party payment, SMS, and mailing integrations", "Database migration and synchronization pipelines"],
    businessValue: "Unlocks system interoperability and allows existing operational tools to communicate seamlessly."
  },
  {
    id: "ui-ux-development",
    title: "UI/UX Development",
    category: "Design & Interaction",
    description: "Translating wireframes and business requirements into polished, responsive user interfaces with deliberate visual hierarchy.",
    deliverables: ["Design system implementation with Tailwind CSS", "Micro-interactions and subtle feedback states", "Mobile-first layouts with accessibility compliance"],
    businessValue: "Builds customer trust through refined visual execution, clear typography, and effortless usability."
  },
  {
    id: "seo-optimization",
    title: "SEO & Website Optimization",
    category: "Technical Growth",
    description: "Implementing technical SEO architecture, structured metadata, semantic HTML, and asset optimization for maximum organic search visibility.",
    deliverables: ["Semantic HTML5 structure and heading hierarchies", "JSON-LD schema markup & OpenGraph tags", "Lighthouse Core Web Vitals remediation"],
    businessValue: "Drives organic search acquisition by ensuring search engines understand and rank site content accurately."
  }
];
