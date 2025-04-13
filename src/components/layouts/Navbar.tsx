import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<a href="/" className="text-2xl md:text-3xl font-bold text-primary">
							Sujan Basnet
						</a>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<a href="#about" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							About
						</a>
						<a href="#skills" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							Skills
						</a>
						<a href="#experience" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							Experience
						</a>
						<a href="#projects" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							Projects
						</a>
						<a href="#contact" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							Contact
						</a>
						<button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							{theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
						</button>
					</div>
					<div className="md:hidden flex items-center space-x-4">
						<button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							{theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
						</button>
						<button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
					<div className="container mx-auto px-6 py-4">
						<div className="flex flex-col space-y-4">
							<a href="#about" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
								About
							</a>
							<a href="#skills" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
								Skills
							</a>
							<a href="#experience" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
								Experience
							</a>
							<a href="#projects" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
								Projects
							</a>
							<a href="#contact" className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
								Contact
							</a>
						</div>
					</div>
				</motion.div>
			)}
		</nav>
	);
}
