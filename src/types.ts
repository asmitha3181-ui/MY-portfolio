export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  score?: string;
  type: 'college' | 'school';
}

export interface InternshipItem {
  company: string;
  role: string;
  period: string;
  skills: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  tag: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 for visual bars
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface AchievementItem {
  event: string;
  title: string;
  details: string[];
}
