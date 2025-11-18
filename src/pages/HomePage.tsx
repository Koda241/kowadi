import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const heroImage = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/soko-yetu-hero-9pdj7sx-1763479388297.webp';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Bienvenue sur KOWADI
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Votre marché en ligne pour les trésors de l'Afrique et d'ailleurs.
          </p>
          <Button asChild size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600">
            <Link to="#produits">Explorer les produits</Link>
          </Button>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section id="search" className="py-12 bg-gray-50 dark:bg-gray-800/20">
        <div className="container mx-auto px-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                  type="search"
                  placeholder="Rechercher un article, une marque ou une catégorie..."
                  className="w-full pl-12 pr-4 py-3 text-base border rounded-full shadow-sm"
              />
            </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Vedettes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg font-semibold mb-2 h-14">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-orange-500">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800/50">
                  <Button asChild className="w-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-200 dark:text-black dark:hover:bg-white">
                    <Link to={`/produit/${product.id}`}>Voir l'annonce</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
