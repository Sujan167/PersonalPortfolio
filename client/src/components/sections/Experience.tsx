import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experienceItems = [
    "Developed, deployed and maintained web applications",
    "Managed distributed systems with event-driven architecture",
    "Implemented cloud solutions with AWS",
    "Developed scalable backend systems with Node.js, Django, FastAPI, Flask and Golang",
    "Designed dual-database architecture in Django projects",
    "Integrated Shopify API and implemented bulk migration to RDS",
    "Implemented centralized logging solutions"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-2 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work Journey
          </motion.h3>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My professional background includes both development and operations experiences.
          </motion.p>
        </div>

        <div className="relative pl-8 md:pl-0 max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          
          <motion.div 
            className="relative pl-0 md:pl-10 pb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute hidden md:block left-[-9px] top-6 h-[14px] w-[14px] rounded-full bg-primary border-2 border-slate-50 z-10"></div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2022 - Present</span>
                </div>
              </div>
              <h5 className="text-lg font-medium text-primary mb-4">Yayawar Tech Pvt. Ltd.</h5>
              <ul className="space-y-2 text-slate-600">
                {experienceItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
