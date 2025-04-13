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
                    {/* DevOps Infinity Logo */}
                    <div className="mb-1 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                        <path d="M18.178 8c-1.247 0-2.409.489-3.287 1.377l-2.891 2.887-2.891-2.887C8.231 8.489 7.07 8 5.822 8 3.162 8 1 10.162 1 12.822s2.162 4.822 4.822 4.822c1.247 0 2.409-.489 3.287-1.377l2.891-2.887 2.891 2.887c.878.888 2.04 1.377 3.287 1.377 2.66 0 4.822-2.162 4.822-4.822S20.838 8 18.178 8z" 
                          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.109 12.822 7.822 14.11a2.668 2.668 0 0 1-2 .822 2.835 2.835 0 0 1-2.822-2.822c0-.761.311-1.45.822-1.95.427-.427 1.012-.707 1.65-.79.461-.061.9.005 1.35.184.32.127.64.33.91.6l1.377 1.29M14.891 12.822l1.287 1.287c.27.27.59.474.91.6.45.18.889.246 1.35.185.638-.083 1.223-.363 1.65-.79.51-.5.822-1.189.822-1.95a2.835 2.835 0 0 0-2.822-2.822 2.668 2.668 0 0 0-2 .822l-1.287 1.287" 
                          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
