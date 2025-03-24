import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CocktailListItem } from '@/types/cocktail';
import { Card, CardContent } from '@/components/ui/Card';

interface RecipeCardProps {
  cocktail: CocktailListItem;
  className?: string;
}

export default function RecipeCard({ cocktail, className = '' }: RecipeCardProps) {
  return (
    <Link href={`/cocktails/${cocktail.id}`} className="block">
      <Card className={`h-full transition-transform duration-200 hover:shadow-md hover:-translate-y-1 ${className}`}>
        <div className="relative aspect-square w-full">
          <Image 
            src={cocktail.image} 
            alt={cocktail.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
            className="object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h3 className="font-semibold text-lg text-gray-900 truncate">
            {cocktail.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
