import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info('Vous avez été déconnecté.');
    navigate('/');
  };

  return (
    <div className='flex min-h-[calc(100vh-80px)] w-full flex-col bg-muted/40'>
      <div className='flex flex-col sm:gap-4 sm:py-4'>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          <div className='mx-auto grid w-full max-w-6xl gap-2'>
            <h1 className='text-3xl font-semibold'>Paramètres</h1>
          </div>
          <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
            <nav className='grid gap-4 text-sm text-muted-foreground'>
              <Link to='#' className='font-semibold text-primary'>
                Général
              </Link>
              <Link to='#'>Sécurité</Link>
              <Link to='#'>Intégrations</Link>
              <Link to='#'>Support</Link>
              <Link to='#'>Organisations</Link>
              <Link to='#'>Avancé</Link>
            </nav>
            <div className='grid gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>Nom du magasin</CardTitle>
                  <CardDescription>
                    Utilisé pour identifier votre magasin dans votre compte.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <Input placeholder='Nom du magasin' />
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>
                    Veuillez saisir l'adresse e-mail que vous souhaitez utiliser pour vous connecter à Ubia.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className='flex flex-col gap-4'>
                    <Input placeholder='project@ubia.com' />
                    <div className='flex items-center gap-2'>
                      <Button variant='outline'>Sauvegarder</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle>Déconnexion</CardTitle>
                  <CardDescription>
                    Vous déconnecter de votre compte.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleLogout} variant='destructive'>Se déconnecter</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
