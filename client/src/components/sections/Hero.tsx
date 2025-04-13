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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-indigo-600 p-1.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-800">
                  <img 
                    src="/me.jpg" 
                    alt="Sujan Basnet" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <motion.div 
                className="absolute -right-4 -top-4 w-28 h-28 rounded-lg flex items-center justify-center text-white font-bold text-xs overflow-hidden shadow-lg"
                animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 1, 0, -1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 z-0"></div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-2">
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Creative DevOps Logo */}
                    <div className="mb-1 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="2" fill="white" />
                      </svg>
                      <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-1">
                      <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">DEVOPS</span>
                      <div className="h-px w-16 bg-white opacity-80 my-0.5"></div>
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
