import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Inscription réussie !');
    login();
    navigate('/settings');
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100 dark:bg-gray-950'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>S'inscrire</CardTitle>
          <CardDescription>Entrez vos informations pour créer un compte</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='grid gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>Prénom</Label>
                <Input id='first-name' placeholder='Max' required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Nom</Label>
                <Input id='last-name' placeholder='Robinson' required />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@exemple.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Mot de passe</Label>
              <Input id='password' type='password' />
            </div>
            <Button type='submit' className='w-full'>
              Créer un compte
            </Button>
          </form>
          <div className='mt-4 text-center text-sm'>
            Vous avez déjà un compte ?{' '}
            <Link to='/login' className='underline'>
              Se connecter
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
