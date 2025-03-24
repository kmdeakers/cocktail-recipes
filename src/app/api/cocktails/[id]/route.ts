import { NextRequest, NextResponse } from 'next/server';
import { fetchCocktailById } from '@/services/api';
import { transformApiResponse, transformCocktail } from '@/utils/transformations';
import axios from 'axios';

/**
 * API route for fetching a cocktail by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { message: 'Cocktail ID is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch data from external API
    const data = await fetchCocktailById(id);
    
    // Transform the response - first get raw drink data, then transform to Cocktail
    const cocktails = transformApiResponse(data, drink => drink);
    const transformedCocktail = cocktails.length > 0 ? transformCocktail(cocktails[0]) : null;
    
    if (!transformedCocktail) {
      return NextResponse.json(
        { message: 'Cocktail not found' },
        { status: 404 }
      );
    }
    
    // Return the transformed cocktail
    return NextResponse.json(transformedCocktail);
  } catch (error) {
    console.error(`Error in cocktail detail API route for ID ${id}:`, error);
    
    // Improve error handling for axios errors
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message || 'Failed to fetch cocktail details';
      
      return NextResponse.json({ message }, { status });
    }
    
    return NextResponse.json(
      { message: 'Failed to fetch cocktail details' },
      { status: 500 }
    );
  }
}