import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "metawaves",
    title: "MetaWaves",
    category: "LMS & EdTech Platform",
    description: "Multi-role educational platform supporting modular course delivery, student progress tracking, assessment management, and administrative oversight.",
    longDescription: "MetaWaves is an educational technology system developed to support organized coursework delivery, student progress tracking, assessment distribution, and role-based administration for instructors and learners. Built with a focus on data consistency, performance, and clean navigation across complex course structures.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Role-based authorization for students, instructors, and administrators",
      "Modular course curriculum and structured lesson delivery",
      "Assessment and assignment tracking with automated evaluation flows",
      "Student progress analytics and completion tracking"
    ],
    image: "/images/projects/metawaves.jpg",
    gallery: ["/images/projects/metawaves.jpg"],
    liveUrl: null, // TODO: Add public production URL once access is enabled
    githubUrl: null, // Proprietary client repository
    year: "2024",
    caseStudy: {
      challenge: "Structuring scalable multi-tenant course progress tracking and video lesson distribution without latency bottlenecks or state synchronization issues.",
      approach: "Implemented a normalized relational schema in PostgreSQL for course state tracking, paired with Next.js Server Components and lightweight REST APIs for authenticated student workflows.",
      process: "Analyzed role requirements and curriculum hierarchy -> Designed relational schema for modules, lessons, and progress states -> Built authenticated API endpoints -> Developed responsive learner interface and instructor portal -> Optimized database indexing for high concurrent access.",
      outcome: "Delivered a reliable multi-role learning system with zero state-synchronization conflicts and rapid lesson page rendering."
    }
  },
  {
    slug: "rrsimt-campushub",
    title: "RRSIMT / CampusHub",
    category: "Institutional Digital Platform",
    description: "Comprehensive institutional web portal managing department directories, student notices, admissions workflows, and academic communication.",
    longDescription: "Developed for the Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT), CampusHub modernizes institutional communication with structured department portals, dynamic circulars, admissions lead capture, and an administrative management panel.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    features: [
      "Centralized department catalog and faculty directory",
      "Dynamic notice board with categorization and document attachments",
      "Student admission enquiry and lead capture workflows",
      "Role-based administrative control panel for real-time announcements"
    ],
    image: "/images/projects/rrsimt.jpg",
    gallery: ["/images/projects/rrsimt.jpg"],
    liveUrl: null, // TODO: Add verified institutional URL
    githubUrl: null,
    year: "2023 - 2024",
    caseStudy: {
      challenge: "Consolidating fragmented institutional announcements and departmental information into an accessible, low-maintenance platform easily managed by administrative staff.",
      approach: "Engineered a robust Laravel MVC architecture with structured MySQL relationships, caching layers for public announcements, and a clean administrative management interface.",
      process: "Audited institutional content requirements across academic departments -> Structured normalized database tables for notices, faculty, and departments -> Built secure administrative publishing workflows -> Ensured complete mobile responsiveness for student mobile access.",
      outcome: "Streamlined institutional publishing workflows from hours to minutes, establishing a dependable single source of truth for students and faculty."
    }
  },
  {
    slug: "school-erp",
    title: "School ERP",
    category: "Education Management System",
    description: "Enterprise school operations system handling student admissions, multi-tier fee reconciliation, daily attendance, and academic report cards.",
    longDescription: "A centralized operational platform built for primary and secondary educational institutions to automate routine administrative tasks. The system handles student profiles, flexible fee installment schedules, classroom attendance logging, and report card generation.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Tailwind CSS", "JavaScript"],
    features: [
      "Student information management across enrollment lifecycles",
      "Fee installment tracking with payment receipts and audit records",
      "Daily classroom attendance recording and reporting",
      "Automated report card generation using configurable grading rules"
    ],
    image: "/images/projects/school-erp.jpg",
    gallery: ["/images/projects/school-erp.jpg"],
    liveUrl: null, // Enterprise internal installation
    githubUrl: null,
    year: "2024",
    caseStudy: {
      challenge: "Managing complex fee structures with discounts, late penalties, and multi-installment schedules without transactional discrepancies.",
      approach: "Designed an ACID-compliant ledger architecture in MySQL with strict transaction wrapping for financial operations and granular role permissions for staff.",
      process: "Conducted requirements mapping with school administrators -> Modeled database with strict foreign key constraints and transactional integrity -> Developed fee reconciliation and attendance modules -> Implemented reporting and print-ready document exports.",
      outcome: "Eliminated manual ledger discrepancies and automated generation of semester report cards for hundreds of students."
    }
  },
  {
    slug: "scentrun",
    title: "Scentrun",
    category: "E-Commerce Platform",
    description: "Fragrance e-commerce storefront featuring olfactory note taxonomy filtering, responsive cart hydration, and clean checkout flows.",
    longDescription: "Scentrun is a specialized fragrance retail application built to make scent discovery intuitive. The platform features olfactory profile filtering (top, heart, and base notes), size variant selection, client-server cart synchronization, and payment processing integration.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    features: [
      "Faceted fragrance note filtering across olfactory families",
      "Persistent cart state with responsive local and server synchronization",
      "Product variant handling for bottle sizes and concentrations",
      "Optimized imagery and responsive layouts for mobile shoppers"
    ],
    image: "/images/projects/scentrun.jpg",
    gallery: ["/images/projects/scentrun.jpg"],
    liveUrl: null, // TODO: Add public storefront URL
    githubUrl: null,
    year: "2024",
    caseStudy: {
      challenge: "Creating an engaging product discovery flow for fragrance buyers where decision-making depends on complex scent hierarchies rather than standard technical specs.",
      approach: "Developed faceted URL-synchronized filtering in Next.js that keeps filter states shareable and fast, backed by responsive image components and minimal client bundle overhead.",
      process: "Architected fragrance note taxonomy -> Developed catalog UI with responsive filtering -> Implemented persistent cart state -> Connected checkout and order management pipeline.",
      outcome: "Fast, accessible catalog experience with sub-second page transitions and structured product specifications."
    }
  },
  {
    slug: "vibemergers",
    title: "Vibemergers",
    category: "IT Solutions & Digital Services",
    description: "Corporate digital presence showcasing engineering capabilities, service portfolios, case studies, and enterprise inquiry channels.",
    longDescription: "Built for Vibemergers, an IT and digital solutions provider, this corporate website presents technical capabilities, service packages, and technology competencies with clarity, supported by an inquiry capture system.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    features: [
      "Structured capability breakdown covering web development and cloud systems",
      "Inquiry capture system with validation and instant notification dispatch",
      "High-performance responsive UI optimized for Core Web Vitals",
      "Semantic HTML and structured schema markup for technical SEO"
    ],
    image: "/images/projects/vibemergers.jpg",
    gallery: ["/images/projects/vibemergers.jpg"],
    liveUrl: null, // TODO: Add public URL
    githubUrl: null,
    year: "2023",
    caseStudy: {
      challenge: "Communicating a diverse array of enterprise technical services clearly without overwhelming prospective clients or slowing down page performance.",
      approach: "Employed a modular component structure with clear visual hierarchy, scannable service overviews, and strict performance optimization.",
      process: "Mapped service hierarchy and inquiry paths -> Designed clean component system with Tailwind CSS -> Implemented server-rendered Next.js pages -> Conducted Lighthouse audit and optimization.",
      outcome: "Clean, high-performance corporate platform achieving strong Lighthouse metrics and clear service presentation."
    }
  },
  {
    slug: "vote-vaani",
    title: "Vote Vaani",
    category: "Civic Tech & Digital Platform",
    description: "Civic engagement and voter resource platform providing constituency information directories, candidate profiles, and structured civic polls.",
    longDescription: "Vote Vaani is a digital platform designed to promote civic awareness and informed voter participation. It offers structured constituency directories, verified civic information, and polling modules built with submission integrity controls.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Constituency directory and electoral resource navigation",
      "Structured polling module with rate-limiting and duplicate prevention",
      "Bilingual content support for accessible community reach",
      "Accessible information layout engineered for mobile devices"
    ],
    image: "/images/projects/vote-vaani.jpg",
    gallery: ["/images/projects/vote-vaani.jpg"],
    liveUrl: null, // TODO: Add live URL
    githubUrl: null,
    year: "2024",
    caseStudy: {
      challenge: "Maintaining poll data integrity and responsive performance during periods of elevated civic interest without imposing friction on users.",
      approach: "Used session-based rate-limiting, lightweight submission validation, and static rendering for high-traffic informational guides.",
      process: "Defined data models for constituencies and polling questions -> Implemented API rate limiting and submission validation -> Built accessible responsive UI -> Validated layout across varied mobile viewports.",
      outcome: "Reliable, accessible civic portal capable of handling concurrent participation while preserving survey data integrity."
    }
  },
  {
    slug: "gaonmitra",
    title: "GaonMitra",
    category: "Bilingual Rural Marketplace & Directory",
    description: "Bilingual (Hindi & English) directory connecting rural tradespeople, agricultural equipment rentals, artisans, and community updates.",
    longDescription: "GaonMitra addresses the digital connectivity gap in rural communities by offering an accessible bilingual platform where village service providers, farmers, and artisans can list services, trade tools, and access local announcements.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    features: [
      "Bilingual interface (Hindi & English) for broad local accessibility",
      "Lightweight assets optimized for low-bandwidth 3G/4G rural networks",
      "Categorized listings for local trades, machinery rental, and farm goods",
      "Direct click-to-call integration enabling immediate communication without complex checkouts"
    ],
    image: "/images/projects/gaonmitra.jpg",
    gallery: ["/images/projects/gaonmitra.jpg"],
    liveUrl: null, // TODO: Add public URL
    githubUrl: null,
    year: "2023 - 2024",
    caseStudy: {
      challenge: "Designing an interface that functions reliably on low-bandwidth connections and remains immediately understandable to non-technical users.",
      approach: "Minimized total asset payload, paired clear iconography with bilingual text, and implemented direct phone dialing for peer-to-peer contact.",
      process: "Mapped key user actions for tradespeople and farmers -> Modeled lightweight MySQL tables -> Implemented bilingual interface strings -> Conducted mobile testing under simulated low-bandwidth conditions.",
      outcome: "Fast-loading community directory that provides immediate utility without technical or bandwidth barriers."
    }
  },
  {
    slug: "swapnil-pandey-portfolio",
    title: "Swapnil Pandey Portfolio",
    category: "Personal Portfolio Website",
    description: "Custom personal branding and portfolio website showcasing professional work, career milestones, and client inquiry channels.",
    longDescription: "A custom personal portfolio website engineered by Abhishek for professional Swapnil Pandey. The site features clean typography, a curated showcase of achievements, an interactive journey timeline, and direct inquiry integration.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: [
      "Tailored aesthetic reflecting the client's professional domain",
      "Curated project gallery with detail overlays",
      "Interactive career timeline and credential highlights",
      "Accessible contact form with spam protection and feedback states"
    ],
    image: "/images/projects/swapnil-pandey.jpg",
    gallery: ["/images/projects/swapnil-pandey.jpg"],
    liveUrl: null, // TODO: Add public URL
    githubUrl: null,
    year: "2024",
    caseStudy: {
      challenge: "Building a distinctive personal brand presence that highlights career achievements with clarity and fast load times.",
      approach: "Developed a focused single-page architecture with smooth section navigation, structured typography, and full keyboard accessibility.",
      process: "Defined content structure and portfolio requirements -> Built reusable component system in Next.js -> Added subtle motion interactions -> Deployed with custom domain and DNS configuration.",
      outcome: "Delivered a modern, responsive personal portfolio that establishes professional credibility and captures inquiries."
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
