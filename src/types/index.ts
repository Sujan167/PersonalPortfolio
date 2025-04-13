import type { IconType } from "@/components/ui/SkillIcon";

export interface Skill {
	title: string;
	iconType: IconType;
	pills: string[];
	colorClass?: string;
}
