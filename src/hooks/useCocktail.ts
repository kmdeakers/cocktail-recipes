import { useState, useEffect } from 'react';
import axios from 'axios';
import { Cocktail, CocktailListItem, SearchResults } from '@/types/cocktail';

// Custom hook for fetching a cocktail by ID
export function useCocktail(id: string) {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    // Reset state when ID changes
    setCocktail(null);
    setIsLoading(true);
    setError(null);

    // Create a cancel token for cleanup
    const cancelToken = axios.CancelToken.source();

    async function fetchCocktail() {
      try {
        const response = await axios.get(`/api/cocktails/${id}`, {
          cancelToken: cancelToken.token
        });
        
        setCocktail(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCocktail();

    // Cleanup function to cancel ongoing requests when component unmounts or ID changes
    return () => {
      cancelToken.cancel('Request cancelled due to component unmount or ID change');
    };
  }, [id]);

  return { cocktail, isLoading, error };
}

// Custom hook for fetching a random cocktail
export function useRandomCocktail() {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRandomCocktail = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('/api/cocktails/random');
      setCocktail(response.data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return { cocktail, isLoading, error, refetch: fetchRandomCocktail };
}

// Custom hook for searching cocktails by name
export function useSearchCocktails(query: string) {
  const [results, setResults] = useState<SearchResults | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Don't search if query is empty
    if (!query.trim()) {
      setResults(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Create a cancel token for cleanup
    const cancelToken = axios.CancelToken.source();
    
    setIsLoading(true);
    setError(null);

    async function searchCocktails() {
      try {
        const response = await axios.get('/api/cocktails/search', {
          params: { q: query },
          cancelToken: cancelToken.token
        });
        
        setResults(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    }

    searchCocktails();

    // Cleanup function to cancel ongoing requests when component unmounts or query changes
    return () => {
      cancelToken.cancel('Request cancelled due to component unmount or query change');
    };
  }, [query]);

  return { results, isLoading, error };
}