import { NextResponse } from 'next/server';
import { fetchRandomCocktail } from '@/services/api';
import { transformApiResponse, transformCocktail } from '@/utils/transformations';
import axios from 'axios';

/**
 * API route for fetching a random cocktail
 */
export async function GET() {
  try {
    // Fetch data from external API
    const data = await fetchRandomCocktail();
    
    // Transform the response
    const cocktails = transformApiResponse(data, drink => drink);
    const transformedCocktail = cocktails.length > 0 ? transformCocktail(cocktails[0]) : null;
    
    if (!transformedCocktail) {
      return NextResponse.json(
        { message: 'No cocktail found' },
        { status: 404 }
      );
    }
    
    // Return the transformed cocktail
    return NextResponse.json(transformedCocktail);
  } catch (error) {
    console.error('Error in random cocktail API route:', error);
    
    // Improve error handling for axios errors
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message || 'Failed to fetch random cocktail';
      
      return NextResponse.json({ message }, { status });
    }
    
    return NextResponse.json(
      { message: 'Failed to fetch random cocktail' },
      { status: 500 }
    );
  }
}