import { 
  EducationItem, 
  InternshipItem, 
  ProjectItem, 
  SkillCategory, 
  CertificationItem, 
  AchievementItem 
} from './types';

export const personalDetails = {
  name: 'Asmitha V',
  headline: 'BE – CSE (IoT & Cyber Security including Blockchain Technology)',
  tagline: 'Motivated Computer Science Student Specializing in IoT, Cyber Security, and Blockchain Technology.',
  location: 'Kanniyakumari District, Tamil Nadu, India',
  address: '4-176A, Cheruvachavilai, Thiruvarambu (Post), Kanniyakumari District - 629161',
  email: 'asmitha3181@gmail.com',
  phone: '7305983181',
  linkedin: 'https://www.linkedin.com/in/asmitha-snsinstitutions',
  github: 'https://github.com/asmitha3181-ui',
  domain: 'asmithav.dev',
  resumeUrl: '/resume.pdf', // Points to the uploaded PDF
};

export const aboutContent = {
  bio: 'I am Asmitha V, a Computer Science and Engineering student specializing in IoT & Cyber Security including Blockchain Technology at SNS College of Engineering, Coimbatore. I am deeply passionate about Full Stack Web Development and enjoy creating highly responsive, user-friendly, and visually polished modern web applications. I continuously refine my programming skills through academic projects, hands-on internships, and industry-recognized certifications while staying on the cutting edge of modern technologies. My ultimate career goal is to excel as a Full Stack Developer and engineer innovative, secure, and impactful software solutions.',
  stats: [
    { label: 'Completed Projects', value: '2' },
    { label: 'Certifications', value: '4' },
    { label: 'Symposiums', value: '2' },
    { label: 'Languages Spoken', value: '3' }
  ]
};

export const educationData: EducationItem[] = [
  {
    institution: 'SNS College of Engineering, Coimbatore',
    degree: 'BE Computer Science and Engineering',
    specialization: 'IoT & Cyber Security including Blockchain Technology',
    period: '2024 - 2028',
    type: 'college'
  },
  {
    institution: 'CSI Matric Higher Secondary School',
    degree: 'HSC (Higher Secondary Certificate)',
    score: '75%',
    period: '2023 - 2024',
    type: 'school'
  },
  {
    institution: 'CSI Matric Higher Secondary School',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    score: '76%',
    period: '2021 - 2022',
    type: 'school'
  }
];

export const internshipData: InternshipItem = {
  company: 'AK Infopark',
  role: 'Full Stack Development Intern',
  period: 'Summer Internship (1 Month)',
  skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
  description: 'Gained hands-on experience in full-stack development by collaborating on responsive web applications. Engineered and designed secure authentication modules (login & registration forms), created beautiful mini-projects, and honed user interface responsiveness with modern CSS frameworks and libraries.'
};

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Smart Job Guidance System',
    description: 'An interactive system designed to help students analyze and identify suitable career paths, align skills, and explore tailored job opportunities based on core competencies and interests. Built with an intuitive, responsive interface.',
    status: 'Completed',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    tag: 'Career Technology'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'IoT, Cyber Security & Blockchain',
    skills: [
      { name: 'IoT Networks & Hardware Integration', level: 82 },
      { name: 'Cyber Security Concepts & Network Security', level: 85 },
      { name: 'Blockchain Technology & Ledger Protocols', level: 78 },
    ]
  },
  {
    title: 'Programming Languages & Databases',
    skills: [
      { name: 'C Programming', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'MySQL Database', level: 80 },
    ]
  },
  {
    title: 'Web Technologies & Developer Tools',
    skills: [
      { name: 'React & Bootstrap 5', level: 85 },
      { name: 'HTML5 & CSS3 / Tailwind CSS', level: 90 },
      { name: 'JavaScript ES6+', level: 80 },
      { name: 'Git, GitHub & VS Code', level: 85 },
    ]
  }
];

export const softSkills: string[] = [
  'Flexibility',
  'Time Management',
  'Design Thinking',
  'Teamwork'
];

export const certificationsData: CertificationItem[] = [
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: 'Oct 2025'
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
    year: 'Oct 2025'
  },
  {
    name: 'AI & Machine Learning Course',
    issuer: 'IBM SkillsBuild + Simplilearn',
    year: 'Feb 2026'
  },
  {
    name: 'Digital Edge 101',
    issuer: 'NASSCOM FutureSkills Prime',
    year: 'Feb 2026'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    event: 'SPECTRA 26 National Level Technical Symposium',
    title: 'Symposium Laurels',
    details: [
      'Presented a peer-reviewed Paper Presentation on cyber security and emerging technologies.',
      'Active competitor in Web Design challenge, exhibiting luxury frontend style guides.',
      'Contested in technical Image Prompting using generative models.',
      'Completed multi-stage Capture The Flag (CTF) security challenges, testing system security.'
    ]
  },
  {
    event: 'INTELLINA 2K25 Technical Event',
    title: 'Technical Presentation & Coding',
    details: [
      'Delivered a technical Paper Presentation on decentralized systems and blockchain.',
      'Participated in the competitive RRR Coding hackathon, solving algorithmic structures.'
    ]
  }
];

export const languagesData = [
  { name: 'Tamil', proficiency: 'Native' },
  { name: 'English', proficiency: 'Professional' },
  { name: 'Malayalam', proficiency: 'Conversational' }
];

export const hobbiesData = [
  'Exploring New Emerging Technologies',
  'Building Responsive Web Applications',
  'Tackling Algorithmic Problem Solving',
  'Reading Cybersecurity and Blockchain Articles'
];
