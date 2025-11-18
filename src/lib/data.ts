export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  condition: 'Neuf' | 'Occasion';
  status: 'disponible' | 'vendu' | 'non disponible';
  image: string;
  location: string;
  description?: string;
};

const placeholderImages = {
  electronics: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/placeholder-electronics-uhp26f4-1763491652691.webp',
  appliances: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/placeholder-appliances-eu70g4t-1763491660517.webp',
  general: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/placeholder-general-ykydti9-1763491667492.webp',
};

let productsData: Product[] = [
  { id: 1, name: 'Ordinateur Portable Dell XPS 15', category: 'Électronique', price: 750000, condition: 'Neuf', status: 'disponible', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-laptop-36n21z0-1763489467727.webp', location: 'Dakar' },
  { id: 2, name: 'Smartphone Samsung Galaxy S23', category: 'Électronique', price: 250000, condition: 'Occasion', status: 'vendu', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-smartphone-8yqkqw5-1763489475143.webp', location: 'Thiès' },
  { id: 3, name: 'Réfrigérateur LG Double Porte', category: 'Électroménager', price: 450000, condition: 'Neuf', status: 'disponible', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-fridge-2h7d51n-1763489482563.webp', location: 'Mbour' },
  { id: 4, name: 'Machine à laver Samsung 8kg', category: 'Électroménager', price: 300000, condition: 'Occasion', status: 'non disponible', image: '', location: 'Saint-Louis' },
  { id: 5, name: 'Télévision Smart TV 4K 55p', category: 'Électronique', price: 550000, condition: 'Neuf', status: 'disponible', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-tv-rhp4cfw-1763489642492.webp', location: 'Dakar' },
  { id: 6, name: 'Canapé d\'angle scandinave', category: 'Mobilier', price: 375000, condition: 'Occasion', status: 'vendu', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-sofa-pifclhi-1763489649769.webp', location: 'Touba' },
  { id: 7, name: 'Robe en wax traditionnel', category: 'Mode', price: 45000, condition: 'Neuf', status: 'disponible', image: '', location: 'Kaolack' },
  { id: 8, name: 'Mixeur Blender Moulinex', category: 'Électroménager', price: 60000, condition: 'Neuf', status: 'disponible', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-blender-g86dc7o-1763489663924.webp', location: 'Ziguinchor' },
  { id: 9, name: 'Appareil Photo Canon EOS R', category: 'Électronique', price: 850000, condition: 'Occasion', status: 'non disponible', image: '', location: 'Dakar' },
  { id: 10, name: 'Montre de Luxe Homme', category: 'Accessoires', price: 125000, condition: 'Neuf', status: 'vendu', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/product-watch-wq7ga5v-1763489678207.webp', location: 'Thiès' },
  { id: 11, name: 'Table à manger en bois massif', category: 'Mobilier', price: 220000, condition: 'Neuf', status: 'disponible', image: '', location: 'Dakar' },
  { id: 12, name: 'Fer à repasser Calor', category: 'Électroménager', price: 25000, condition: 'Occasion', status: 'disponible', image: '', location: 'Mbour' },
];

export const products: Product[] = productsData.map(product => {
  if (!product.image) {
    switch (product.category) {
      case 'Électronique':
        return { ...product, image: placeholderImages.electronics };
      case 'Électroménager':
        return { ...product, image: placeholderImages.appliances };
      default:
        return { ...product, image: placeholderImages.general };
    }
  }
  return product;
});

export const addProduct = (product: Omit<Product, 'id' | 'location'>) => {
  const newProduct: Product = {
    id: products.length + 1,
    location: 'Dakar', // Default location for new products
    ...product,
  };
  // Ensure new products also get a placeholder if they lack an image
  if (!newProduct.image) {
     switch (newProduct.category) {
      case 'Électronique':
        newProduct.image = placeholderImages.electronics;
        break;
      case 'Électroménager':
        newProduct.image = placeholderImages.appliances;
        break;
      default:
        newProduct.image = placeholderImages.general;
        break;
    }
  }
  products.unshift(newProduct);
};

export const categories = [
  { name: 'Électronique', icon: '💻' },
  { name: 'Électroménager', icon: '🔌' },
  { name: 'Mobilier', icon: '🛋️' },
  { name: 'Mode', icon: '👗' },
  { name: 'Accessoires', icon: '⌚' },
  { name: 'Immobilier', icon: '🏠' },
  { name: 'Véhicules', icon: '🚗' },
];
