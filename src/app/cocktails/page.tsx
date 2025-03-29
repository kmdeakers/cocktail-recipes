import React from 'react';
import Link from 'next/link';
import { fetchCocktailById } from '@/services/api';
import { transformApiResponse, transformCocktail } from '@/utils/transformations';
import RecipeDetail from '@/components/recipes/RecipeDetail';
import { RecipeDetailLoading } from '@/components/recipes/RecipeLoading';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Button from '@/components/ui/Button';

interface CocktailDetailPageProps {
  params: {
    id: string;
  };
}

export default async function CocktailDetailPage({ params }: CocktailDetailPageProps) {
  const { id } = params;
  
  try {
    const data = await fetchCocktailById(id);
    const cocktails = transformApiResponse(data, drink => drink);
    const cocktail = cocktails.length > 0 ? transformCocktail(cocktails[0]) : null;
    
    if (!cocktail) {
      return (
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage message="Cocktail not found" />
          <div className="mt-4">
            <Link href="/search">
              <Button>Back to Search</Button>
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <main className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {' > '}
          <Link href="/search" className="text-blue-600 hover:underline">
            Cocktails
          </Link>
          {' > '}
          <span className="text-gray-600">{cocktail.name}</span>
        </nav>
        
        <RecipeDetail cocktail={cocktail} />
        
        <div className="mt-8 flex justify-between">
          <Link href="/search">
            <Button variant="outline">Back to Search</Button>
          </Link>
          <Link href="/random">
            <Button>Try a Random Cocktail</Button>
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading cocktail:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage message="Failed to load cocktail details" />
        <div className="mt-4">
          <Link href="/search">
            <Button>Back to Search</Button>
          </Link>
        </div>
      </div>
    );
  }
}