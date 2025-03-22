import { NextRequest, NextResponse } from 'next/server';
import { fetchCocktailByName } from '@/services/api';
import { transformApiResponse, cocktailItemTransformer } from '@/utils/transformations';
import axios from 'axios';

/**
 * API route for searching cocktails by name
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { message: 'Query parameter q is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch data from external API
    const data = await fetchCocktailByName(query);
    

    const transformedCocktails = transformApiResponse(data, cocktailItemTransformer);
    
    // Return the response
    return NextResponse.json({
      cocktails: transformedCocktails,
      total: transformedCocktails.length
    });
  } catch (error) {
    console.error('Error in search API route:', error);
    
    // Improve error handling for axios errors
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message || 'Failed to search cocktails';
      
      return NextResponse.json({ message }, { status });
    }
    
    return NextResponse.json(
      { message: 'Failed to search cocktails' },
      { status: 500 }
    );
  }
}