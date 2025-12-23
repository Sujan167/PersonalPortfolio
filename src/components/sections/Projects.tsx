import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "CQRS Pattern Demonstration",
      description: "Production-ready CQRS (Command Query Responsibility Segregation) architecture with separate PostgreSQL read/write databases, Redis caching, and Celery for async tasks.",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery", "CQRS"],
      githubLink: "https://github.com/Sujan167/"
    },
    {
      title: "Homestay Booking Platform with RBAC",
      description: "Comprehensive design for multi-role platform supporting Superadmin, Host, Guest, and Community Owner with RBAC, dynamic bookings, and integrated payment systems.",
      technologies: ["System Design", "RBAC", "Stripe", "eSewa", "Khalti"],
      githubLink: "https://github.com/Sujan167/"
    },
    {
      title: "Bash, Docker & PostgreSQL Integration",
      description: "Automated ETL pipeline for ingesting Hamrobazar data into PostgreSQL via Docker, with Bash orchestration of environment setup and container lifecycle.",
      technologies: ["Bash", "Docker", "PostgreSQL", "Python", "ETL"],
      githubLink: "https://github.com/Sujan167/Integration-of-Bash-Docker-compose-PostgreSQL-and-Python.git"
    },
    {
      title: "GeoHub – Real-time Location Sharing",
      description: "Real-time location sharing and group chat application with WebSocket-based live updates and interactive mapping.",
      technologies: ["Node.js", "WebSockets", "Leaflet.js", "Real-time"],
      githubLink: "https://github.com/Sujan167/GeoHub.git"
    },
    {
      title: "Payment Gateway Integration",
      description: "Unified payment integration supporting Khalti, eSewa, and Stripe with secure transaction handling and error recovery.",
      technologies: ["Node.js", "Khalti", "eSewa", "Stripe"],
      githubLink: "https://github.com/Sujan167/Payment-gateway-integration.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-2 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold mb-4 text-foreground dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Work
          </motion.h3>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of my recent projects showcasing my technical capabilities and problem-solving approach.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 text-primary dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 dark:hover:text-blue-400 font-medium flex items-center transition-colors"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
