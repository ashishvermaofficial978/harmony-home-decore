export interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}