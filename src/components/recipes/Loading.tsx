import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

export function RecipeCardLoading() {
  return (
    <Card className="h-full">
      {/* Image skeleton */}
      <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-t-lg" />
      
      <CardContent>
        {/* Title skeleton */}
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
      </CardContent>
    </Card>
  );
}

export function RecipeGridLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <RecipeCardLoading key={i} />
      ))}
    </div>
  );
}

export function RecipeDetailLoading() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="md:flex">
        {/* Image skeleton */}
        <div className="md:w-1/2">
          <div className="aspect-square w-full bg-gray-200 animate-pulse" />
        </div>

        {/* Content column */}
        <div className="md:w-1/2 p-6">
          {/* Title skeleton */}
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />

          {/* Tags skeleton */}
          <div className="flex gap-2 mb-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>

          {/* Metadata skeleton */}
          <div className="mb-6">
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Ingredients skeleton */}
          <div className="mb-6">
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Instructions skeleton */}
          <div className="mb-6">
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>

          {/* Button skeletons */}
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}