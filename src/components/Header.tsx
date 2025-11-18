import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu, Search, User } from 'lucide-react';

const navLinkClasses = 'text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-orange-500">KOWADI</Link>
        </div>

        <div className="flex-1 flex justify-center px-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-full bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Rechercher un article..."
              type="search"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/boutique-neufs" className={navLinkClasses}>Boutique Neufs</NavLink>
          <NavLink to="/partenaire" className={navLinkClasses}>Partenaire Ubia</NavLink>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 cursor-pointer">
                  <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/parametres">Paramètres</Link></DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="text-red-500">Déconnexion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="sm">
                    <Link to="/connexion">Connexion</Link>
                </Button>
                <Button asChild size="sm">
                    <Link to="/inscription">Inscription</Link>
                </Button>
            </div>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <NavLink to="/" className={navLinkClasses}>Accueil</NavLink>
                <NavLink to="/boutique-neufs" className={navLinkClasses}>Boutique Neufs</NavLink>
                <NavLink to="/partenaire" className={navLinkClasses}>Partenaire Ubia</NavLink>
                {isAuthenticated ? (
                  <>
                    <NavLink to="/parametres" className={navLinkClasses}>Paramètres</NavLink>
                    <button onClick={logout} className={`${navLinkClasses} text-left text-red-500`}>Déconnexion</button>
                  </>
                ) : (
                  <>
                    <NavLink to="/connexion" className={navLinkClasses}>Connexion</NavLink>
                    <NavLink to="/inscription" className={navLinkClasses}>Inscription</NavLink>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}