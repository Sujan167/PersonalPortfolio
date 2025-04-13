import { 
  ContactInfo, 
  SoftSkill, 
  SkillCategory, 
  MajorProject, 
  Project 
} from './types';
import { Code, Settings, Cloud, Layers, Database } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  email: "itssujan167@gmail.com",
  phone: "+977 9862913309",
  location: "Kaushaltar, Bhaktapur, Nepal",
  social: {
    github: "https://github.com/Sujan167",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/"
  }
};

export const SOFT_SKILLS: SoftSkill[] = [
  { name: "Problem-Solving", value: 90 },
  { name: "Team Collaboration", value: 85 },
  { name: "Communication Skills", value: 80 },
  { name: "Time Management", value: 85 },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frameworks",
    icon: <Code className="h-6 w-6 text-primary mr-2" />,
    pills: [
      "Django", "Flask", "FastAPI", "ReactJS", "Node.js", 
      "Express", "NestJS", "NextJS", "Hono", "Fiber", "Gin"
    ],
    colorClass: "bg-blue-50 text-primary"
  },
  {
    title: "DevOps Tools",
    icon: <Settings className="h-6 w-6 text-primary mr-2" />,
    pills: [
      "Docker", "Kubernetes", "Jenkins", "Github Actions", 
      "Nginx", "Shell Scripting"
    ],
    colorClass: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6 text-primary mr-2" />,
    pills: [
      "AWS EC2", "AWS S3", "AWS RDS", "AWS Cloudwatch", 
      "AWS SQS", "Digital Ocean", "Yeti Cloud"
    ],
    colorClass: "bg-green-50 text-emerald-600"
  },
  {
    title: "System Design",
    icon: <Layers className="h-6 w-6 text-primary mr-2" />,
    pills: [
      "Microservice Architecture", "Distributed Systems", 
      "API Design", "Caching", "Load Balancing", "Containerization"
    ],
    colorClass: "bg-yellow-50 text-yellow-600"
  }
];

export const OTHER_TECHNOLOGIES = {
  title: "Other Technologies",
  icon: <Database className="h-6 w-6 text-primary mr-2" />,
  pills: [
    "Git & Github", "Redis", "RabbitMQ", "Prisma ORM", "GraphQL", 
    "TypeScript", "Monorepo", "UV Package Manager", "TailwindCSS", 
    "HTMX", "WebSockets", "REST", "JSON", "Server Sent Events"
  ],
  colorClass: "bg-purple-50 text-purple-600"
};

export const MAJOR_PROJECT: MajorProject = {
  title: "InterviewPro",
  description: "A web-based platform that automates interview processes, streamlining hiring and reducing manual effort.",
  features: [
    "Distributed system architecture for scalability and reliability",
    "Question recommendations based on candidate expertise",
    "Speech-to-text transcription with Whisper AI",
    "Answer evaluation using cosine similarity",
    "User authentication, real-time processing, and secure data handling"
  ],
  technologies: ["MERN Stack", "Flask", "RabbitMQ", "Whisper AI"],
  architecture: "The system architecture recommends questions based on expertise, streams audio responses from React.js to Node.js and RabbitMQ, uses Flask with Whisper AI for transcription, and evaluates responses using cosine similarity, creating a scalable and real-time interview workflow."
};

export const OTHER_PROJECTS: Project[] = [
  {
    title: "College Management System",
    description: "Backend system built with Node.js, MySQL, Prisma ORM, and Redis for caching, using event-driven architecture.",
    technologies: ["Node.js", "MySQL", "Prisma", "Redis"],
    githubLink: "https://github.com/Sujan167/Academia-Backend.git"
  },
  {
    title: "GeoHub",
    description: "Developed with Node.js, WebSockets, and Leaflet.js to enable real-time location sharing and chat within groups.",
    technologies: ["Node.js", "WebSockets", "Leaflet.js", "Real-time"],
    githubLink: "https://github.com/Sujan167/GeoHub.git"
  },
  {
    title: "Payment Integration Backend",
    description: "Integrated Khalti, eSewa, and Stripe payment gateways in Node.js applications for handling secure payment transactions.",
    technologies: ["Node.js", "Khalti", "eSewa", "Stripe"],
    githubLink: "https://github.com/Sujan167/Payment-gateway-integration.git"
  },
  {
    title: "IShare (Social Media)",
    description: "Built with Django and OAuth 2.0 (Google, GitHub) with basic CRUD operations and user management features.",
    technologies: ["Django", "OAuth 2.0", "CRUD", "User Management"],
    githubLink: "https://github.com/Sujan167/IShare.git"
  },
  {
    title: "Bash, Docker & PostgreSQL Integration",
    description: "Automates uploading JSON data to PostgreSQL in Docker using Python. Bash script manages environment, dependencies, and container lifecycle.",
    technologies: ["Bash", "Docker", "PostgreSQL", "Python"],
    githubLink: "https://github.com/Sujan167/Integration-of-Bash-Docker-compose-PostgreSQL-and-Python.git"
  }
];

export const EXPERIENCE_ITEMS = [
  "Developed, deployed and maintained web applications",
  "Managed distributed systems with event-driven architecture",
  "Implemented cloud solutions with AWS",
  "Developed scalable backend systems with Node.js, Django, FastAPI, Flask and Golang",
  "Designed dual-database architecture in Django projects",
  "Integrated Shopify API and implemented bulk migration to RDS",
  "Implemented centralized logging solutions"
];
