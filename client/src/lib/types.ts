// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

// Portfolio Types
export interface PortfolioItem {
  imageUrl: string;
  title: string;
  category: string;
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

// Newsletter Types
export interface NewsletterData {
  email: string;
}
