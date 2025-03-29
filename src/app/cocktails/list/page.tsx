'use client';

import { useState, useEffect } from 'react';
import { fetchCocktailByFirstLetter } from '@/services/api';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/ui/ErrorMessage';
import axios from 'axios';

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
}

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function CocktailsListPage() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchAllCocktails = async () => {
            try {
                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                const allCocktails: Cocktail[] = [];
                
                // Process letters in batches of 5
                for (let i = 0; i < alphabet.length; i += 5) {
                    if (!isMounted) return;
                    
                    const batch = alphabet.slice(i, i + 5);
                    const promises = batch.map(letter => 
                        fetchCocktailByFirstLetter(letter, source.token)
                    );
                    
                    const responses = await Promise.all(promises);
                    
                    if (!isMounted) return;
                    
                    const batchCocktails = responses
                        .filter(response => response.drinks)
                        .flatMap(response => response.drinks || []);
                    
                    allCocktails.push(...batchCocktails);
                    
                    // Update progress
                    const currentProgress = Math.min(100, Math.round((i + 5) / alphabet.length * 100));
                    setProgress(currentProgress);
                    
                    // Add a smaller delay between batches
                    if (i + 5 < alphabet.length) {
                        await delay(200); // Reduced from 500ms to 200ms
                    }
                }
                
                if (!isMounted) return;
                
                // Sort cocktails alphabetically
                allCocktails.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
                setCocktails(allCocktails);
            } catch (err) {
                if (!isMounted) return;
                
                if (axios.isCancel(err)) {
                    console.log('Request canceled');
                    return;
                }
                
                setError('Failed to fetch cocktails. Please try again later.');
                console.error(err);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchAllCocktails();

        return () => {
            isMounted = false;
            source.cancel('Component unmounted');
        };
    }, []);

    if (loading) return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Loading cocktails... {progress}%</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-32 bg-gray-200 rounded"></div>
                    ))}
                </div>
            </div>
        </div>
    );

    if (error) return (
        <div className="container mx-auto px-4 py-8">
            <ErrorMessage message={error} />
            <div className="mt-4">
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        </div>
    );

    return (
        <main className="container mx-auto px-4 py-8">
            <nav className="mb-6">
                <Link href="/" className="text-blue-600 hover:underline">
                    Home
                </Link>
                {' > '}
                <span className="text-gray-600">All Cocktails</span>
            </nav>

            <h1 className="text-3xl font-bold mb-6">All Cocktails</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cocktails.map((cocktail) => (
                    <Link 
                        key={cocktail.idDrink} 
                        href={`/cocktails/${cocktail.idDrink}`}
                        className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold">{cocktail.strDrink}</h2>
                        <p className="text-gray-600">{cocktail.strCategory}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-8">
                <Link href="/">
                    <Button variant="outline">Back to Home</Button>
                </Link>
            </div>
        </main>
    );
} 