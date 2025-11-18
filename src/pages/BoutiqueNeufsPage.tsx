import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function BoutiqueNeufsPage() {
  return (
    <div className='p-4 md:p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Découvrez notre boutique</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <Card key={product.id} className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <CardHeader className='p-0'>
              <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
            </CardHeader>
            <CardContent className='p-4'>
              <CardTitle className='text-lg font-semibold mb-2'>{product.name}</CardTitle>
              <p className='text-gray-600 text-sm mb-2'>{product.category}</p>
              <p className='text-lg font-bold text-green-600'>{product.price.toLocaleString()} FCFA</p>
              <p className={`text-sm font-medium ${product.condition === 'Neuf' ? 'text-blue-500' : 'text-orange-500'}`}>
                {product.condition}
              </p>
            </CardContent>
            <CardFooter className='p-4 bg-gray-50'>
              <Link to={`/product/${product.id}`} className='w-full'>
                <Button className='w-full'>Voir les détails</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}