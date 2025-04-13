import { motion } from "framer-motion";
import { 
  Code, 
  Settings, 
  Cloud, 
  Database, 
  Layers 
} from "lucide-react";

const fadeInUpItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  const skillCategories = [
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

  const otherTechnologies = [
    "Git & Github", "Redis", "RabbitMQ", "Prisma ORM", "GraphQL", 
    "TypeScript", "Monorepo", "UV Package Manager", "TailwindCSS", 
    "HTMX", "WebSockets", "REST", "JSON", "Server Sent Events"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-2 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold mb-4 text-foreground dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical Expertise
          </motion.h3>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            With experience across multiple technologies and frameworks, I deliver robust solutions for complex technical challenges.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-slate-700"
              variants={fadeInUpItem}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h4 className="text-lg font-bold dark:text-white">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.pills.map((pill, index) => (
                  <span 
                    key={index} 
                    className={`${category.colorClass} dark:bg-opacity-20 dark:text-opacity-90 px-3 py-1 rounded-full text-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-primary mr-2" />
            <h4 className="text-lg font-bold dark:text-white">Other Technologies</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {otherTechnologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
