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

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}
