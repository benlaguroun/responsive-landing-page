export interface NavItem {
  title: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgImage: string;
  link: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
