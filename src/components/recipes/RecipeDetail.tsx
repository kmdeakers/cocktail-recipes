import React from 'react';
import Image from 'next/image';
import { Cocktail } from '@/types/cocktail';
import Button from '@/components/ui/Button';

interface RecipeDetailProps {
  cocktail: Cocktail;
  className?: string;
}

export default function RecipeDetail({ cocktail, className = '' }: RecipeDetailProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className="md:flex">
        {/* Image column */}
        <div className="md:w-1/2">
          <div className="relative aspect-square w-full">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {cocktail.name}
          </h1>

          {/* Tags */}
          {cocktail.tags && cocktail.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {cocktail.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Metadata */}
          <div className="mb-6 text-sm text-gray-500">
            <p>
              <span className="font-medium">Category:</span> {cocktail.category}
            </p>
            <p>
              <span className="font-medium">Glass:</span> {cocktail.glass}
            </p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Ingredients
            </h2>
            <ul className="space-y-2">
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-800">{ingredient.name}</span>
                  <span className="text-gray-600">{ingredient.measure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Instructions
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {cocktail.instructions}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <Button variant="primary">Save to Favorites</Button>
            <Button variant="outline">Add to Shopping List</Button>
          </div>
        </div>
      </div>
    </div>
  );
}