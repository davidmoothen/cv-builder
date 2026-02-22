export interface ResumeContact {
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  location: string;
  website: string;
}

export interface ResumeClient {
  name: string;
  date: string;
  description: string;
  links?: string[];
  achievements: { title: string; items: string[] };
}

export interface ResumeExperience {
  job: string;
  company: string;
  date: string;
  current: boolean;
  description: string;
  achievements: { title: string; items: string[] };
  link?: string;
  clients?: ResumeClient[];
}

export interface ResumeFormation {
  date: string;
  school: string;
  title: string;
}

export interface ResumeSkills {
  title: string;
  items: string[];
}

export interface ResumeLanguages {
  language: string;
  level: string;
}

export interface ResumeBio {
  sentences: string[];
  skills: string[];
}

export interface ResumeProject {
  name: string;
  status: string;
  description: string;
  stack: string[];
  achievements: string[];
}

export interface Resume {
  title: string;
  bio: ResumeBio;
  formations: ResumeFormation[];
  contact: ResumeContact;
  experiences: ResumeExperience[];
  skills: ResumeSkills[];
  languages: ResumeLanguages[];
  projects?: ResumeProject[];
}
