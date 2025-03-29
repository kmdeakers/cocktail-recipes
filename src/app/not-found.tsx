// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! This page seems to be missing.</p>
      <p className="text-gray-500 mb-8 max-w-md">
        Maybe the cocktail you're looking for is still being mixed. 
        Try searching for something else or return home.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
        <Link href="/search">
          <Button variant="outline" size="lg">Search Cocktails</Button>
        </Link>
      </div>
    </div>
  );
}