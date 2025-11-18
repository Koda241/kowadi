import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const heroImage = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/hero-kowadi-kfvh9in-1763491645986.webp';

interface HomePageProps {
  searchTerm: string;
}

export default function HomePage({ searchTerm }: HomePageProps) {
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        className='relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative text-center text-white px-4 z-10'>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tighter'>
            KOWADI
          </h1>
          <p className='text-xl md:text-2xl max-w-3xl mx-auto font-light'>
            Tout au même endroit.
          </p>
          <Button asChild size='lg' className='mt-8 bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg'>
            <Link to='#produits'>Explorer les produits</Link>
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id='produits' className='py-16 sm:py-24 bg-gray-50 dark:bg-black'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12 dark:text-white'>Nos Produits Vedettes</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {filteredProducts.map((product) => (
              <Card key={product.id} className='overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-800 transform hover:-translate-y-2'>
                <CardHeader className='p-0'>
                  <img src={product.image} alt={product.name} className='w-full h-52 object-cover' />
                </CardHeader>
                <CardContent className='p-4 flex-grow'>
                  <CardTitle className='text-lg font-semibold mb-2 h-14 dark:text-white'>{product.name}</CardTitle>
                  <div>
                    {product.status === 'disponible' && (
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200'>
                            Disponible
                        </span>
                    )}
                    {product.status === 'vendu' && (
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200'>
                            Vendu
                        </span>
                    )}
                    {product.status === 'non disponible' && (
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200'>
                            Non disponible
                        </span>
                    )}
                  </div>
                  <p className='text-2xl font-bold text-yellow-500 mt-2'>{product.price.toLocaleString('fr-FR')} FCFA</p>
                </CardContent>
                <CardFooter className='p-4 bg-gray-50 dark:bg-gray-800/50'>
                  <Button asChild className='w-full bg-black text-white hover:bg-gray-800 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300'>
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
