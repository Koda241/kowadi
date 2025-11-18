import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { CircleUser, Menu, Package2, Search } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from './ui/input';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-black px-4 md:px-6 z-50'>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          to='/'
          className='flex items-center gap-2 text-lg font-semibold md:text-base text-yellow-400 hover:text-yellow-300 transition-colors'
        >
          <Package2 className='h-6 w-6' />
          <span className=''>KOWADI</span>
        </Link>
        <Link to='/' className='text-gray-300 hover:text-white transition-colors'>
          Marketplace
        </Link>
        <Link to='/boutique-neufs' className='text-gray-300 hover:text-white transition-colors'>
          Boutique
        </Link>
        <Link to='/partenaire' className='text-gray-300 hover:text-white transition-colors'>
          Partenaire Ubia
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden bg-gray-800 border-gray-700 hover:bg-gray-700'>
            <Menu className='h-5 w-5 text-white' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='bg-black text-white'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link to='/' className='flex items-center gap-2 text-lg font-semibold text-yellow-400'>
              <Package2 className='h-6 w-6' />
              <span className=''>KOWADI</span>
            </Link>
            <Link to='/' className='hover:text-yellow-300'>
              Marketplace
            </Link>
            <Link to='/boutique-neufs' className='hover:text-yellow-300'>
              Boutique
            </Link>
            <Link to='/partenaire' className='hover:text-yellow-300'>
              Partenaire Ubia
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end'>
        <div className='relative flex-1 max-w-sm'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
          <Input
            type='search'
            placeholder='Rechercher un article...'
            className='w-full pl-10 pr-4 py-2 text-sm bg-gray-800 text-white border-gray-700 rounded-full focus:bg-gray-700 focus:ring-yellow-400'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {user ? (
          <>
            <Link to='/vendre'>
              <Button className='bg-yellow-400 text-black hover:bg-yellow-300'>Vendre un article</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='secondary' size='icon' className='rounded-full'>
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className='sr-only'>Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to='/parametres'>
                  <DropdownMenuItem>Paramètres</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Déconnexion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className='flex items-center gap-2'>
            <Link to='/connexion'>
              <Button variant='outline' className='bg-black border-white text-white hover:bg-gray-800 hover:text-yellow-300'>
                Se connecter
              </Button>
            </Link>
            <Link to='/inscription'>
              <Button className='bg-yellow-400 text-black hover:bg-yellow-300'>S'inscrire</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
