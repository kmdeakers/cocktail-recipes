import { Cocktail, Ingredient, CocktailListItem, ApiResponse } from '@/types/cocktail';

/**
 * Extracts ingredients and their measures from raw API data
 */
export const extractIngredients = (drink: Record<string, any>): Ingredient[] => {
  const ingredients: Ingredient[] = [];

  // API returns ingredients as strIngredient1, strIngredient2, etc.
  // and measures as strMeasure1, strMeasure2, etc.
  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = drink[ingredientKey];
    const measure = drink[measureKey];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || ''
      });
    }
  }

  return ingredients;
};

/**
 * Transforms raw API cocktail data to our Cocktail model
 */
export const transformCocktail = (drink: Record<string, any>): Cocktail => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb || '',
    category: drink.strCategory || '',
    glass: drink.strGlass || '',
    instructions: drink.strInstructions || '',
    ingredients: extractIngredients(drink),
    tags: drink.strTags ? drink.strTags.split(',').map((tag: string) => tag.trim()) : []
  };
};

/**
 * Transforms raw API data to CocktailListItem array
 */
export const transformCocktailList = (drinks: Record<string, any>[]): CocktailListItem[] => {
  return drinks.map(drink => ({
    id: drink.idDrink,
    name: drink.strDrink,
    thumbnail: drink.strDrinkThumb || ''
  }));
};

/**
 * Safely transforms API response to a typed format
 */
export const transformApiResponse = <T>(
  response: ApiResponse<Record<string, any>>,
  transformer: (data: Record<string, any>) => T
): T[] => {
  if (!response.drinks) {
    return [];
  }
  
  return response.drinks.map(transformer);
};