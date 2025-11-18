import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { addProduct } from '../lib/data';
import { toast } from 'sonner';

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...props} className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
);

export default function CreateListingPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<'Électronique' | 'Électroménager' | 'Vêtements' | 'Mobilier' | 'Autres'>('Autres');
  const [condition, setCondition] = useState<'Neuf' | 'Occasion'>('Neuf');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1579546929518-9e396f3a8034?q=80&w=2940&auto=format&fit=crop'); // Placeholder

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description || !category || !condition) {
        toast.error('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    const newProductData = {
        name,
        description,
        price: parseInt(price, 10),
        category,
        condition,
        image,
    };

    addProduct(newProductData);
    
    toast.success('Votre article a été mis en vente avec succès !');
    navigate('/');
  };

  const selectClassName = 'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <div className='container mx-auto max-w-2xl px-6 py-12'>
      <h1 className='text-3xl font-bold mb-8'>Vendre un article</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <Label htmlFor='name'>Titre de l'annonce</Label>
          <Input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Ex: Téléphone Infinix Smart 8' required />
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Décrivez votre article en détail' required />
        </div>
        <div>
          <Label htmlFor='price'>Prix (en FCFA)</Label>
          <Input id='price' type='number' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Ex: 65000' required />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <Label htmlFor='category'>Catégorie</Label>
                <select id='category' value={category} onChange={(e) => setCategory(e.target.value as any)} className={selectClassName}>
                    <option value='Électronique'>Électronique</option>
                    <option value='Électroménager'>Électroménager</option>
                    <option value='Vêtements'>Vêtements</option>
                    <option value='Mobilier'>Mobilier</option>
                    <option value='Autres'>Autres</option>
                </select>
            </div>
            <div>
                <Label htmlFor='condition'>État</Label>
                <select id='condition' value={condition} onChange={(e) => setCondition(e.target.value as any)} className={selectClassName}>
                    <option value='Neuf'>Neuf</option>
                    <option value='Occasion'>Occasion</option>
                </select>
            </div>
        </div>
        <div>
            <Label htmlFor='image'>Image</Label>
            <Input id='image' type='file' accept='image/*' onChange={() => toast.info('La fonctionnalité d\'upload d\'image sera bientôt disponible.')} />
            <p className='text-sm text-gray-500 mt-2'>Pour le moment, une image par défaut est utilisée.</p>
        </div>
        <div className='flex justify-end'>
          <Button type='submit' size='lg' className='bg-orange-500 hover:bg-orange-600 text-white'>Mettre en vente</Button>
        </div>
      </form>
    </div>
  );
}
