import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Button } from '../components/ui/button';
import { ChevronLeft, MessageSquare } from 'lucide-react';
import NotFoundPage from './NotFoundPage';
import { toast } from 'sonner';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <NotFoundPage />;
  }

  const handleBuy = () => {
    toast.success('Mise en relation avec le vendeur en cours...', {
      description: 'Vous recevrez bientôt une notification pour finaliser la transaction.',
      action: {
        label: 'OK',
        onClick: () => {},
      },
    });
  };

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
          <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-orange-500 mb-6">{product.price.toLocaleString('fr-FR')} FCFA</p>
          <div className="flex items-center gap-2 mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${product.condition === 'Neuf' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {product.condition}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{product.location}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{product.description}</p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full" onClick={handleBuy} disabled={product.status === 'Vendu'}>
                {product.status === 'Vendu' ? 'Article vendu' : <><MessageSquare className="mr-2 h-5 w-5" /> Acheter</>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
