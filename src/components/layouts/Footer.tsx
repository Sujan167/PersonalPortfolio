import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
	const handleResumeDownload = () => {
		const link = document.createElement("a");
		link.href = "/Resume_Sujan_Basnet.pdf";
		link.download = "Sujan_Basnet_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<h2 className="text-2xl font-bold mb-2">Sujan Basnet</h2>
						<p className="text-gray-400">Software Developer & DevOps Engineer</p>
					</div>

					<div className="flex flex-col items-center md:items-end">
						<div className="flex space-x-4 mb-4">
							<a href="https://github.com/Sujan167" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
								<Github className="h-6 w-6" />
							</a>
							<a href="https://www.linkedin.com/in/sujan-basnet-a7503623b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
								<Linkedin className="h-6 w-6" />
							</a>
							<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
								<Twitter className="h-6 w-6" />
							</a>
						</div>
						<Button variant="link" className="text-primary hover:text-blue-400 transition-colors p-0 h-auto" onClick={handleResumeDownload}>
							<Download className="h-5 w-5 mr-2" />
							Download Resume
						</Button>
					</div>
				</div>

				<hr className="border-gray-800 my-8" />

				<div className="text-center text-gray-400">
					<p>&copy; {currentYear} Sujan Basnet. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
