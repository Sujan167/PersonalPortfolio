import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
              Hi, I'm <span className="text-primary">Sujan Basnet</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6">
              Software Developer & DevOps Engineer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl text-justify">
              Building, deploying, and managing scalable distributed systems with 3 years of professional experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-indigo-500 flex items-center justify-center">
                <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-center">
                  <div>
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="font-mono text-sm bg-slate-900 text-slate-50 dark:bg-slate-700 px-2 py-1 rounded">Full Stack Developer</div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute -right-4 -top-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xs overflow-hidden shadow-lg"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 z-0"></div>
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* DevOps Logo/Icon */}
                    <div className="mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8l4 4-4 4M8 12h8"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">DEVOPS</span>
                      <div className="h-px w-14 bg-white opacity-80 my-0.5"></div>
                      <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">ENGINEER</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
