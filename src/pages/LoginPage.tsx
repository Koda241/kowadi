import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Connexion réussie !');
    login();
    navigate('/settings');
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100 dark:bg-gray-950'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Connexion</CardTitle>
          <CardDescription>Entrez votre email ci-dessous pour vous connecter à votre compte</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='grid gap-4'>
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
              <div className='flex items-center'>
                <Label htmlFor='password'>Mot de passe</Label>
                <Link to='#' className='ml-auto inline-block text-sm underline'>
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Se connecter
            </Button>
          </form>
          <div className='mt-4 text-center text-sm'>
            Vous n'avez pas de compte ?{' '}
            <Link to='/register' className='underline'>
              S'inscrire
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
