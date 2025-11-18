import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function BoutiqueNeufsPage() {
  const newProducts = products.filter(p => p.condition === 'neuf');

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12">Boutique des articles neufs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {newProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg font-semibold mb-2 h-14">{product.name}</CardTitle>
              <p className="text-2xl font-bold text-orange-500">{product.price}</p>
               <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${product.condition === 'neuf' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                {product.condition}
              </span>
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
  );
}