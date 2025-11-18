import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Button } from '../components/ui/button';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto px-6 py-12">
        <Button asChild variant="outline" className="mb-8">
            <Link to="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Retour aux produits
            </Link>
        </Button>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-orange-500 mb-6">{product.price}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{product.description}</p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
