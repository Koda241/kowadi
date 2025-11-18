import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const affiliateBanner = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/112e678c-e02f-4242-9070-8d9c4d1fb0eb/banniere-affiliation-yomij3y-1763479425996.webp';

export default function AffiliatePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !email) {
            toast.error('Veuillez remplir tous les champs.');
            return;
        }
        console.log({ name, email });
        toast.success('Inscription réussie ! Nous vous contacterons bientôt.');
        setName('');
        setEmail('');
    };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${affiliateBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Devenez Partenaire Ubia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Rejoignez notre programme d'affiliation et de dropshipping pour générer des revenus avec les produits de KOWADI.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Explanation */}
            <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold">Comment ça marche ?</h2>
                <p>Notre programme est conçu pour être simple, flexible et rentable. Que vous soyez un influenceur, un blogueur ou un entrepreneur, vous pouvez commencer à gagner de l'argent dès aujourd'hui.</p>
                <ol>
                    <li><strong>Inscription facile :</strong> Remplissez le formulaire pour rejoindre le programme partenaire Ubia.</li>
                    <li><strong>Partagez des produits :</strong> Accédez à notre catalogue et partagez des liens d'affiliation ou intégrez des produits sur votre site (dropshipping).</li>
                    <li><strong>Gagnez des commissions :</strong> Touchez une commission sur chaque vente réalisée grâce à votre lien ou votre boutique.</li>
                </ol>
                <h3 className="text-2xl font-bold mt-8">Vos Avantages</h3>
                 <ul>
                    <li>Commissions attractives sur chaque vente.</li>
                    <li>Accès à un large catalogue de produits uniques.</li>
                    <li>Support dédié pour vous aider à réussir.</li>
                    <li>Aucun stock à gérer avec le dropshipping.</li>
                </ul>
            </div>

            {/* Signup Form */}
            <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Rejoignez-nous maintenant !</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" type="text" placeholder="Votre nom complet" value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email">Adresse e-mail</Label>
                        <Input id="email" type="email" placeholder="vous@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2" />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">S'inscrire au programme</Button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}
