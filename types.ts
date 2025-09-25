import type React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
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