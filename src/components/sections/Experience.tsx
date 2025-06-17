import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Experience() {
	//const experienceItems = ["Developed, deployed and maintained web applications", "Managed distributed systems with event-driven architecture", "Implemented cloud solutions with AWS", "Developed scalable backend systems with Node.js, Django, FastAPI, Flask and Golang", "Designed dual-database architecture in Django projects", "Integrated Shopify API and implemented bulk migration to RDS", "Implemented centralized logging solutions"];
	const experienceItems = [
    "Re-architected a large monolithic application into an event-driven microservices system, improving modularity and deployment speed by 70%.",
    "Decoupled the real-time chat module as part of this transformation, enabling support for 100K+ concurrent users with Redis Pub/Sub and WebSockets.",
    "Refactored AWS Lambda functions using Golang, reducing cold starts by 40% and cutting cloud costs by ~25%.",
    "Developed and deployed 10+ full-stack web applications using Django, FastAPI, Flask, Node.js, and Go.",
    "Designed a multi-tenant SaaS architecture with secure data isolation and dynamic client onboarding within 5 minutes.",
    "Implemented a dual-database strategy for flexible data handling and data separation.",
    "Integrated Shopify API for inventory and order synchronization, reducing manual workload by 80%.",
    "Led a bulk migration of production databases to Amazon RDS, improving reliability and reducing downtime by 30%.",
    "Set up centralized logging and observability tools (ELK, Prometheus, Grafana), reducing issue resolution time by 50%.",
    "Built CI/CD pipelines using GitHub Actions to streamline testing and deployment workflows.",
    "Containerized applications using Docker, configured with Nginx for production readiness and zero-downtime deployments.",
    "Started as an intern and independently delivered an Order Management System with integrated Authorize.Net payment processing for a freelance client."
]

	return (
		<section id="experience" className="py-20 bg-background dark:bg-slate-900">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Experience</h2>
					<h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">Professional Journey</h3>
					<p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">Here's a timeline of my professional experience and key achievements:</p>
				</div>

				<div className="relative pl-8 md:pl-0 max-w-3xl mx-auto">
					<div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

					<motion.div className="relative pl-0 md:pl-10 pb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="absolute hidden md:block left-[-9px] top-6 h-[14px] w-[14px] rounded-full bg-primary border-2 border-slate-50 dark:border-slate-800 z-10"></div>
						<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
							<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
								<h4 className="text-xl md:text-2xl font-bold dark:text-white">Full Stack Developer</h4>
								<div className="flex items-center mt-2 md:mt-0">
									<span className="text-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-3 py-1 rounded-full">2022 - Present</span>
								</div>
							</div>
							<h5 className="text-xl font-medium text-primary mb-4">Yayawar Tech Pvt. Ltd.</h5>
							<ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
								{experienceItems.map((item, index) => (
									<motion.li key={index} className="flex items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
										<CheckCircle className="h-6 w-6 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
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
