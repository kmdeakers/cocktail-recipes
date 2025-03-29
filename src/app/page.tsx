import React from 'react';
import Link from 'next/link';
import { fetchRandomCocktail } from '@/services/api';
import { transformApiResponse, transformCocktail } from '@/utils/transformations';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardImage } from '@/components/ui/Card';
import SearchBar from '@/components/SearchBar';

export default async function HomePage() {
  // Fetch a random cocktail for the featured section
  const data = await fetchRandomCocktail();
  const cocktails = transformApiResponse(data, drink => drink);
  const randomCocktail = cocktails.length > 0 ? transformCocktail(cocktails[0]) : null;

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero section with prominent search - removed background colors */}
      <section className="mb-12 py-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          {/* SearchBar component */}
          <SearchBar 
            placeholder="Try 'Margarita', 'Mojito', 'Old Fashioned'..." 
            variant="hero"
            className="mb-6"
          />
          
          {/* Quick links */}
          <div className="mt-6 text-gray-600">
            <span className="mr-2">Popular:</span>
            <Link href="/search?q=margarita" className="text-blue-600 hover:underline mr-3">Margarita</Link>
            <Link href="/search?q=martini" className="text-blue-600 hover:underline mr-3">Martini</Link>
            <Link href="/search?q=mojito" className="text-blue-600 hover:underline mr-3">Mojito</Link>
            <Link href="/search?q=whiskey+sour" className="text-blue-600 hover:underline">Whiskey Sour</Link>
          </div>
        </div>
      </section>

      {/* Cocktail of the day section */}
      {randomCocktail && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cocktail of the Day</h2>
          <Card className="md:flex overflow-hidden">
            <div className="md:w-1/3 relative">
              <div className="h-80 md:h-full">
                <CardImage 
                  src={randomCocktail.image} 
                  alt={randomCocktail.name}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle>{randomCocktail.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{randomCocktail.category} • {randomCocktail.glass}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-gray-900" >Ingredients:</h3>
                  <ul className="list-disc pl-5">
                    {randomCocktail.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <li className='text-gray-900'
                      key={idx}>{ingredient.name} {ingredient.measure}</li>
                    ))}
                    {randomCocktail.ingredients.length > 3 && <li className="text-gray-900">...and more</li>}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link href={`/cocktails/${randomCocktail.id}`}>
                    <Button>View Full Recipe</Button>
                  </Link>
                  <Link href="/random">
                    <Button variant="outline">Try Another Random</Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>
      )}
    </main>
  );
}