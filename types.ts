import type React from 'react';

export interface SubService {
  title: string;
  description: string;
}

export interface Service {
  id: string; // for URL slug, e.g., 'business-planning'
  icon: React.ElementType;
  title: string;
  description: string; // short description for homepage card
  longDescription: string; // longer description for detail page
  subServices: SubService[];
}

export interface Industry {
  name: string;
  description: string;
  icon: React.ElementType;
}

export enum ArticleCategory {
  Research = 'Research',
  Webinar = 'Webinar',
  Blog = 'Blog',
  News = 'News',
  CSR = 'CSR',
}

export interface Article {
  id: string; // for URL slug
  title: string;
  category: ArticleCategory;
  author: string; // Could be a TeamMember ID/Name
  date: string; // e.g., 'October 26, 2024'
  imageUrl: string;
  summary: string;
  content: string; 
}


export interface ConsultingProject {
  year: number;
  name: string;
  client: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Education {
  period: string;
  institution: string;
  degree: string;
  details?: string;
}

export interface Experience {
  period: string;
  company: string;
  title: string;
  details?: string;
}

export interface TeamMember {
  id: string; // e.g., 'windijarto'
  name: string;
  title: string;
  imageUrl: string;
  bio: string; // Short bio for the card
  fullBio: string; // Longer bio for the detail page
  education: Education[];
  experience: Experience[];
  skills?: string[];
  consultingProjects: ConsultingProject[];
}