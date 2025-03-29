// src/components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  initialQuery?: string;
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'hero';
  buttonClassName?: string;
}

export default function SearchBar({ 
  initialQuery = '', 
  className = '',
  placeholder = 'Search for cocktails...',
  variant = 'default',
  buttonClassName = ''
}: SearchBarProps) {
  // Determine which style variant to use
  const isHero = variant === 'hero';

  return (
    <form 
      action="/search" 
      method="GET" 
      className={`relative ${isHero ? 'max-w-2xl mx-auto' : ''} ${className}`}
    >
      <div className="relative flex items-center overflow-hidden rounded-full border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <svg 
          className="absolute left-3 w-5 h-5 text-gray-400" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
        <input
          type="search"
          name="q"
          defaultValue={initialQuery}
          placeholder={placeholder}
          className={`w-full ${isHero ? 'pl-10 py-4 text-lg' : 'pl-10 py-2'} border-none focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400`}
          aria-label="Search cocktails"
        />
        <div className="h-full w-px bg-gray-300 mx-1"></div>
        <button
          type="submit"
          className={`${isHero ? 'py-4 px-6 text-lg' : 'py-2 px-4'} ${buttonClassName || 'bg-transparent text-blue-600 hover:text-blue-800'} focus:outline-none font-medium`}
        >
          Search
        </button>
      </div>
    </form>
  );
}