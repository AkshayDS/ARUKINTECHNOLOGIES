
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  image: string;
  tag?: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
