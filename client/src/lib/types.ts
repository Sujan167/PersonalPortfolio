export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SkillPill {
  name: string;
  colorClass: string;
}

export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  pills: string[];
  colorClass: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

export interface MajorProject {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  architecture: string;
}

export interface SoftSkill {
  name: string;
  value: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  }
}
