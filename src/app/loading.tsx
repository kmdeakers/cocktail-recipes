// src/app/loading.tsx
import React from 'react';
import Spinner from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="text-center">
        <Spinner size="lg" className="mb-4" />
        <p className="text-gray-600">Loading amazing cocktails...</p>
      </div>
    </div>
  );
}