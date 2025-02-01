export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  type: 'government' | 'private';
}

export interface Experience {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
}