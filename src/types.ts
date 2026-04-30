export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface SiteConfig {
  shopName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  menu: MenuItem[];
  images: {
    hero: string;
    about: string;
    contact: string;
  };
}
