import { products } from '../lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  const newProducts = products.filter((p) => p.state === 'Neuf');
  const usedProducts = products.filter((p) => p.state === 'Occasion');

  const ProductCard = ({ product }) => (
    <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold text-white ${product.state === 'Neuf' ? 'bg-green-600' : 'bg-amber-600'}`}>
            {product.state}
          </div>
        </div>
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
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Notre Boutique</h1>

      <section id="new-items">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-orange-500 pb-3">Articles Neufs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section id="used-items" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-orange-500 pb-3">Articles d'Occasion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
