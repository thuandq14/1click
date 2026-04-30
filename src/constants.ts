import { SiteConfig } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  shopName: "Milano Coffee Thao Dien",
  address: "12 Xuan Thuy, Thao Dien, District 2, Ho Chi Minh City",
  phone: "090 123 4567",
  email: "hello@milanothaodien.vn",
  description: "A refined coffee experience in the heart of Thao Dien. We bring the traditional Milano taste to a sophisticated, minimalist urban oasis.",
  heroTitle: "Savor the Silence,",
  heroSubtitle: "Taste the Heritage.",
  images: {
    hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047",
    about: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2078",
    contact: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070"
  },
  menu: [
    {
      id: "1",
      name: "Phin Den",
      description: "Traditional Vietnamese black coffee, slow-dripped to perfection.",
      price: 35000,
      category: "Classic"
    },
    {
      id: "2",
      name: "Phin Sua Da",
      description: "Signature Vietnamese iced coffee with sweet condensed milk.",
      price: 39000,
      category: "Classic"
    },
    {
      id: "3",
      name: "Bac Xiu",
      description: "A milky treat with a hint of coffee, perfect for any time of day.",
      price: 45000,
      category: "Classic"
    },
    {
      id: "4",
      name: "Cold Brew",
      description: "12-hour steeped coffee for a smooth, refreshing finish.",
      price: 55000,
      category: "Modern"
    }
  ]
};
