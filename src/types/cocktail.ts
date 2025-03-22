export interface Ingredient {
  name: string;
  measure: string;
}

export interface Cocktail {
  id: string;
  name: string;
  image: string;
  category: string;
  glass: string;
  instructions: string;
  ingredients: Ingredient[];
  tags?: string[];
}

export interface CocktailListItem {
  id: string;
  name: string;
  category: string;
}

export interface SearchResults {
  cocktails: CocktailListItem[];
  totalResults: number;
}

export interface ApiResponse<T> {
  drinks: T[] | null;
}