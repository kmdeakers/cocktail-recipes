import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const api = {
    searchByName: async (name: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search.php?s=${name}`);
            return response.data;
        } catch (error) {
            console.error('Error searching cocktails by name:', error);
            throw error;
        }
    },

    getRandomCocktail: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/random.php`);
            return response.data;
        } catch (error) {
            console.error('Error getting random cocktail:', error);
            throw error;
        }
    },

    getCocktailById: async (id: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
            return response.data;
        } catch (error) {
            console.error('Error getting cocktail by ID:', error);
            throw error;
        }
    }
};
