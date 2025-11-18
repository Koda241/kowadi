export interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  category: 'Électronique' | 'Électroménager' | 'Vêtements' | 'Mobilier' | 'Autres';
  condition: 'Neuf' | 'Occasion';
  status: 'Disponible' | 'Vendu';
  location: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Téléphone Infinix Smart 8',
    href: '/products/1',
    imageSrc: 'https://images.unsplash.com/photo-1598327105666-6d3754d26f04?q=80&w=2940&auto=format&fit=crop',
    imageAlt: 'Smartphone Infinix Smart 8.',
    price: 65000,
    category: 'Électronique',
    condition: 'Neuf',
    status: 'Disponible',
    location: 'Dakar, Sénégal'
  },
  {
    id: 2,
    name: 'Réfrigérateur Nasco',
    href: '/products/2',
    imageSrc: 'https://images.unsplash.com/photo-1633461429299-b1945517a6d4?q=80&w=2825&auto=format&fit=crop',
    imageAlt: 'Réfrigérateur combiné Nasco.',
    price: 180000,
    category: 'Électroménager',
    condition: 'Neuf',
    status: 'Disponible',
    location: 'Abidjan, Côte d\'Ivoire'
  },
  {
    id: 3,
    name: 'Boubou traditionnel en bazin',
    href: '/products/3',
    imageSrc: 'https://images.unsplash.com/photo-1622327583935-d835c32306ad?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'Vêtement traditionnel africain.',
    price: 25000,
    category: 'Vêtements',
    condition: 'Neuf',
    status: 'Vendu',
    location: 'Bamako, Mali'
  },
  {
    id: 4,
    name: 'Ordinateur portable HP EliteBook',
    href: '/products/4',
    imageSrc: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'Ordinateur portable HP EliteBook.',
    price: 250000,
    category: 'Électronique',
    condition: 'Occasion',
    status: 'Disponible',
    location: 'Cotonou, Bénin'
  },
  {
    id: 5,
    name: 'Table à manger en bois massif',
    href: '/products/5',
    imageSrc: 'https://images.unsplash.com/photo-1530018607932-6זי-4051833d?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'Table en bois pour salle à manger.',
    price: 95000,
    category: 'Mobilier',
    condition: 'Occasion',
    status: 'Disponible',
    location: 'Lomé, Togo'
  },
  {
    id: 6,
    name: 'Machine à laver Samsung',
    href: '/products/6',
    imageSrc: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'Machine à laver Samsung.',
    price: 155000,
    category: 'Électroménager',
    condition: 'Occasion',
    status: 'Vendu',
    location: 'Dakar, Sénégal'
  },
  {
    id: 7,
    name: 'Ensemble de pagnes Wax Hollandais',
    href: '/products/7',
    imageSrc: 'https://images.unsplash.com/photo-1596892252329-41e913936a94?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'Tissus africains colorés.',
    price: 35000,
    category: 'Vêtements',
    condition: 'Neuf',
    status: 'Disponible',
    location: 'Abidjan, Côte d\'Ivoire'
  },
  {
    id: 8,
    name: 'Console de jeu PS4',
    href: '/products/8',
    imageSrc: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=2800&auto=format&fit=crop',
    imageAlt: 'Console de jeu Playstation 4.',
    price: 120000,
    category: 'Électronique',
    condition: 'Occasion',
    status: 'Disponible',
    location: 'Yaoundé, Cameroun'
  }
];
