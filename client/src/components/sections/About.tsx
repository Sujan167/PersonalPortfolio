import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Code, 
  Shield, 
  BookOpen 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function About() {
  const softSkills = [
    { name: "Problem-Solving", value: 90 },
    { name: "Team Collaboration", value: 85 },
    { name: "Communication Skills", value: 80 },
    { name: "Time Management", value: 85 },
  ];

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
            <h3 className="text-3xl font-bold mb-6 text-foreground dark:text-white">Passionate about building scalable systems</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-justify">
              I'm a motivated Software Developer and DevOps Engineer with around 3 years of experience in building, deploying, and managing scalable distributed systems. I'm proficient in software development, cloud services, containerization, and modern DevOps practices.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-justify">
              Currently, I'm completing my final semester in Computer Science and Information Technology (CSIT) at Ambition College, Baneshwor, while working as a Full Stack Developer at Yayawar Tech Pvt. Ltd.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="text-primary mr-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-slate-600">Kaushaltar, Bhaktapur</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-slate-600">itssujan167@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-slate-600">9862913309</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Languages</h4>
                  <p className="text-slate-600">English, Nepali</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg bg-slate-50 p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2" />
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-10 mb-6 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="bg-white p-4 rounded-md border border-gray-100">
                <div className="flex justify-between">
                  <h4 className="font-medium">Computer Science and Information Technology (CSIT)</h4>
                  <span className="text-sm bg-blue-100 text-primary px-2 py-1 rounded">2021 - Present</span>
                </div>
                <p className="text-slate-600 mt-1">Ambition College, Baneshwor</p>
                <p className="text-sm text-slate-600 mt-2">Final Semester</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
