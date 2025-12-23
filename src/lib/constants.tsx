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
  location: "Kathmandu, Nepal",
  social: {
    github: "https://github.com/Sujan167",
    linkedin: "https://linkedin.com/in/sujan-basnet-a7503623b/",
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
  title: "InterviewPro – Automated Interview Platform",
  description: "Scalable distributed platform automating the interview process with AI-powered question recommendations, speech-to-text transcription, and intelligent answer evaluation.",
  features: [
    "Distributed system architecture for handling real-time interview workflows at scale",
    "Intelligent question recommendation engine based on candidate expertise and role requirements",
    "Speech-to-text transcription using Whisper AI for accurate candidate response capture",
    "Answer evaluation using cosine similarity to assess candidate fit objectively",
    "Real-time processing and secure data handling with user authentication"
  ],
  technologies: ["MERN Stack", "Flask", "RabbitMQ", "Whisper AI", "Distributed Systems"],
  architecture: "Candidates respond via React.js frontend, audio is streamed through Node.js to RabbitMQ for asynchronous processing. Flask services handle Whisper AI transcription, while answer evaluation uses cosine similarity for consistent scoring. The event-driven architecture ensures scalability and resilience."
};

export const OTHER_PROJECTS: Project[] = [
  {
    title: "CQRS Pattern Demonstration",
    description: "Production-ready CQRS (Command Query Responsibility Segregation) architecture with separate PostgreSQL read/write databases, Redis caching, and Celery for async tasks.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery", "CQRS"],
    githubLink: "https://github.com/Sujan167/"
  },
  {
    title: "Homestay Booking Platform (Design & Architecture)",
    description: "Comprehensive design for multi-role platform supporting Superadmin, Host, Guest, and Community Owner with RBAC, dynamic bookings, and integrated payment systems.",
    technologies: ["System Design", "RBAC", "Stripe", "eSewa", "Khalti"],
    githubLink: "https://github.com/Sujan167/"
  },
  {
    title: "GeoHub – Real-time Location Sharing",
    description: "Real-time location sharing and group chat application with WebSocket-based live updates and interactive mapping.",
    technologies: ["Node.js", "WebSockets", "Leaflet.js", "Real-time"],
    githubLink: "https://github.com/Sujan167/GeoHub.git"
  },
  {
    title: "Payment Gateway Integration Suite",
    description: "Unified payment integration supporting Khalti, eSewa, and Stripe with secure transaction handling and error recovery.",
    technologies: ["Node.js", "Khalti", "eSewa", "Stripe", "Payment Processing"],
    githubLink: "https://github.com/Sujan167/Payment-gateway-integration.git"
  },
  {
    title: "Bash, Docker & PostgreSQL Data Pipeline",
    description: "Automated ETL pipeline for ingesting data into PostgreSQL via Docker, with Bash orchestration of environment setup and container lifecycle.",
    technologies: ["Bash", "Docker", "PostgreSQL", "Python", "Automation"],
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
