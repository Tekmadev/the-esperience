export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: "locs" | "braids" | "wigs" | "styling" | "treatments";
  image?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  location?: string;
  width: number;
  height: number;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  coordinates: {
    lat: number;
    lng: number;
  };
  acuityUrl?: string;
  isHQ?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  specialties: string[];
}
