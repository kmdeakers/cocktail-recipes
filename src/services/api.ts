import axios, { CancelToken } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://www.thecocktaildb.com/api/json/v1/1';


// Create axios instance with common configuration
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Fetch cocktail data by name
export const fetchCocktailByName = async (name: string) => {
    try {
        const response = await apiClient.get('/search.php', {
            params: { s: name }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cocktail by name:', error);
        throw error;
    }
};

// Fetch random cocktail data
export const fetchRandomCocktail = async () => {
    try {
        const response = await apiClient.get('/random.php');
        return response.data;
    } catch (error) {
        console.error('Error fetching random cocktail:', error);
        throw error;
    }
};

// Fetch cocktail data by ID
export const fetchCocktailById = async (id: string) => {    
    try {
        const response = await apiClient.get('/lookup.php', {
            params: { i: id }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cocktail by ID:', error);
        throw error;
    }
};

// Fetch cocktail by ingredient
export const fetchCocktailByIngredient = async (ingredient: string) => {
    try {
        const response = await apiClient.get('/filter.php', {
            params: { i: ingredient }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cocktail by ingredient:', error);
        throw error;
    }
};

// Fetch cocktails by first letter
export const fetchCocktailByFirstLetter = async (letter: string, cancelToken?: CancelToken) => {
    if (letter.length !== 1) {
        throw new Error('Letter must be a single character');
    }
    try {
        const response = await apiClient.get('/search.php', {
            params: { f: letter },
            cancelToken
        });
        return response.data;
    } catch (error: Error | unknown) {
        if (axios.isCancel(error)) {
            console.log('Request canceled');
            return { drinks: null };
        }
        console.error('Error fetching cocktails by first letter:', error);
        throw error;
    }
};

