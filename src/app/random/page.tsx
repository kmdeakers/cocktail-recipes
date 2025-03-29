import React from 'react';
import Link from 'next/link';
import { fetchRandomCocktail } from '@/services/api';
import { transformApiResponse, transformCocktail } from '@/utils/transformations';
import RecipeDetail from '@/components/recipes/RecipeDetail';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Button from '@/components/ui/Button';

export default async function RandomCocktailPage() {
  try {
    const data = await fetchRandomCocktail();
    const cocktails = transformApiResponse(data, drink => drink);
    const cocktail = cocktails.length > 0 ? transformCocktail(cocktails[0]) : null;
    
    if (!cocktail) {
      return (
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage message="Failed to load a random cocktail" />
          <div className="mt-4">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Random Cocktail</h1>
          <form action="/random">
            <Button type="submit">Get Another Random</Button>
          </form>
        </div>
        
        <RecipeDetail cocktail={cocktail} />
        
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading random cocktail:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage message="Failed to load a random cocktail" />
        <div className="mt-4">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}