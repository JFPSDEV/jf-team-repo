import { TUseResponsiveResult } from '@jfteam/hooks';

export interface IPresentationRow {
  id: string;
  value: string;
  icon: string;
}

export interface IPresentation {
  title: string[];
  picture: string;
  description: string;
  rows: IPresentationRow[];
}

export interface IStudyRow {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface IStudy {
  title: string[];
  rows: IStudyRow[];
}

export interface IExperienceRow {
  id: string;
  title: string;
  description: string;
  duration: string;
  link: string;
  img: string;
}

export interface IExperience {
  title: string[];
  rows: IExperienceRow[];
}

export interface ISkillRow {
  id: string;
  title: string;
  text: string;
  icon: string;
}

export interface ISkill {
  title: string[];
  rows: ISkillRow[];
}

export interface IHobbyRow {
  id: string;
  text: string;
  icon: string;
}

export interface IHobby {
  title: string[];
  rows: IHobbyRow[];
}

export interface ICVPage {
  presentation: IPresentation;
  study: IStudy;
  experience: IExperience;
  skill: ISkill;
  hobby: IHobby;
}

export interface IProjectRow {
  id: string;
  title: string;
  description: string;
  picture: string;
  link: string;
}

export interface IProject {
  title: string[];
  rows: IProjectRow[];
}

export interface ITestimonialRow {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  description: string;
  picture: string;
  rating: number;
}

export interface ITestimonial {
  title: string[];
  rows: ITestimonialRow[];
}

export interface IPreface {
  title: string[];
  description: string;
  picture: string;
}

export interface IContactForm {
  email: {
    label: string;
    placeholder: string;
    error: string;
  };
  subject: {
    label: string;
    placeholder: string;
    error: string;
  };
  attachment: {
    label: string;
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
    error: string;
  };
  button: {
    label: string;
  };
  toast: {
    loading: string;
    success: string;
    error: string;
  };
}

export interface IContact {
  title: string[];
  fields: IContactForm;
}

export interface IHomePage {
  preface: IPreface;
  project: IProject;
  testimonial: ITestimonial;
  contact: IContact;
}

export interface TSectionProps extends TUseResponsiveResult {}
