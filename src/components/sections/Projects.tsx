import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { CardContent } from "@/components/ui/card";

export default function Projects() {
	const majorProject = {
		title: "InterviewPro",
		description: "A web-based platform that automates interview processes, streamlining hiring and reducing manual effort.",
		features: ["Distributed system architecture for scalability and reliability", "Question recommendations based on candidate expertise", "Speech-to-text transcription with Whisper AI", "Answer evaluation using cosine similarity", "User authentication, real-time processing, and secure data handling"],
		technologies: ["MERN Stack", "Flask", "RabbitMQ", "Whisper AI"],
		architecture: "The system architecture recommends questions based on expertise, streams audio responses from React.js to Node.js and RabbitMQ, uses Flask with Whisper AI for transcription, and evaluates responses using cosine similarity, creating a scalable and real-time interview workflow.",
	};

	const otherProjects = [
		{
			title: "College Management System",
			description: "Backend system built with Node.js, MySQL, Prisma ORM, and Redis for caching, using event-driven architecture.",
			technologies: ["Node.js", "MySQL", "Prisma", "Redis"],
			githubLink: "https://github.com/Sujan167/Academia-Backend.git",
		},
		{
			title: "GeoHub",
			description: "Developed with Node.js, WebSockets, and Leaflet.js to enable real-time location sharing and chat within groups.",
			technologies: ["Node.js", "WebSockets", "Leaflet.js", "Real-time"],
			githubLink: "https://github.com/Sujan167/GeoHub.git",
		},
		{
			title: "Payment Integration Backend",
			description: "Integrated Khalti, eSewa, and Stripe payment gateways in Node.js applications for handling secure payment transactions.",
			technologies: ["Node.js", "Khalti", "eSewa", "Stripe"],
			githubLink: "https://github.com/Sujan167/Payment-gateway-integration.git",
		},
		{
			title: "IShare (Social Media)",
			description: "Built with Django and OAuth 2.0 (Google, GitHub) with basic CRUD operations and user management features.",
			technologies: ["Django", "OAuth 2.0", "CRUD", "User Management"],
			githubLink: "https://github.com/Sujan167/IShare.git",
		},
		{
			title: "Bash, Docker & PostgreSQL Integration",
			description: "Automates uploading JSON data to PostgreSQL in Docker using Python. Bash script manages environment, dependencies, and container lifecycle.",
			technologies: ["Bash", "Docker", "PostgreSQL", "Python"],
			githubLink: "https://github.com/Sujan167/Integration-of-Bash-Docker-compose-PostgreSQL-and-Python.git",
		},
	];

	return (
		<section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Projects</h2>
					<h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">Featured Work</h3>
					<p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and expertise:</p>
				</div>

				{/* Major Project */}
				<motion.div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<div className="md:flex">
						<div className="md:w-2/5 bg-gradient-to-br from-primary to-indigo-500 p-10 text-white flex items-center">
							<div>
								<h4 className="text-2xl md:text-3xl font-bold mb-4">{majorProject.title}</h4>
								<p className="text-lg mb-6">{majorProject.description}</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{majorProject.technologies.map((tech, index) => (
										<span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-lg">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="md:w-3/5 p-6 md:p-10">
							<h5 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h5>
							<ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300 mb-6">
								{majorProject.features.map((feature, index) => (
									<li key={index} className="flex items-start">
										<CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5 flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>

							<h5 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white">Architecture</h5>
							<p className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-justify">The system architecture recommends questions based on expertise, streams audio responses from React.js to Node.js and RabbitMQ, uses Flask with Whisper AI for transcription, and evaluates responses using cosine similarity, creating a scalable and real-time interview workflow.</p>
						</div>
					</div>
				</motion.div>

				{/* Other Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{otherProjects.map((project, index) => (
						<motion.div key={index} className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 transition-transform duration-300 hover:-translate-y-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index, duration: 0.5 }}>
							<CardContent className="p-6">
								<div className="space-y-6">
									<h3 className="text-xl md:text-2xl font-bold text-center">{project.title}</h3>
									<p className="text-lg text-justify">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span key={tech} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
												{tech}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
											GitHub
										</a>
									</div>
								</div>
							</CardContent>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
