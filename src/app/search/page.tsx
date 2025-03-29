'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import RecipeCard from '@/components/recipes/RecipeCard';
import { RecipeGridLoading } from '@/components/recipes/Loading';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Spinner from '@/components/ui/Spinner';
import { useSearchCocktails } from '@/hooks/useCocktail';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const categoryFilter = searchParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const { results, isLoading, error } = useSearchCocktails(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}${categoryFilter ? `&category=${encodeURIComponent(categoryFilter)}` : ''}`);
    }
  };
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Cocktails</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-grow">
            <Input
              type="search"
              placeholder="Search for cocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              aria-label="Search cocktails"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </form>
      
      {error && (
        <ErrorMessage 
          message="There was an error searching for cocktails. Please try again." 
          retryAction={() => router.refresh()}
          className="mb-6"
        />
      )}
      
      {categoryFilter && (
        <div className="mb-6">
          <p className="text-lg">
            Filtering by category: <span className="font-semibold">{categoryFilter}</span>
            <button 
              onClick={() => router.push(`/search${initialQuery ? `?q=${encodeURIComponent(initialQuery)}` : ''}`)}
              className="ml-2 text-blue-600 hover:underline text-sm"
            >
              Clear filter
            </button>
          </p>
        </div>
      )}
      
      {isLoading ? (
        <RecipeGridLoading />
      ) : results && results.cocktails.length > 0 ? (
        <>
          <p className="mb-4 text-gray-600">
            Found {results.total} cocktail{results.total !== 1 ? 's' : ''}
            {initialQuery ? ` for "${initialQuery}"` : ''}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {results.cocktails.map((cocktail) => (
              <RecipeCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        </>
      ) : initialQuery || categoryFilter ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600 mb-4">
            No cocktails found{initialQuery ? ` for "${initialQuery}"` : ''}{categoryFilter ? ` in category "${categoryFilter}"` : ''}.
          </p>
          <p className="text-gray-500">
            Try a different search term or browse our categories.
          </p>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Enter a search term to find cocktails.</p>
        </div>
      )}
    </main>
  );
}