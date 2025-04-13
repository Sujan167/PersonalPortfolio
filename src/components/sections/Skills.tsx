import { motion } from "framer-motion";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { skills, OTHER_TECHNOLOGIES } from "@/lib/constants";

const staggerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const fadeInUpItem = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Skills</h2>
					<h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">Technical Expertise</h3>
					<p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">Here are the technologies and tools I work with:</p>
				</div>

				<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
					{skills.map((category, idx) => (
						<motion.div key={idx} className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-slate-700" variants={fadeInUpItem}>
							<div className="flex items-center mb-4">
								<SkillIcon type={category.iconType} />
								<h4 className="text-lg font-bold dark:text-white">{category.title}</h4>
							</div>
							<div className="flex flex-wrap gap-2">
								{category.pills.map((skill, skillIdx) => (
									<span key={skillIdx} className={`px-3 py-1 rounded-full text-sm ${category.colorClass}`}>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="mt-12 bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-slate-700" variants={fadeInUpItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
					<div className="flex items-center mb-4">
						<SkillIcon type={OTHER_TECHNOLOGIES.iconType} />
						<h4 className="text-lg font-bold dark:text-white">{OTHER_TECHNOLOGIES.title}</h4>
					</div>
					<div className="flex flex-wrap gap-2">
						{OTHER_TECHNOLOGIES.pills.map((skill, idx) => (
							<span key={idx} className={`px-3 py-1 rounded-full text-sm ${OTHER_TECHNOLOGIES.colorClass}`}>
								{skill}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
