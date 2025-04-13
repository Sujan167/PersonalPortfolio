import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Contact</h2>
					<h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">Get in Touch</h3>
					<p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">Feel free to reach out to me for any opportunities or collaborations.</p>
				</div>

				<motion.div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="text-xl md:text-2xl font-bold mb-6 dark:text-white">Contact Information</h4>
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="text-primary mr-3">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<h5 className="text-lg font-medium mb-1 dark:text-slate-200">Location</h5>
										<p className="text-lg text-slate-600 dark:text-slate-300">Kaushaltar, Bhaktapur</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="text-primary mr-3">
										<Mail className="h-6 w-6" />
									</div>
									<div>
										<h5 className="text-lg font-medium mb-1 dark:text-slate-200">Email</h5>
										<p className="text-lg text-slate-600 dark:text-slate-300">itssujan167@gmail.com</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="text-primary mr-3">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<h5 className="text-lg font-medium mb-1 dark:text-slate-200">Phone</h5>
										<p className="text-lg text-slate-600 dark:text-slate-300">9862913309</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col">
							<h5 className="text-xl md:text-2xl font-medium mb-6 dark:text-slate-200">Social Profiles</h5>
							<div className="flex space-x-4">
								<a href="https://github.com/Sujan167" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors" aria-label="GitHub">
									<Github className="h-6 w-6" />
								</a>
								<a href="https://www.linkedin.com/in/sujan-basnet-a7503623b/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors" aria-label="LinkedIn">
									<Linkedin className="h-6 w-6" />
								</a>
								<a href="https://www.instagram.com/sujan_basnyet" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors" aria-label="Instagram">
									<Instagram className="h-6 w-6" />
								</a>
							</div>
						</div>
					</div>

					<div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 text-center">
						<p className="text-lg text-gray-600 dark:text-slate-400">The best way to reach me is via email or LinkedIn. I typically respond within 24-48 hours.</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
