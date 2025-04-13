import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-2 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold mb-4 text-foreground dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h3>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Feel free to reach out through any of these contact methods if you're interested in working together.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <h4 className="text-xl font-bold mb-8 dark:text-white text-center">Contact Information</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 dark:text-slate-200">Email</h5>
                  <a href="mailto:itssujan167@gmail.com" className="text-primary hover:underline">itssujan167@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 dark:text-slate-200">Phone</h5>
                  <a href="tel:+9779862913309" className="text-primary hover:underline">+977 9862913309</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 dark:text-slate-200">Location</h5>
                  <p className="text-slate-600 dark:text-slate-300">Kaushaltar, Bhaktapur, Nepal</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h5 className="font-medium mb-3 dark:text-slate-200">Social Profiles</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Sujan167" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sujan-basnet-a7503623b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 text-center">
              <p className="text-gray-600 dark:text-slate-400">
                The best way to reach me is via email or LinkedIn. I typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
