import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Code, 
  BookOpen 
} from "lucide-react";
import { calculateExperience } from "@/lib/experience";

export default function About() {
  const experience = calculateExperience();

  return (
    <section id="about" className="py-20 bg-background dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-primary">About Me</h2>
            <h3 className="text-3xl font-bold mb-6 text-foreground dark:text-white">Building scalable cloud-native systems</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-justify">
              I'm a product-oriented full-stack engineer with {experience} of experience building scalable, cloud-native applications. I specialize in re-architecting systems for performance optimization and cloud cost minimization. My expertise spans backend development with Django, FastAPI, Node.js, and Go, along with AWS cloud technologies.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-justify">
              Currently completing my Computer Science and Information Technology (CSIT) degree at Ambition College while working as a Full Stack Developer at Yayawar Tech Pvt. Ltd. Proven track record of leading team-based and solo projects from design to deployment, helping businesses scale their infrastructure.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg bg-slate-50 dark:bg-slate-800 p-8 border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center dark:text-white">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-md border border-gray-100 dark:border-slate-600 mb-6">
                <div className="flex justify-between">
                  <h4 className="font-medium dark:text-white">Computer Science and Information Technology (CSIT)</h4>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded whitespace-nowrap ml-2">2021 - 2025</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Ambition College, Baneshwor</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Completed</p>
              </div>

              <h3 className="text-xl font-bold mb-6 flex items-center dark:text-white">
                <Code className="h-5 w-5 mr-2 text-primary" />
                Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white mb-0.5">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white mb-0.5">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">itssujan167@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white mb-0.5">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">+977 9862913309</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white mb-0.5">Languages</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">English, Nepali</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
